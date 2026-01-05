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



$(function () {
    const $header = $('.header');
    const $lightSections = $('.light-section');

    function toggleHeaderInvert() {
        let isOnLight = false;
        const scrollTop = $(window).scrollTop();
        const headerHeight = $header.outerHeight();

        $lightSections.each(function () {
            const sectionTop = $(this).offset().top;
            const sectionBottom = sectionTop + $(this).outerHeight();

            // 헤더가 걸쳐 있는 지점 기준
            const checkPoint = scrollTop + headerHeight / 2;

            if (checkPoint >= sectionTop && checkPoint <= sectionBottom) {
                isOnLight = true;
                return false; // break
            }
        });

        $header.toggleClass('is-invert', isOnLight);
    }

    $(window).on('scroll resize', toggleHeaderInvert);
    toggleHeaderInvert(); // 초기 실행
});
