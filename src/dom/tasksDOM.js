import PlusImage from "/src/assets/plus.svg";
import "/src/styles/main.css";

export default function content() {
    const content = document.querySelector("#content");
    //main
    const main = document.createElement("div");
    main.classList.add("main");
    content.appendChild(main);

    //Tasks creator
    const newTaskBtn = document.createElement("div");
    newTaskBtn.setAttribute("class", "new-task");
    main.appendChild(newTaskBtn);

    const img = new Image();
    img.src = PlusImage;
    newTaskBtn.appendChild(img);

    // Title/deleteBtn container
    const containerTitle = document.createElement("div");
    containerTitle.classList.add("container-title");
    main.appendChild(containerTitle);

    //Create title
    const title = document.createElement("div");
    title.setAttribute("class", "title");
    containerTitle.appendChild(title);

    const deleteListBtn = document.createElement("button");
    deleteListBtn.setAttribute("class", "delete-list-btn");
    deleteListBtn.style.display = "none";

    deleteListBtn.textContent = "Delete";
    containerTitle.appendChild(deleteListBtn);

    //Create content container
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    main.appendChild(container);
}
