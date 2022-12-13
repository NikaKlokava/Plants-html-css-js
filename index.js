function handleBurgerClick() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " burgerView";
    } else {
      x.className = "navbar";
    }
  }