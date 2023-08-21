const addInput = document.querySelector('.add__input');
const addButton = document.querySelector('.add__button');
const container = document.querySelector('.container');
// const template = document.querySelector('.template');
const addForm = document.querySelector('.add');




const template = document.querySelector('.template')
const templateContent = template.content;
const templateItem = templateContent.querySelector('.template__content');

function createToDo(data) {
    const newTask = templateItem.cloneNode(true);
    const nameTask = newTask.querySelector('.template__text');
    nameTask.textContent = data;

    // слушатели
    const deleteButton = newTask.querySelector('.template__button-delete');
    deleteButton.addEventListener('click', () => container.removeChild(newTask));

    const doneButton = newTask.querySelector('.template__button-done');
    doneButton.addEventListener('click', () => nameTask.classList.add('done'));

    return newTask;
}

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = document.querySelector('.add__input').value
    console.log(inputValue);
    const newToDo = createToDo(inputValue);
    container.append(newToDo);
    addForm.reset();
})

// function cloneTemplate() {
//     const templateInput = template.content.cloneNode(true);
//     return templateInput;
// };

// function addTask() {
//     console.log('aaa')
//     const task = cloneTemplate();
//     container.append(task);
//     const taskText = document.querySelector('.template__text');
//     console.log(taskText);
//     taskText.textContent = addInput.value;
// }

// addForm.addEventListener('submit', (e) => {e.preventDefault(); addTask()})

