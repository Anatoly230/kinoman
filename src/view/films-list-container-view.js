import AbstractView from '../framework/view/abstract-view.js';

function getfilmsListContainerTemplate() {
    return `<div class="films-list__container"></div>`;
}

export default class FilmslistContainerView extends AbstractView {
    get template() {
        return getfilmsListContainerTemplate();
    }
} 
