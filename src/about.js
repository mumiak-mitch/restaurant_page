export function aboutPage() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('card-container');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.setAttribute('src', 'img/ornaments.jpg');

    const aboutTitle = document.createElement('div');
    aboutTitle.classList.add('about-title');
    aboutTitle.innerHTML = "ABOUT";

    const aboutText = document.createElement('div');
    aboutText.classList.add('about-text');
    aboutText.innerHTML = "This isn't a real restaurant, am practicing coding. I want to become a software engineer one day";

    container.appendChild(logo);
    container.appendChild(aboutTitle);
    container.appendChild(aboutText);
    content.appendChild(container);
}