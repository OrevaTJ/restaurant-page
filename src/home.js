
function homePage() {
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

    return div
}

export default homePage