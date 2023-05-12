import { selectFromArray, getRandomDate, getRandomNum } from '../utils.js';
import { comments } from './data/comments.js';
import { lastNames, names, patronymic } from './data/authors.js';
import { emotions } from './data/emotions.js';



export function getComment() {
  return {
    author: `${selectFromArray(lastNames)} ${selectFromArray(names)} ${selectFromArray(patronymic)}`,
    comment: selectFromArray(comments),
    date: getRandomDate(),
    emotion: selectFromArray(emotions),
  }
}


export function getCommentCount(films) {
  console.log(films);
  return films.reduce((count, film) => {
    return count + film.comments.length;
  }, 0)
}

export default function generateComments(films) {
  const commentCount = getCommentCount(films);
  return Array.from({ length: commentCount }, (value, index) => {
    const comment = getComment();
    return {
      id: index + 1,
      ...comment,
    }

  })
}

