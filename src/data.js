import  { myProjects, saveChanges, addItem } from './Storage';
import { Task, Project } from './constructors';

const test = () => {
    // This should be happening in a data module
    var projectOne = new Project('Project One');
    var projectTwo = new Project('Project Two');

    var taskOne = new Task('Test', 'Just a test task', '05/26/22', 'High');
    var taskTwo = new Task('Test 2', 'Just a test task', '05/26/22', 'High');

    projectOne.tasks.push(taskOne);
    projectTwo.tasks.push(taskTwo);

    if (myProjects.length === 0){
        addItem(myProjects, projectOne);
        addItem(myProjects, projectTwo);
    }

    saveChanges();
}

export default test;