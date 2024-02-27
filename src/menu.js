export function menuPage() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    container.classList.add('card-container');
    
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.setAttribute('src', 'img/ornaments.jpg');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menu-title');
    menuTitle.innerHTML = 'MENU';

    menus.forEach(menu => {
        const card = document.createElement("div");
        card.classList.add("menu-card");

        const name = document.createElement("div");
        name.classList.add('menu-name');
        name.textContent = menu.name;

        const price = document.createElement("div");
        price.classList.add('price');
        price.textContent = `Price: ksh${menu.price.toFixed(2)}`;


        card.appendChild(name);
        card.appendChild(price);

        menuContainer.appendChild(card);
    });

    container.appendChild(logo);
    container.appendChild(menuTitle);
    container.appendChild(menuContainer);
    content.appendChild(container);
}

const menus = [
    {
        name: "Ugali Nyama",
        price: 100
    },
    {
        name: "Ugali Nyama",
        price: 100
    },
    {
        name: "Ugali Nyama",
        price: 100
    },
    {
        name: "Ugali Nyama",
        price: 100
    },
    {
        name: "Ugali Nyama",
        description: "Ugali, wet fry meat",
        price: 100
    },
    {
        name: "Ugali Nyama",
        price: 100
    },

];