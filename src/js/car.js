let car = document.getElementById('car');

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    if (value >= 3800) {
        car.style.right = (value - 4500) * 1.5 - 500 + 'px';
    }

    if (window.innerWidth <= 1250) {
        car.style.left = value - 150 + 'px';
    }
})