let activeButtons = [];
/******************************************   BURGER  ***********************************/

function handleBurgerClick() {
  const navbarEl = document.getElementById("navbar");
  if (navbarEl.classList.contains("burgerView")) {
    navbarEl.classList.remove("burgerView");
  } else {
    navbarEl.classList.add("burgerView");
  }

  const burgerItemEl = document.getElementById("navbar-burger-item");
  if (burgerItemEl.classList.contains("burgerView")) {
    burgerItemEl.classList.remove("burgerView");
  } else {
    burgerItemEl.classList.add("burgerView");
  }
}
/******************************************  SERVICE   ***********************************/

function handleServiceClick(event, item) {
  const buttonEls = document.getElementsByClassName("service-button");
  const cardEls = document.getElementsByClassName("service-card");
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
  const priceArrowEls = document.getElementsByClassName("price-item-arrow");
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
function closeSelector(isElementChoosen) {
  const selectorButtonEl = document.getElementById("contacts-selector-button");
  selectorButtonEl.classList.remove("active", "margin");
  if (!isElementChoosen) {
    selectorButtonEl.classList.remove("choosen");
  }

  const options = document.getElementById("contacts-options");
  options.classList.remove("visible");

  const imageEl = document.getElementById("contacts-image");
  imageEl.classList.remove("visible");
}

function openSelector() {
  const selectorButtonEl = document.getElementById("contacts-selector-button");
  selectorButtonEl.classList.add("active", "margin");

  const options = document.getElementById("contacts-options");
  options.classList.add("visible");

  const imageEl = document.getElementById("contacts-image");
  imageEl.classList.add("visible");

  const selectorValue = document.getElementById("contacts-selector-value");
  selectorValue.textContent = "City";

  const cityDetails = document.getElementsByClassName("city-container");
  for (let item of cityDetails) {
    item.classList.remove("visible");
  }
}

function toogleSelector() {
  const selectorButtonEl = document.getElementById("contacts-selector-button");
  if (selectorButtonEl.classList.contains("active")) {
    closeSelector();
  } else {
    openSelector();
  }
}

function chooseCity(event) {
  const selectorButtonEl = document.getElementById("contacts-selector-button");
  const selectorValue = document.getElementById("contacts-selector-value");

  selectorButtonEl.classList.add("choosen");
  selectorValue.textContent = event.target.textContent;

  closeSelector(true);

  const cityDetailsEls = document.getElementsByClassName("city-container");
  const cityDetailsEl = Array.from(cityDetailsEls).find(
    (el) => el.dataset.name === event.target.dataset.name
  );
  setTimeout(() => {
    cityDetailsEl.classList.add("visible");
  }, 300);

  const imageEl = document.getElementById("contacts-image");
  imageEl.classList.add("visible");

  selectorButtonEl.classList.add("margin");
}

/******************************************  on complete state  ***********************************/

function ready() {
  const navbarItemEls = document.getElementsByClassName("navbar-item");
  for (let item of navbarItemEls) {
    item.onclick = handleBurgerClick;
  }

  const closeBurgerView = () => {
    const navbarEl = document.getElementById("navbar");
    if (navbarEl.classList.contains("burgerView")) {
      handleBurgerClick();
    }
  };

  const mainEl = document.getElementsByTagName("main")[0];
  mainEl.onclick = closeBurgerView;

  const footerEl = document.getElementsByTagName("footer")[0];
  footerEl.onclick = closeBurgerView;

  const burgerIconEl = document.getElementById("navbar-burger-icon");
  burgerIconEl.onclick = handleBurgerClick;

  const buttonEls = document.getElementsByClassName("service-button");
  for (let item of buttonEls) {
    item.onclick = (event) => {
      handleServiceClick(event, item);
    };
  }

  const priceArrowEls = document.getElementsByClassName("price-item-arrow");
  for (let arrowEl of priceArrowEls) {
    arrowEl.onclick = handlePriceClick;
  }

  const contactsEls = document.getElementById("contacts-selector-button");
  contactsEls.onclick = toogleSelector;

  const contactsSelect = document.getElementsByClassName("select-option");
  for (let elem of contactsSelect) {
    elem.onclick = chooseCity;
  }
}
document.addEventListener("DOMContentLoaded", ready);
