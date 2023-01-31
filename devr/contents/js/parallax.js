let pimg = document.getElementById('pp');

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    pimg.style.right = value * 0.4 - 850 + 'px';
    pimg.style.top = value * 0.9 + 300 + 'px';

    if (window.innerWidth <= 550) {
        pimg.style.right = value * 0.3 - 500 + 'px';
        pimg.style.top = value * 0.7 + 400 + 'px';
    }
})