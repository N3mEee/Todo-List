export default function taskInputForm(arrayLists) {
    const main = document.querySelector(".main");

    // formContainer
    const formContainer = document.createElement("div");
    formContainer.className = "new-task-form-container";
    main.appendChild(formContainer);

    //Form
    const form = document.createElement("form");
    form.classList.add("new-task-form");
    formContainer.appendChild(form);

    //Task Name
    const taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Task Name";
    taskNameLabel.setAttribute("for", "task-name");

    const taskName = document.createElement("input");
    taskName.type = "text";
    taskName.required = true;
    taskName.id = "task-name";

    //Description
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";
    descriptionLabel.setAttribute("for", "description");

    const description = document.createElement("textarea");
    description.id = "description";
    description.required = true;

    //Date
    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Date";
    dateLabel.setAttribute("for", "date");

    const date = document.createElement("input");
    date.type = "date";
    date.id = "date";
    date.required = true;

    //List Name
    const listNameLabel = document.createElement("label");
    listNameLabel.textContent = "List";
    listNameLabel.setAttribute("for", "list");

    const listName = document.createElement("select");
    listName.setAttribute("id", "list");
    listName.required = true;

    //List Options
    arrayLists.forEach(function (element) {
        const option = document.createElement("option");
        option.value = element.listName;
        option.textContent = element.listName;
        listName.appendChild(option);
    });

    //Priority Label
    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority-list");
    priorityLabel.textContent = "Priority";

    //Priority select
    const priorityList = document.createElement("select");
    priorityList.setAttribute("id", "priority-list");
    priorityList.required = true;

    //Priority options
    const optionOne = document.createElement("option");
    optionOne.value = "Red";
    optionOne.textContent = "Red";

    priorityList.appendChild(optionOne);

    const optionTwo = document.createElement("option");
    optionTwo.value = "Yellow";
    optionTwo.textContent = "Yellow";

    priorityList.appendChild(optionTwo);

    const optionThree = document.createElement("option");
    optionThree.value = "Green";
    optionThree.textContent = "Green";

    priorityList.appendChild(optionThree);

    const button = document.createElement("button");
    button.textContent = "Add Task";
    button.classList.add("btn-primary");
    button.classList.add("btn-new-task");

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.classList.add("btn-primary");
    cancelBtn.classList.add("btn-close-task-form");

    form.appendChild(taskNameLabel);
    form.appendChild(taskName);

    form.appendChild(descriptionLabel);
    form.appendChild(description);

    form.appendChild(dateLabel);
    form.appendChild(date);

    form.appendChild(listNameLabel);
    form.appendChild(listName);

    form.appendChild(priorityLabel);
    form.appendChild(priorityList);

    form.appendChild(button);
    form.appendChild(cancelBtn);
}
