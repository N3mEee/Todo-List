import PlusImage from "/src/assets/plus.svg";

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

    //Create title
    const title = document.createElement("div");
    title.setAttribute("class", "title");
    main.appendChild(title);

    //Create content container
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    main.appendChild(container);
}
