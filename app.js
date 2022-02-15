// const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input"); // input태그 찾기
const loginButton = document.querySelector(".login-form button"); // button태그 찾기

function loginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long");
  }
}

loginButton.addEventListener("click", loginBtnClick)