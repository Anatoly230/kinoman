import CardView from '../view/card-view.js';
import SortView from '../view/sort-view.js';
import NavigationView from '../view/navigation-view.js';
import FilmsContainerView from '../view/films-container-view.js';
import FilmslistView from '../view/films-list-view.js';
import FilmslistContainerView from '../view/films-list-container-view.js';
import ButtonShowMoreView from '../view/button-show-more-view.js';

import { FILM_COUNT } from '../const.js';

import { render } from '../render.js';


export default class FilmsPresenter {

    filter = new SortView();
    navigation = new NavigationView();
    filmsContainer = new FilmsContainerView();
    filmsList = new FilmslistView();
    filmsListContainer = new FilmslistContainerView();
    buttonShowMoreView = new ButtonShowMoreView();


    init(container) {
        this.container = container;

        for (let i = 0; i < FILM_COUNT; i++) {
            render(new CardView(), this.filmsListContainer.getElement())
        }

        render(this.navigation, this.container)
        render(this.filter, this.container)
        render(this.filmsListContainer, this.filmsList.getElement())
        render(this.buttonShowMoreView, this.filmsList.getElement())
        render(this.filmsList, this.filmsContainer.getElement())
        render(this.filmsContainer, this.container)
    }

}
