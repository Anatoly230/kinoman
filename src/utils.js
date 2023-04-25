
import { createElement } from './render.js';

export class ItemСreater {

    getTemplate() {
        return getModuletemplate()
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