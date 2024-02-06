import { filter } from "../utils/filter"

export function generateFilter(films) {
    return Object.entries(filter).map(([filterName, filterFilms]) => ({
        name: filterName,
        filteredFilms: filterFilms(films).length,
    }))
}

// export function getFilteredItems(films, filterName) {
//     return generateFilter(films)
//         .find((item) => item.name == filterName)
//         .filteredFilms
// }