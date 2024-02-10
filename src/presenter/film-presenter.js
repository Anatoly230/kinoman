import { render } from "../framework/render.js";
import Popup from "../view/popup-view.js";
import FilmCardView from "../view/film-card-view.js";


console.log('start');

export default class FilmPresenter {
    #filmsList = null;
    #film = null;
    #comment = null;
    #filmCard = null;
    constructor(filmsList) {
        this.#filmsList = filmsList.element;
    }
    init = (film, comments) => {
        this.#film = film;
        this.#comment = comments;
        this.#filmCard = new FilmCardView(this.#film);
    }

    renderCard() {
        this.#genFilmDetails()
        render(this.#filmCard, this.#filmsList)
    }
    #genFilmDetails(){
     console.log('#genFilmDetails');   
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