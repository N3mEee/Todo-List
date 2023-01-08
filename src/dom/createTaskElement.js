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

    const description = document.createElement("div");
    description.classList.add("task-description");
    description.textContent = item.description.slice(0, 50) + "...";
    task.appendChild(description);

    const priority = document.createElement("div");
    priority.classList.add("task-priority");
    priority.textContent = item.priority;
    task.appendChild(priority);

    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.classList.add("delete-task-btn");
    deleteTaskBtn.textContent = "Delete";
    task.appendChild(deleteTaskBtn);
}
