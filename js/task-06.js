// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

const validationInputRef = document.querySelector("#validation-input");
const inputAttribute = validationInputRef.dataset.length;

blur();

function addClassByInvalidInput() {
  validationInputRef.classList.add("invalid");
  validationInputRef.classList.remove("valid");
}

function addClassByValidInput() {
  validationInputRef.classList.add("valid");
  validationInputRef.classList.remove("invalid");
}

validationInputRef.addEventListener("blur", (event) => {
  const inputValue = event.currentTarget.value.length;
  Number(inputAttribute) === inputValue
    ? addClassByValidInput()
    : addClassByInvalidInput();
});
