import createToDo from "./create-todo";
import displayToDo from "./display-todo";
import createProject from "./create-project";
// create an array for each project created
const projects = [];

let testObject = createToDo('Test', 'Test Task', '05/15/22', 'High', 'Just a test object', 'yes');

displayToDo(
    testObject.title,
    testObject.desc,
    testObject.dueDate,
    testObject.priority,
    testObject.notes,
    testObject.checklist
);

let testProject = createProject('Default', 'Default Project');
// add the test project to the projects array
projects.push(testProject);
testProject.tasks.push(testObject);
console.log(projects);