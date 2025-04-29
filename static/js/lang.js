const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ru", "en", "kz"];
const currentPathName = window.location.pathname;
let currentLang = localStorage.getItem("language") || checkBrowserLang() || "ru";
let currentTexts = {};

const NFT_description_page = {
    "nav_item_profile_login": {
		ru: "Авторизация",
		en: "Login",
		kz: "Авторизация",
    },
    "nav_item_profile_link": {
		ru: "Профиль",
		en: "Profile",
		kz: "Профиль",
    },
    "nav_item_profile_liked": {
		ru: "Понравилось",
		en: "Liked",
		kz: "Ұнады",
    },
    "nav_item_profile_owned": {
		ru: "Купленный",
		en: "Purchased",
		kz: "Сатып алынған",
    },



	"nft_description_page": {
		ru: "NFT описание",
		en: "NFT description",
		kz: "NFT сипаттамасы",
	},
	"nft_description_container_title": {
		ru: "NFT название",
		en: "NFT name",
		kz: "NFT атауы",
	},
	"nft_description_container_author": {
		ru: "Джеймс Хендерсон",
		en: "James Henderson",
		kz: "Джеймс Хендерсон",
	},
    "nft_description_container_description": {
		ru: "Этот NFT Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		en: "This NFT is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		kz: "Бұл NFT lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	"nft_description_container_order_btn": {
		ru: "Сделать ставку",
		en: "Place a bid",
		kz: "Өтінім беру",
	},
};

function checkPagePathName() {
	switch (currentPathName) {
		case "/navbar.html":
			currentTexts = NFT_description_page;
			break;
		case "/another_page.html":
			currentTexts = anotherTexts;
			break;

		default:
			currentTexts = homeTexts;
			break;
	}
}
checkPagePathName();

function changeLang() {
	for (const key in currentTexts) {
		let elem = document.querySelector(`[data-lang=${key}]`);
		if (elem) {
			elem.textContent = currentTexts[key][currentLang];
		}
	}
}
changeLang();

langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (!event.target.classList.contains("nav__btn_active")) {
			currentLang = event.target.dataset.btn;
			localStorage.setItem("language", event.target.dataset.btn);
			resetActiveClass(langButtons, "nav__btn_active");
			btn.classList.add("nav__btn_active");
			changeLang();
		}
	});
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
}

// Проверка активной кнопки
function checkActiveLangButton() {
	switch (currentLang) {
		case "ru":
			document
				.querySelector('[data-btn="ru"]')
				.classList.add("nav__btn_active");
			break;
		case "en":
			document
				.querySelector('[data-btn="en"]')
				.classList.add("nav__btn_active");
			break;
		case "kz":
			document
				.querySelector('[data-btn="kz"]')
				.classList.add("nav__btn_active");
			break;

		default:
			document
				.querySelector('[data-btn="ru"]')
				.classList.add("nav__btn_active");
			break;
	}
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
	const navLang = navigator.language.slice(0, 2).toLowerCase();
	const result = allLangs.some((elem) => {
		return elem === navLang;
	});
	if (result) {
		return navLang;
	}
}

console.log("navigator.language", checkBrowserLang());