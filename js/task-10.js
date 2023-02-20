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

createBoxes();

function createBoxes(amount) {
  inputRef.addEventListener("input", (event) => {
    amount = event.currentTarget.value;

    createBtnRef.addEventListener("click", () => {
      const boxMarkup = `<div style="width: 30px; height: 30px; background-color: tomato" class="box_item"></div>`;
      const multiDivMarkup = boxMarkup.repeat(amount);

      divBoxRef.insertAdjacentHTML("afterbegin", multiDivMarkup);
      const boxRef = document.querySelectorAll(".box_item");
      console.log(boxRef);
    });
  });
}

// function boxRefOnClick() {
//   console.log(boxRef);
// }
