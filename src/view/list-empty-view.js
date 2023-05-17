import { createElement } from "../render.js";

const createListEmptyViewTemplate = () => {
    return `<h2 class="films-list__title">There are no movies in our database</h2>`
}

export default class ListEmptyView {
    #element = null;

    get template() {
        return createListEmptyViewTemplate();
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