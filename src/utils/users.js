import { UserStatusValue, UserStatusTitle } from "../const";

export function getUserStatus(films) {
    const watchedFilmsCount = films.filter((film) => film.userDetails.alreadyWatched).length;
    if (
        watchedFilmsCount > UserStatusValue.NOVICE &&
        watchedFilmsCount <= UserStatusValue.FAN
    ) {
        return UserStatusTitle.NOVICE
    }

    if (
        watchedFilmsCount > UserStatusValue.FAN &&
        watchedFilmsCount <= UserStatusValue.MOVIE_BUF
    ) {
        return UserStatusTitle.FAN
    }
    if (
        watchedFilmsCount > UserStatusValue.MOVIE_BUF
    ) {
        return UserStatusTitle.MOVIE_BUF
    }
    return null;
}