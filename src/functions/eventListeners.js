import NewList from "./newList";
import NewTask from "./newTask";
import { updateLists, updateLocalStorage } from "./functions";
import updateMain from "./updateTasksDOM";

export default function events() {
    const sidebar = document.querySelector(".sidebar");
    const newListBtn = document.querySelector(".new-list");
    const lists = document.querySelector(".lists");
    const newTaskBtn = document.querySelector(".new-task");
    const tasks = document.querySelectorAll(".task");

    function newList(listsArray) {
        newListBtn.addEventListener("click", () => {
            let listName = prompt("Please enter a list name");
            if (listName.length < 3) {
                return;
            } else {
                listsArray.push(new NewList(listName));
                lists.innerHTML = "<hr>";
                updateLists(listsArray);
                updateLocalStorage(listsArray);
            }
        });
    }
    function sidebarLists(listsArray) {
        sidebar.addEventListener("click", function (e) {
            e.stopImmediatePropagation();

            if (!e.target.classList.contains("list")) {
                return;
            } else {
                updateMain(e.target.textContent, listsArray);
            }
        });
    }

    function newTask(listsArray) {
        //TODO: Move this into a separate file
        newTaskBtn.addEventListener("click", function (e) {
            e.stopImmediatePropagation();

            const main = document.querySelector(".main");
            const inputContainer = document.createElement("div");
            inputContainer.classList.add("input-container");
            main.appendChild(inputContainer);

            const taskName = document.createElement("input");
            taskName.type = "text";

            const date = document.createElement("input");
            date.type = "date";

            const listName = document.createElement("input");
            listName.setAttribute("list", "list");

            const datalist = document.createElement("datalist");
            datalist.setAttribute("id", "list");
            inputContainer.appendChild(datalist);

            listsArray.forEach(function (element) {
                const option = document.createElement("option");
                option.value = element.listName;
                datalist.appendChild(option);
            });

            const button = document.createElement("div");
            button.textContent = "Add Task";
            button.classList.add("btn-primary");

            inputContainer.appendChild(taskName);
            inputContainer.appendChild(date);
            inputContainer.appendChild(listName);
            inputContainer.appendChild(button);

            button.addEventListener("click", (e) => {
                e.stopImmediatePropagation();
                if (taskName.value.length < 3 || listName.value < 3) {
                    return;
                } else {
                    listsArray.forEach((element) => {
                        if (element.listName === listName.value) {
                            element.newTask = new NewTask(taskName.value, false, date.value);
                        }
                    });
                    main.removeChild(inputContainer);
                    updateLocalStorage(listsArray);
                    updateMain(listName.value, listsArray);
                }
            });
        });
    }

    function checkBox(listsArray) {
        tasks.forEach((taskItem) => {
            taskItem.children[0].addEventListener("change", (e) => {
                listsArray.forEach((list) => {
                    list.task.forEach((task) => {
                        if (e.target.parentNode.children[1].textContent === task.titleValue) {
                            if (e.target.checked) {
                                task.setChecked = true;
                            } else {
                                task.setChecked = false;
                            }
                            updateLocalStorage(listsArray);
                        }
                    });
                });
            });
        });
    }

    return { sidebarLists, newList, newTask, checkBox };
}
