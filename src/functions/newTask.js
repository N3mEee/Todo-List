import { format } from "date-fns";

export default class NewTask {
    constructor(title, checked, date) {
        this.title = title;
        this.checked = checked;
        this.date = format(new Date(date), "dd-MM-yyyy");
    }

    get titleValue() {
        return this.title;
    }

    get checkedStatus() {
        return this.checked;
    }

    get dateValue() {
        return this.date;
    }

    set setChecked(value) {
        this.checked = value;
    }

    set setDate(value) {
        this.date = format(new Date(value), "dd-MM-yyyy");
    }
}
