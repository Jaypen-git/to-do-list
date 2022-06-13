// I think rendering the DOM elements should probably happen here?

const tasks = document.querySelector('#tasks');
const projects = document.querySelector('#projects');

const viewTasks = (title, num) => {
    const createButton = (title) => {
        let button = document.createElement('button');
        button.innerText = title;
        button.classList.add(title);
        return button;
    }
    const createButtonContainer = () => {
        let div = document.createElement('div');
        div.appendChild(createButton('Edit'));
        div.appendChild(createButton('Delete'));
        return div
    }
    const createH1 = () => {
        let h1 = document.createElement('h1');
        h1.innerText = title;
        return h1;
    }
    const createDiv = (() => {
        // need to assign a numerical id to reference object in array
        let div = document.createElement('div');
        div.classList.add('task');
        div.setAttribute('id', num)
        div.appendChild(createH1());
        div.appendChild(createButtonContainer());
        tasks.appendChild(div);
    })();
}

const removeChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const viewProject = (project) => {
    let i = 0;
    removeChildNodes(tasks);
    project.tasks.forEach(task => {
        i++;
        viewTasks(task.title, i);
    });
    viewAddButton(tasks, 'Task');
    viewForm(tasks);
}

const viewProjectList = (title, num) => {
    // need to assign a numerical id to reference object in array
    let a = document.createElement('a');
    a.innerText = title;
    a.setAttribute('id', num);
    a.classList.add('project');
    a.setAttribute('href', '#');
    projects.appendChild(a);
}

const viewForm = (parent) => {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let submit = document.createElement('input');
    let button = document.createElement('button');
    input.setAttribute('type', 'text');
    submit.setAttribute('type', 'submit');
    button.innerText = 'Cancel';
    button.classList.add('formButton');
    button.classList.add('cancel');
    form.appendChild(input);
    form.appendChild(submit);
    form.appendChild(button);
    form.style.display = 'none';
    parent.appendChild(form);
}

const viewAddButton = (parent, item) => {
    let button = document.createElement('button');
    button.innerText = `Add ${item}`;
    button.classList.add('formButton');
    button.classList.add('add');
    parent.appendChild(button);
}

export { viewTasks, viewProject, viewProjectList, viewForm, viewAddButton, removeChildNodes };