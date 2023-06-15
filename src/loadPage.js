import homePage from "./home";

const container = document.getElementById('container');


function component() {
    const nav = document.createElement('nav');
    nav.classList.add('nav')
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
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home'
    homeButton.classList.add('btn');
    homeButton.setAttribute('id', 'home-btn');
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('btn');
    menuButton.setAttribute('id', 'menu-btn');
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('btn');
    contactButton.setAttribute('id', 'contact-btn');

    navDiv1.appendChild(homeButton);
    navDiv1.appendChild(menuButton);
    navDiv1.appendChild(contactButton);

    nav.appendChild(navDiv);
    nav.appendChild(navDiv1);

    return nav;
}

function mainPage() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main')

    main.appendChild(homePage())

    return main
}


function footerDiv() {
    const footer = document.createElement('footer');
    footer.classList.add('footer')
    const span = document.createElement('span');
    span.setAttribute('id', 'year');
    footer.textContent = `©${span} by OrevaTJ`

    return footer
}

function containerContent() {
    container.appendChild(component());
    container.appendChild(mainPage());
    container.appendChild(footerDiv());

    return container
}

export default containerContent;