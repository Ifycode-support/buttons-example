const displayCount = (count) => {
    const numResult = document.querySelector('#numResult');
    numResult.innerHTML = count;
};

const displayColor = (btn) => {
    const color = btn.getAttribute('id');
    const stringResult = document.querySelector('#stringResult');
    stringResult.innerHTML = color;
}

export {
    displayCount,
    displayColor,
}