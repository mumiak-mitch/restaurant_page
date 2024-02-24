export function homePage() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('card-container');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.setAttribute('img', 'img/ornaments.jpg');

    const homeText = document.createElement('div');
    let text = "Welcome to our restaurant, we are happy to be of service to you today. Enjoy."
    homeText.classList.add('home-text');
    homeText.innerHTML = text;

    container.appendChild(logo);
    container.appendChild(homeText);
    content.appendChild(container);
}