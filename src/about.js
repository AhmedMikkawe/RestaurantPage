export default function home() {
    const content = document.querySelector("#content");
    const about = document.createElement('div');
    about.innerText = "HHH";
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    content.appendChild(about);

}