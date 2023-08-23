import './index.css';
import { Task } from '../components/Task';

const addButton = document.querySelector('.add__button');
const container = document.querySelector('.container');
const addForm = document.querySelector('.add');
const input = document.querySelector('.add__input');
let taskText;

function disabledButton() {
    addButton.disabled = true;
    addButton.classList.add('add__button-inactive');
};

function enabledButton() {
    addButton.disabled = false; 
    addButton.classList.remove('add__button-inactive');
};

input.addEventListener('keyup', enableAdd);

function enableAdd() {
    taskText = input.value;
    (taskText === '') ? disabledButton() : enabledButton();
};

addButton.addEventListener('click', (e) => {
    e.preventDefault();

    const newTask = new Task(taskText);
    const newElement = newTask.generateTask();
    container.append(newElement);
    addForm.reset();
    disabledButton();
})