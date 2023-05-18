import AbstractView from '../framework/view/abstract-view.js';

function getFooterStatisticTemplate() {
    return `<p>130 291 movies inside</p>`
}

export default class FooterStatistic extends AbstractView {
    get template() {
        return getFooterStatisticTemplate();
    }
} 
