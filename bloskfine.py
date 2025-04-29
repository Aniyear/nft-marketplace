from flask import Flask, render_template, redirect, url_for, request, flash
from flask_pymongo import PyMongo
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from bson import ObjectId
import os

# Tell Flask to look for templates in the *current* directory
app = Flask(__name__, template_folder='.')

app.secret_key = "your_secret_key"

# MongoDB config
app.config["MONGO_URI"] = "mongodb+srv://spaceman2204:bQX60c9y2DRttDab@cluster0.amtp0za.mongodb.net/Matker?retryWrites=true&w=majority"
mongo = PyMongo(app)

# Flask-Login config
login_manager = LoginManager()
login_manager.login_view = "login"
login_manager.init_app(app)

# User model
class User(UserMixin):
    def __init__(self, user_data):
        self.id = str(user_data["_id"])
        self.username = user_data["username"]

@login_manager.user_loader
def load_user(user_id):
    user = mongo.db.Users.find_one({"_id": ObjectId(user_id)})
    if not user:
        return None
    return User(user)

@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        user = mongo.db.Users.find_one({"username": username})
        if user and check_password_hash(user["password"], password):
            login_user(User(user))
            return redirect(url_for("index"))
        else:
            flash("Invalid username or password")

    return render_template("login.html")

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        email = request.form["email"]
        nickname = request.form["nickname"]
        metamask_account = request.form["metamask_account"]

        # Check if the username already exists
        existing_user = mongo.db.Users.find_one({"username": username})
        if existing_user is None:
            # Encrypt the password
            hash_pass = generate_password_hash(password)
            
            # Insert the user data into MongoDB
            user_id = mongo.db.Users.insert_one({
                "username": username,
                "password": hash_pass,
                "email": email,
                "nickname": nickname,
                "metamask_account": metamask_account
            }).inserted_id

            # Get the inserted user data
            user = mongo.db.Users.find_one({"_id": user_id})
            login_user(User(user))
            return redirect(url_for("index"))
        else:
            flash("Username already exists")

    return render_template("register.html")

@app.route("/index")
@login_required
def index():
    return render_template("index.html", username=current_user.username)
@app.route("/profile")
@login_required
def profile():
    return render_template("profile.html", username=current_user.username)

@app.route("/create")
@login_required
def create():
    return render_template("create.html", username=current_user.username)

@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("login"))

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000)) # Получаем порт из переменной окружения или используем 5000 по умолчанию
    app.run(host='0.0.0.0', port=port)
