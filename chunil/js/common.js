AOS.init({
    once: true
});



var swiper = new Swiper(".mySwiper", {
    initialSlide: 0,
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 1.5,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    spaceBetween: 10,
    breakpoints: {
        769: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1919: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        2250: {
            slidesPerView: 4.5,
            spaceBetween: 30,
        },
    },
});



$(document).ready(function () {
    var Offset = $('header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('header').addClass('Fixed');
            $('.askBtn').addClass('Fixed2');
        }
        else {
            $('header').removeClass('Fixed');
            $('.askBtn').removeClass('Fixed2');
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
        if ($(window).scrollTop() >= $(this).offset().top - 300) {
            var id = $(this).attr('id');
            $('nav ul li a').removeClass('actives');
            $('nav ul li a[href=#' + id + ']').addClass('actives');
        }
    });
});


$(function () {
    $('.topBtn, .logo, .logo-f, nav ul li a, .askBtn, .p-text a, .a2Btn, .fBtn a').click(function (e) {
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



$('.f-personalBtn').click(function () {
    $('.pp-wrapper').fadeIn().css('display','flex');
    $('.policy-popup textarea').scrollTop(0);
})

$('.pp-closeBtn').click(function () {
    $('.pp-wrapper').fadeOut();
})



$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.pp-wrapper').fadeOut();
        }
    }
);



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};