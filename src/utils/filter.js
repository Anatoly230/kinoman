import { FilType } from "../const";

export const filter = {
    [FilType.ALL]: (films) => [...films],
    [FilType.WATCHLIST]: (films) => films.filter((film) => film.userDetails.watchlist),
    [FilType.HISTORY]: (films) => films.filter((film) => film.userDetails.alreadyWatched),
    [FilType.FAVORITES]: (films) => films.filter((film) => film.userDetails.favorite),
}

