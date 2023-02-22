// Створи функцію createBoxes(amount),
// яка приймає один параметр - число.Функція створює стільки < div >,
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим
// і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону
// у форматі HEX.Використовуй готову
// функцію getRandomHexColor для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnRef = document.querySelector("button[data-create]");
const inputRef = document.querySelector("input");
const divBoxRef = document.querySelector("#boxes");
const destroyBtnRef = document.querySelector("button[data-destroy]");

createBoxes();

function createBoxes(amount) {
  inputRef.addEventListener("input", (event) => {
    amount = event.currentTarget.value;

    createBtnRef.addEventListener("click", () => {
      const boxMarkup = `<div  class="box_item"></div>`;
      const multiDivMarkup = boxMarkup.repeat(amount);
      console.log(multiDivMarkup);
      divBoxRef.insertAdjacentHTML("afterbegin", multiDivMarkup);

      const boxesRef = document.querySelectorAll(".box_item");

      boxesRef.forEach((box) => {
        box.style.backgroundColor = getRandomHexColor();
      });

      let width = 30;
      let height = 30;
      for (let index = 0; index < boxesRef.length; index += 1) {
        const box = boxesRef[index];
        width += 10;
        height += 10;
        box.style.width = `${width}px`;
        box.style.height = `${height}px`;
      }
    });
  });
}

destroyBtnRef.addEventListener("click", () => {
  divBoxRef.innerHTML = "";
  inputRef.value = 0;
});
