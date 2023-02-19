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

validationInputRef.addEventListener("blur", () => {
  validationInputRef.addEventListener("input", (event) => {
    const inputLength = event.currentTarget.value.length;
    if (Number(inputAttribute) > inputLength) {
      addClassByInvalidInput();
    } else if (Number(inputAttribute) <= inputLength) {
      addClassByValidInput();
    }
  });
});

function addClassByInvalidInput() {
  validationInputRef.classList.remove("valid");
  validationInputRef.classList.add("invalid");
}

function addClassByValidInput() {
  validationInputRef.classList.remove("invalid");
  validationInputRef.classList.add("valid");
}

//doesnot work, didnot find solution

// validationInputRef.addEventListener("blur", () => {
//   Number(inputAttribute) >= validationInputRef.textContent.length
//     ? addClassByInvalidInput()
//     : addClassByValidInput();
// });
