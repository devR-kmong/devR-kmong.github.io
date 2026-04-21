$('.menuBtns').click(function () {
    $(this).toggleClass('change');
});

$('nav ul li a').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});

$('.overlay').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});





const lenis = new Lenis({
    duration: 1.2,
    wheelMultiplier: 1.2,
    smoothWheel: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.querySelector('.topBtn')?.addEventListener('click', () => {
    lenis.scrollTo(0);
});

document.addEventListener('click', function (e) {
    const anchor = e.target.closest('a[href^="#"]');

    if (anchor) {
        e.preventDefault();

        const targetId = anchor.getAttribute('href');

        if (targetId === '#') {
            lenis.scrollTo(0);
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            lenis.scrollTo(targetElement, {
                offset: 0,
                immediate: false,
                duration: 1.2
            });
        }
    }
});