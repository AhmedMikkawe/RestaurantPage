import home from './home';
import about from './about';
function switchTabs() {
    const content = document.querySelector("#content");

    const navbar = document.createElement('div');
    const ul = document.createElement('ul');

    const homeLi = document.createElement('li');
    const aboutLi = document.createElement('li');

    homeLi.innerText = 'Home';
    aboutLi.innerText = 'About';

    homeLi.addEventListener('click',home);
    aboutLi.addEventListener('click',about);

    navbar.classList.add('navbar');
    document.body.insertBefore(navbar, content)
    navbar.appendChild(ul);
    ul.appendChild(homeLi);
    ul.appendChild(aboutLi);
}
switchTabs();
home();
