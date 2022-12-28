function handleBurgerClick() {
  var x = document.getElementById("navbar"); // это мы получили наш navbar
  var y = document.getElementsByClassName("navbar-item"); // каждый item из navbar, при нажатии должен быть снова закрыт
  var z = document.getElementsByClassName("line"); // lines в бургер-иконке (4 шт), чтобы сделать крестик
  var w = document.getElementsByTagName("section"); //  sections для клика по пустому месту (отличному от header)

  if (x.className === "navbar") {
    // тут делаем navbar
    x.className += " burgerView"; // добавили класс
    for (let item of y) {
      // переберем каждый item из navbar
      item.onclick = function (event) {
        // при нажатии на item navbar должен закрыться
        if (event.type === "click") {
          x.className = "navbar"; // присваиваем ему снова navbar (то есть закрываем)
          for (let item of z) {
            // в то же время надо, чтобы и крестик тоже превратился в lines
            if ((x.className = "navbar")) {
              item.className = "line"; // вернули lines
            }
          }
        }
      };
    }
  } else {
    x.className = "navbar"; // а тут если мы будем просто нажимать на бургер-иконку navbar должен скрыться
  }
  for (let item of z) {
    // тут отдельно проходим по lines, чтобы сделать новый класс для них
    if (item.className === "line") {
      item.className += " crossLine"; // добавили класс
    } else {
      item.className = "line"; // убрали класс если crossLine уже есть
    }
  }
  for (let item of w) {
    //тут прошлись по всем sections
    item.onclick = function (event) {
      if (event.type === "click") {
        //тут при нажатии на sections navbar снова будет закрыт
        x.className = "navbar"; // вот navbar
        for (let item of z) {
          // тут нам нужно, чтобы крестик снова превратился в полоски в бургер-иконке
          if ((x.className = "navbar")) {
            // поэтому если у нас закрыт navbar, то делаем из него lines
            item.className = "line"; // вот lines
          }
        }
      }
    };
  }
}
