import { render } from './render.js';
import FilmsPresenter from './presenter/films-presenter.js';
import HeaderProfileInfo from './view/profile-info-view.js';
import FooterStatistic from './view/footer-statistic-view.js';
import FilmsModel from './service/movie.js';
import { CommentsModel } from './service/comment.js';


const bodyElement = document.querySelector('body');
const pageHeader = bodyElement.querySelector('.header');
const pageBody = bodyElement.querySelector('.main');
const pageFooter = bodyElement.querySelector('.footer');
const footeStatistics = pageFooter.querySelector('.footer__statistics');

const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel;
const filmsPresenter = new FilmsPresenter();

render(new HeaderProfileInfo(), pageHeader);
render(new FooterStatistic(), footeStatistics);
filmsPresenter.init(pageBody, filmsModel, commentsModel)


