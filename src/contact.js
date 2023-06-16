
function contactPage() {
    const div = document.createElement('div');
    div.classList.add('contact');
    div.setAttribute('id', 'contact');

    const contactHeader = document.createElement('h3');
    contactHeader.classList.add('contact-header')
    contactHeader.textContent = 'Want To Get in Touch';

    const contactNum = document.createElement('p');
    const phoneIcon = document.createElement('i');
    phoneIcon.classList.add('fa-sharp', 'fa-solid', 'fa-phone')
    const whatsappIcon = document.createElement('i');
    whatsappIcon.classList.add('fa-brands', 'fa-whatsapp')
    contactNum.classList.add('contact-num');
    contactNum.textContent = '+234 0800000009';
    contactNum.appendChild(whatsappIcon);
    contactNum.appendChild(phoneIcon);

    const address = document.createElement('p');
    const addressIcon = document.createElement('i');
    addressIcon.classList.add('fa-solid', 'fa-house')
    address.classList.add('address');
    address.textContent = 'Nnebisi Asaba, Delta. NGN';
    address.appendChild(addressIcon);

    const location = document.createElement('img');
    location.classList.add('btn', 'location-btn');
    location.setAttribute('src', '../dist/images/location.jpg');

    div.appendChild(contactHeader);
    div.appendChild(contactNum);
    div.appendChild(address);
    div.appendChild(location);

    return div

}

export default contactPage