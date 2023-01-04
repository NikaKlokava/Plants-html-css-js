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
///////////////////////////////////////////////////////////////////////////////////////////////////////

window.onload = function () {
  var buttonEls = document.getElementsByClassName("service-button");
  var cardEls = document.getElementsByClassName("service-card");

  let activeButtons = [];

  for (let item of buttonEls) {
    item.onclick = function (event) {
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
    };
  }
};
