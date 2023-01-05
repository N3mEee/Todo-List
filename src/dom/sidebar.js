import PlusImage from "/src/assets/plus.svg";

export default function sidebar() {
    //sidebar navigation
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    content.appendChild(sidebar);

    //sidebar content
    //logo
    const logo = document.createElement("div");
    logo.classList.add("logo");
    sidebar.appendChild(logo);
    const logoText = document.createElement("p");
    logoText.textContent = "TODO List";
    logo.appendChild(logoText);

    //navigation
    const nav = document.createElement("div");
    nav.classList.add("nav");
    sidebar.appendChild(nav);

    //navigation buttons
    //MyDay
    const myDay = document.createElement("div");
    myDay.classList.add("my-day");
    myDay.classList.add("list");
    myDay.textContent = "My Day";
    nav.appendChild(myDay);
    //Tasks
    const tasks = document.createElement("div");
    tasks.classList.add("tasks");
    tasks.classList.add("list");
    tasks.textContent = "Tasks";
    nav.appendChild(tasks);

    //Menu with lists
    const lists = document.createElement("div");
    lists.classList.add("lists");
    sidebar.appendChild(lists);
    //dotline
    const line = document.createElement("hr");
    lists.appendChild(line);

    //New List
    const newList = document.createElement("div");
    newList.classList.add("new-list");
    sidebar.appendChild(newList);

    //New List button
    const img = new Image();
    img.src = PlusImage;
    newList.appendChild(img);
    img.style.width = "20px";
    img.style.height = "20px";

    const newListBtn = document.createElement("div");
    newListBtn.classList.add("new-list-button");
    newListBtn.textContent = "New List";
    newList.appendChild(newListBtn);
}
