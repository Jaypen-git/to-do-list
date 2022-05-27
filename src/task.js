class Task {
    constructor (title, desc, due, priority) {
        this.title = title,
        this.desc = desc,
        this.due = due,
        this.priority = priority
    }
    displaytask () {
        console.log(this.title, this.desc, this.due, this.priority)
    }
}

export default Task;