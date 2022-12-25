export default function home() {
    const content = document.querySelector("#content");

    const text = document.createElement("div");
    text.textContent = "ToDo List";
    content.appendChild(text);
}
