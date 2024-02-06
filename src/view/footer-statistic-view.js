import AbstractView from '../framework/view/abstract-view.js';

function getFooterStatisticTemplate(allFilmsCount) {
    return `<p>${allFilmsCount} movies inside</p>`
}

export default class FooterStatistic extends AbstractView {
    #allFilmsCount;
    constructor(films){
        super()
        this.#allFilmsCount = films.length;
    }
    get template() {
        return getFooterStatisticTemplate(this.#allFilmsCount);
    }
} 
