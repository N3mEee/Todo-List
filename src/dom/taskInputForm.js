export default function taskInputForm(listsArray) {
    const main = document.querySelector(".main");

    //Form
    const form = document.createElement("form");
    form.classList.add("new-task-form");
    main.appendChild(form);

    //Task Name
    const taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Task Name";

    const taskName = document.createElement("input");
    taskName.type = "text";

    //Description
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";

    const description = document.createElement("textarea");

    //Date
    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Date";

    const date = document.createElement("input");
    date.type = "date";

    //List Name
    const listNameLabel = document.createElement("label");
    listNameLabel.textContent = "List";

    const listName = document.createElement("input");
    listName.setAttribute("list", "list");

    //Priority Input
    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority";

    const priority = document.createElement("input");
    priority.setAttribute("list", "priority-list");

    //Data List
    const datalist = document.createElement("datalist");
    datalist.setAttribute("id", "list");

    listsArray.forEach(function (element) {
        const option = document.createElement("option");
        option.value = element.listName;
        datalist.appendChild(option);
    });

    //Priority List
    const priorityList = document.createElement("datalist");
    priorityList.setAttribute("id", "priority-list");

    const optionOne = document.createElement("option");
    optionOne.value = "Red";
    priorityList.appendChild(optionOne);

    const optionTwo = document.createElement("option");
    optionTwo.value = "Yellow";
    priorityList.appendChild(optionTwo);

    const optionThree = document.createElement("option");
    optionThree.value = "Green";
    priorityList.appendChild(optionThree);

    const button = document.createElement("div");
    button.textContent = "Add Task";
    button.classList.add("btn-primary");

    form.appendChild(datalist);
    form.appendChild(priorityList);

    form.appendChild(taskNameLabel);
    form.appendChild(taskName);

    form.appendChild(descriptionLabel);
    form.appendChild(description);

    form.appendChild(dateLabel);
    form.appendChild(date);

    form.appendChild(listNameLabel);
    form.appendChild(listName);

    form.appendChild(priorityLabel);
    form.appendChild(priority);

    form.appendChild(button);
}
