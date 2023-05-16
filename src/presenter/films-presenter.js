import CardView from '../view/card-view.js';
import SortView from '../view/sort-view.js';
import NavigationView from '../view/navigation-view.js';
import FilmsContainerView from '../view/films-container-view.js';
import FilmslistView from '../view/films-list-view.js';
import FilmslistMostView from '../view/films-list-most-view.js';
import FilmslistTopView from '../view/films-list-top-view.js';
import FilmslistContainerView from '../view/films-list-container-view.js';
import ButtonShowMoreView from '../view/button-show-more-view.js';
import Popup from '../view/popup-view.js';
import CommentView from '../view/comment-view.js';
import { FILM_COUNT_PER_STEP } from '../const.js';
import { render } from '../render.js';


export default class FilmsPresenter {

    #filter = new SortView();
    #navigation = new NavigationView();
    #filmsContainer = new FilmsContainerView();
    #filmsList = new FilmslistView();
    #filmsListMost = new FilmslistMostView();
    #filmsListTop = new FilmslistTopView();
    #filmsListContainer = new FilmslistContainerView();
    #filmsListContainerMost = new FilmslistContainerView();
    #filmsListContainerTop = new FilmslistContainerView();
    #buttonShowMoreView = new ButtonShowMoreView();
    #filmDetailsComponent;
    #container;
    #filmsModel;
    #commentsModel;
    #moreDetailsButton;
    #films;
    #renderFilmCount = FILM_COUNT_PER_STEP;


    init(container, filmsModel, commentsModel) {
        this.#container = container;
        this.#moreDetailsButton = this.#container.querySelector('.films-list__show-more');
        this.#filmsModel = filmsModel;
        this.#commentsModel = commentsModel;
        this.#films = [...filmsModel.get()];

        render(this.#filmsListContainer, this.#filmsList.element)
        render(this.#navigation, this.#container)
        render(this.#filter, this.#container)
        this.#renderFilmBoard()
    }

    #renderFilmBoard = () => {
        if (this.#films.length <= 0) {
            this.#renderEmptyPage()
        } else {

            this.#films.slice(0, Math.min(this.#films.length, this.#renderFilmCount)).forEach(film => {
                this.#renderFilm(film, this.#filmsListContainer);
            })

            if (this.#films.length > FILM_COUNT_PER_STEP) {
                render(this.#buttonShowMoreView, this.#filmsList.element)
                this.#buttonShowMoreView.element.addEventListener('click', this.#renderMoreFilms)
            }

            for (let i = 0; i < 2; i++) {
                // console.log(this.#films);
                // this.#renderFilm(this.#films[i], this.#filmsListContainerMost)
                // console.log(this.#films[i].filmInfo);
                // this.#renderFilm(this.#films[i], this.#filmsListContainerTop)
            }
            render(this.#filmsList, this.#filmsContainer.element)
            render(this.#filmsContainer, this.#container)
            render(this.#filmsListContainerTop, this.#filmsListTop.element)
            render(this.#filmsListContainerMost, this.#filmsListMost.element)
            render(this.#filmsListMost, this.#filmsContainer.element)
            render(this.#filmsListTop, this.#filmsContainer.element)

        }
    }

    #renderEmptyPage = () => {
        console.log('isEmpty');
    }

    #renderMoreFilms = () => {
        this.#films
            .slice(this.#renderFilmCount, Math.min(this.#films.length, this.#renderFilmCount + FILM_COUNT_PER_STEP))
            .forEach(film => {
                this.#renderFilm(film, this.#filmsListContainer)
            })
        this.#renderFilmCount += FILM_COUNT_PER_STEP;
        if (this.#renderFilmCount >= this.#films.length) {
            this.#buttonShowMoreView.element.remove();
        }
    }

    #renderFilmdetails(film) {
        const comments = [...this.#commentsModel.get(film)];
        this.#filmDetailsComponent = new Popup(film, comments);
        const closeButtonFilmDetailsElement = this.#filmDetailsComponent.element.querySelector('.film-details__close-btn');
        const filmDetailScommentsList = this.#filmDetailsComponent.element.querySelector('.film-details__comments-list');
        closeButtonFilmDetailsElement.addEventListener('click', this.#removeFilmDetailsComponent)
        comments.forEach((comment) => {
            render(new CommentView(comment), filmDetailScommentsList)
        })
        render(this.#filmDetailsComponent, this.#container.parentElement)
        document.body.addEventListener('keydown', this.#onEscapeDown)
        document.body.classList.add('hide-overflow');
    }

    #renderFilm(film, container) {
        const filmCardComponent = new CardView(film);
        const linkfilmCardelement = filmCardComponent.element.querySelector('.film-card__link');
        linkfilmCardelement.addEventListener('click', () => {
            this.#renderFilmdetails(film)
        })
        render(filmCardComponent, container.element)
    }

    #onEscapeDown = (e) => {
        if (e.key === 'Escape') {
            e.preventDefault();
            this.#removeFilmDetailsComponent();
        }
    }

    #removeFilmDetailsComponent = () => {
        document.body.classList.remove('hide-overflow');
        document.body.removeEventListener('keydown', this.#onEscapeDown)
        this.#filmDetailsComponent.element.remove();
        this.#filmDetailsComponent = null;
    }



}
