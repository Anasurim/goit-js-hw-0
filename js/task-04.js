// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

incrementEl.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});

decrementEl.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});

function updateCounterValue() {
  valueEl.textContent = counterValue;
}
