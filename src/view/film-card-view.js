import AbstractView from '../framework/view/abstract-view.js';
import {filmCardInfoTemplate} from './film-card-info-template.js'
import {filmCardControlsTemplate} from './film-card-controls-template.js'


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
    ${filmCardInfoTemplate(filmInfo, commentsLength)} 
    ${filmCardControlsTemplate()} 
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
    this.element.querySelector(linkToFullSize).addEventListener('click', this.#OnClickLinkToFullSize)
  }

  #OnClickLinkToFullSize = (evt) => {
    evt.preventDefault();
    this._callback.clickOnLinkToFullSize();
  }

}
