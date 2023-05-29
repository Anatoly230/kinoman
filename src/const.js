const FILM_COUNT = 50;
const FILM_COUNT_PER_STEP = 5;
const COMMENTS_RANGE = 30;

const FilType = {
    ALL: 'all',
    WATCHLIST: 'watchlist',
    HISTORY: 'history',
    FAVORITES: 'favorites'
}

const UserStatusValue = {
    NOVICE: 10,
    FAN: 20,
    MOVIE_BUF: 21
}

const UserStatusTitle = {
    NOVICE: 'novice',
    FAN: 'fan',
    MOVIE_BUF: 'movie buf'
}
export {
    FILM_COUNT,
    FILM_COUNT_PER_STEP,
    COMMENTS_RANGE,
    UserStatusValue,
    UserStatusTitle,
    FilType 
};