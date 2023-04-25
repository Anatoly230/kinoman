import { createElement } from "../render.js";

function getFooterStatisticTemplate() {

    return `<p>130 291 movies inside</p>`
}


export default class FooterStatistic {
    getTemplate() {
        return getFooterStatisticTemplate();
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
