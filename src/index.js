import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";
import './style.css';

function showHomePage() {
    resetContent();
    homePage();
}

function showMenuPage() {
    resetContent();
    menuPage();
}

function showAboutPage() {
    resetContent();
    aboutPage();
}

function resetContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}


const homeButton = document.getElementById('home');
homeButton.addEventListener('click', showHomePage);

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', showMenuPage);

const aboutButton = document.getElementById('about');
aboutButton.addEventListener('click', showAboutPage);


showHomePage();