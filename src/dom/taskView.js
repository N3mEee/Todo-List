import exitImage from "/src/assets/exit.svg";
import projectImage from "/src/assets/project.svg";

export default function taskView(viewName, viewDescription, viewDate, viewListName, viewPriority) {
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
            <div class="title-container" style="display: flex; gap: 5px;">
                <div class="task-name-label">Task Name</div>
                <div class="task-name">${viewName}</div>
            </div>
            <div class="description" style="display: flex; gap: 5px;">
                <div class="description-label">Description</div>
                <div class="description">${viewDescription}</div>
            </div>
        </div>
        <div class="right" style="display: flex; gap: 5px; flex-direction: column;">
            <div class="date" style="display: flex; gap: 5px;">
                <div class="date-label">Due date</div>
                <div class="date">${viewDate}</div>
            </div>
            <div class="priority" style="display: flex; gap: 5px;">
                <div class="priority-label">Priority</div>
                <div class="priority">${viewPriority}</div>
        </div>
    </div>`;
}
