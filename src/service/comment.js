import { selectFromArray, humanizeTaskDuedate, getRandomNum } from '../utils.js';
import { comments } from './data/comments.js';
import { authors } from './data/authors.js';
import { emotions } from './data/emotions.js';
const TOTAL_COMMENTS_COUNT = 100;

class CommentGen {
  author = selectFromArray(authors);
  comment = selectFromArray(comments);
  date = humanizeTaskDuedate();
  emotion = selectFromArray(emotions);
  constructor(id) {
    this.id = id;
  }
  getLocal = () => {
    return {
      'comment': this.comment,
      'emotion': this.emotion,
    }
  }
  getId = () => {
    return this.id;
  }

  getElementFromId = (commentId) => {
    if (this.id === commentId) {
      return this;
    }
  }
}

function generateComment() {
  return new CommentGen()
}

function generateComments() {
  return Array.from({ length: TOTAL_COMMENTS_COUNT }, generateComment)
}

class CommentsModel {
  comments = generateComments()
  get = () => this.comments;
}

function getRandomId() {
  return getRandomNum(TOTAL_COMMENTS_COUNT, 1)
}

export { CommentsModel, getRandomId };
