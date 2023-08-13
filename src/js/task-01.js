const categoriesTotalNumber = document.querySelectorAll(
  "ul#categories >li.item"
).length;
console.log(`Number of categories: ${categoriesTotalNumber} \n`);

const categories = document.querySelectorAll("ul#categories >li.item");
categories.forEach((categ) => {
  console.log(
    `Category: ${categ.querySelector("h2").textContent} \n Elements: ${
      categ.querySelectorAll("ul >li").length
    } \n`
  );
});
