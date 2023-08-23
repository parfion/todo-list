const addButton = document.querySelector('.add__button');
const container = document.querySelector('.container');
const addForm = document.querySelector('.add');
let taskText;

function disabledButton() {
    addButton.disabled = true;
    addButton.classList.add('add__button-inactive');
};

function enabledButton() {
    addButton.disabled = false; 
    addButton.classList.remove('add__button-inactive');
}

function enableAdd() {
    taskText = document.querySelector('.add__input').value;
    (taskText === '') ? disabledButton() : enabledButton();
}

addButton.addEventListener('click', (e) => {
    e.preventDefault();

    taskText = document.querySelector('.add__input').value;
    const newTask = new Task(taskText);
    const newElement = newTask.generateTask();
    container.append(newElement);
    addForm.reset();
    disabledButton();
})