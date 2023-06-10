import { render } from './render.js';
import FilmsListPresenter from './presenter/films-list-presenter.js';
import HeaderProfileInfo from './view/profile-info-view.js';
import FooterStatistic from './view/footer-statistic-view.js';
import FilmsModel from './service/movie.js';
import CommentsModel from './service/comments-model.js';
import { filter } from './utils/filter.js';




const bodyElement = document.querySelector('body');
const pageHeader = bodyElement.querySelector('.header');
const pageBody = bodyElement.querySelector('.main');
const pageFooter = bodyElement.querySelector('.footer');
const footeStatistics = pageFooter.querySelector('.footer__statistics');

const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel(filmsModel.get());

const filmsListPresenter = new FilmsListPresenter();

render(new HeaderProfileInfo(filmsModel.get()), pageHeader);
render(new FooterStatistic(filmsModel.get()), footeStatistics);
filmsListPresenter.init(pageBody, filmsModel, commentsModel)


