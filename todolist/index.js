let task, addBtn, removeBtn, doneBtn, uncomplete, li;
uncomplete = document.querySelector("#uncomplete");
addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", addTask, false);
function addTask() {
  task = document.getElementById("task").value;
  if (task) {
    li = document.createElement("div");
    li.id = "taskthing";
    taskstring = document.createTextNode(task);
    li.appendChild(taskstring);
    uncomplete.appendChild(li);
    removeBtn = document.createElement("input");
    removeBtn.type = "button";
    removeBtn.value = "remove";
    removeBtn.id = "removeBtn";
    removeBtn.addEventListener("click", removeTask, false);
    li.appendChild(removeBtn);
    doneBtn = document.createElement("input");
    doneBtn.type = "button";
    doneBtn.value = "done";
    doneBtn.id = "doneBtn";
    doneBtn.addEventListener("click", doneTask, false);
    li.appendChild(doneBtn);
    document.getElementById("task").value = "";
  } else {
    document.getElementById("msg").textContent = "내용을 입력해주세요";
  }
}
function removeTask() {
  input = event.target;
  parent = input.parentNode;
  pparent = parent.parentNode;
  pparent.removeChild(parent);
}

function doneTask() {
  input = event.target;
  parent = input.parentNode;
  pparent = parent.parentNode;
  pparent.removeChild(parent);
  complete = document.getElementById("complete");
  complete.appendChild(parent);
  parent.removeChild(input);
}
