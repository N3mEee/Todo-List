import NewList from "./newList";
import { format } from "date-fns";
import * as functions from "./functions";
import taskInputForm from "../dom/taskInputForm";
import listInputForm from "../dom/listInputForm";
import taskView from "../dom/taskView";
import { arrayLists } from "/src/index.js";

export default function events() {
    //New List Form
    function newList() {
        const newListBtn = document.querySelector(".new-list");

        newListBtn.addEventListener("click", (e) => {
            listInputForm();
            createNewList();
            closeListFormEvent();
        });
    }

    // Create a new list
    function createNewList() {
        const main = document.querySelector(".main");
        const form = document.querySelector(".new-list-form");
        const createNewListBtn = document.querySelector(".btn-new-list");

        createNewListBtn.addEventListener("click", (e) => {
            let isFormValid = form.checkValidity();
            if (!isFormValid) {
                form.reportValidity();
            } else {
                e.preventDefault();
                const listName = document.querySelector("input[id=list-name]").value;
                const hasName = arrayLists.some((lists) => {
                    lists.listName === listName ? true : false;
                });

                if (!hasName) {
                    arrayLists.push(new NewList(listName));
                    functions.updateSidebarLists();
                    functions.updateLocalStorage();
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
    function newTask() {
        const newTaskBtn = document.querySelector(".new-task");

        newTaskBtn.addEventListener("click", function (e) {
            taskInputForm(arrayLists);
            createNewTask(arrayLists);
            closeTaskFormEvent();
        });
    }

    // Create a new task
    function createNewTask() {
        const main = document.querySelector(".main");
        const form = document.querySelector(".new-task-form");
        const taskName = document.querySelector("input[id=task-name]");
        const description = document.querySelector("textarea[id=description]");
        const date = document.querySelector("input[id=date]");
        const listName = document.querySelector("select[id=list]");
        const priority = document.querySelector("select[id=priority-list]");
        const createNewTaskBtn = document.querySelector(".btn-new-task");

        createNewTaskBtn.addEventListener("click", (e) => {
            let isFormValid = form.checkValidity();
            if (!isFormValid) {
                form.reportValidity();
            } else {
                e.preventDefault();
                arrayLists.forEach((element) => {
                    if (element.listName === listName.value) {
                        element.addNewTask = [taskName.value, false, date.value, description.value, priority.value];
                    }
                });
                main.removeChild(form);
                functions.updateLocalStorage();
                functions.updateTasksContainer(listName.value);
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
    function checkBox() {
        const tasks = document.querySelectorAll(".task");

        tasks.forEach((taskItem) => {
            taskItem.children[0].addEventListener("change", (e) => {
                arrayLists.forEach((list) => {
                    list.tasks.forEach((task) => {
                        if (e.target.parentNode.children[1].textContent === task.titleValue) {
                            if (e.target.checked) {
                                task.setChecked = true;
                            } else {
                                task.setChecked = false;
                            }
                            functions.updateLocalStorage();
                        }
                    });
                });
            });
        });
    }

    //deleteTask
    function deleteTask() {
        const tasks = document.querySelectorAll(".task");
        tasks.forEach((taskItem) => {
            const deleteTaskBtn = taskItem.querySelector(".delete-task-btn");
            const listName = document.querySelector(".title").textContent;

            deleteTaskBtn.addEventListener("click", (e) => {
                arrayLists.forEach((list) => {
                    list.tasks.forEach((task) => {
                        if (task.titleValue === e.target.parentNode.children[1].textContent) {
                            list.tasks.splice(list.tasks.indexOf(task), 1);
                            functions.updateLocalStorage();
                            functions.updateTasksContainer(listName);
                        }
                    });
                });
            });
        });
    }

    //deleteList
    function deleteList() {
        const deleteListBtn = document.querySelector(".delete-list-btn");

        deleteListBtn.addEventListener("click", (e) => {
            arrayLists.forEach((list) => {
                const listName = document.querySelector(".title").textContent;
                if (list.listName === listName) {
                    arrayLists.splice(arrayLists.indexOf(list), 1);
                    functions.updateLocalStorage();
                    functions.updateTasksContainer("My Day");
                    functions.updateSidebarLists();
                }
            });
        });
    }

    //viewTask
    function viewTask() {
        const viewTaskBtn = document.querySelectorAll(".view-task-btn");

        viewTaskBtn.forEach((task) => {
            task.addEventListener("click", (e) => {
                const main = document.querySelector(".main");
                const taskContainer = document.querySelector(".view-task-container");
                if (taskContainer !== null) {
                    main.removeChild(taskContainer);
                }
                const taskName = e.target.parentNode.children[1].textContent;
                arrayLists.forEach((lists) => {
                    let indexOfList;
                    const list = lists.tasks.filter((task) => {
                        if (task.titleValue === taskName) {
                            indexOfList = arrayLists.indexOf(lists);
                            return true;
                        }
                        return false;
                    });
                    if (list.length > 0) {
                        const lista = arrayLists[indexOfList];
                        const task = lista.tasks.filter((task) => {
                            return task.titleValue === taskName;
                        });
                        taskView(
                            task[0].title,
                            task[0].checked,
                            task[0].description,
                            task[0].date,
                            lista.name,
                            task[0].priority
                        );
                        cancelViewTask();
                        const indexOfTask = lista.tasks.indexOf(task[0]);
                        saveEdits(indexOfList, indexOfTask);
                    }
                });
            });
        });
    }

    //Save edits
    function saveEdits(indexOfList, indexOfTask) {
        const saveEditsButton = document.querySelector(".save-edits");

        saveEditsButton.addEventListener("click", (e) => {
            const taskName = document.querySelector("#viewName").value;
            const description = document.querySelector("#viewDescription").value;
            const date = document.querySelector("#viewDdate").value;
            const priority = document.querySelector("#viewPriority").value;
            const task = arrayLists[indexOfList].tasks[indexOfTask];

            task.title = taskName;
            task.description = description;
            task.date = format(new Date(date), "dd-MM-yyyy");
            task.priority = priority;

            functions.updateLocalStorage();
            functions.updateTasksContainer(arrayLists[indexOfList].name);

            const main = document.querySelector(".main");
            const taskContainer = document.querySelector(".view-task-container");
            main.removeChild(taskContainer);
        });
    }

    //cancel view Task
    function cancelViewTask() {
        const main = document.querySelector(".main");
        const cancelViewTask = document.querySelector(".cancel-view-task-btn");
        const taskContainer = document.querySelector(".view-task-container");

        cancelViewTask.addEventListener("click", (e) => {
            main.removeChild(taskContainer);
        });
    }

    //Sidebar lists buttons
    function sidebarLists() {
        const sidebar = document.querySelector(".sidebar");

        sidebar.addEventListener("click", function (e) {
            if (e.target.classList.contains("list")) {
                functions.updateTasksContainer(e.target.textContent);
            }
        });
    }

    return { sidebarLists, newList, newTask, checkBox, deleteTask, deleteList, viewTask, saveEdits };
}
