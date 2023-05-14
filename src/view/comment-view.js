


import { createElement } from "../render.js";


function getCommentTemplate(commentData) {
    return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${commentData.emotion}.png" width="55" height="55" alt="emoji-${commentData.emotion}">
    </span>
    <div>
      <p class="film-details__comment-text">${commentData.comment}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${commentData.author}</span>
        <span class="film-details__comment-day">${commentData.date}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`;
}

export default class CommentView {
    #commentData;
    #element = null;
    constructor(commentData) {
        this.#commentData = commentData;
    }
    get template() {
        return getCommentTemplate(this.#commentData);
    }

    get element() {
        if (!this.#element) {
            this.#element = createElement(this.template);
        }
        return this.#element;
    }

    removeElement() {
        this.#element = null;
    }
}