import createToDo from "./create-todo";
import displayToDo from "./display-todo";
import createProject from "./create-project";

let testObject = createToDo('Test', 'Test Object', '05/15/22', 'High', 'Just a test object', 'yes');
displayToDo(testObject.title, testObject.desc, testObject.dueDate, testObject.priority, testObject.notes, testObject.checklist);
let testProject = createProject('Default', 'Default Project');
console.log(testProject);