import { render, replace, remove } from "../framework/render.js";
import FilmDetailsView from "../view/film-details-view.js";
import FilmCardView from "../view/film-card-view.js";

export default class FilmPresenter {
    #filmsList = null;
    #changeData = null;
    #clickCardHandler = null;
    #escKeyDownHandler = null;
    #filmCardCompenent = null;
    #film = null;

    constructor(filmsList, changeData, clickCardHandler, escKeyDowHandler) {
        this.#filmsList = filmsList;
        this.#changeData = changeData;
        this.#clickCardHandler = clickCardHandler;
        this.#escKeyDownHandler = escKeyDowHandler;
    }

    init = (film) => {
        this.#film = film;
        const prevFilmCardComponent = this.#filmCardCompenent;

        this.#filmCardCompenent = new FilmCardView(this.#film);

        this.#filmCardCompenent.setCardClickHandler(() => {
            this.#clickCardHandler(this.#film);
            document.addEventListener('keydown', this.#escKeyDownHandler);
        })
        //назначение компоненту обработчиков для других кнопок карточки
        
        if (prevFilmCardComponent === null) {
            render(this.#filmCardCompenent, this.#filmsList.element)
        }
        replace(this.#filmCardCompenent, prevFilmCardComponent);
        remove(prevFilmCardComponent);
    }
    destroy = () => {
        remove(this.#filmCardCompenent);
    }
    
    //приватные обработчики для других кнопок карточки

}


// const films = [];
// function renderFilms() {
//     let film = null;
//     let comments = null;
//     const filmsMod = [...filmsModel.get()]

//     for (let i = 0; i < filmsMod.length; i++) {
//         film = new FilmCardView(filmsMod[i])
//         film.setOnLinkToFullSize(() => { filmDetailsGenerate(filmsMod[i], commentsModel) })
//         films.push(film)
//         render(film, filmslistContainer.element);
//     }
// }

// const filmcard = new FilmCardView(testfilm)
// filmcard.setOnLinkToFullSize(clickTest)

// const filmDetailsGenerate = (film, comments) => {
//     const filmDetails = new FilmDetails(film, comments)
//     render(filmDetails, pageBody)
// }

// const onclickToPoster = () => {
//     console.log('presed to poster');
// }
// renderFilms()