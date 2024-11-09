import AbstractView from '../framework/view/abstract-view.js';

function getFooterStatisticTemplate(allFilmsCount) {
    return `<p>${allFilmsCount} movies inside</p>`
}

export default class FooterStatisticView extends AbstractView {
    #allFilmsCount;
    constructor(films){
        super()
        this.#allFilmsCount = films.length;
    }
    get template() {
        return getFooterStatisticTemplate(this.#allFilmsCount);
    }
} 
