import { displayColor, displayCount } from './helpers.js';

const btns = document.querySelectorAll('.btns');

let count = 0;
displayCount(count);

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        count >= 5 ? count = 1 : count += 1 ; //keeps count rotating between number 1 - 5 everytime
        displayCount(count);
        displayColor(btn);
    });
});