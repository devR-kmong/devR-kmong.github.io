AOS.init({
    once: true,
    delay: 100,
    duration: 1200,
});



$('.counter').counterUp({
    delay: 20,
    time: 1000
});



var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 800,
    centeredSlides: true,
    slidesPerView: 1,
    grabCursor: true,
    breakpoints: {
        1251: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
});

var swiper = new Swiper(".mySwiper3", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        651: {
            spaceBetween: 30,
        },
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});



$(function () {
    var Offset = $('header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('header').addClass('Fixed');
            $('.logo-w').addClass('active');
            $('.logo').removeClass('active');
            $('nav ul li a').addClass('Fixed2');
            $('.bar1, .bar2, .bar3').addClass('bar-color');
        }
        else {
            $('header').removeClass('Fixed');
            $('.logo-w').removeClass('active');
            $('.logo').addClass('active');
            $('nav ul li a').removeClass('Fixed2');
            $('.bar1, .bar2, .bar3').removeClass('bar-color');
        }
    });
});



$(function () {
    $('.floating').hide();
    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.floating').fadeIn(80);
                $('.scrollDown').fadeOut(80);
            } else {
                $('.floating').fadeOut(80);
                $('.scrollDown').fadeIn(80);
            }
        });
    });
});



$(window).on('scroll', function () {
    $('section').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('nav ul li a').removeClass('actives');
            $('nav ul li a[href=#' + id + ']').addClass('actives');
        }
    });
});



$(function () {
    $('.floating a, .logo, .logo-w, nav ul li a, .p-text a, .logo-f, .fBtn a').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



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



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};