import HeaderProfileInfo from './view/profile-info-view.js';
import FilterView from './view/filter-view.js'
import FooterStatisticView from './view/footer-statistic-view.js';


import FilmsPresenter from './presenter/films-presenter.js';
import FilmsModel from './module/movie.js';
import CommentsModel from './module/comments-model.js';

import { render } from './framework/render.js';
import { getUserStatus } from './utils/users.js'
import { generateFilter } from './mock/filter.js'

const bodyElement = document.querySelector('body');
const siteHeaderElement = bodyElement.querySelector('.header');
const siteMainElement = bodyElement.querySelector('.main');
const siteFooterElement = bodyElement.querySelector('.footer');
const siteFooteStatisticsElement = siteFooterElement.querySelector('.footer__statistics');


const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel(filmsModel.get());

const filmsPresenter = new FilmsPresenter(siteMainElement, filmsModel, commentsModel);

const userStatus = getUserStatus(filmsModel.get());
const filters = generateFilter(filmsModel.get());
const filmCount = filmsModel.get().length;

render(new HeaderProfileInfo(userStatus), siteHeaderElement);
render(new FilterView(filters), siteMainElement)
render(new FooterStatisticView(filmCount), siteFooteStatisticsElement);

filmsPresenter.init();

console.log('markDown great markUp languege');