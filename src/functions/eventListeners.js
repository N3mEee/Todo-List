import NewList from "./newList";
import { format } from "date-fns";
import * as functions from "./functions";
import taskInputForm from "../dom/taskInputForm";
import listInputForm from "../dom/listInputForm";
import taskView from "../dom/taskView";
import taskEdit from "../dom/taskEdit";

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

    // hamburger button
    function hamburger() {
        const hamburgerBtns = document.querySelectorAll(".hamburger");
        const sidebar = document.querySelector(".sidebar");

        hamburgerBtns.forEach((hamburgerBtn) => {
            hamburgerBtn.addEventListener("click", (e) => {
                if (sidebar.style.display === "grid") {
                    sidebar.style.display = "none";
                } else {
                    sidebar.style.display = "grid";
                }
            });
        });
    }

    // Create a new list
    function createNewList() {
        const form = document.querySelector(".new-list-form");
        const formContainer = document.querySelector(".new-list-form-container");
        const createNewListBtn = document.querySelector(".btn-new-list");

        createNewListBtn.addEventListener("click", (e) => {
            const isFormValid = form.checkValidity();
            if (!isFormValid) {
                form.reportValidity();
            } else {
                e.preventDefault();
                const listName = document.querySelector("input[id=list-name]").value;
                const hasName = arrayLists.some((lists) => {
                    return lists.listName === listName ? true : false;
                });

                if (!hasName) {
                    arrayLists.push(new NewList(listName));
                    functions.updateSidebarLists();
                    functions.updateLocalStorage();
                    functions.removePopup(formContainer);
                } else {
                    alert(`"${listName}" already exists! Please choose a new list name.`);
                }
                sidebarLists();
            }
        });
    }

    // Close the new list form
    function closeListFormEvent() {
        const btn = document.querySelector(".btn-close-list-form");
        const listFormContainer = document.querySelector(".new-list-form-container");

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            functions.removePopup(listFormContainer);
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
        const formContainer = document.querySelector(".new-task-form-container");
        const taskName = document.querySelector("input[id=task-name]");
        const description = document.querySelector("textarea[id=description]");
        const date = document.querySelector("input[id=date]");
        const listName = document.querySelector("select[id=list]");
        const priority = document.querySelector("select[id=priority-list]");
        const createNewTaskBtn = document.querySelector(".btn-new-task");

        createNewTaskBtn.addEventListener("click", (e) => {
            const isFormValid = form.checkValidity();
            if (!isFormValid) {
                form.reportValidity();
            } else {
                e.preventDefault();
                arrayLists.forEach((element) => {
                    if (element.listName === listName.value) {
                        const hasTask = element.tasks.some((task) => {
                            return task.titleValue === taskName.value;
                        });
                        if (!hasTask) {
                            element.addNewTask = [taskName.value, false, date.value, description.value, priority.value];
                        } else {
                            alert(
                                `Task name "${taskName.value}" already exists in this list! Please choose a different task name.`
                            );
                        }
                    }
                });
                functions.removePopup(formContainer);
                functions.updateLocalStorage();
                functions.updateSidebarLists();
                sidebarLists();
                functions.updateTasksContainer(listName.value);
            }
        });
    }

    // Close new task form
    function closeTaskFormEvent() {
        const btn = document.querySelector(".btn-close-task-form");
        const formContainer = document.querySelector(".new-task-form-container");

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            functions.removePopup(formContainer);
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
                arrayLists.every((list) => {
                    return list.tasks.every((task) => {
                        if (
                            deleteTaskBtn.parentNode.parentNode.querySelector(".task-title").textContent ===
                            task.titleValue
                        ) {
                            list.tasks.splice(list.tasks.indexOf(task), 1);
                            functions.updateLocalStorage();
                            functions.updateSidebarLists();
                            sidebarLists();
                            functions.updateTasksContainer(listName);
                            return false;
                        } else {
                            return true;
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
                    functions.updateSidebarLists();
                    sidebarLists();
                    functions.updateTasksContainer("My Day");
                }
            });
        });
    }

    //viewTask
    function viewTask() {
        const tasks = document.querySelectorAll(".task");
        const viewTaskContainer = document.querySelector(".view-task-container");
        viewTaskBtn();

        tasks.forEach((task) => {
            task.addEventListener("click", (e) => {
                if (
                    e.target.classList.contains("task") ||
                    e.target.classList.contains("task-title") ||
                    e.target.classList.contains("task-priority") ||
                    e.target.classList.contains("task-date")
                ) {
                    const taskName = task.querySelector(".task-title").textContent;

                    functions.removePopup(viewTaskContainer);

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
                        }
                    });
                }
            });
        });
    }

    //viewTaskBtn
    function viewTaskBtn() {
        const viewTaskBtns = document.querySelectorAll(".view-task-btn");
        const viewTaskContainer = document.querySelector(".view-task-container");

        viewTaskBtns.forEach((viewTaskBtn) => {
            viewTaskBtn.addEventListener("click", (e) => {
                const taskName = viewTaskBtn.parentNode.parentNode.querySelector(".task-title").textContent;

                functions.removePopup(viewTaskContainer);

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
                    }
                });
            });
        });
    }

    //editTask
    function editTask() {
        const editTaskBtns = document.querySelectorAll(".edit-task-btn");
        const editTaskContainer = document.querySelector(".edit-task-container");

        editTaskBtns.forEach((editTaskBtn) => {
            editTaskBtn.addEventListener("click", (e) => {
                const taskName = editTaskBtn.parentNode.parentNode.querySelector(".task-title").textContent;

                functions.removePopup(editTaskContainer);
                arrayLists.forEach((list) => {
                    const filteredTasks = list.tasks.filter((task) => task.titleValue === taskName);
                    if (filteredTasks.length > 0) {
                        taskEdit(
                            filteredTasks[0].title,
                            filteredTasks[0].checked,
                            filteredTasks[0].description,
                            filteredTasks[0].date,
                            list.listName,
                            filteredTasks[0].priority
                        );
                        cancelEditTask();
                        saveEdits(arrayLists.indexOf(list), list.tasks.indexOf(filteredTasks[0]));
                    }
                });
            });
        });
    }

    //Save edits
    function saveEdits(indexOfList, indexOfTask) {
        const saveEditsButton = document.querySelector(".save-edits");
        const editTaskContainer = document.querySelector(".edit-task-container");

        saveEditsButton.addEventListener("click", (e) => {
            const taskName = document.querySelector("#edit-name").value;
            const description = document.querySelector("#edit-description").value;
            const date = document.querySelector("#edit-date").value;
            const priority = document.querySelector("#edit-priority").value;
            const task = arrayLists[indexOfList].tasks[indexOfTask];

            task.title = taskName;
            task.description = description;
            task.date = format(new Date(date), "dd-MM-yyyy");
            task.priority = priority;

            functions.updateLocalStorage();
            functions.removePopup(editTaskContainer);
            sidebarLists();
            functions.updateTasksContainer(arrayLists[indexOfList].name);
        });
    }

    //cancel view Task
    function cancelViewTask() {
        const viewTaskContainer = document.querySelector(".view-task-container");
        const cancelViewTask = document.querySelector(".view-task-exit");
        cancelViewTask.addEventListener("click", (e) => {
            functions.removePopup(viewTaskContainer);
        });

        document.addEventListener(
            "keydown",
            (event) => {
                if (event.key === "Escape") {
                    functions.removePopup(viewTaskContainer);
                }
            },
            { once: true }
        );
    }

    //cancel view Task
    function cancelEditTask() {
        const editTaskContainer = document.querySelector(".edit-task-container");
        const cancelEditTask = document.querySelector(".edit-task-exit");

        cancelEditTask.addEventListener("click", (e) => {
            functions.removePopup(editTaskContainer);
        });

        document.addEventListener(
            "keydown",
            (event) => {
                if (event.key === "Escape") {
                    functions.removePopup(editTaskContainer);
                }
            },
            { once: true }
        );
    }

    //Sidebar lists buttons
    function sidebarLists() {
        const lists = document.querySelectorAll(".list");
        const myDayCard = document.querySelector(".my-day-card");
        const allTasksCard = document.querySelector(".all-tasks-card");

        lists.forEach((list) => {
            list.addEventListener("click", () => {
                functions.updateTasksContainer(list.querySelector("div").textContent);
            });
        });

        myDayCard.addEventListener("click", function (e) {
            functions.updateTasksContainer("My Day");
        });
        allTasksCard.addEventListener("click", function (e) {
            functions.updateTasksContainer("Tasks");
        });
    }

    return {
        sidebarLists,
        newList,
        newTask,
        checkBox,
        deleteTask,
        deleteList,
        viewTask,
        saveEdits,
        editTask,
        hamburger,
    };
}
