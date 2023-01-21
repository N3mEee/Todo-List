export default function taskEdit(editName, editChecked, editDescription, editDate, editListName, editPriority) {
    const main = document.querySelector(".main");

    //container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("edit-task-container");
    main.appendChild(taskContainer);

    //card
    const editTaskCard = document.createElement("div");
    editTaskCard.className = "edit-task-card";
    taskContainer.appendChild(editTaskCard);

    //header
    const editTaskHeader = document.createElement("div");
    editTaskHeader.classList.add("edit-task-header");
    editTaskCard.appendChild(editTaskHeader);

    //header title
    const headerTitle = document.createElement("div");
    headerTitle.classList.add("edit-task-header-title");
    editTaskHeader.appendChild(headerTitle);

    //icon
    const projectIcon = document.createElement("i");
    projectIcon.className = "fa-regular fa-rectangle-list";
    headerTitle.appendChild(projectIcon);

    const listName = document.createElement("p");
    listName.setAttribute("class", "list-name");
    listName.textContent = editListName;
    headerTitle.appendChild(listName);

    // exit
    const editTaskExit = document.createElement("div");
    editTaskExit.className = "edit-task-exit";
    editTaskHeader.appendChild(editTaskExit);
    // exit icon
    const exit = document.createElement("i");
    exit.className = "fa-solid fa-xmark";
    editTaskExit.appendChild(exit);

    const editTaskContent = document.createElement("div");
    editTaskContent.classList.add("task-edit-content");
    editTaskCard.appendChild(editTaskContent);
    editTaskContent.innerHTML = `
    <div class="left" style="display: flex; gap: 5px; flex-direction: column;">
        <div class="title-container" style="padding: 10px; display: flex; flex-direction: column; gap: 5px;">
            <div class="task-name-label">Task Name:</div>
            <input type="text" id="edit-name" value="${editName}"></input>
        </div>
        <div class="description" style="padding: 10px; display: flex; flex-direction: column; gap: 5px;">
            <div class="description-label">Description:</div>
            <textarea id="edit-description">${editDescription}</textarea>
        </div>
        <button class="save-edits btn-primary">Save Edits</button>
    </div>
    <div class="right" style="display: flex; gap: 5px; flex-direction: column;">
        <div class="date" style="padding: 10px; display: flex; flex-direction: column; gap: 5px;">
            <div class="date-label">Due date:</div>
            <input type="date" id="edit-date" value="${editDate.split("-").reverse().join("-")}"></input>
        </div>
        <div class="priority" style="padding: 10px; display: flex; flex-direction: column; gap: 5px;">
            <div class="priority-label">Priority:</div>
            <select id="edit-priority" required>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            </select>
        </div>
    </div>`;
    const red = document.querySelector('option[value="Red"]');
    const yellow = document.querySelector('option[value="Yellow"]');
    const green = document.querySelector('option[value="Green"]');
    switch (editPriority) {
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
