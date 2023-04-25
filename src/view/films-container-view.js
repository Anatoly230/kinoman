import { createElement } from "../render.js";


function getfilmsContainerTemplate() {
    return `<section class="films"></section>`;
}

export default class FilmsContainerView {
    getTemplate() {
        return getfilmsContainerTemplate();
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
