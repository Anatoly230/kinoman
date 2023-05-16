import generateComments from "./comments";

export default class CommentsModel {
    #comments = [];
    #filmsModel = null;
    #allComments = [];

    constructor(films) {
        this.#filmsModel = films;
        this.#generateAllComments();
    }

    #generateAllComments() {
        this.#allComments = generateComments(this.#filmsModel);
        console.log(this.#allComments);
    }
    get = (film) => {

        this.#comments = film.comments.map((commentId) => {

            return this.#allComments.find((comment) => {
                return commentId === comment.id;
            })
        })
        return this.#comments;
    }
    all = () => {
        return this.#allComments;
    }
}
