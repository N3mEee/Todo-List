import NewList from "./newList";
import NewTask from "./newTask";

export function updateLists(listsArray) {
    const lists = document.querySelector(".lists");
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
                listsArray[i].newTask = new NewTask(element.title, element.checked, date);
            });
        }
    }
}
