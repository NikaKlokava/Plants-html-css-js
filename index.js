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
};

function handleButtonClick() {
  var cardEls = document.getElementsByClassName("service-card");

  // var buttonEls = document.getElementsByClassName("service-buttons");
  // for (let button of buttonEls) {
  // console.log(button)};
  for (let item of cardEls) {
    if (item.textContent.includes('Garden')) {
      item.className += "service-card flex-column";
    }
    item.className =
    item.className === "service-card flex-column"
        ? "service-card flex-column blur"
        : "service-card flex-column";
  }
}

window.onload = function () {
  var buttonEls = document.getElementsByClassName("service-buttons");
  for (let item of buttonEls) {
    item.onclick = handleButtonClick;
  }
};
