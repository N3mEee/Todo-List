import events from "./eventListeners";
import { isToday } from "date-fns";
export default function updateMain(listName, listArray) {
    const title = document.querySelector(".title");
    const container = document.querySelector(".container");
    container.innerHTML = "";
    //title
    title.textContent = listName;

    //tasks
    listArray.forEach((element) => {
        if (listName === "Tasks") {
            element.task.forEach((item) => {
                const task = document.createElement("div");
                task.classList.add("task");
                container.appendChild(task);

                const checkBox = document.createElement("input");
                checkBox.setAttribute("type", "checkbox");
                if (item.checked) {
                    checkBox.checked = true;
                } else {
                    checkBox.checked = false;
                }
                task.appendChild(checkBox);

                const title = document.createElement("div");
                title.classList.add("task-title");
                title.textContent = item.titleValue;
                task.appendChild(title);

                const date = document.createElement("div");
                date.classList.add("task-date");
                date.textContent = item.dateValue;
                task.appendChild(date);
            });
        } else if (listName === "My Day") {
            element.task.forEach((item) => {
                const dateArray = item.date.split("-");
                const newDate = `${dateArray[2]}, ${dateArray[1]}, ${dateArray[0]}`;

                if (isToday(new Date(newDate))) {
                    const task = document.createElement("div");
                    task.classList.add("task");
                    container.appendChild(task);

                    const checkBox = document.createElement("input");
                    checkBox.setAttribute("type", "checkbox");
                    if (item.checked) {
                        checkBox.checked = true;
                    } else {
                        checkBox.checked = false;
                    }
                    task.appendChild(checkBox);

                    const title = document.createElement("div");
                    title.classList.add("task-title");
                    title.textContent = item.titleValue;
                    task.appendChild(title);

                    const date = document.createElement("div");
                    date.classList.add("task-date");
                    date.textContent = item.dateValue;
                    task.appendChild(date);
                }
            });
        } else if (element.name === listName) {
            element.task.forEach((item) => {
                const task = document.createElement("div");
                task.classList.add("task");
                container.appendChild(task);

                const checkBox = document.createElement("input");
                checkBox.setAttribute("type", "checkbox");
                if (item.checked) {
                    checkBox.checked = true;
                } else {
                    checkBox.checked = false;
                }
                task.appendChild(checkBox);

                const title = document.createElement("div");
                title.classList.add("task-title");
                title.textContent = item.titleValue;
                task.appendChild(title);

                const date = document.createElement("div");
                date.classList.add("task-date");
                date.textContent = item.dateValue;
                task.appendChild(date);
            });
        }
    });
    events().checkBox(listArray);
}
