import SortView from "../view/sort-view.js";
import FilmsView from "../view/films-container-view.js";
import FilmslistView from "../view/films-list-view.js";
import FilmListEmptyView from "../view/list-empty-view.js";
import FilmslistContainerView from "../view/films-list-container-view.js";
import FilmButtonMoreView from "../view/button-more-view.js";

import FilmPresenter from "./film-presenter.js";
import FilmDetailsPresenter from "./film-details-presenter.js";

import { render } from "../framework/render.js";
import { updateItem } from "../utils/common.js";
import { FILM_COUNT_PER_STEP } from "../const.js";


export default class FilmsPresenter {
    #sortComponent = new SortView();
    #filmsComponent = new FilmsView();
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

    #renderedFilmsCount = FILM_COUNT_PER_STEP;

    constructor(container, filmsModel, commentsModel) {
        this.#container = container;
        this.#filmsModel = filmsModel;
        this.#commentsModel = commentsModel;
    }

    init = () => {
        this.#films = [...this.#filmsModel.get()]
        this.#renderFilmBoard();
    };

    #filmChangeHandler = (updatedFilm) => {
        this.#films = updateItem(this.#films, updatedFilm);
        this.#filmPresenter.get(updatedFilm.id).init(updatedFilm);
        if (this.#filmDetailsPresenter && this.#selectedFilm.id === updatedFilm.id) {
            this.#selectedFilm = updatedFilm;
            this.#renderFilmDetails();
        }
    };
    #renderFilmButtonMore(container) {
        render(this.#filmMoreButtonComponent, container);
        this.#filmMoreButtonComponent.setButtonClickHandler(() =>
            this.#filmButtonMoreClickHandler()
        );
    }

    #renderSort(container) {
        render(this.#sortComponent, container)
    }

    #renderFilmListContainer(container) {
        render(this.#filmsComponent, container);
        render(this.#filmListComponent, this.#filmsComponent.element);
        render(this.#filmListContainerComponent, this.#filmListComponent.element);
    }

    #renderFilmList() {
        this.#renderFilms(
            0,
            Math.min(this.#films.length, FILM_COUNT_PER_STEP),
            this.#filmListContainerComponent
        );

        if (this.#films.length > FILM_COUNT_PER_STEP) {
            this.#renderFilmButtonMore(this.#filmListComponent.element);
        }
    }


    #renderFilms(from, to, container) {
        this.#films
            .slice(from, to)
            .forEach((film) =>
                this.#renderFilm(film, container))
    };

    #renderFilm(film, container) {
        const filmPresenter = new FilmPresenter(
            container,
            this.#filmChangeHandler,
            this.#addfilmDetailsComponent,
            this.#escKeyDown
        );
        filmPresenter.init(film);
        this.#filmPresenter.set(film.id, filmPresenter)
    }

    #renderFilmDetails() {
        const comments = [...this.#commentsModel.get(this.#selectedFilm)];
        if (!this.#filmDetailsPresenter) {
            this.#filmDetailsPresenter = new FilmDetailsPresenter(
                this.#container.parentNode,
                this.#filmChangeHandler,
                this.#removeFilmDetailsComponent,
                this.#escKeyDown
            )
        }
        this.#filmDetailsPresenter.init(this.#selectedFilm, comments)
    }

    #renderFilmBoard = () => {
        if (this.#films.length === 0) {
            render(new FilmListEmptyView(), this.#container);
            return;
        }
        this.#renderSort(this.#container);
        this.#renderFilmListContainer(this.#container);
        this.#renderFilmList();
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

    #removeFilmDetailsComponent = () => {
        this.#filmDetailsPresenter.destroy()
        this.#filmDetailsPresenter = null;
        this.#selectedFilm = null;
        document.body.classList.remove('hide-overflow')
    }


    #escKeyDown = (evt) => {
        if (evt.key === 'Escape' || evt.key === 'esc') { }
        evt.preventDefault();
        this.#removeFilmDetailsComponent()
        document.removeEventListener('keydown', this.#escKeyDown)
    }

    #filmButtonMoreClickHandler() {
        this.#renderFilms(
            this.#renderedFilmsCount,
            this.#renderedFilmsCount + FILM_COUNT_PER_STEP,
            this.#filmListContainerComponent
        );
        this.#renderedFilmsCount += FILM_COUNT_PER_STEP;
        if (this.#renderedFilmsCount >= this.#films.length) {
            this.#filmMoreButtonComponent.element.remove();
            this.#filmMoreButtonComponent.removeElement();
        }
    }
}

