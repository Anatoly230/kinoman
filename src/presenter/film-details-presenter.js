import FilmDetailsView from '../view/film-details-view.js';
import { render, replace, remove } from '../framework/render.js'

export default class FilmDetailsPresenter {
    #container = null;

    #changeData = null;
    #closeBtnClickHandler = null;
    #escKeyDownHandler = null;

    #filmDetailsComponent = null;
    #film = null;
    #comments = null;

    constructor(container, changeData, closeBtnClickHandler, escKeyDownHandler) {
        this.#container = container;
        this.#changeData = changeData;
        this.#closeBtnClickHandler = closeBtnClickHandler;
        this.#escKeyDownHandler = escKeyDownHandler;
    }
    init = (film, comments) => {
        this.#film = film;
        this.#comments = comments;

        const prevFilmDetailsComponent = this.#filmDetailsComponent;

        this.#filmDetailsComponent.setCloseBtnClickHandler(() => {
            this.#closeBtnClickHandler();
            document.removeEventListener('keydown', this.#escKeyDownHandler)
        })

        //назначение компоненту обработчиков для других кнопок карточки

        if (prevFilmDetailsComponent === null) {
            render(this.#filmDetailsComponent, this.#container)
            return;
        }

        replace(this.#filmDetailsComponent, prevFilmDetailsComponent);

        remove(prevFilmDetailsComponent);
    }

    destroy = () => {
        remove(this.#filmDetailsComponent)
    }
}