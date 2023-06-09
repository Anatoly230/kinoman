// import { createElement } from "../render.js";
import AbstractView from '../framework/view/abstract-view.js';


function getButtonTemplate() {
    return `<button class="films-list__show-more">Show more</button>`;
}

export default class ButtonShowMoreView extends AbstractView {
    get template() {
        return getButtonTemplate();
    }
    setClickHandler(callback) {
        this._callback.click = callback;
        this.element.addEventListener('click', this.#clickHandler)
    }
    #clickHandler = (evt) => {
        evt.preventDefault();
        this._callback.click()
    }
} 
