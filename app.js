const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

link.addEventListener("click", handleLinkClick);
loginForm.addEventListener("submit", onLoginSubmit);