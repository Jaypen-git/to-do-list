import  { myProjects } from './Storage';

let projectsDiv = document.querySelector('#projects');
let tasksDiv = document.querySelector('#tasks')

const createDiv = (elementClass) =>{
    let div = document.createElement('div');
    div.classList.add(elementClass);
    return div;
}

const createAnchor = (title) => {
    let a = document.createElement('a');
    a.innerText = title;
    return a;
}

const renderForm = (subject) => {
    let div = document.createElement('div');
    const createTextInput = (id) => {
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', id);
        div.appendChild(input);
    }
    const createDateInput = () => {
        let input = document.createElement('input');
        input.setAttribute('type', 'date');
        input.setAttribute('id', 'due');
        div.appendChild(input);
    }
    const createSelect = () => {
        let select = document.createElement('select');
        select.setAttribute('id', 'priority')
        let priorityValues = ['High', 'Medium', 'Low'];
        priorityValues.forEach(value => {
            let option = document.createElement('option');
            option.innerText(value);
            select.appendChild(value);
        });
        div.appendChild(select);
    }
    const createSubmitButton = () => {
        let button = document.createElement('button');
        button.innerText = 'Submit';
        button.setAttribute('id', 'submit');
        div.appendChild(button);
    }
    if (subject = 'project'){
        createTextInput('title');
        createSubmitButton();
    } else {
        createTextInput('title');
        createTextInput('desc');
        createDateInput();
        createSelect();
        createSubmitButton();
    }
    return div;
}

const renderList = (list, parent) => {
    if (parent === projectsDiv){
        if (list.length !== 0){
            list.forEach(item => {
                let div = createDiv('project');
                let a = createAnchor(item.title);
                div.appendChild(a);
                parent.appendChild(div);
            });
            parent.appendChild(createAnchor('Add Project'));
            parent.appendChild(renderForm('project'));
        } else {
            parent.appendChild(createAnchor('Add Project'));
            parent.appendChild(renderForm('project'));
        }
    } else {
        if (list.length !== 0){
            list.forEach(item => {
                let div = createDiv('task');
                let a = createAnchor(item.title);
                div.appendChild(a);
                parent.appendChild(div);
            });
            parent.appendChild(createAnchor('Add Task'));
            parent.appendChild(renderForm('task'));
        } else {
            parent.appendChild(createAnchor('Add Task'));
            parent.appendChild(renderForm('task'));
        }
    }
}

renderList(myProjects, projectsDiv);
renderList(myProjects[0].tasks, tasksDiv);

export default renderList;