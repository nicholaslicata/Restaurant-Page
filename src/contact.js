function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const time = document.createElement('p');
    time.classList.add('time');
    time.textContent = '🕰️ Mon-Sat: 8am-11pm';
    contact.appendChild(time);

    const phone = document.createElement('p');
    phone.classList.add('phone');
    phone.textContent = '📞 123-456-7890';
    contact.appendChild(phone);

    const email = document.createElement('p');
    email.classList.add('email');
    email.textContent = '📧 lacucinadellapasta@email.com';
    contact.appendChild(email);

    return contact;
}

function renderContact() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default renderContact