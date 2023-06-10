import CardView from '../view/card-view.js';
// import FilmPresenter from './film-presenter.js';
import SortView from '../view/sort-view.js';
import NavigationView from '../view/navigation-view.js';
import FilmsContainerView from '../view/films-container-view.js';
import FilmslistView from '../view/films-list-view.js';
import FilmslistMostView from '../view/films-list-most-view.js';
import FilmslistTopView from '../view/films-list-top-view.js';
import FilmslistContainerView from '../view/films-list-container-view.js';
import ButtonShowMoreView from '../view/button-show-more-view.js';
import Popup from '../view/popup-view.js';
import { FILM_COUNT_PER_STEP } from '../const.js';
import { render } from '../framework/render.js';
import ListEmptyView from '../view/list-empty-view.js';
import { getUserStatus } from '../utils/users.js';




export default class FilmsListPresenter {

    #filter = new SortView();
    #navigation;
    #filmsContainer = new FilmsContainerView();
    #filmsList = new FilmslistView();
    #filmsListMost = new FilmslistMostView();
    #filmsListTop = new FilmslistTopView();
    #filmsListContainer = new FilmslistContainerView();
    #filmsListContainerMost = new FilmslistContainerView();
    #filmsListContainerTop = new FilmslistContainerView();
    #buttonShowMoreView = new ButtonShowMoreView();
    #listEmptyView = new ListEmptyView();
    #filmDetailsComponent = null;
    #container;
    #filmsModel;
    #commentsModel;
    #moreDetailsButton;
    #films;
    #renderFilmCount = FILM_COUNT_PER_STEP;


    init(container, filmsModel, commentsModel) {
        this.#container = container;
        this.#moreDetailsButton = this.#container.querySelector('.films-list__show-more');
        this.#filmsModel = filmsModel;
        this.#commentsModel = commentsModel;
        this.#films = [...filmsModel.get()];
        this.#navigation = new NavigationView(this.#films);

        render(this.#filmsListContainer, this.#filmsList.element)
        render(this.#navigation, this.#container)
        render(this.#filter, this.#container)
        this.#renderFilmBoard()
    }

    #renderFilmBoard = () => {
        if (this.#films.length <= 0) {
            render(this.#listEmptyView, this.#filmsList.element)
        } else {

            this.#films.slice(0, Math.min(this.#films.length, this.#renderFilmCount)).forEach(film => {
                this.#renderFilm(film, this.#filmsListContainer);
            })

            if (this.#films.length > FILM_COUNT_PER_STEP) {
                render(this.#buttonShowMoreView, this.#filmsList.element)
                this.#buttonShowMoreView.setClickHandler(this.#renderMoreFilms)
            }

            for (let i = 0; i < 2; i++) {
                // console.log(this.#films);
                // this.#renderFilm(this.#films[i], this.#filmsListContainerMost)
                // console.log(this.#films[i].filmInfo);
                // this.#renderFilm(this.#films[i], this.#filmsListContainerTop)
            }

            // render(this.#filmsListContainerTop, this.#filmsListTop.element)
            // render(this.#filmsListContainerMost, this.#filmsListMost.element)
            // render(this.#filmsListMost, this.#filmsContainer.element)
            // render(this.#filmsListTop, this.#filmsContainer.element)
        }
        render(this.#filmsList, this.#filmsContainer.element)
        render(this.#filmsContainer, this.#container)
    }

    #renderMoreFilms = () => {
        this.#films
            .slice(this.#renderFilmCount, Math.min(this.#films.length, this.#renderFilmCount + FILM_COUNT_PER_STEP))
            .forEach(film => {
                this.#renderFilm(film, this.#filmsListContainer)
            })
        this.#renderFilmCount += FILM_COUNT_PER_STEP;
        if (this.#renderFilmCount >= this.#films.length) {
            this.#buttonShowMoreView.element.remove();
        }
    }

    #renderFilmdetails(film) {
        const comments = [...this.#commentsModel.get(film)];
        if (this.#filmDetailsComponent !== null) {
            this.#removeFilmDetailsComponent();
        }
        this.#filmDetailsComponent = new Popup(film, comments);
        this.#filmDetailsComponent.setOnClickCloseBtn(this.#removeFilmDetailsComponent);
        this.#filmDetailsComponent.setOnEscapeDown(this.#removeFilmDetailsComponent);
        render(this.#filmDetailsComponent, this.#container.parentElement)
    }

    #renderFilm(film, container) {
        const filmCardComponent = new CardView(film);
        filmCardComponent.setOnLinkToFullSize(() => this.#renderFilmdetails(film))
        render(filmCardComponent, container.element)
    }

    #removeFilmDetailsComponent = () => {
        console.log(this.#filmDetailsComponent);
        this.#filmDetailsComponent.element.remove();
        this.#filmDetailsComponent.removeElement();
    }

}
