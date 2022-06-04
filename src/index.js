import { Task, Project } from './Constructors';
import { viewProject, viewProjectList, viewAddButton } from './View';

const projectContainer = document.querySelector('#project');
const projectListContainer = document.querySelector('#projectList');

let Test = new Task ('Test', 'Just a test task', '05/26/22', 'High');
let testProject = new Project ('Default');
let testArray = [{title: 'Number One', key: 1}, {title: 'Number Two', key: 2}];

// The created task should be added to the test project's tasks list
testProject.tasks.push(Test);
testProject.tasks.forEach(task => viewProject(task.title));
testArray.forEach(project => viewProjectList(project.title));
viewAddButton(projectContainer, 'Task');
viewAddButton(projectListContainer, 'Project');