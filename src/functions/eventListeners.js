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
                    functions.removePopout(form);
                }
            }
        });
    }

    // Close the new list form
    function closeListFormEvent() {
        const btn = document.querySelector(".btn-close-list-form");
        const listform = document.querySelector(".new-list-form");

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            functions.removePopout(listform);
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
                functions.removePopout(form);
                functions.updateLocalStorage();
                functions.updateTasksContainer(listName.value);
            }
        });
    }

    // Close new task form
    function closeTaskFormEvent() {
        const btn = document.querySelector(".btn-close-task-form");
        const taskForm = document.querySelector(".new-task-form");

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            functions.removePopout(taskForm);
        });
    }

    //Checkbox
    function checkBox() {
        const checkboxes = document.querySelectorAll("input[type=checkbox]");
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", (e) => {
                arrayLists.forEach((list) => {
                    list.tasks.forEach((task) => {
                        if (e.target.parentNode.querySelector(".task-title").textContent === task.titleValue) {
                            e.target.checked ? (task.setChecked = true) : (task.setChecked = false);
                            functions.updateLocalStorage();
                        }
                    });
                });
            });
        });
    }

    //deleteTask
    function deleteTask() {
        const deleteTaskBtns = document.querySelectorAll(".delete-task-btn");
        const listName = document.querySelector(".title").textContent;

        deleteTaskBtns.forEach((deleteTaskBtn) => {
            deleteTaskBtn.addEventListener("click", (e) => {
                arrayLists.forEach((list) => {
                    list.tasks.forEach((task) => {
                        if (e.target.parentNode.querySelector(".task-title").textContent === task.titleValue) {
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
        const viewTaskBtns = document.querySelectorAll(".view-task-btn");

        viewTaskBtns.forEach((viewTaskBtn) => {
            viewTaskBtn.addEventListener("click", (e) => {
                const taskContainer = document.querySelector(".view-task-container");
                const taskName = e.target.parentNode.querySelector(".task-title").textContent;

                if (taskContainer !== null) functions.removeTaskContainer();

                arrayLists.forEach((list) => {
                    const filteredTasks = list.tasks.filter((task) => task.titleValue === taskName);
                    if (filteredTasks.length > 0) {
                        taskView(
                            filteredTasks[0].title,
                            filteredTasks[0].checked,
                            filteredTasks[0].description,
                            filteredTasks[0].date,
                            list.listName,
                            filteredTasks[0].priority
                        );
                        cancelViewTask();
                        saveEdits(arrayLists.indexOf(list), list.tasks.indexOf(filteredTasks[0]));
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
            functions.removeTaskContainer();
        });
    }

    //cancel view Task
    function cancelViewTask() {
        const cancelViewTask = document.querySelector(".cancel-view-task-btn");

        cancelViewTask.addEventListener("click", (e) => {
            functions.removeTaskContainer();
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
