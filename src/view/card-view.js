import AbstractView from '../framework/view/abstract-view.js';
import { formatStringToYear, formatMinutsToTime, selectFromArray } from "../utils.js";

const linkToFullSize = '.film-card__link';

const createCardViewTemplate = (filmInfo, commentsLength) => {
  const {
    title, totalRating,
    release, runtime,
    genre, poster,
    description
  } = filmInfo;
  return `
    <article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${totalRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${formatStringToYear(release.date)}</span>
        <span class="film-card__duration">${formatMinutsToTime(runtime)}</span>
        <span class="film-card__genre">${selectFromArray(genre)}</span>
      </p>
      <img src="${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <span class="film-card__comments">${commentsLength}</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
      <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
  </article>
  `};


export default class CardView extends AbstractView {
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
    this.element.querySelector(linkToFullSize).addEventListener('click', this.#OnClickLinkToFullSize)
  }

  #OnClickLinkToFullSize = (evt) => {
    evt.preventDefault();
    this._callback.clickOnLinkToFullSize();
  }

}
