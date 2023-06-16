import containerContent from './loadPage'
import menuPage from './menu';
import homePage from './home';
import contactPage from './contact';

containerContent()

const main = document.getElementById('main')


const homeButton = document.getElementById('home-btn');
const menuButton = document.getElementById('menu-btn');
const contactButton = document.getElementById('contact-btn');

homeButton.onclick = () => main.innerHTML = homePage().innerHTML;
menuButton.onclick = () => main.innerHTML = menuPage().innerHTML;
contactButton.onclick = () => main.innerHTML = contactPage().innerHTML;


