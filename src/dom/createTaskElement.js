export default function createTaskElement(item) {
    const container = document.querySelector(".container");

    const task = document.createElement("div");
    task.classList.add("task");
    container.appendChild(task);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    item.checked ? (checkBox.checked = true) : (checkBox.checked = false);
    task.appendChild(checkBox);

    const title = document.createElement("div");
    title.classList.add("task-title");
    title.textContent = item.titleValue;
    task.appendChild(title);

    const date = document.createElement("div");
    date.classList.add("task-date");
    date.textContent = item.dateValue;
    task.appendChild(date);

    const priority = document.createElement("div");
    priority.classList.add("task-priority");
    priority.textContent = item.priority;
    task.appendChild(priority);

    //view
    const viewTask = document.createElement("div");
    viewTask.classList.add("view-task-btn");
    task.appendChild(viewTask);

    const viewTaskIcon = document.createElement("i");
    viewTaskIcon.className = "fa-solid fa-eye";
    viewTask.appendChild(viewTaskIcon);

    //edit
    const editTask = document.createElement("div");
    editTask.classList.add("view-task-btn");
    task.appendChild(editTask);

    const editTaskIcon = document.createElement("i");
    editTaskIcon.className = "fa-solid fa-pen-to-square";
    editTask.appendChild(editTaskIcon);

    //delete
    const deleteTaskBtn = document.createElement("div");
    deleteTaskBtn.classList.add("delete-task-btn");
    task.appendChild(deleteTaskBtn);

    const deleteTaskIcon = document.createElement("i");
    deleteTaskIcon.className = "fa-solid fa-trash";
    deleteTaskBtn.appendChild(deleteTaskIcon);
}
