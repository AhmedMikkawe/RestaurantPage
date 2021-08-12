export default function home() {
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    const h1 = document.createElement('h1');
    const image = document.createElement('img');
    const paragraph = document.createElement('p');

    h1.classList.add('align-center');
    h1.innerText = "The Perfect Restaurant";
    image.src = 'food.jpg';
    image.classList.add('food-image');
    paragraph.classList.add('align-center','f-14');
    paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur culpa dolor doloremque doloribus eaque exercitationem fugit illum ipsam iste minus numquam possimus quaerat quas quis quos repudiandae temporibus, vero.';

    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    home.appendChild(h1);
    home.appendChild(image);
    home.appendChild(paragraph);
    home.classList.add('content');

    content.appendChild(home);

}