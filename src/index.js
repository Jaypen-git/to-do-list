import { Task, Project } from './Constructors';
import { viewProject, viewProjectList, viewAddButton, viewForm } from './View';

const tasks = document.querySelector('#tasks');
const projects = document.querySelector('#projects');

let Test = new Task ('Test', 'Just a test task', '05/26/22', 'High');
let testProject = new Project ('Default');
let testArray = [{title: 'Number One', key: 1}, {title: 'Number Two', key: 2}];

// The created task should be added to the test project's tasks list
testProject.tasks.push(Test);
testProject.tasks.forEach(task => viewProject(task.title));
testArray.forEach(project => viewProjectList(project.title));
viewAddButton(tasks, 'Task');
viewAddButton(projects, 'Project');
viewForm(tasks);
viewForm(projects);