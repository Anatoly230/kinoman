
import { createElement } from 'render.js';

export default class ItemСreater {
    constructor(template) {
    }
    getTemplate() {
        return template()
    }
    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }
    removeElevent() {
        this.element = null;
    }
}