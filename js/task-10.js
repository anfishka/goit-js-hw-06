function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBoxes(amount)
{
  let boxes = document.getElementById("boxes");
  let width = 30;
  let height = 30;

  for(let i = 0; i < amount; i++)
  {
    
    let box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    
    boxes.appendChild(box);
    width += 10;
    height += 10;
  }
}

function destroyBoxes()
{
  let boxes = document.getElementById("boxes");
  boxes.innerHTML = "";
}

let createBtn = document.querySelector("[data-create]");
let destroyBtn = document.querySelector("[data-destroy]");
let input = document.querySelector("input");

createBtn.addEventListener("click", () => {
  let amount = Number(input.value);
  createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);