let changeColor = document.querySelector(".change-color");
let color = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColor.addEventListener("click", () => {
  let getColor = getRandomHexColor();

  document.body.style.backgroundColor = getColor;
  color.textContent = getColor;
})

