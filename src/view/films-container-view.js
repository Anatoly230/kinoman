import { createElement } from "../render.js";


function getfilmsContainerTemplate() {
    return `<section class="films"></section>`;
}

export default class FilmsContainerView {
    #element=null;
    get template() {
        return getfilmsContainerTemplate();
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

