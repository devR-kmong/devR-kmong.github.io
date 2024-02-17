AOS.init({
    once: true,
    offset: 100,
    delay: 200,
    duration: 1000,
})


new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       100,
    mobile:       true,
    live:         true
}).init();



$('.counter').counterUp({
    delay: 10,
    time: 2000
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
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
});



$(function () {
    $('.logo, nav ul li a, .a4-left a, .logo-f, .fBtn a').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



$('.menuBtns').click(function () {
    $(this).toggleClass('change')
})

$('nav ul li a').click(function () {
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
})

$('.overlay').click(function () {
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
})

$(window).scroll(function(){
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}