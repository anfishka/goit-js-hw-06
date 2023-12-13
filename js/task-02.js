const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let listOfIngredients = document.getElementById("ingredients");
let fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) =>
{
  let listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");

  fragment.appendChild(listItem);
})

listOfIngredients.appendChild(fragment);

  
  
