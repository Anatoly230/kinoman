import AbstractView from '../framework/view/abstract-view.js';

const createListEmptyViewTemplate = () => {
    return `<h2 class="films-list__title">There are no movies in our database</h2>`
}

export default class ListEmptyView extends AbstractView {
    get template() {
        return createListEmptyViewTemplate();
    }
}