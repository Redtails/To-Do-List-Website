function addTask() {
  var taskInput = document.getElementById("new-task");
  var taskList = document.getElementById("task-list");
  var task = document.createElement("li");
  task.innerText = taskInput.value;
  taskList.appendChild(task);
  taskInput.value = "";
}
