import {
    getRandomFloat,
    getTrueOrFalse,
    getRangeNumbers,
    selectFromArray,
    getRandomNum,
    getObjects,
    getRandomDate
} from '../utils.js';
import { titles } from './data/titles.js';
import { countries } from './data/countries.js'
import { descriptions } from './data/descriptions.js'
import { getFilmPath } from './data/images.js';
import { actors } from './data/actors.js';
import { directors } from './data/directors.js';
import { writers } from './data/writers.js';
import { genres } from './data/genres.js';
import Randomizer from './logic/randomizer.js';
import { FILM_COUNT, COMMENTS_RANGE } from '../const.js';

const title = new Randomizer(titles);
const country = new Randomizer(countries);
const description = new Randomizer(descriptions);
const actor = new Randomizer(actors);
const director = new Randomizer(directors);
const writer = new Randomizer(writers);
const genre = new Randomizer(genres);

function getFilmInfo() {
    return {
        'title': title.getElement(),
        'alternativeTitle': title.getElement(),
        'totalRating': getRandomFloat(9, 4, 1),
        'poster': getFilmPath(),
        'ageRating': getRandomNum(18, 0),
        'director': director.getElement(),
        'writers': Array.from({ length: getRandomNum(3, 1) }, writer.getElement),
        'actors': Array.from({ length: getRandomNum(8, 1) }, actor.getElement)
        ,
        'release': {
            'date': getRandomDate(),
            'releaseCountry': country.getElement()
        },
        'runtime': getRandomNum(120, 60),
        'genre': Array.from({ length: getRandomNum(3, 1) }, genre.getElement),
        'description': description.getElement()
    }
}

const generateFilm = () => {

    const film = {
        'id': null,
        'comments': Array.from({ length: getRandomNum(COMMENTS_RANGE, 0) }, getRandomNum),
        'filmInfo': getFilmInfo(),
        'userDetails': {
            'watchlist': getTrueOrFalse(),
            'alreadyWatched': getRandomNum(1, 0),
            'watchingDate': this,
            'favorite': getTrueOrFalse()
        }
    }

    if (film.userDetails.alreadyWatched) {
        film.userDetails.watchingDate = getRandomDate()
    } else {
        film.userDetails.watchingDate = null;
    }

    if (film.userDetails.favorite) {
        film.userDetails.alreadyWatched = 1;
        film.userDetails.watchingDate = getRandomDate()
    }

    return film;
}

function generateFilms() {
    const films = Array.from({ length: FILM_COUNT }, generateFilm);
    films.forEach(function (item, index) {
        console.log(item.userDetails);
        item.id = index + 1;
    })
    return films;
}

export default class FilmsModel {
    #films;
    constructor() {
        this.#films = generateFilms()
    }
    get = () => this.#films;
}
