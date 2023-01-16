export default function createTaskElement(item) {
    const container = document.querySelector(".container");

    const task = document.createElement("div");
    task.classList.add("task");
    container.appendChild(task);

    const taskDetails = document.createElement("div");
    taskDetails.className = "task-details";
    task.appendChild(taskDetails);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    item.checked ? (checkBox.checked = true) : (checkBox.checked = false);
    taskDetails.appendChild(checkBox);

    const title = document.createElement("div");
    title.classList.add("task-title");
    title.textContent = item.titleValue;
    taskDetails.appendChild(title);

    const date = document.createElement("div");
    date.classList.add("task-date");
    date.textContent = item.dateValue;
    taskDetails.appendChild(date);

    const priority = document.createElement("div");
    priority.classList.add("task-priority");
    priority.textContent = item.priority;
    switch (item.priority) {
        case "Red":
            priority.style.backgroundColor = "#fee2e2";
            priority.style.color = "#a63434";
            break;
        case "Yellow":
            priority.style.backgroundColor = "#fef9c3";
            priority.style.color = "#864f10";
            break;
        case "Green":
            priority.style.backgroundColor = "#dcfce7";
            priority.style.color = "#1d6a3a";
            break;
        default:
            priority.style.backgroundColor = "#f3f4f6";
            priority.style.color = "#202a38";
            break;
    }
    taskDetails.appendChild(priority);

    const taskIcons = document.createElement("div");
    taskIcons.className = "task-icons";
    task.appendChild(taskIcons);

    //view
    const viewTask = document.createElement("div");
    viewTask.classList.add("view-task-btn");
    taskIcons.appendChild(viewTask);

    const viewTaskIcon = document.createElement("i");
    viewTaskIcon.className = "fa-solid fa-eye";
    viewTask.appendChild(viewTaskIcon);

    //edit
    const editTask = document.createElement("div");
    editTask.classList.add("edit-task-btn");
    taskIcons.appendChild(editTask);

    const editTaskIcon = document.createElement("i");
    editTaskIcon.className = "fa-solid fa-pen-to-square";
    editTask.appendChild(editTaskIcon);

    //delete
    const deleteTaskBtn = document.createElement("div");
    deleteTaskBtn.classList.add("delete-task-btn");
    taskIcons.appendChild(deleteTaskBtn);

    const deleteTaskIcon = document.createElement("i");
    deleteTaskIcon.className = "fa-solid fa-trash";
    deleteTaskBtn.appendChild(deleteTaskIcon);
}
