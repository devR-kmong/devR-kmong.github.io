AOS.init({
    once: true
});



$('.counter').counterUp({
    delay: 10,
    time: 2000
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },
});


var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    breakpoints: {
        1051: {
            slidesPerView: 3,
        },
        1251: {
            slidesPerView: 2.3,
        },
        1900: {
            slidesPerView: 3.3,
        },
        2000: {
            slidesPerView: 4.3,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




$(function () {
    $(".floating").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.floating').fadeIn(80);
            } else {
                $('.floating').fadeOut(80);
            }
        });
    });
});




$(function () {
    $('.logo, nav ul li a, .gnbBtn, .logo-f, .fBtn a').click(function (e) {
        $.scrollTo(this.hash || 0, 400);
        e.preventDefault();
    });
});




if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};