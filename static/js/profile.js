// profile.js
//Depending on how many nft cards you have in your database, number of cards will change in profile page so you can connect it with constant below
const NUM_CARDS = 9; // Change this value to adjust the number of cards displayed
const NUM_CARDS1 = 12; // Change this value to adjust the number of cards displayed
const NUM_CARDS2 = 6; // Change this value to adjust the number of cards displayed

// profile.js
const NUM_CARDS_PER_PAGE = 8; // Number of cards per page
let currentPage = 0; // Current page index

function createCard() {
  return `
    <a href="navbar.html">
    <div class="card">
    <div class="rectangle-23"></div>
    <div class="group-56">
        <span class="author" id="author">Author</span>
        <div class="current-bid" id="current bid">Current Bid</div>
    </div>
    <div class="group-57">
        <span class="title" id="title">Title</span>
        <span class="eth" id="eth">0.005 ETH</span>
    </div>
</div>
</a>
    `;
}

function renderCards() {
  const nftCardsGrid = document.querySelector(".nft-cards-grid");
  nftCardsGrid.innerHTML = "";

  const startIndex = currentPage * NUM_CARDS_PER_PAGE;
  const endIndex = Math.min(startIndex + NUM_CARDS_PER_PAGE, NUM_CARDS);

  for (let i = startIndex; i < endIndex; i++) {
    nftCardsGrid.innerHTML += createCard();
  }
}
function renderCards1() {
  const nftCardsGrid = document.querySelector(".liked-main .nft-cards-grid");
  nftCardsGrid.innerHTML = "";

  const startIndex = currentPage * NUM_CARDS_PER_PAGE;
  const endIndex = Math.min(startIndex + NUM_CARDS_PER_PAGE, NUM_CARDS1);

  for (let i = startIndex; i < endIndex; i++) {
    nftCardsGrid.innerHTML += createCard();
  }
}
function renderCards2() {
  const nftCardsGrid = document.querySelector(".owned-main .nft-cards-grid");
  nftCardsGrid.innerHTML = "";

  const startIndex = currentPage * NUM_CARDS_PER_PAGE;
  const endIndex = Math.min(startIndex + NUM_CARDS_PER_PAGE, NUM_CARDS2);

  for (let i = startIndex; i < endIndex; i++) {
    nftCardsGrid.innerHTML += createCard();
  }
}



// Call renderCards to display the cards on page load
document.addEventListener("DOMContentLoaded", function () {
  renderCards();
  renderCards1();
  renderCards2();
});

// Function to update the displayed cards when navigating between pages
function updatePage(direction) {
  if (direction === "prev" && currentPage > 0) {
    currentPage--;
  } else if (
    direction === "next" &&
    (currentPage + 1) * NUM_CARDS_PER_PAGE < NUM_CARDS
  ) {
    currentPage++;
  }
  renderCards();
}
function updatePage1(direction) {
    if (direction === "prev" && currentPage > 0) {
      currentPage--;
    } else if (
      direction === "next" &&
      (currentPage + 1) * NUM_CARDS_PER_PAGE < NUM_CARDS1
    ) {
      currentPage++;
    }
    renderCards1();
  }
  function updatePage2(direction) {
    if (direction === "prev" && currentPage > 0) {
      currentPage--;
    } else if (
      direction === "next" &&
      (currentPage + 1) * NUM_CARDS_PER_PAGE < NUM_CARDS2
    ) {
      currentPage++;
    }
    renderCards2();
  }

// Event listeners for navigation buttons
document
  .getElementById("prevPageButton")
  .addEventListener("click", function () {
    updatePage("prev");
  });
  document
  .getElementById("prevPageButton1")
  .addEventListener("click", function () {
    updatePage1("prev");
  });
  document
  .getElementById("prevPageButton2")
  .addEventListener("click", function () {
    updatePage2("prev");
  });

document
  .getElementById("nextPageButton")
  .addEventListener("click", function () {
    updatePage("next");
  });
  document
  .getElementById("nextPageButton1")
  .addEventListener("click", function () {
    updatePage1("next");
  });
  document
  .getElementById("nextPageButton2")
  .addEventListener("click", function () {
    updatePage2("next");
  });

//
var myArtworksButton = document.getElementById("myArtworksButton");
var settingsButton = document.getElementById("settingsButton");
var ownedButton = document.getElementById("ownedButton");
var likedButton = document.getElementById("likedButton");

var artworksMainSection = document.getElementById("artworksMainSection");
var settingsMainSection = document.getElementById("settingsMainSection");
var likedMainSection = document.getElementById("likedMainSection");
var ownedMainSection = document.getElementById("ownedMainSection");

// По умолчанию отображаем секцию с работами и скрываем секцию настроек
artworksMainSection.style.display = "block";
settingsMainSection.style.display = "none";
likedMainSection.style.display = "none";
ownedMainSection.style.display = "none";

// Добавляем класс "active" к кнопке "My Artworks" и убираем его у кнопки "Settings"
myArtworksButton.classList.add("active");
settingsButton.classList.remove("active");
var button = document.getElementById("createButton");

// Добавляем обработчик события 'click' на кнопку
button.addEventListener("click", function () {
  // Выполняем перенаправление на другую страницу
  window.location.href = "create.html";
});

