import AbstractView from '../framework/view/abstract-view.js';

function getfilmsListTemplate() {
    return `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    </section>`;
}
export default class FilmslistView extends AbstractView {
    get template() {
        return getfilmsListTemplate();
    }
}
