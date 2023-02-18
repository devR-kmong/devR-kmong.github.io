AOS.init({
    once: true
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: false,
    centeredSlides: true,
    grabCursor: false,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
});



$(function () {
    $(".floating").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
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
            $('nav ul li a').removeClass('actives');
            $('nav ul li a[href=#' + id + ']').addClass('actives');
        }
    });
});


$(function () {
    $('.floating a, .logo, nav ul li a, .gnbBtn, .p-text a, .a1-right a').click(function (e) {
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



$('.y-thumbnail').click(function () {
    $(this).fadeOut();
    $('.a3-video iframe').css('display', 'block');
    $('.a3-video iframe').attr('src', 'https://www.youtube.com/embed/D833RP96vMk?start=98&autoplay=1');
})



$(function () {
    $('.swiper-slide').click(function () {
        $('.a3-popup-wrapper').fadeIn().css('display', 'flex');
        var imgSrc = $(this).children('img').attr('src');
        $('.a3-popup img').attr('src', imgSrc);
    });

    $('.a3-popup-wrapper').click(function (e) {
        if (e.target.className != 'a2-popup-wrapper') {
            return false;
        } else {
            $('.a3-popup-wrapper').fadeOut();
        }
    });

    $('.a3-closeBtn').click(function () {
        $('.a3-popup-wrapper').fadeOut();
    })
});



$(function () {
    for (let i = 1; i < 99; i++) {
        $('.bhBtn-' + i).click(function () {
            $('.a4-popup-wrapper').fadeIn().css('display','flex');
            $('.a4-bh-' + i).fadeIn().css('display','flex');
        })
    }

    $('.a4-popup-wrapper').click(function (e) {
        if (e.target.className != 'a4-popup-wrapper') {
            return false;
        } else {
            $('.a4-popup-wrapper').fadeOut();
            $('.a4-bh').fadeOut();
        }
    });

    $('.a4-closeBtn').click(function () {
        $('.a4-popup-wrapper').fadeOut();
        $('.a4-bh').fadeOut();
    })
});



$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.a3-popup-wrapper').fadeOut();
            $('.a4-popup-wrapper').fadeOut();
            $('.a4-bh').fadeOut();
            $('.pp-wrapper').fadeOut();
        }
    }
);



$('.a2-popup-wrapper, .a4-popup-wrapper').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};