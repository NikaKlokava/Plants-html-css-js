let activeButtons = [];
/******************************************   BURGER  ***********************************/

function handleBurgerClick() {
  var navbarEl = document.getElementById("navbar");

  navbarEl.className =
    navbarEl.className === "navbar" ? "navbar burgerView" : "navbar";

  var burgerItemEl = document.getElementById("navbar-burger-item");
  burgerItemEl.className =
    burgerItemEl.className === "navbar-burger-item"
      ? "navbar-burger-item burgerView"
      : "navbar-burger-item";
}
/******************************************  SERVICE   ***********************************/

function handleServiceClick(event, item) {
  var buttonEls = document.getElementsByClassName("service-button");
  var cardEls = document.getElementsByClassName("service-card");
  const buttonName = event.target.dataset.name;

  if (item.classList.contains("service-button-active")) {
    item.classList.remove("service-button-active");
    activeButtons = activeButtons.filter((ab) => ab !== buttonName);
  } else {
    item.classList.add("service-button-active");
    activeButtons.push(buttonName);
  }

  // обработка нажатия 3ех кнопок
  if (activeButtons.length === 3) {
    const firstPressedActiveButton = activeButtons[0];
    for (let button of buttonEls) {
      if (button.dataset.name === firstPressedActiveButton) {
        button.classList.remove("service-button-active");
      }
    }
    activeButtons.shift();
  }

  for (let card of cardEls) {
    const isCardContainsAnyActiveButton = !!activeButtons.find((ab) =>
      card.dataset.name.includes(ab)
    );
    if (isCardContainsAnyActiveButton || !activeButtons.length) {
      card.classList.remove("blur");
    } else {
      card.classList.add("blur");
    }
  }
}
/******************************************   PRICES   ***********************************/

function handlePriceClick(event) {
  var priceArrowEls = document.getElementsByClassName("price-item-arrow");
  const clickedElementName = event.target.dataset.name;

  for (let arrowEl of priceArrowEls) {
    const parentEl = arrowEl.closest(".price-item");
    if (
      arrowEl.dataset.name !== clickedElementName ||
      arrowEl.classList.contains("active")
    ) {
      arrowEl.classList.remove("active");
      arrowEl.setAttribute("src", "assets/svg/arrow.svg");
      parentEl.classList.remove("active");
    } else {
      arrowEl.classList.add("active");
      arrowEl.setAttribute("src", "assets/svg/arrow_white.svg");
      parentEl.classList.add("active");
    }
  }
}
/*****************************************   CONTACTS   ***********************************/

function handleContactsClick(event) {
  var cityElement = document.getElementById("contacts-container");
  var contactsContainer = document.getElementById("contacts-select-container");
  var selectedElement = document.getElementById("selected-elem");
  var cityContain = document.getElementsByClassName("city-container");


  const nameElem = event.target.dataset.name;
  const choosenElement = event.target;


  if (cityElement.classList.contains("active")) {
    cityElement.classList.remove("active");
    contactsContainer.classList.remove("active");
  } else {
    cityElement.classList.add("active");
    contactsContainer.classList.add("active");
  }

  if (nameElem) {
    selectedElement.textContent = choosenElement.textContent;
    cityElement.classList.add("choosen");
  } else {
    selectedElement.textContent = "City";
    cityElement.classList.remove("choosen")
  } 

  for (let item of cityContain) {
    if (item.dataset.name === nameElem) {
      setTimeout(() => {item.classList.add("opened")}, 200)
    } else {
      item.classList.remove("opened")
    }
  }
}
/******************************************  window.onload  ***********************************/

window.onload = function () {
  var navbarItemEls = document.getElementsByClassName("navbar-item");
  for (let item of navbarItemEls) {
    item.onclick = handleBurgerClick;
  }

  var mainEl = document.getElementsByTagName("main")[0];
  mainEl.onclick = handleBurgerClick;

  var footerEl = document.getElementsByTagName("footer")[0];
  footerEl.onclick = handleBurgerClick;

  var burgerIconEl = document.getElementById("navbar-burger-icon");
  burgerIconEl.onclick = handleBurgerClick;

  var buttonEls = document.getElementsByClassName("service-button");
  for (let item of buttonEls) {
    item.onclick = (event) => {
      handleServiceClick(event, item);
    };
  }

  var priceArrowEls = document.getElementsByClassName("price-item-arrow");
  for (let arrowEl of priceArrowEls) {
    arrowEl.onclick = handlePriceClick;
  }

  var contactsEls = document.getElementById("contacts-container");
  contactsEls.onclick = handleContactsClick;

  var contactsSelect = document.getElementsByClassName("select-option"); {
    for(let elem of contactsSelect) {
      elem.onclick = handleContactsClick;
    }
  }
};
