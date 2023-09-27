import { displayColor, displayCount } from './helpers.js';

const btns = document.querySelectorAll('.btns');

let count = 0;
displayCount(count);

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        count += 1;
        displayCount(count);
        displayColor(btn);
    });
});