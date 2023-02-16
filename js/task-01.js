//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const numOfCategories = document.querySelectorAll("ul");
console.log(`Number of categories: ${numOfCategories.length}`);

//Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і
//кількість елементів в категорії(усіх < li >, вкладених в нього).

const arrayOfCategory = document.querySelectorAll(".item");

arrayOfCategory.forEach((listItem) => {
  const categoryText = listItem.querySelector("h2").textContent;
  console.log(`Category: ${categoryText}`);

  const numOfCategoryElements =
    listItem.children[1].querySelectorAll("li").length;
  console.log(`Elements: ${numOfCategoryElements}`);
});
