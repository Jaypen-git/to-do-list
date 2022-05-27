let Storage = (function () {
    // Create a list of projects to save to local storage or grab an existing list of projects from local storage
    let myProjects = JSON.parse(localStorage.getItem('myProjects')) || [];
    // Save changes to localStorage
    const saveChanges = localStorage.setItem('myProjects', JSON.stringify(myProjects));
    // Let user access these functions
    return {
        myProjects,
        saveChanges
    };
})();

export default Storage;