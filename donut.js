const donutCount = document.querySelector(".amountOfDonuts");
const clickerCost = document.querySelector(".costOfClicker");
const multiplyCost = document.querySelector(".costOfMultiplier");
const donutsPerClick = document.querySelector(".donutsPerClick")


class Donut {
  constructor() {
    this.count = 0;
    this.autoClickers = 0;
    this.autoClickersCost = 50;
    this.multiplier = 1;
    this.multiplierAmount = 1;
    this.multiplierCost = 10;
  }
  donutClick() {
    this.multiplierAmount = this.multiplierAmount * 1;
    this.count += this.multiplierAmount;
  }
  buyAutoClicker() {
    if (this.count >= this.autoClickersCost) {
      this.count = Math.round(this.count - this.autoClickersCost);
      this.autoClickers += 1;
      this.autoClickersCost = this.autoClickersCost * 1.1;
      this.autoClickersCost = Math.round(this.autoClickersCost);
    }
  }
  buyMultiplier() {
    if (this.count >= this.multiplierCost) {
      this.count = Math.round(this.count - this.multiplierCost);
      this.multiplier = this.multiplier * 1.2;
      this.multiplierAmount += 1;
      this.multiplierCost = this.multiplierCost * 1.1;
      this.multiplierCost = Math.round(this.multiplierCost);
      multiplyCost.innerText = this.multiplierCost;
      donutsPerClick.innerText = this.multiplierAmount;
    }
  }
  updateDonutCount() {
    donutCount.innerText = Math.round(this.count);
  }

  autoClickFunction() {
    if (this.autoClickers >= 1) {
      setInterval(() => {
        this.count += this.multiplierAmount * this.autoClickers;
        donutCount.innerText = this.count;
        clickerCost.innerText = this.autoClickersCost;
        console.log("autoclick function" + this.count);
      }, 1000);
    }
  }
}

export default Donut;
