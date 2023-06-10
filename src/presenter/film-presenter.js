import CardView from '../view/card-view.js';
import Popup from '../view/popup-view.js';
import { render } from '../framework/render.js';

export default class FilmPresenter {
    #filmsList = null;
    #film = null;
    #filmComponent = null;
    #commentsModel = null;

    constructor(filmsList) {
        this.#filmsList = filmsList;
    }

    init = (film, comments) => {
        this.#film = film;
        this.#filmComponent = new CardView(this.#film);
        this.#filmComponent.setOnLinkToFullSize(this.#renderFilmdetails(film));
        this.#commentsModel = comments;
        this.#renderFilm();
    }
    #renderFilm() {
        render(this.#commentsModel, this.#filmsList)
    }
    #renderFilmdetails(film) {
        const comments = [...this.#commentsModel];
        if (this.#filmDetailsComponent !== null) {
            this.#removeFilmDetailsComponent();
        }
        this.#filmDetailsComponent = new Popup(film, comments);
        this.#filmDetailsComponent.setOnClickCloseBtn(this.#removeFilmDetailsComponent);
        this.#filmDetailsComponent.setOnEscapeDown(this.#removeFilmDetailsComponent);
        render(this.#filmDetailsComponent, this.#container.parentElement)
    }

    #removeFilmDetailsComponent = () => {
        this.#filmDetailsComponent.element.remove();
        this.#filmDetailsComponent.removeElement();
    }

}