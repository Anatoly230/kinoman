import AbstractView from '../framework/view/abstract-view.js';
import { filmCardInfoTemplate } from './film-card-info-template.js'
import { filmCardControlsTemplate } from './film-card-controls-template.js'


const linkToFullSize = '.film-card__link';

const createCardViewTemplate = ({filmInfo, comments}) => {

  return `
    <article class="film-card">
    ${filmCardInfoTemplate(filmInfo, comments.length)} 
    ${filmCardControlsTemplate()} 
  </article>
  `};


export default class FilmCardView extends AbstractView {
  constructor(film) {
    super()
    this.film = film
    console.log('cardview ok');
  }
  get template() {
    return createCardViewTemplate(this.film);
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
