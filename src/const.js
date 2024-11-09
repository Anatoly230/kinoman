const FILM_COUNT = 50;
const FILM_COUNT_PER_STEP = 5;
const COMMENTS_RANGE = 30;

const FilterType = {
    ALL: 'all',
    WATCHLIST: 'watchlist',
    HISTORY: 'history',
    FAVORITES: 'favorites'
}

const EMOTIONS = ['smile', 'sleeping', 'puke', 'angry'];

const FILTER_TYPE_ALL_NAME = 'All movies';

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
    EMOTIONS,
    FILM_COUNT_PER_STEP,
    FILTER_TYPE_ALL_NAME,
    COMMENTS_RANGE,
    UserStatusValue,
    UserStatusTitle,
    FilterType
};