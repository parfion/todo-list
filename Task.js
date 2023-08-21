class Task {
    constructor(task) {
        this._text = task.text;
    }

    _getTemplate() {
        const templateInput = document
            .querySelector('.template').
            content.
            cloneNode(true);

        return templateInput;
    }

    generateTask() {
        this._element = this._getTemplate();
        this._element.querySelector('.template__text').textContent = this._text;
        this._this._deleteClick = this._element.querySelector('.template__button-done');
        this._templateSelector = this._element.querySelector('.template__button-delete');

        return this._element;
    }
}