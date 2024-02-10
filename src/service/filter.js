import { filter } from "../utils/filter"

export function generateFilter(films) {
    return Object.entries(filter).map(([filterName, filterFilms]) => ({
        name: filterName,
        filteredFilms: filterFilms(films).length,
    }))
}
