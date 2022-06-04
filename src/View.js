const tasks = document.querySelector('#tasks');
const projects = document.querySelector('#projects');

const viewTasks = (title) => {
    const createButton = (title) => {
        let button = document.createElement('button');
        button.innerText = title;
        button.classList.add(title);
        return button;
    }

    const createH1 = () => {
        let h1 = document.createElement('h1');
        h1.innerText = title;
        return h1;
    }
    const createDiv = (() => {
        let div = document.createElement('div');
        div.appendChild(createH1());
        div.appendChild(createButton('Edit'));
        div.appendChild(createButton('Delete'));
        tasks.appendChild(div);
    })();
}

const viewProjects = (title) => {
    let a = document.createElement('a');
    a.innerText = title;
    a.setAttribute('href', '#');
    projects.appendChild(a);
}

const viewForm = (parent) => {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let submit = document.createElement('input');
    input.setAttribute('type', 'text');
    submit.setAttribute('type', 'submit');
    form.appendChild(input);
    form.appendChild(submit);
    parent.appendChild(form);
}

const viewAddButton = (parent, item) => {
    let button = document.createElement('button');
    button.innerText = `Add ${item}`;
    parent.appendChild(button);
}

export { viewTasks, viewProjects, viewForm, viewAddButton };