import { createElement } from "../render.js";

function getFooterStatisticTemplate() {

    return `<p>130 291 movies inside</p>`
}

export default class FooterStatistic {
    #element = null;
    get template() {
        return getFooterStatisticTemplate();
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
