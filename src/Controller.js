import { Task, Project } from './Constructors';
import { viewProjectList, viewProject, viewAddButton, viewForm } from './View';

const projects = document.querySelector('#projects');
let testArray = []; // this is a placeholder for the array we'll store in local storage

const runPage = () => {
    // These shouldn't be declared here. Theoretically these should be in storage and we only need to access the storage
    let Test = new Task ('Test', 'Just a test task', '05/26/22', 'High');
    let Test2 = new Task ('Test 2', 'Just a test task', '05/26/22', 'High');
    let testProject = new Project ('Default');
    let project2 = new Project ('Another');

    // The created task should be added to the test project's tasks list
    testProject.tasks.push(Test);
    project2.tasks.push(Test2)
    
    // store the created project in the storage array
    testArray.push(testProject);
    testArray.push(project2);
    // render each project in the projects list
    for (let i = 0; i < testArray.length; i++){
        viewProjectList(testArray[i].title, i);
    }
    const addButtonEvents = () => {
        let addButtons = Array.from(document.querySelectorAll('.formButton'));
        addButtons.forEach(button => {
            button.addEventListener('click', e => {
                let parentElement = e.target.parentElement;
                if (button.classList.contains('add')){
                    let targetForm = parentElement.querySelector('form');
                    targetForm.style.display = 'block';
                } else if (button.classList.contains('cancel')){
                    parentElement.style.display = 'none';
                }
            })
        })
    }
    // get every project in the storage
    let projectList = Array.from(document.querySelectorAll('.project'));
    // when a project is clicked, show all the tasks in the project
    projectList.forEach(project => {
        // should be able to show the specific project's task
        project.addEventListener('click', (e) => {
            // look for the item whose array index is equal to the DOM element's id
            let clickedItem = testArray[e.target.id];
            // pass the items into the viewProject function
            viewProject(clickedItem);
            addButtonEvents();
        })
    })
    viewAddButton(projects, 'Project');
    viewForm(projects);
    addButtonEvents();
}
// when a project is clicked it should show all it's tasks: DONE

// when the add project button is clicked, a form should appear to add a project: DONE

// when the add task button is clicked, a form should appear to add a task to a project: DONE
export default runPage;