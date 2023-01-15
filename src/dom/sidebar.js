import "/src/styles/sidebar.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { createCustomElement } from "../functions/functions";
export default function sidebar() {
    //Sidebar container
    const sidebar = createCustomElement("div", "sidebar", content);

    //Logo container
    const logo = createCustomElement("div", "logo", sidebar);

    //Logo icon
    createCustomElement("i", "fa-solid fa-clipboard-list", logo);

    //Logo text
    const logoText = createCustomElement("a", "logo-text", logo, "To Do List");
    logoText.setAttribute("href", "#");

    //navbar container
    const nav = createCustomElement("div", "nav", sidebar);

    //my Day Card
    const myDayCard = createCustomElement("div", "nav-card my-day-card", nav);

    //My Day Icon
    createCustomElement("i", "fa-solid fa-calendar-day my-day-icon", myDayCard);

    //My Day counter
    createCustomElement("span", undefined, myDayCard);

    //My Day Text
    createCustomElement("div", "my-day", myDayCard, "My Day");

    //All Tasks Card
    const allTasksCard = createCustomElement("div", "nav-card all-tasks-card", nav);

    //All Tasks Icon
    createCustomElement("i", "fa-solid fa-calendar-days all-tasks-icon", allTasksCard);

    //All Tasks counter
    createCustomElement("span", undefined, allTasksCard);

    //All Tasks Text
    createCustomElement("div", "tasks", allTasksCard, "Tasks");

    //Lists container
    const lists = createCustomElement("div", "lists", sidebar);

    //hr
    createCustomElement("hr", undefined, lists);

    //New List Button
    const newList = createCustomElement("div", "new-list", sidebar);

    //New List Button Icon
    createCustomElement("i", "fa-solid fa-plus", newList);

    //New List Button Text
    createCustomElement("div", "new-list-button", newList, "Add List");
}
