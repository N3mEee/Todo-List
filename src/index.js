import Content from "./dom/tasksDOM";
import events from "./functions/eventListeners";
import Sidebar from "./dom/sidebar";
import * as functions from "./functions/functions";

import "./styles/style.css";

export let arrayLists = [];

functions.getLocalStorage();
Sidebar();
functions.updateSidebarLists();
events().sidebarLists();
events().newList();
Content();
functions.updateTasksContainer("My Day");
events().newTask();
