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
                offset: -80,
                immediate: false,
                duration: 1.2
            });
        }
    }
});




// faq
$('.faq-q').on('click', function () {
    const $item = $(this).closest('.faq-item');
    const isActive = $item.hasClass('active');

    $('.faq-item').removeClass('active');
    $('.faq-a').slideUp(300);

    if (!isActive) {
        $item.addClass('active');
        $item.find('.faq-a').slideDown(300);
    }
});