AOS.init({
    once: true,
    delay: 100,
    offset: 100,
    duration: 1200,
});


new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 200,
    mobile: true,
    live: true
}).init();



$(function () {
    var isVisible = false;

    $(window).on('scroll', function () {
        if (checkVisible($('.a2-big')) && !isVisible) {
            $(function () {
                var typed3 = new Typed('#typed', {
                    strings: ['단순한 우연일까요?'],
                    typeSpeed: 80,
                    backSpeed: 20,
                    smartBackspace: true,
                    showCursor: true,
                    cursorChar: '|',
                    autoInsertCss: true,
                    loop: false
                });
            });
            isVisible = true;
        }
    });

    function checkVisible(elm, eval) {
        eval = eval || "object visible";
        var viewportHeight = $(window).height(), // Viewport Height
            scrolltop = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();

        if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        if (eval == "above") return ((y < (viewportHeight + scrolltop)));
    }
})



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
    $('.floating a, .logo, nav ul li a, .logo-f').click(function (e) {
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



var swiper = new Swiper(".a7Swiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.2,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1051: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        2000: {
            slidesPerView: 3.5,
            spaceBetween: 40,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
});