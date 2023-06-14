const container = document.getElementById('container');

function component() {
    const nav = document.createElement('nav');
    const navDiv = document.createElement('div');
    const navDiv1 = document.createElement('div');

    // Logo
    const logoLink = document.createElement('a');
    logoLink.href = '../dist/index.html'

    const logoImage = document.createElement('img');
    logoImage.classList.add('logo');
    logoImage.setAttribute('src', '../dist/images/logo.jpg');
    logoLink.appendChild(logoImage);
    navDiv.appendChild(logoLink);

    // Nav links
    const home = document.createElement('a');
    home.href = '#';
    home.textContent = 'Home'
    const menu = document.createElement('a');
    menu.href = '#';
    menu.textContent = 'Menu';
    const contact = document.createElement('a');
    contact.href = '#';
    contact.textContent = 'Contact';
    navDiv1.appendChild(home);
    navDiv1.appendChild(menu);
    navDiv1.appendChild(contact);

    nav.appendChild(navDiv);
    nav.appendChild(navDiv1);

    return nav;
}

function mainSection() {
    const main = document.createElement('main');
    const div = document.createElement('div');
    const header = document.createElement('h3');
    header.textContent = 'Modern Regional African Cuisine'
    const para1 = document.createElement('p');
    para1.textContent = `Delicious home made meal\n
    Restaurant and Event catering`;
    const heroImage = document.createElement('img');
    heroImage.setAttribute('src', '#');
    heroImage.setAttribute('alt', 'hero image');
    const header1 = document.createElement('h4');
    header1.textContent = 'Opening Times'
    const para2 = document.createElement('p');
    para2.textContent = `Monday 2pm - 12pm\n
    Tuesday - Thursday 2pm - 12pm\n
    Friday &Saturday 2pm - 12pm\n
    Sunday 2pm - 12pm`

    div.appendChild(header);
    div.appendChild(para1);
    div.appendChild(heroImage);
    div.appendChild(header1);
    div.appendChild(para2);
    main.appendChild(div)

    return main
}

function appendContainer() {
    container.appendChild(component())
    container.appendChild(mainSection())
}

export default appendContainer