import Content from "./dom/tasksDOM";
import events from "./functions/eventListeners";
import Sidebar from "./dom/sidebar";
import { updateTasks, updateLists, getLocalStorage } from "./functions/functions";
import "./styles/style.css";

let listsArray = [];

getLocalStorage(listsArray);
Sidebar();
Content();
const myDay = document.querySelector(".my-day");
updateTasks(myDay.textContent, listsArray);
updateLists(listsArray);
events().sidebarLists(listsArray);
events().newList(listsArray);
events().newTask(listsArray);
