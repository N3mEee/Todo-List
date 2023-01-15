import NewList from "./newList";
import events from "../functions/eventListeners";
import { isToday } from "date-fns";
import createTaskElement from "../dom/createTaskElement";
import { arrayLists } from "/src/index.js";

export function updateTasksContainer(listName) {
    const container = document.querySelector(".container");
    container.innerHTML = "";

    document.querySelector(".title").textContent = listName;

    //create tasks cards
    arrayLists.forEach((element) => {
        switch (listName) {
            case "Tasks":
                element.tasks.forEach((item) => {
                    createTaskElement(item);
                });
                document.querySelector(".delete-list-btn").style.display = "none";
                break;
            case "My Day":
                element.tasks.forEach((item) => {
                    if (isToday(new Date(item.date.split("-").reverse().join(",")))) {
                        createTaskElement(item);
                    }
                });
                document.querySelector(".delete-list-btn").style.display = "none";
                break;
            case element.name:
                element.tasks.forEach((item) => {
                    createTaskElement(item);
                });
                document.querySelector(".delete-list-btn").style.display = "block";
                break;
            default:
                break;
        }
    });
    events().checkBox();
    events().deleteTask();
    events().deleteList();
    events().viewTask();
    updateSidebarNav();
}

export function updateSidebarLists() {
    const lists = document.querySelector(".lists");
    lists.innerHTML = "<hr>";
    arrayLists.forEach((item) => {
        const listContainer = document.createElement("div");
        listContainer.className = "list list-container";
        lists.appendChild(listContainer);

        const listIcon = document.createElement("i");
        listIcon.className = "fa-solid fa-list";
        listContainer.appendChild(listIcon);

        const list = document.createElement("div");
        list.textContent = item.listName;
        listContainer.appendChild(list);

        const counter = document.createElement("span");
        counter.textContent = `${item.tasks.length}`;
        listContainer.appendChild(counter);
    });
    updateSidebarNav();
}

export function updateLocalStorage() {
    const lists = JSON.stringify(arrayLists);
    localStorage.clear();
    localStorage.setItem("list", lists);
}

export function getLocalStorage() {
    if (!localStorage.getItem("list")) {
        arrayLists.push(new NewList("Default"));
        const today = new Date(Date.now());
        arrayLists[0].addNewTask = ["Defalut task", false, today, "Default task description", "Green"];
        updateLocalStorage();
    } else {
        const lists = JSON.parse(localStorage.getItem("list"));
        for (let i = 0; i < lists.length; i++) {
            arrayLists.push(new NewList(lists[i].name));
            lists[i].tasks.forEach((task) => {
                const date = task.date.split("-").reverse();
                arrayLists[i].addNewTask = [task.title, task.checked, date, task.description, task.priority];
            });
        }
    }
}

export function removeTaskContainer() {
    const main = document.querySelector(".main");
    const taskContainer = document.querySelector(".view-task-container");
    if (taskContainer !== null) main.removeChild(taskContainer);
}

export function removePopout(node) {
    const main = document.querySelector(".main");
    main.removeChild(node);
}

export function updateSidebarNav() {
    const myDayCard = document.querySelector(".my-day-card").querySelector("span");
    const allTasks = document.querySelector(".all-tasks-card").querySelector("span");

    let myDayCounter = 0;
    let allTaskscounter = 0;

    arrayLists.forEach((list) => {
        allTaskscounter += list.tasks.length;
        list.tasks.forEach((task) => {
            if (isToday(new Date(task.date.split("-").reverse().join(",")))) {
                myDayCounter += 1;
            }
        });
    });

    myDayCard.textContent = `${myDayCounter}`;
    allTasks.textContent = `${allTaskscounter}`;
}
