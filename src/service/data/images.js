import { selectFromArray } from "../../utils";
const images = [
    'made-for-each-other.png',
    'popeye-meets-sinbad.png',
    'sagebrush-trail.jpg',
    'santa-claus-conquers-the-martians.jpg',
    'the-dance-of-life.jpg',
    'the-great-flamarion.jpg',
    'the-man-with-the-golden-arm.jpg'
];

const postersPath = './images/posters/';

function getFilmPath() {
    return `${postersPath}${selectFromArray(images)}`
}

export { getFilmPath };

