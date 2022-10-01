
function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const homeP = document.createElement('p');
    homeP.textContent = 'La Cucina Della Pasta';
    homeP.classList.add('home-p');
    home.appendChild(homeP);

    return home;
}

function renderHome() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default renderHome;