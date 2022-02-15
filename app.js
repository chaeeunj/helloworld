// const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input"); // input태그 찾기
const loginButton = document.querySelector(".login-form button"); // button태그 찾기

function loginBtnClick() {
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", loginBtnClick)