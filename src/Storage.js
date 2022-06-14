// Create a list of projects to save to local storage or grab an existing list of projects from local storage
let myProjects = JSON.parse(localStorage.getItem('myProjects')) || [];
// Add project to storage
const addItem = (list, item) => {
    list.push(item);
}
// Save changes to localStorage
const saveChanges = () => {
    localStorage.setItem('myProjects', JSON.stringify(myProjects))
};

export { myProjects, saveChanges, addItem };