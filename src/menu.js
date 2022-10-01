function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem(
        'Maccheroni Al Forno',
        'Artisan pasta tossed with a classic Tuscan meat sauce & baked with fresh mozzarella & besciamella.'
    ))

    menu.appendChild(createMenuItem(
        'Spaghetti Pomodorini',
        'Basil tomato sauce, garlic, extra virgin olive oil, & parmigiano reggiano.'
    ))

    menu.appendChild(createMenuItem(
        'Fiery Chicken Rigatoni',
        'Sauteed chicken with chili peppers, olive oil, white wine, tomatoes & parmigianno reggiano.'
    ))

    menu.appendChild(createMenuItem(
        'Alfredo Di Roma Classico',
        'Homemade fettucine tossed in a pecorino cheese crema.'
    ))

    menu.appendChild(createMenuItem(
        'Farfalle Caprese',
        'Pan seared eggplant, sundried tomatoes & basil. Baked with fresh mozzarella & parmigiano reggiano.'
    ))

    menu.appendChild(createMenuItem(
        'Nuovo Linguine & Clams',
        'Manilla clams, shrimp & gourmet clam meatballs sauteed in a garlic tomato wine clam sauce.'
    ))

    menu.appendChild(createMenuItem(
        'Eggplant Rollatine',
        'Rolled eggplant filled with ricotta & greens. Topped with a light tomato sauce. Served with baked pasta bianca.'
    ))

    menu.appendChild(createMenuItem(
        'Scampi Rapini',
        'Jumbo shrimp, broccoli rabe & vine ripend tomatoes sauteed in a garlic & oil white wine sauce. Served over spaghetti.'
    ))

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement('h2');
    itemName.classList.add('item-name');
    itemName.textContent = name;
    menuItem.appendChild(itemName);

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('item-description');
    itemDescription.textContent = description;
    menuItem.appendChild(itemDescription);

    return menuItem;
}

function renderMenu() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default renderMenu;