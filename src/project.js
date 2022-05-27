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

export default Project;