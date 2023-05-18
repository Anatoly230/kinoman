import AbstractView from '../framework/view/abstract-view.js';

function getfilmsListTopTemplate() {
    return `<section class="films-list films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    </section>`;
}

export default class FilmslistMostView  extends AbstractView{
    get template() {
        return getfilmsListTopTemplate();
    }
} 
