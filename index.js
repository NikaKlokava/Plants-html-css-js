function handleBurgerClick() {
  var navbarEl = document.getElementById("navbar"); // это мы получили наш navbar
  // var lineEls = document.getElementsByClassName("line"); // lines в бургер-иконке (4 шт), чтобы сделать крестик

  navbarEl.className =
    navbarEl.className === "navbar" ? "navbar burgerView" : "navbar";

  //todo remove
  var burgerItemEl = document.getElementById("navbar-burger-item");
  burgerItemEl.className =
    burgerItemEl.className === "navbar-burger-item"
      ? "navbar-burger-item burgerView"
      : "navbar-burger-item";
}

window.onload = function () {
  // todo: think about navbar-items one handler
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
