import render from "./render.js";
import { addTodo, deleteTodo, checkMark } from "./store.js";

window.addEventListener("todoChange", () => {
  console.log("fire");
  render();
});

// store.todos.push({});
render();

const form = document.querySelector("#form");
const todoInput = document.querySelector(".todo-title-input");

console.log(form, "this is form log");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoTitle = todoInput.value;
  const newTodo = { id: crypto.randomUUID(), title: todoTitle, completed: false };

  addTodo(newTodo);
  todoInput.value = ``;
});

const todos = document.querySelector(".todos");

todos.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("delete-todo-button")) {
    const li = target.closest(".todo").dataset.id;
    deleteTodo(li);
  }
});

todos.addEventListener("change", (event) => {
  const target = event.target;
  if (target.classList.contains("todo-checkbox")) {
    const li = target.closest(".todo").dataset.id;
    checkMark(li);
  }
});
