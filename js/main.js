let elBtn = document.querySelector("#addToDo");
let toDoContainer = document.querySelector("#toDoList");
let inputField = document.querySelector("#inputField");


elBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  let paragraph = document.createElement('p');
  paragraph.classList.add("form__text");
  paragraph.textContent = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function() {
    paragraph.style.textDecoration = "line-through";
  })
  paragraph.addEventListener("dblclick", function() {
    toDoContainer.removeChild(paragraph);
  })
})