import PlusImage from "/src/assets/plus.svg";
import "/src/styles/sidebar.css";
import "@fortawesome/fontawesome-free/js/all.js";

export default function sidebar() {
    //sidebar navigation
    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    content.appendChild(sidebar);

    //sidebar content
    //logo
    const logo = document.createElement("div");
    logo.className = "logo";
    sidebar.appendChild(logo);

    const logoText = document.createElement("a");
    logoText.setAttribute("href", "#");
    logoText.innerHTML = `TODO List App`;
    logo.appendChild(logoText);

    //navigation
    const nav = document.createElement("div");
    nav.className = "nav";
    sidebar.appendChild(nav);

    //navigation buttons
    //MyDay card
    const myDayCard = document.createElement("div");
    myDayCard.className = "nav-card my-day-card";
    nav.appendChild(myDayCard);

    //MyDay icon
    const myDayIcon = document.createElement("i");
    myDayIcon.className = "fa-solid fa-calendar-day my-day-icon";
    myDayCard.appendChild(myDayIcon);

    //myDay number
    const myDaynumber = document.createElement("span");
    myDaynumber.textContent = "123";
    myDayCard.appendChild(myDaynumber);

    //TODO: remove hardcoded values
    //MyDay
    const myDay = document.createElement("div");
    myDay.className = "my-day";
    myDay.textContent = "My Day";
    myDayCard.appendChild(myDay);

    //alTasks card
    const allTasksCard = document.createElement("div");
    allTasksCard.className = "nav-card all-tasks-card";
    nav.appendChild(allTasksCard);

    //alTasksIcon icon
    const allTasksIcon = document.createElement("i");
    allTasksIcon.className = "fa-solid fa-calendar-days all-tasks-icon";
    allTasksCard.appendChild(allTasksIcon);

    //TODO: remove hardcoded values
    //alTasksnumber
    const alTasksnumber = document.createElement("span");
    alTasksnumber.textContent = "123";
    allTasksCard.appendChild(alTasksnumber);

    //alTasks
    const allTasks = document.createElement("div");
    allTasks.className = "tasks";
    allTasks.textContent = "Tasks";
    allTasksCard.appendChild(allTasks);

    //Menu with lists
    const lists = document.createElement("div");
    lists.className = "lists";
    sidebar.appendChild(lists);
    //dotline
    const line = document.createElement("hr");
    lists.appendChild(line);

    //New List
    const newList = document.createElement("div");
    newList.className = "new-list";
    sidebar.appendChild(newList);
    newList.innerHTML = `<i class="fa-solid fa-plus"></i>`;

    //New List button
    // const img = new Image();
    // img.src = PlusImage;
    // newList.appendChild(img);
    // img.style.width = "20px";
    // img.style.height = "20px";

    const newListBtn = document.createElement("div");
    newListBtn.className = "new-list-button";
    newListBtn.textContent = "New List";
    newList.appendChild(newListBtn);
}
