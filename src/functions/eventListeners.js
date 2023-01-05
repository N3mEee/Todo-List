import NewList from "./newList";
import NewTask from "./newTask";
import { updateLists, updateLocalStorage } from "./functions";
import updateMain from "../dom/updateTasksDOM";
import taskInputForm from "../dom/taskInputForm";

export default function events() {
    function newList(listsArray) {
        const newListBtn = document.querySelector(".new-list");
        const lists = document.querySelector(".lists");

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
        const sidebar = document.querySelector(".sidebar");

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
        const newTaskBtn = document.querySelector(".new-task");

        newTaskBtn.addEventListener("click", function (e) {
            e.stopImmediatePropagation();
            taskInputForm(listsArray);
            createNewTask(listsArray);
        });
    }

    function createNewTask(listsArray) {
        const main = document.querySelector(".main");
        const form = document.querySelector(".new-task-form");
        const taskName = form.children[3];
        const description = form.children[5];
        const date = form.children[7];
        const listName = form.children[9];
        const priority = form.children[11];

        form.lastChild.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
            if (taskName.value.length < 3 || listName.value < 3) {
                return;
            } else {
                listsArray.forEach((element) => {
                    if (element.listName === listName.value) {
                        element.newTask = new NewTask(
                            taskName.value,
                            false,
                            date.value,
                            description.value,
                            priority.value
                        );
                    }
                });
                main.removeChild(form);
                updateLocalStorage(listsArray);
                updateMain(listName.value, listsArray);
            }
        });
    }

    function checkBox(listsArray) {
        const tasks = document.querySelectorAll(".task");

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
