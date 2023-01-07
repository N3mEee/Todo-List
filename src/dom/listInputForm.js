export default function listInputForm() {
    const main = document.querySelector(".main");

    //Form
    const form = document.createElement("form");
    form.classList.add("new-list-form");
    main.appendChild(form);

    //List Name
    const listNameLabel = document.createElement("label");
    listNameLabel.textContent = "List Name";
    listNameLabel.setAttribute("for", "list-name");

    const listName = document.createElement("input");
    listName.type = "text";
    listName.id = "list-name";

    const button = document.createElement("button");
    button.textContent = "Add Task";
    button.classList.add("btn-primary");
    button.classList.add("btn-new-list");

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.classList.add("btn-primary");
    cancelBtn.classList.add("btn-close-list-form");

    form.appendChild(listNameLabel);
    form.appendChild(listName);
    form.appendChild(button);
    form.appendChild(cancelBtn);
}
