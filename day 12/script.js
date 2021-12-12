const toggleBtn = document.getElementById("toggle-btn");
const monthly_prices = [19.99, 24.99, 39.99];
const yearly_prices = [199.99, 249.99, 399.99];
let active = true;
let basic = document.getElementById("basic");
let master = document.getElementById("master");
let professional = document.getElementById("professional");

function toggle() {
  //   console.log("I'm live");
  toggleBtn.classList.toggle("active");

  let prices;

  if (active === true) prices = yearly_prices;
  else prices = monthly_prices;

  active = !active;
  basic.innerText = prices[0];
  professional.innerText = prices[1];
  master.innerText = prices[2];
}
