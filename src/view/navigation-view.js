import AbstractView from '../framework/view/abstract-view.js';
import { generateFilter } from '../service/filter.js';

function getNavigationTemplate(self) {
    return `<nav class="main-navigation">
<a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
<a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${self.getFiltered('watchlist')}</span></a>
<a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${self.getFiltered('history')}</span></a>
<a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${self.getFiltered('favorites')}</span></a>

</nav>`}

export default class NavigationView extends AbstractView {
    #filtered;
    constructor(films) {
        super()
        this.#filtered = generateFilter(films);
    }
    getFiltered(filterName) {
        return this.#filtered
            .find((item) => item.name == filterName)
            .filteredFilms
    }
    get template() {
        return getNavigationTemplate(this);
    }

}