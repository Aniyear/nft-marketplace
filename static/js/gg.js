function previewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("fileInput").files[0]);

    if (fileInput.files && fileInput.files[0]) {
      var oFReader = new FileReader();
      oFReader.readAsDataURL(fileInput.files[0]);

      oFReader.onload = function (oFREvent) {
        document.getElementById("fAwesome").style.display = "none";
        document.getElementById("uploadedImage").style.display = "block";
        document.getElementById("uploadedImage").src = oFREvent.target.result;
      };
    }
  }

  function addNFT() {
    var name = document.getElementById('nameid').value;
    var price = document.getElementById('priceid').value;
    var lang = document.getElementById('languageSelect').value;

    // Validate Name
    if (!/^[a-zA-Z]{2,}$/.test(name)) {
      switch (lang) {
        case 'en':
          alert("Name should contain only letters and should be at least 2 characters long.");
          break;
        case 'ru':
          alert("Имя должно содержать только английские буквы и не менее 2 символов.");
          break;
        case 'kz':
          alert("Атауда тек ағылшын әріптері мен кемінде 2 таңба болуы қажет.");
          break;
      }
      return;
    }

    // Validate Price
    if (!/^\d+(\.\d{1,2})?$/.test(price)) {
      switch (lang) {
        case 'en':
          alert("Price should contain only numbers.");
          break;
        case 'ru':
          alert("Цена должна содержать только цифры.");
          break;
        case 'kz':
          alert("Бағасында тек сандар болуы қажет.");
          break;
      }
      return;
    }

    console.log("NFT added");
  }

  function changeLanguage(lang) {
    const elements = Object.keys(data[lang]);
    elements.forEach(element => {
      document.getElementById(element).placeholder = data[lang][element];
    });

    const categories = document.getElementById('categoryid');
    const art = document.getElementById('artid');
    const sport = document.getElementById('sportid')
    const nftbtn = document.getElementById('nftbtnid');

    categories.textContent = data[lang].categoryid;
    art.textContent = data[lang].artid;
    sport.textContent = data[lang].sportid;
    nftbtn.textContent = data[lang].nftbtnid;
  }

const data = {
    "en":
    {
        "nameid": "Name",
        "categoryid": "Categories",
        "artid": "Art",
        "sportid": "Sport",
        "priceid": "Price",
        "descriptionid":"Description",
        "nftbtnid": "Add NFT"
    },
    "ru":
    {
        "nameid": "Название",
        "categoryid": "Категории",
        "artid": "Искусство",
        "sportid": "Спорт",
        "priceid": "Цена",
        "descriptionid":"Описание",
        "nftbtnid": "Добавить NFT"
    },
    "kz":
    {
        "nameid": "Атауы",
        "categoryid": "Категориялар",
        "artid": "Өнер",
        "sportid": "Спорт",
        "priceid": "Бағасы",
        "descriptionid":"Сипаттама",
        "nftbtnid": "NFT қосу"
    }
}