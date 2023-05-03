AOS.init({
    once: true
});



var swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    slidesPerView: 2.5,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },
});

var swiper = new Swiper(".mySwiper2", {
    effect: "fade",
    loop: true,
    grabCursor: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 800,
        disableOnInteraction: false,
    },
});




$(window).on('scroll', function () {
    $('section').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('.gnb li a').removeClass('actives');
            $('.gnb li a[href=#' + id + ']').addClass('actives');
        }
    });
});



$(function () {
    $('.logo, .gnb li a, .logo-f').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



$(function () {
    var a5R = $('.a5-reason');

    for (let i = 0; i < a5R.length; i++) {
        a5R.eq(i).hover(function () {
            a5R.eq(i).children('.a5-image').toggleClass('imageShow');
            a5R.eq(i).children('.a5-r-text').toggleClass('textShow');
            a5R.eq(i).children('.a5-r-title').toggleClass('titleNot');
            $('.a5-r-title').toggleClass('titleOpacity');
            $('.article5').toggleClass('a5-bg-'+ i);
        })
    }
});




if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};