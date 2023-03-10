import "/src/styles/main.css";

export default function content() {
    const content = document.querySelector("#content");
    //main
    const main = document.createElement("div");
    main.classList.add("main");
    content.appendChild(main);

    // wrapper
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    main.appendChild(wrapper);

    //hamburger
    const hamburger = document.createElement("div");
    hamburger.className = "hamburger";
    wrapper.appendChild(hamburger);

    //hamburger
    const hamburgerIcon = document.createElement("i");
    hamburgerIcon.className = "fa-solid fa-bars";
    hamburger.appendChild(hamburgerIcon);

    //Tasks creator
    const newTaskBtn = document.createElement("div");
    newTaskBtn.setAttribute("class", "new-task");
    wrapper.appendChild(newTaskBtn);

    // New List Icon
    const newTaskIcon = document.createElement("i");
    newTaskIcon.className = "fa-solid fa-plus";
    newTaskBtn.appendChild(newTaskIcon);

    // Title/deleteBtn container
    const containerTitle = document.createElement("div");
    containerTitle.classList.add("container-title");
    main.appendChild(containerTitle);

    //Create title
    const title = document.createElement("div");
    title.setAttribute("class", "title");
    containerTitle.appendChild(title);

    const deleteListBtn = document.createElement("div");
    deleteListBtn.setAttribute("class", "delete-list-btn");
    deleteListBtn.style.display = "none";
    containerTitle.appendChild(deleteListBtn);

    const deleteListIcon = document.createElement("i");
    deleteListIcon.className = "fa-solid fa-trash";
    deleteListBtn.appendChild(deleteListIcon);

    //Create content container
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    main.appendChild(container);
}
