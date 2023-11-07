const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let items = [];

for (let i = 0; i < ingredients.length; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = ingredients[i];
  listItem.classList.add("item");

  items.push(listItem);
  let listOfIngredients = document.getElementById("ingredients");
  listOfIngredients.appendChild(listItem);
}
