



import { createElement } from "../render.js";


function getfilmsListContainerTemplate() {
    return `<div class="films-list__container"></div>`;
}

export default class FilmslistContainerView {
    getTemplate() {
        return getfilmsListContainerTemplate();
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }

        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}