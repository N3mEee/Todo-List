export default function taskView(viewName, viewChecked, viewDescription, viewDate, viewListName, viewPriority) {
    const main = document.querySelector(".main");

    //container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("view-task-container");
    main.appendChild(taskContainer);

    //card
    const viewTaskCard = document.createElement("div");
    viewTaskCard.className = "view-task-card";
    taskContainer.appendChild(viewTaskCard);

    //header
    const taskViewHeader = document.createElement("div");
    taskViewHeader.classList.add("view-task-header");
    viewTaskCard.appendChild(taskViewHeader);

    //header title
    const headerTitle = document.createElement("div");
    headerTitle.classList.add("view-task-header-title");
    taskViewHeader.appendChild(headerTitle);

    //icon
    const projectIcon = document.createElement("i");
    projectIcon.className = "fa-regular fa-rectangle-list";
    headerTitle.appendChild(projectIcon);

    const listName = document.createElement("p");
    listName.setAttribute("class", "list-name");
    listName.textContent = viewListName;
    headerTitle.appendChild(listName);

    // exit
    const viewTaskExit = document.createElement("div");
    viewTaskExit.className = "view-task-exit";
    taskViewHeader.appendChild(viewTaskExit);
    // exit icon
    const exit = document.createElement("i");
    exit.className = "fa-solid fa-xmark";
    viewTaskExit.appendChild(exit);

    const taskViewContent = document.createElement("div");
    taskViewContent.classList.add("task-view-content");
    viewTaskCard.appendChild(taskViewContent);
    taskViewContent.innerHTML = `
    <div class="left" style="display: flex; gap: 5px; flex-direction: column;">
        <div class="title-container" style="padding: 10px; display: flex; flex-direction: column; gap: 5px;">
            <div class="task-name-label">Task Name:</div>
            <p>${viewName}</p>
        </div>
        <div class="description" style="padding: 10px; display: flex; flex-direction: column; gap: 5px;">
            <div class="description-label">Description:</div>
            <p>${viewDescription}</p>
        </div>
    </div>
    <div class="right" style="display: flex; gap: 5px; flex-direction: column;">
        <div class="date" style="padding: 10px; display: flex; flex-direction: column; gap: 5px;">
            <div class="date-label">Due date:</div>
            <p>${viewDate.split("-").reverse().join("-")}</p>
        </div>
        <div class="priority" style="padding: 10px; display: flex; flex-direction: column; gap: 5px;">
            <div class="priority-label">Priority:</div>
            <p>${viewPriority}</p>
        </div>
    </div>`;
}
