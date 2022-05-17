const displayToDo = (title, desc, dueDate, priority, notes, checklist) => {
    let vals = [title, desc, dueDate, priority, notes, checklist];
    vals.forEach((val) => {console.log(val)});
}

export default displayToDo;