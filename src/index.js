import Task from './task';
import Project from './project';

let Test = new Task ('Test', 'Just a test task', '05/26/22', 'High');
let testProject = new Project ('Default');

// The created task should be added to the test project's tasks list
Test.addTask(testProject.tasks);
console.log(testProject.tasks);

if (localStorage.getItem('myProjects') === null) {
    console.log("This doesn't exist");
}