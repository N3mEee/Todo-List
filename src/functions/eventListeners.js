import NewList from "./newList";
import NewTask from "./newTask";
import { format } from "date-fns";
import { updateTasks, updateLists, updateLocalStorage } from "./functions";
import taskInputForm from "../dom/taskInputForm";
import listInputForm from "../dom/listInputForm";
import taskView from "../dom/taskView";

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
            let isFormValid = form.checkValidity();
            if (!isFormValid) {
                form.reportValidity();
            } else {
                e.preventDefault();

                const listName = document.querySelector("input[id=list-name]").value;

                const hasName = listsArray.some((lists) => {
                    if (lists.listName === listName) {
                        return true;
                    } else {
                        return false;
                    }
                });

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
                    updateTasks(listName.value, listsArray);
                }
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

    //deleteTask
    function deleteTask(listsArray) {
        const tasks = document.querySelectorAll(".task");
        tasks.forEach((taskItem) => {
            const deleteTaskBtn = taskItem.querySelector(".delete-task-btn");
            const listName = document.querySelector(".title").textContent;

            deleteTaskBtn.addEventListener("click", (e) => {
                listsArray.forEach((list) => {
                    list.task.forEach((task) => {
                        if (task.titleValue === e.target.parentNode.children[1].textContent) {
                            list.task.splice(list.tasks.indexOf(task), 1);
                            updateLocalStorage(listsArray);
                            updateTasks(listName, listsArray);
                        }
                    });
                });
            });
        });
    }

    //deleteList
    function deleteList(listsArray) {
        const deleteListBtn = document.querySelector(".delete-list-btn");

        deleteListBtn.addEventListener("click", (e) => {
            listsArray.forEach((list) => {
                const listName = document.querySelector(".title").textContent;
                if (list.listName === listName) {
                    listsArray.splice(listsArray.indexOf(list), 1);
                    updateLocalStorage(listsArray);
                    updateTasks("My Day", listsArray);
                    updateLists(listsArray);
                }
            });
        });
    }

    //viewTask
    function viewTask(listsArray) {
        const viewTaskBtn = document.querySelectorAll(".view-task-btn");

        viewTaskBtn.forEach((task) => {
            task.addEventListener("click", (e) => {
                const main = document.querySelector(".main");
                const taskContainer = document.querySelector(".view-task-container");
                if (taskContainer !== null) {
                    main.removeChild(taskContainer);
                }
                const taskName = e.target.parentNode.children[1].textContent;
                listsArray.forEach((lists) => {
                    let indexOfList;
                    const list = lists.task.filter((task) => {
                        if (task.titleValue === taskName) {
                            indexOfList = listsArray.indexOf(lists);
                            return true;
                        }
                        return false;
                    });
                    if (list.length > 0) {
                        const lista = listsArray[indexOfList];
                        const task = lista.task.filter((task) => {
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
                        const indexOfTask = lista.task.indexOf(task[0]);
                        saveEdits(listsArray, indexOfList, indexOfTask);
                    }
                });
            });
        });
    }

    //Save edits
    function saveEdits(listsArray, indexOfList, indexOfTask) {
        const saveEditsButton = document.querySelector(".save-edits");

        saveEditsButton.addEventListener("click", (e) => {
            const taskName = document.querySelector("#viewName").value;
            const description = document.querySelector("#viewDescription").value;
            const date = document.querySelector("#viewDdate").value;
            const priority = document.querySelector("#viewPriority").value;
            const task = listsArray[indexOfList].task[indexOfTask];

            task.title = taskName;
            task.description = description;
            task.date = format(new Date(date), "dd-MM-yyyy");
            task.priority = priority;

            updateLocalStorage(listsArray);
            updateTasks(listsArray[indexOfList].name, listsArray);

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
    function sidebarLists(listsArray) {
        const sidebar = document.querySelector(".sidebar");

        sidebar.addEventListener("click", function (e) {
            if (!e.target.classList.contains("list")) {
                return;
            } else {
                updateTasks(e.target.textContent, listsArray);
            }
        });
    }

    return { sidebarLists, newList, newTask, checkBox, deleteTask, deleteList, viewTask, saveEdits };
}
