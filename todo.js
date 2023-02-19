const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

// Function to add a new task to the list
function addTask() {
  // Get the value of the task input
  const newTask = taskInput.value;

  // Create a new list item element
  const listItem = document.createElement("li");

  // Add the new task as text to the list item
  listItem.appendChild(document.createTextNode(newTask));

  // Add the new list item