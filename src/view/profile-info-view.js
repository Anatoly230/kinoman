import AbstractView from '../framework/view/abstract-view.js';
import { getUserStatus } from '../utils/users.js';

function getProfileInfoTemplate(userStatus) {
    return `<section class="header__profile profile">
    ${(userStatus !== null) ? `<p class="profile__rating">${userStatus}</p>` : ''}
<img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`
}

export default class HeaderProfileInfo extends AbstractView {
    #userStatus;
    constructor(userStatus) {
        super()
        this.#userStatus = userStatus;
    }
    get template() {
        return getProfileInfoTemplate(this.#userStatus);
    }
} 