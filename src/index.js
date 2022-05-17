import createToDo from "./to-do/create-todo";
import displayToDo from "./to-do/display-todo";

let testObject = createToDo('Test', 'Test Object', '05/15/22', 'High', 'Just a test object', 'yes');
displayToDo(testObject.title, testObject.desc, testObject.dueDate, testObject.priority, testObject.notes, testObject.checklist);