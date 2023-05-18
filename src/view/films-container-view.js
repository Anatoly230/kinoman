import AbstractView from '../framework/view/abstract-view.js';

function getfilmsContainerTemplate() {
    return `<section class="films"></section>`;
}

export default class FilmsContainerView extends AbstractView {

    get template() {
        return getfilmsContainerTemplate();
    }
}

