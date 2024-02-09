import { render } from './render.js';

// в презентер
import FilmCardView from "./view/film-card-view.js";
import FilmslistView from "./view/films-list-view.js";
import FilmslistContainerView from "./view/films-list-container-view.js";

// в презентер

import FilmsContainerView from "./view/films-container-view.js";

// import FilmsListPresenter from './presenter/films-list-presenter.js';
import HeaderProfileInfo from './view/profile-info-view.js';
import FooterStatistic from './view/footer-statistic-view.js';
import FilmsModel from './module/movie.js';
import CommentsModel from './module/comments-model.js';
import { filter } from './utils/filter.js';



const bodyElement = document.querySelector('body');
const pageHeader = bodyElement.querySelector('.header');
const pageBody = bodyElement.querySelector('.main');
const pageFooter = bodyElement.querySelector('.footer');
const footeStatistics = pageFooter.querySelector('.footer__statistics');


const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel(filmsModel.get());

// удаляется - это для теста
const testfilm = filmsModel.get()[0];
const testComments = commentsModel.get(testfilm)

// выведется в презентер
const filmsContainer = new FilmsContainerView();
const filmsList = new FilmslistView();
const filmslistContainer = new FilmslistContainerView();
const filmcard = new FilmCardView(testfilm)
filmcard.setOnLinkToFullSize(clickTest)

function clickTest() {
    console.log('its pressd');
}

console.log('ok');

render(new HeaderProfileInfo(filmsModel.get()), pageHeader);
render(new FooterStatistic(filmsModel.get()), footeStatistics);

// Тестовое

render(filmsList, filmsContainer.element);
render(filmslistContainer, filmsList.element);

for(let i = 0; i < 10; i++){

    console.log(new FilmCardView(filmsModel.get()[i]).element);
    render(new FilmCardView(filmsModel.get()[i]), filmslistContainer.element);
}
render(filmsContainer, pageBody);


function addFilmToBoard() {

}