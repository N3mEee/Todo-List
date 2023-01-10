import Content from "./dom/tasksDOM";
import events from "./functions/eventListeners";
import Sidebar from "./dom/sidebar";
import { updateTasksContainer, updateSidebarLists, getLocalStorage } from "./functions/functions";
import "./styles/style.css";

export let arrayLists = [];

getLocalStorage();
Sidebar();
Content();
updateTasksContainer("My Day");
updateSidebarLists();
events().sidebarLists();
events().newList();
events().newTask();
