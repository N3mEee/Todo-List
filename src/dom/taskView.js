export default function taskView(viewName, viewDescription, viewDate, viewListName, viewPriority) {
    const main = document.querySelector(".main");

    //container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("view-task-container");
    main.appendChild(taskContainer);

    //Task Name
    const taskName = document.createElement("p");
    taskName.setAttribute("class", "task-name");
    taskName.textContent = viewName;

    //Description
    const description = document.createElement("p");
    description.setAttribute("class", "description");
    description.textContent = viewDescription;

    //Date
    const date = document.createElement("p");
    date.setAttribute("class", "date");
    date.textContent = viewDate;

    //List Name
    const listName = document.createElement("p");
    listName.setAttribute("class", "list-name");
    listName.textContent = viewListName;

    //Priority Label
    const priority = document.createElement("p");
    priority.setAttribute("class", "priority");
    priority.textContent = viewPriority;

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-view-task-btn");
    cancelBtn.textContent = "Cancel";

    taskContainer.appendChild(taskName);

    taskContainer.appendChild(description);

    taskContainer.appendChild(date);

    taskContainer.appendChild(listName);

    taskContainer.appendChild(priority);

    taskContainer.appendChild(cancelBtn);
}
