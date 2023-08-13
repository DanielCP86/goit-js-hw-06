const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liItems = [];

ingredients.forEach((item) => {
  const liItem = document.createElement("li");
  liItem.textContent = item;
  liItem.classList.add("item");
  liItems.push(liItem);
});

document
  .querySelector("ul#ingredients")
  .append(
    liItems[0],
    liItems[1],
    liItems[2],
    liItems[3],
    liItems[4],
    liItems[5]
  );
