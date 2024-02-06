import AbstractView from '../framework/view/abstract-view.js';
import { humanizeTaskDuedate, getMaxStringLength } from '../utils.js';


function getCommentTemplate(commentData) {
  return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${commentData.emotion}.png" width="55" height="55" alt="emoji-${commentData.emotion}">
    </span>
    <div>
      <p class="film-details__comment-text">${commentData.comment}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${commentData.author}</span>
        <span class="film-details__comment-day">${humanizeTaskDuedate(commentData.date)}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`;
}

export default class CommentView extends AbstractView {
  #commentData;
   constructor(commentData) {
    super();
    this.#commentData = commentData;
  }
  get template() {
    return getCommentTemplate(this.#commentData);
  }

}