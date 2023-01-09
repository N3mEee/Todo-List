import exitImage from "/src/assets/exit.svg";
import projectImage from "/src/assets/project.svg";
import events from "../functions/eventListeners";

export default function taskView(viewName, viewChecked, viewDescription, viewDate, viewListName, viewPriority) {
    const main = document.querySelector(".main");

    //container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("view-task-container");
    main.appendChild(taskContainer);

    //header
    const taskViewHeader = document.createElement("div");
    taskViewHeader.classList.add("view-task-header");
    taskContainer.appendChild(taskViewHeader);

    //header title
    const headerTitle = document.createElement("div");
    headerTitle.classList.add("view-task-header-title");
    taskViewHeader.appendChild(headerTitle);

    //icon
    const projectIcon = new Image();
    projectIcon.src = projectImage;
    headerTitle.appendChild(projectIcon);

    const listName = document.createElement("p");
    listName.setAttribute("class", "list-name");
    listName.textContent = viewListName;
    headerTitle.appendChild(listName);

    // exit
    const img = new Image();
    img.src = exitImage;
    img.classList.add("cancel-view-task-btn");
    taskViewHeader.appendChild(img);

    const taskViewContent = document.createElement("div");
    taskViewContent.classList.add("task-view-content");
    taskContainer.appendChild(taskViewContent);
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
            <select id="viewPriority" required value="${viewPriority}">
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            </select>
        </div>
    </div>`;
    events().saveEdits();
}
