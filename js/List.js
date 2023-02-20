const body = document.body;

function changeBackground() {
    body.classList.remove('blue', 'yellow', 'red');
    const width = window.innerWidth
    console.log(width);
    if(width < 600) {
        body.classList.add('blue');
    } else if (width >= 600 && width < 900) {
        body.classList.add('yellow');
    } else {
        body.classList.add('red');
    }
}

window.addEventListener('resize', changeBackground);
changeBackground();