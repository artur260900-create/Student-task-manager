const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const task = taskInput.value.trim();

    if (task === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    taskList.appendChild(li);
    taskInput.value = "";
}

addButton.addEventListener("click", addTask);
