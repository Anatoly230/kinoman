import SortView from "../view/sort-view.js";
import FilmsContainerView from "../view/films-container-view.js";
import FilmslistView from "../view/films-list-view.js";
import FilmListEmptyView from "../view/list-empty-view.js";
import FilmslistContainerView from "../view/films-list-container-view.js";
import FilmButtonMoreView from "../view/button-more-view.js";

import FilmPresenter from "./film-presenter.js";
import FilmDetailsPresenter from "./film-details-presenter.js";

import { render } from "../framework/render.js";
//здесь должна быть функция обмена данными
import { FILM_COUNT_PER_STEP } from "../const.js";


export default class FilmsPresenter {
    #sortComponent = null;
    #filmsComponent = new FilmsContainerView();
    #filmListComponent = new FilmslistView();
    #filmListContainerComponent = new FilmslistContainerView();
    #filmMoreButtonComponent = new FilmButtonMoreView();
    #container = null;
    #filmsModel = null;
    #commentsModel = null;

    #films = [];

    #selectedFilm = null;

    #filmPresenter = new Map();
    #filmDetailsPresenter = null;
    #renderFilmsCount = FILM_COUNT_PER_STEP;

    constructor(container, filmsModel, commentsModel) {
        this.#container = container;
        this.#filmsModel = filmsModel;
        this.#commentsModel = commentsModel;
    }

    init = () => {
        this.#films = [...this.#filmsModel.get()]
        this.#renderFilmBoard()
    }

    #renderFilmListContainer(container) {
        render(this.#filmsComponent, container);
        render(this.#filmListComponent, this.#filmsComponent.element);
        render(this.#filmListContainerComponent, this.#filmListComponent.element);
    }

    #renderFilmList() {
        this.#renderFilmsCount(
            0,
            Math.min(this.#films.length, FILM_COUNT_PER_STEP),
            this.#filmListContainerComponent
        );
        if (this.#films.length > FILM_COUNT_PER_STEP) {
            // this.#renderFilmButtonMore(this.#filmListComponent.element)
        }
    }
    #renderFilm(film, container) {
        const filmPresenter = new FilmPresenter(
            container,
            this.#filmChangeHandler,
            this.#addfilmDetailsComponent,
            this.#escKeyDownHandler
        );
        filmPresenter.init(film);
        this.filmPresenter.set(film.id, filmPresenter)
    }
    #renderFilmDetails() {
        const comments = [...this.#commentsModel.get(this.#selectedFilm)];
        if (!this.#filmDetailsPresenter) {
            this.#filmDetailsPresenter = new FilmDetailsPresenter(
                this.#container.parentNode,
                this.#filmChangeHandler,
                this.#removeFilmDetailsComponent,
                this.#escKeyDownHandler
            )
        }
        this.#filmDetailsPresenter.init(this.#selectedFilm, comments)
    }

    #escKeyDownHandler = (evt) => {
        if (evt.key === 'Escape' || evt.key === 'esc') { }
        evt.preventDefault();
        this.#removeFilmDetailsComponent()
        document.removeEventListener('keydown', this.#escKeyDownHandler)
    }
    #removeFilmDetailsComponent = () => {
        this.#filmDetailsPresenter.destroy()
        this.#filmDetailsPresenter = null;
        this.#selectedFilm = null;
        document.body.classList.remove('hide-overflow')
    }

    #filmChangeHandler = () => {
        console.log('change film');
    }

    #addfilmDetailsComponent = (film) => {
        if (this.#selectedFilm && this.#selectedFilm.id === film.id) {
            return;
        }
        if (this.#selectedFilm && this.#selectedFilm.id !== film.id) {
            this.#removeFilmDetailsComponent()
        }
        this.#selectedFilm = film;
        this.#renderFilmDetails();
        document.body.classList.add('hide-overflow')
    }

    #renderFilmBoard = () => {
        if(this.#films.length === 0){
            render(new FilmListEmptyView(), this.#container)
        }
        
     }
}