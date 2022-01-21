import Donut from "./donut";

renderPage();

function renderPage() {
  makeDonuts();
}


function makeDonuts() {
  const clickerCost = document.querySelector(".costOfClicker");
  const numberOfClicker = document.querySelector(".amoutOfClickers");
  const numberOfMultiplier = document.querySelector(".amountOfMultipliers");
  const multiplyCost = document.querySelector(".costOfMultiplier");
  const donut = new Donut();
  const donutClickerButton = document.querySelector(".donutClickerButton");
  const autoClickerPurchase = document.querySelector(".autoClickerPurchase");
  const multiplierPurchase = document.querySelector(".multiplierPurchase");
  const resetButton = document.querySelector("#resetButton");
  

  numberOfClicker.innerText = donut.autoClickers;
  clickerCost.innerText = Math.round(donut.autoClickersCost);

  numberOfMultiplier.innerText = donut.multiplierAmount;
  multiplyCost.innerText = donut.multiplierCost;

  donutClickerButton.addEventListener("click", () => {
    donut.donutClick();
    donut.updateDonutCount();
  });

  autoClickerPurchase.addEventListener("click", () => {
    donut.buyAutoClicker();
    donut.updateDonutCount();
    donut.autoClickFunction();
    numberOfClicker.innerText = donut.autoClickers;
    console.log("application auto click");
  });

  multiplierPurchase.addEventListener("click", () => {
    donut.buyMultiplier();
    donut.updateDonutCount();
    numberOfMultiplier.innerText = donut.multiplierAmount;
  });

  resetButton.addEventListener("click", () => {
    location.reload();
   
  });
}



var modal = document.getElementById("myModal");

var btn = document.getElementById("about");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal2 = document.getElementById("myModal2");

var btn2 = document.getElementById("about2");

var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function () {
  modal2.style.display = "block";
};

span2.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

var modal3 = document.getElementById("myModal3");

var btn3 = document.getElementById("about3");

var span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function () {
  modal3.style.display = "block";
};

span3.onclick = function () {
  modal3.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};
