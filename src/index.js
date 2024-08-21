import './style.css';
import homeButton from './home.js';
import menuButton from './menu.js';
import aboutButton from './about.js';

const content = document.getElementById('content');
const buttons = document.querySelectorAll('nav button');

const buttonActions = [homeButton, menuButton, aboutButton];
//content.appendChild(buttonActions[0]());

buttons.forEach((button, index) => {

    button.addEventListener('click', () => {
        content.innerHTML = ""; 
        content.appendChild(buttonActions[index]()); 
    });
});
homeButton();