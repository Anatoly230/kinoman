



import { createElement } from "../render.js";


function getfilmsListContainerTemplate() {
    return `<div class="films-list__container"></div>`;
}

export default class FilmslistContainerView {
    #element = null;
    get template() {
        return getfilmsListContainerTemplate();
    }

    get element() {
        if (!this.#element) {
            this.#element = createElement(this.template);
        }
        return this.#element;
    }

    removeElement() {
        this.#element = null;
    }
} 
