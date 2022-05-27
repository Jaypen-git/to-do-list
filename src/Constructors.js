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

class Project {
    constructor (title) {
        this.title = title,
        this.tasks = []
    }
    // There should be a function to save a created project
    saveProject (list) {
        list.push(this);
    }
}

export { Task, Project };