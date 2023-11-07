let categories = document.querySelectorAll(".item");

let countCategories = () => {
  console.log(`Number of categories: ${categories.length}`);
};

countCategories();

/////////////////////////////////////////

let showHeaders = () => {

  categories.forEach((category) => {
    let header = category.querySelector("h2");
    let items = category.querySelectorAll("li");
    console.log(`\nCategory: ${header.textContent}`);
    console.log(`Elements: ${items.length}`);
  });
};

showHeaders();



