var waterAmount = document.querySelector(".water-amount");
var waterPercentage = document.querySelector(".water-percentage");
var waterQuantity = document.querySelector(".water-quantity");
var waterFilled = document.querySelector(".water-filled");
var waterBottle = document.querySelector(".water-bottle");

for (var k = 1; k < 8; k++) {
  waterBottle.innerHTML += '<li class="bottle"><span>250</span><span>ml</span></li>';
}

var bottle = document.querySelectorAll(".bottle");

var waterQuantityHeight = waterQuantity.clientHeight;
var waterFilledHeight = waterFilled.clientHeight;

bottle.forEach(function (element, index) {
  element.addEventListener("click", function () {
    var totalLiter = 2;
    var totalPercent = 100;
    var initialHeight = waterQuantityHeight / bottle.length * (index + 1);
    var initialPercent = (totalPercent / bottle.length) * (index + 1);
    var initialFill = (initialPercent * totalLiter) / totalPercent;

    waterAmount.innerHTML = totalLiter - initialFill;
    waterPercentage.innerHTML = initialPercent + "%";
    waterQuantity.style.height = (waterQuantityHeight - initialHeight) + "px";
    waterFilled.style.height = initialHeight + "px";

    for (var i = 0; i < bottle.length; i++) {
      bottle[i].classList.remove("bgColor");
    }

    var arr = [];
    if (arr.indexOf(index) === -1) {
      arr.push(index);
    }
    for (var i = 0; i <= arr[0]; i++) {
      bottle[i].classList.add("bgColor");
    }
  });
});