const projectContainer = document.querySelector('#project');

const viewProject = (title) => {
    // let createTaskTitle = () => {
    //     let h3 = document.createElement('h3');
    //     h3.innerText = title;
    //     return h3;
    // }
    // // create a div for each task
    // let createTaskDiv = () => {
    //     let div = document.createElement('div');
    //     div.appendChild(createTaskTitle());
    //     projectContainer.appendChild(div);
    // }
    // tasklist.forEach(createTaskDiv());
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
    };
    const createDiv = () => {
        let div = document.createElement('div');
        div.appendChild(createH1());
        div.appendChild(createButton('Edit'));
        div.appendChild(createButton('Delete'));
        projectContainer.appendChild(div);
    }
    createDiv();
}

export default viewProject;