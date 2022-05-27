class Task {
    constructor (title, desc, due, priority) {
        this.title = title,
        this.desc = desc,
        this.due = due,
        this.priority = priority
    }
    // Choose which project a created task should be assigned to
    addTask (tasklist) {
        tasklist.push(this);
    }
}

export default Task;