import AbstractView from '../framework/view/abstract-view.js';
import { createFilmCardInfoTemplate } from "./film-card-info-template.js";
import { createFilmCardControlsTemplate } from "./film-card-controls-template.js";


const createCardViewTemplate = (filmInfo, commentsLength) => {
  return `
    <article class="film-card">
    ${createFilmCardInfoTemplate(filmInfo, commentsLength)}
    ${createFilmCardControlsTemplate()}
  </article>
  `};


export default class FilmCardView extends AbstractView {
  constructor(film) {
    super()
    this.film = film.filmInfo;
    this.comments = film.comments;
  }
  get template() {
    return createCardViewTemplate(this.film, this.comments.length);
  }

  setOnLinkToFullSize(callback) {
    this._callback.clickOnLinkToFullSize = callback;
    this.element
    .querySelector('.film-card__link').
    addEventListener('click', this.#OnClickLinkToFullSize)
  }

  #OnClickLinkToFullSize = (evt) => {
    evt.preventDefault();
    this._callback.clickOnLinkToFullSize();
  }

}
