"use strict";

const addToDoList = document.querySelector("#addToDo");
const toDoContainer = document.querySelector("#toDoContainer");
const inputField = document.querySelector("#inputField");
let text;
addToDoList.addEventListener("click", function () {
  inputField.focus();
  if (inputField.value) {
    text = document.createElement("p");
    text.innerText = inputField.value;
    text.classList.add("text_style");
    toDoContainer.appendChild(text);
    inputField.value = "";
  }

  text.addEventListener("click", function () {
    this.classList.add("remove_style");
    setTimeout(() => this.classList.add("remove_container"), 500);
  });
});