myArtworksButton.addEventListener("click", function (event) {
  artworksMainSection.style.display = "block";
  settingsMainSection.style.display = "none";
  likedMainSection.style.display = "none";
  ownedMainSection.style.display = "none";

  // Добавить класс "active" к кнопке "My Artworks" и удалить его у кнопки "Settings"
  myArtworksButton.classList.add("active");
  settingsButton.classList.remove("active");
  ownedButton.classList.remove("active");
  likedButton.classList.remove("active");

  // Предотвращаем стандартное действие ссылки
  event.preventDefault();
});

settingsButton.addEventListener("click", function (event) {
  // Показать секцию настроек и скрыть секцию с работами
  artworksMainSection.style.display = "none";
  settingsMainSection.style.display = "block";
  likedMainSection.style.display = "none";
  ownedMainSection.style.display = "none";

  // Добавить класс "active" к кнопке "Settings" и удалить его у кнопки "My Artworks"
  settingsButton.classList.add("active");
  myArtworksButton.classList.remove("active");
  ownedButton.classList.remove("active");
  likedButton.classList.remove("active");


  // Предотвращаем стандартное действие ссылки
  event.preventDefault();
  
});

likedButton.addEventListener("click", function (event) {
  // Показать секцию настроек и скрыть секцию с работами
  artworksMainSection.style.display = "none";
  settingsMainSection.style.display = "none";
  likedMainSection.style.display = "block";
  ownedMainSection.style.display = "none";

  // Добавить класс "active" к кнопке "Settings" и удалить его у кнопки "My Artworks"
  settingsButton.classList.remove("active");
  myArtworksButton.classList.remove("active");
  ownedButton.classList.remove("active");
  likedButton.classList.add("active");


  // Предотвращаем стандартное действие ссылки
  event.preventDefault();
  renderCards1();
});

ownedButton.addEventListener("click", function (event) {
  // Показать секцию настроек и скрыть секцию с работами
  artworksMainSection.style.display = "none";
  settingsMainSection.style.display = "none";
  likedMainSection.style.display = "none";
  ownedMainSection.style.display = "block";

  // Добавить класс "active" к кнопке "Settings" и удалить его у кнопки "My Artworks"
  settingsButton.classList.remove("active");
  myArtworksButton.classList.remove("active");
  ownedButton.classList.add("active");
  likedButton.classList.remove("active");


  // Предотвращаем стандартное действие ссылки
  event.preventDefault();
  renderCards2();
});
function translatePage(language) {
  var translations = {
    en: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      username: "Username",
      items: "Items:",
      created: "Created:",
      chain: "Chain:",
      earnings: "Earnings:",
      totalValue: "Total Value",
      floorPrice: "Floor Price",
      bestOffer: "Best Offer",
      owners: "Owners",
      myArtworksButton: "My Artworks",
      ownedButton: "Owned",
      likedButton: "Liked",
      createButton: "Create",
      settingsButton: "Settings",
      nameLabel: "Name",
      surnameLabel: "Surname",
      descriptionLabel: "Description",
      emailLabel: "E-mail",
      timezoneLabel: "Timezone",
      passwordLabel: "Password",
      passwordConfirmLabel: "Confirm password",
      saveButton: "Save",
      author: "Author",
      currentbid: "Current Bid",
      tittle: "Tittle",
    },
    ru: {
      description: "Текст на русском.",
      username: "Имя пользователя",
      items: "Предметы:",
      created: "Создано:",
      chain: "Цепь:",
      earnings: "Доходы:",
      totalValue: "Общая стоимость",
      floorPrice: "Цена за единицу",
      bestOffer: "Лучшее предложение",
      owners: "Владельцы",
      myArtworksButton: "Мои работы",
      ownedButton: "Владеет",
      likedButton: "Понравилось",
      createButton: "Создать",
      settingsButton: "Настройки",
      nameLabel: "Имя",
      surnameLabel: "Фамилия",
      descriptionLabel: "Описание",
      emailLabel: "Эл. почта",
      timezoneLabel: "Часовой пояс",
      passwordLabel: "Пароль",
      passwordConfirmLabel: "Подтвердите пароль",
      saveButton: "Сохранить",
      author: "Автор",
      currentbid: "Текущия ставка",
      tittle: "Титул",
    },
    kk: {
      description: "Қазақ тілінде сипаттама мәтін.",
      username: "Никнейм",
      items: "Элементтер:",
      created: "Жасалды:",
      chain: "Жинақ:",
      earnings: "Кірістер:",
      totalValue: "Жалпы бағасы",
      floorPrice: "Бағасы",
      bestOffer: "Үздік ұсыныс",
      owners: "Иесі",
      myArtworksButton: "Жұмыстарым",
      ownedButton: "Иеленгендер",
      likedButton: "Ұнатқандар",
      createButton: "Жасау",
      settingsButton: "Параметрлер",
      nameLabel: "Аты",
      surnameLabel: "Тегі",
      descriptionLabel: "Сипаттама",
      emailLabel: "Электрондық пошта",
      timezoneLabel: "Уақыт белдеуі",
      passwordLabel: "Құпия сөз",
      passwordConfirmLabel: "Құпия сөзді растау",
      saveButton: "Сақтау",
      author: "Автор",
      currentbid: "Ағымдағы мөлшерлеме",
      tittle: "Титул",
    },
  };

  var translatedContent = translations[language];
  if (!translatedContent) {
    console.error("Translation not found for language:", language);
    return;
  }

  Object.keys(translatedContent).forEach(function (key) {
    var element = document.getElementById(key);
    if (element) {
      element.textContent = translatedContent[key];
    }
  });
  event.preventDefault();
}
