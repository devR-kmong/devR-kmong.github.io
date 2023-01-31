let pimg = document.getElementById('pp');

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    pimg.style.right = value * 0.4 - 850 + 'px';
    pimg.style.top = value * 0.9 + 300 + 'px';
})