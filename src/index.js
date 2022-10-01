import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";

function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.textContent = 'Home';
    nav.appendChild(homeButton);
    homeButton.addEventListener('click', renderHome);

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = 'Menu';
    nav.appendChild(menuButton);
    menuButton.addEventListener('click', renderMenu);

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.textContent = 'Contact';
    nav.appendChild(contactButton);
    contactButton.addEventListener('click', renderContact);


    return nav;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerP = document.createElement('p');
    footerP.classList.add('footer-p');
    footerP.textContent = 'Developed by WatchoutForGhosts';
    footer.appendChild(footerP);

    return footer;
}

function renderWebsite() {
    const content = document.querySelector('#content');
    content.appendChild(createNav());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    renderHome();
}

renderWebsite();


