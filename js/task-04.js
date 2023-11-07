let counterValue = 0;
let currentVal = document.getElementById("value");
let counter = document.getElementById("counter");


let decrement = counter.querySelector('[data-action="decrement"]');
let increment = counter.querySelector('[data-action="increment"]');

decrement.addEventListener("click", () => {counterValue -=1; currentVal.textContent = counterValue})
increment.addEventListener("click", () => {counterValue += 1; currentVal.textContent = counterValue;})
