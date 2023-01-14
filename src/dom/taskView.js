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
        <div class="title-container" style="padding: 10px; display: flex; gap: 5px;">
            <div class="task-name-label">Task Name:</div>
            <input type="text" id="viewName" value="${viewName}"></input>
        </div>
        <div class="description" style="padding: 10px; display: flex; gap: 5px;">
            <div class="description-label">Description:</div>
            <textarea id="viewDescription">${viewDescription}</textarea>
        </div>
        <button class="save-edits">Save Edits</button>
    </div>
    <div class="right" style="display: flex; gap: 5px; flex-direction: column;">
        <div class="date" style="padding: 10px; display: flex; gap: 5px;">
            <div class="date-label">Due date:</div>
            <input type="date" id="viewDdate" value="${viewDate.split("-").reverse().join("-")}"></input>
        </div>
        <div class="priority" style="padding: 10px; display: flex; gap: 5px;">
            <div class="priority-label">Priority:</div>
            <select id="viewPriority" required>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            </select>
        </div>
    </div>`;
    const red = document.querySelector('option[value="Red"]');
    const yellow = document.querySelector('option[value="Yellow"]');
    const green = document.querySelector('option[value="Green"]');
    switch (viewPriority) {
        case "Red":
            red.setAttribute("selected", "");
            break;
        case "Yellow":
            yellow.setAttribute("selected", "");
            break;
        case "Green":
            green.setAttribute("selected", "");
            break;
        default:
            break;
    }
}
