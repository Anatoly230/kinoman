import HeaderProfileInfo from './view/profile-info-view.js';
//здесь должен быть фильтрВью
import FooterStatistic from './view/footer-statistic-view.js';


import FilmsPresenter from './presenter/films-presenter.js';
import FilmsModel from './module/movie.js';
import CommentsModel from './module/comments-model.js';

import { render } from './framework/render.js';

// import { filter } from './utils/filter.js'; разобраться что это



const bodyElement = document.querySelector('body');
const pageHeader = bodyElement.querySelector('.header');
const pageBody = bodyElement.querySelector('.main');
const pageFooter = bodyElement.querySelector('.footer');
const pagefooteStatistics = pageFooter.querySelector('.footer__statistics');


const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel(filmsModel.get());

const filmsPresenter = new FilmsPresenter(pageBody, filmsModel, commentsModel);

render(new HeaderProfileInfo(filmsModel.get()), pageHeader);
//рендерится фильтрВью
render(new FooterStatistic(filmsModel.get()), pagefooteStatistics);

filmsPresenter.init();

console.log('end');