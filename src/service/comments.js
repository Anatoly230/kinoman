import { selectFromArray, getRandomDate, getRandomNum, detachFromArray } from '../utils.js';
import { comments } from './data/comments.js';
import { lastNames, names, patronymic } from './data/authors.js';
import { emotions } from './data/emotions.js';



function getComment() {
  return {
    author: `${selectFromArray(names)} ${selectFromArray(lastNames)}`,
    comment: selectFromArray(comments),
    date: getRandomDate(),
    emotion: selectFromArray(emotions),
  }
}


function getCommentCount(films) {
  return films.reduce((count, film) => {
    return count + film.comments.length;
  }, 0)
}
function getBoundariesOfComments(films) {
  let result = new Set(films.map((film) => {
    return film.comments;
  }).flat(Infinity))
  return Array.from(result);
}

export default function generateComments(films) {
  const commentCount = getCommentCount(films);
  let ids = getBoundariesOfComments(films);
  return Array.from({ length: commentCount }, (_value, index) => {
    const comment = getComment();
    return {
      id: detachFromArray(ids),
      ...comment,
    }

  })
}
// export default function generateComments(films) {
//   const commentCount = getCommentCount(films);
//   return Array.from({ length: commentCount }, (_value, index) => {
//     const comment = getComment();
//     return {
//       id: index + 1,
//       ...comment,
//     }

//   })
// }

