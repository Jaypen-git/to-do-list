const projectContainer = document.querySelector('#project');
const projectListContainer = document.querySelector('#projectList');

const viewProject = (title) => {
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
        projectContainer.appendChild(div);
    })();
}

const viewProjectList = (title) => {
    let a = document.createElement('a');
    a.innerText = title;
    a.setAttribute('href', '#');
    projectListContainer.appendChild(a);
}

const viewForm = (parent) => {
    let form = document.createElement('form');
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    form.appendChild(input);
    parent.appendChild(form);
}

const viewAddButton = (parent, item) => {
    let a = document.createElement('a');
    a.innerText = `Add ${item}`;
    parent.appendChild(a);
}

export { viewProject, viewProjectList, viewAddButton };