
function menuPage() {
    const menu = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = 'Menu'

    const jollof = document.createElement('div');
    const jollofImage = document.createElement('img');
    jollofImage.setAttribute('src', '../dist/images/jollof.jpeg');
    const jollofHeader = document.createElement('h2');
    jollofHeader.textContent = 'Nigerian Jollof'
    const jollofPara = document.createElement('p');
    jollofPara.textContent = `Traditional Nigerian dish brings out the best possible flavor of rice and chicken. 
    For an extra authentic touch, we serve jollof rice with fried plantains.`

    jollof.appendChild(jollofImage);
    jollof.appendChild(jollofHeader);
    jollof.appendChild(jollofPara);
    
    const friedR = document.createElement('div');
    const friedRImage = document.createElement('img');
    friedRImage.setAttribute('src', '../dist/images/jollof.jpeg');
    const friedRHeader = document.createElement('h2');
    friedRHeader.textContent = 'Nigerian Jollof'
    const friedRPara = document.createElement('p');
    friedRPara.textContent = `Traditional Nigerian dish brings out the best possible flavor of rice and chicken. 
    For an extra authentic touch, we serve jollof rice with fried plantains.`

    friedR.appendChild(friedRImage);
    friedR.appendChild(friedRPara);
    friedR.appendChild(friedRHeader);

    const amala = document.createElement('div');
    const amalaImage = document.createElement('img');
    amalaImage.setAttribute('src', '../dist/images/jollof.jpeg');
    const amalaHeader = document.createElement('h2');
    amalaHeader.textContent = 'Nigerian Jollof'
    const amalaPara = document.createElement('p');
    amalaPara.textContent = `Traditional Nigerian dish brings out the best possible flavor of rice and chicken. 
    For an extra authentic touch, we serve jollof rice with fried plantains.`

    amala.appendChild(jollofImage);
    amala.appendChild(jollofHeader);
    amala.appendChild(jollofPara);


    menu.appendChild(header);
    menu.appendChild(jollof);
    menu.appendChild(friedR);
    menu.appendChild(amala);

    return menu

}

export default menuPage