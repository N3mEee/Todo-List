export default class NewList {
    constructor(name) {
        this.name = name;
    }
    task = [];

    get listName() {
        return this.name;
    }

    get tasks() {
        return this.task;
    }

    set newTask(task) {
        this.task.push(task);
    }
}
