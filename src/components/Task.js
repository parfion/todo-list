export class Task {
    constructor(task) {
        this._text = task;
    }

    _getTemplate() {
        const templateInput = document
            .querySelector('.template')
            .content
            .querySelector('.template__content')
            .cloneNode(true);

        return templateInput;
    }

    generateTask() {
        this._element = this._getTemplate();
        this._taskText = this._element.querySelector('.template__text');
        this._taskText.textContent = this._text;
        this._doneButton = this._element.querySelector('.template__button-done');
        this._deleteButton = this._element.querySelector('.template__button-delete');

        this._setEventListener();
        return this._element;
    }

    _setEventListener() {
        this._doneButton.addEventListener('click', () => this._handleDoneClick());
        this._deleteButton.addEventListener('click', () => this._handleDeleteClick());
    }

    _handleDoneClick() {
         if (!this._taskText.classList.contains('done')) { 
            this._taskText.classList.add('done') }
         else ( this._taskText.classList.remove('done'));
    }

    _handleDeleteClick() {
        this._element.remove();
    }
}