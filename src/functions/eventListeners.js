import NewList from "./newList";
import NewTask from "./newTask";
import { updateLists, updateLocalStorage } from "./functions";
import updateMain from "../dom/updateTasksDOM";
import taskInputForm from "../dom/taskInputForm";
import listInputForm from "../dom/listInputForm";

export default function events() {
    //New List Form
    function newList(listsArray) {
        const newListBtn = document.querySelector(".new-list");

        newListBtn.addEventListener("click", (e) => {
            listInputForm();
            createNewList(listsArray);
            closeListFormEvent();
        });
    }

    // Create a new list
    function createNewList(listsArray) {
        const main = document.querySelector(".main");
        const form = document.querySelector(".new-list-form");
        const createNewListBtn = document.querySelector(".btn-new-list");

        createNewListBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const listName = form.children[1].value;
            const hasName = listsArray.some((lists) => {
                if (lists.listName === listName) {
                    return true;
                } else {
                    return false;
                }
            });
            if (listName.length < 3) {
                return;
            } else {
                if (hasName) {
                    return;
                } else {
                    listsArray.push(new NewList(listName));
                    updateLists(listsArray);
                    updateLocalStorage(listsArray);
                    main.removeChild(form);
                }
            }
        });
    }

    // Close the new list form
    function closeListFormEvent() {
        const btn = document.querySelector(".btn-close-list-form");
        const main = document.querySelector(".main");
        const listform = document.querySelector(".new-list-form");

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            main.removeChild(listform);
        });
    }

    // New Task Form
    function newTask(listsArray) {
        const newTaskBtn = document.querySelector(".new-task");

        newTaskBtn.addEventListener("click", function (e) {
            taskInputForm(listsArray);
            createNewTask(listsArray);
            closeTaskFormEvent();
        });
    }

    // Create a new task
    function createNewTask(listsArray) {
        const main = document.querySelector(".main");
        const form = document.querySelector(".new-task-form");
        const taskName = form.children[3];
        const description = form.children[5];
        const date = form.children[7];
        const listName = form.children[9];
        const priority = form.children[11];
        const createNewTaskBtn = document.querySelector(".btn-new-task");

        createNewTaskBtn.addEventListener("click", (e) => {
            e.preventDefault();
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

    // Close new task form
    function closeTaskFormEvent() {
        const btn = document.querySelector(".btn-close-task-form");
        const main = document.querySelector(".main");
        const taskForm = document.querySelector(".new-task-form");

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            main.removeChild(taskForm);
        });
    }

    //Checkbox
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

    //Sidebar lists buttons
    function sidebarLists(listsArray) {
        const sidebar = document.querySelector(".sidebar");

        sidebar.addEventListener("click", function (e) {
            if (!e.target.classList.contains("list")) {
                return;
            } else {
                updateMain(e.target.textContent, listsArray);
            }
        });
    }

    return { sidebarLists, newList, newTask, checkBox };
}
