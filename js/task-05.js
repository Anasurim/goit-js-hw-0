// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    return (spanRef.textContent = "Anonymous");
  }
  return (spanRef.textContent = event.currentTarget.value);
});
