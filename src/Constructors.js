class Task {
    constructor (title, desc, due, priority) {
        this.title = title,
        this.desc = desc,
        this.due = due,
        this.priority = priority
    }
    // method for editing the created object
    editTask (title, desc, due, priority) {
        this.title = title,
        this.desc = desc,
        this.due = due,
        this.priority = priority
    }
}

class Project {
    constructor (title) {
        this.title = title,
        this.tasks = []
    }
    // There should be a function to save a created project
    editProject (title) {
        this.title = title,
        this.tasks = tasks
    }
}

export { Task, Project };