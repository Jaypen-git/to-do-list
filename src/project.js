class Project {
    constructor (title) {
        this.title = title,
        this.tasks = []
    }
    // This is where the tasks should be shown because each project has their own tasks
    displayTasks () {
        console.log(this.tasks);
    }
}

export default Project;