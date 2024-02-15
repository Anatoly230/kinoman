import AbstractView from '../framework/view/abstract-view.js';

function createFiltrViewtemplate() {
  return `filter`
}

export default class FilterView extends AbstractView {
  get template() {
    return createFiltrViewtemplate();
  }

} 