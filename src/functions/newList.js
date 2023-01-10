import NewTask from "./newTask";

export default class NewList {
    constructor(name) {
        this.name = name;
    }
    tasks = [];

    get listName() {
        return this.name;
    }

    get tasks() {
        return this.tasks;
    }

    /**
     * @param {any} task
     */
    set addNewTask(task) {
        this.tasks.push(new NewTask(...task));
    }
}
