export default function listInputForm() {
    const main = document.querySelector(".main");

    //Form
    const form = document.createElement("form");
    form.classList.add("new-list-form");
    main.appendChild(form);

    //List Name
    const listNameLabel = document.createElement("label");
    listNameLabel.textContent = "List Name";

    const listName = document.createElement("input");
    listName.type = "text";

    const button = document.createElement("div");
    button.textContent = "Add Task";
    button.classList.add("btn-primary");
    button.classList.add("btn-new-list");


    form.appendChild(listNameLabel);
    form.appendChild(listName);

    form.appendChild(button);
}
