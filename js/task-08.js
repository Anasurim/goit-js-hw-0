// Обробка відправлення форми
// form.login - form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
// що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму,
//     збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
// а значення поля - значенням властивості.Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль
// і очисти значення полів форми методом reset.

const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("You should fill all fields, dude!!!");
  }
  const userInputDataObj = new Object();
  userInputDataObj.email = email.value;
  userInputDataObj.password = password.value;
  console.log(userInputDataObj);
});

resetInputData();

function resetInputData() {
  formRef.addEventListener("submit", (event) => {
    const { email, password } = event.currentTarget.elements;
    email.value = "";
    password.value = "";
  });
}
