AOS.init({
    once: true
});


VanillaTilt.init(document.querySelectorAll('.box-0, .box-1, .box-2, .a5-box'), {
    max: 10,
    speed: 1000,
    glare: true,
    "max-glare": 0.3,
});


var swiper0 = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper1 = new Swiper(".mySwiper2", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper2 = new Swiper(".mySwiper3", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



$(function () {
    $('.floating').hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('.floating').fadeIn(80);
                $('.scrollDown').fadeOut(80);
                $('.background').fadeOut();
            } else {
                $('.floating').fadeOut(80);
                $('.scrollDown').fadeIn(80);
                $('.background').fadeIn();
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
    $('.floating a, .logo, .logo-w, nav ul li a, .logo-f').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});


$('.menuBtns').click(function () {
    $(this).toggleClass('change')
});

$('nav ul li a').click(function () {
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
});

$('.overlay').click(function () {
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
});



for (let i = 0; i < $('.box').length; i++) {
    $('.box-0').eq(i).click(function () {
        $('.box-overlay-0').fadeIn(120).css('display', 'flex');
        swiper0.slideTo(i, 500, false);
    });
    $('.box-1').eq(i).click(function () {
        $('.box-overlay-1').fadeIn(120).css('display', 'flex');
        swiper1.slideTo(i, 500, false);
    });
    $('.box-2').eq(i).click(function () {
        $('.box-overlay-2').fadeIn(120).css('display', 'flex');
        swiper2.slideTo(i, 500, false);
    });
}

$('.closeBtn').click(function () {
    $('.box-overlay').fadeOut(120);
})

$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.box-overlay').fadeOut(120);
        }
    }
);

$('.box-overlay').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
})



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};