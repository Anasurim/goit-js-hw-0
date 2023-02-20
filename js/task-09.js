// Напиши скрипт, який змінює кольори фону елемента
//   < body > через інлайн - стиль по кліку на button.change - color
// і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorNameOutput = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorNameOutput.textContent = document.body.style.backgroundColor;
});
