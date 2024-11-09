import AbstractView from '../framework/view/abstract-view.js';


function getButtonTemplate() {
    return `<button class="films-list__show-more">Show more</button>`;
}

export default class FilmButtonMoreView extends AbstractView {
    get template() {
        return getButtonTemplate();
    }
    setButtonClickHandler(callback) {
        this._callback.click = callback;
        this.element.addEventListener('click', this.#buttonClickHandler)
    }
    #buttonClickHandler = (evt) => {
        evt.preventDefault();
        this._callback.click()
    }
} 
    