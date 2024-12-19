const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.btn');

const colors = ["yellow", "red", "green", "#3b5998"]

buttonEl.addEventListener('click', changeColor)

function changeColor() {

    let random = Math.floor(Math.random()*colors.length)

    
    bodyEl.style.backgroundColor = colors[random];
}