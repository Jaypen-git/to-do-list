import { Task, Project } from './Constructors';
import viewProject from './View';

let Test = new Task ('Test', 'Just a test task', '05/26/22', 'High');
let testProject = new Project ('Default');
let testArray = ['Number One'];

// The created task should be added to the test project's tasks list
testProject.tasks.push(Test);
testProject.tasks.forEach(task => viewProject(task.title));