import NewList from "./newList";
import NewTask from "./newTask";
import events from "../functions/eventListeners";
import { isToday } from "date-fns";
import createTaskElement from "../dom/createTaskElement";

export function updateTasks(listName, listArray) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const title = document.querySelector(".title");
    //title
    title.textContent = listName;

    //tasks
    listArray.forEach((element) => {
        if (listName === "Tasks") {
            element.task.forEach((item) => {
                createTaskElement(item);
            });
            document.querySelector(".delete-list-btn").style.display = "none";
        } else if (listName === "My Day") {
            element.task.forEach((item) => {
                if (isToday(new Date(item.date.split("-").reverse().join(",")))) {
                    createTaskElement(item);
                }
            });
            document.querySelector(".delete-list-btn").style.display = "none";
        } else if (listName === element.name) {
            element.task.forEach((item) => {
                createTaskElement(item);
            });
            document.querySelector(".delete-list-btn").style.display = "block";
        }
    });
    events().checkBox(listArray);
    events().deleteTask(listArray);
    events().deleteList(listArray);
    events().viewTask(listArray);
}

export function updateLists(listsArray) {
    const lists = document.querySelector(".lists");
    lists.innerHTML = "<hr>";

    for (let i = 0; i < listsArray.length; i++) {
        const list = document.createElement("div");
        list.classList.add("list");
        list.textContent = listsArray[i].listName;
        lists.appendChild(list);
    }
}

export function updateLocalStorage(listsArray) {
    let x = JSON.stringify(listsArray);
    localStorage.clear();
    localStorage.setItem("list", x);
}

export function getLocalStorage(listsArray) {
    if (!localStorage.getItem("list")) {
        return;
    } else {
        let x = JSON.parse(localStorage.getItem("list"));
        for (let i = 0; i < x.length; i++) {
            listsArray.push(new NewList(x[i].name));
            x[i].task.forEach((element) => {
                const dateArray = element.date.split("-");
                const date = `${dateArray[2]}, ${dateArray[1]}, ${dateArray[0]}`;
                listsArray[i].newTask = new NewTask(
                    element.title,
                    element.checked,
                    date,
                    element.description,
                    element.priority
                );
            });
        }
    }
}
