function handleBurgerClick() {
  var x = document.getElementById("navbar");
  var y = document.getElementsByClassName("navbar-item");
  var z = document.getElementsByClassName("line");
  for (let item of z) {
    if (item.className === "line") {
      item.className += " crossLine";
    } else {
      item.className = "line";
    }
  }
  if (x.className === "navbar") {
    x.className += " burgerView";
    for (let item of y) {
      item.onclick = function (event) {
        if (event.type === "click") {
          x.className = "navbar";
        }
      };
    }
  } else {
    x.className = "navbar";
  }
}
window.onscroll = function () {
  scrollFunction();
};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("header-container").style.padding = "12px 109px 12px 111px";
//   } else {
//     document.getElementById("header-container").style.padding = "42px 109px 42px 111px";
//   }
// }
