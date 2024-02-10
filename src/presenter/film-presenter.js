import { render } from "../framework/render.js";
import Popup from "../view/popup-view.js";
import FilmCardView from "../view/film-card-view.js";


console.log('start');

export default class FilmPresenter {
    #filmsList = null;
    #film = null;
    #comment = null;
    #filmCard = null;
    #filmDetals = null;

    #pageBody = document.querySelector('body')
    constructor(filmsList) {
        this.#filmsList = filmsList.element;
    }
    init = (film, comments) => {
        this.#film = film;
        this.#comment = comments;
        this.#filmCard = new FilmCardView(this.#film);
        this.#genFilmDetails();
        this.#filmCard.setOnLinkToFullSize(this.#renderFilmDetails)
    }

    renderCard = () => {
        this.#genFilmDetails()
        render(this.#filmCard, this.#filmsList)
    }
    #genFilmDetails = () => {
        if (this.#filmDetals) {
            console.log('popup');
            return;
        }
        console.log('no popup');
        this.#filmDetals = new Popup(this.#film, this.#comment);
    }
    #renderFilmDetails = () => {
        this.#genFilmDetails();
        render(this.#filmDetals, this.#pageBody)
    }
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
//     const filmDetails = new Popup(film, comments)
//     render(filmDetails, pageBody)
// }

// const onclickToPoster = () => {
//     console.log('presed to poster');
// }
// renderFilms()