new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       200,
    mobile:       true,
    live:         true
}).init();



var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopedSlides: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".a5Swiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
        nextEl: ".sbn",
        prevEl: ".sbp",
    },
    breakpoints: {
        951: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1251: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        2000: {
            slidesPerView: 4.5,
            spaceBetween: 30,
        },
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
});


if (window.innerWidth > 769) {
    $(function () {
        var Offset = $('header').offset();
        $(window).scroll(function () {
            if ($(document).scrollTop() > Offset.top) {
                $('header').addClass('Fixed');
            }
            else {
                $('header').removeClass('Fixed');
            }
        });
    });
}



$(function () {
    $('.floating').hide();
    
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



$(window).on('scroll', function () {
    $('section').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('nav li a').removeClass('actives');
            $('nav li a[href=#' + id + ']').addClass('actives');
        }
    });
});



$(function () {
    $('.floating a, .logo, nav li a').click(function (e) {
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