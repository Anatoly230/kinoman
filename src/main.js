import CardView from './view/card-view.js';
import SortView from './view/sort-view.js';
import NavigationView from './view/navigation-view.js';
import HeaderProfileInfo from './/view/profile-info-view.js';
import { render } from './render.js';


const bodyElement = document.querySelector('body');
const pageHeader = bodyElement.querySelector('.header');
const pageBody = bodyElement.querySelector('.main');
const pageFooter = bodyElement.querySelector('.footer');


const newCard = new CardView();
const filter = new SortView();
const navigation = new NavigationView();
const profileInfoView = new HeaderProfileInfo();


render(profileInfoView, pageHeader)
render(navigation, pageBody)

// render(newCard, mainContent)
render(filter, pageBody)