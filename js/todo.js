const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
// const toDoInput = toDoForm.querySelector("input");


function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  console.log(toDoInput.value);
  toDoInput.value = "";
  console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
