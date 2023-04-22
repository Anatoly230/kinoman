import CardView from './view/card-view.js';
import SortView from './view/sort-view.js';
import { render } from './render.js';

const mainContent = document.querySelector('.main');
const newCard = new CardView();
const filter = new SortView();
console.log(filter);
// render(newCard, mainContent)
render(filter, mainContent)