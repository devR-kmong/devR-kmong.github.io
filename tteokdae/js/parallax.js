let a3ot = document.getElementById('a3-ot');

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    if (value >= 900) {
        a3ot.style.right = value - (value * .01) - 2600 + 500 + 'px';
    }

    if (window.innerWidth <= 1250) {

    }
})