const createProject = (title, desc, tasksToAdd) => {
    return {
        title,
        desc,
        tasks: [],
        addTask: () => {
            tasksToAdd.forEach(task => this.tasks.push(task))
        }
    }
}

export default createProject;