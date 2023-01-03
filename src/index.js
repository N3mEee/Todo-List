import Content from "./functions/tasksDOM";
import events from "./functions/eventListeners";
import Sidebar from "./functions/sidebar";
import { updateLists, getLocalStorage } from "./functions/functions";
import updateMain from "./functions/updateTasksDOM.js";
import "./styles/style.css";

let listsArray = [];

getLocalStorage(listsArray);
Sidebar();
Content();
const myDay = document.querySelector(".my-day");
updateMain(myDay.textContent, listsArray);
updateLists(listsArray);
events().sidebarLists(listsArray);
events().newList(listsArray);
events().newTask(listsArray);
