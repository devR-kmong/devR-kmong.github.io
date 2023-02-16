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
    $('.a2-video iframe').css('display', 'block');
    $('.a2-video iframe').attr('src', 'https://www.youtube.com/embed/D833RP96vMk?start=98&autoplay=1');
})



$(function () {
    $('.swiper-slide').click(function () {
        $('.a2-popup-wrapper').fadeIn().css('display', 'flex');
        var imgSrc = $(this).children('img').attr('src');
        $('.a2-popup img').attr('src', imgSrc);
    });

    $('.a2-popup-wrapper').click(function (e) {
        if (e.target.className != 'a2-popup-wrapper') {
            return false;
        } else {
            $('.a2-popup-wrapper').fadeOut();
        }
    });

    $('.a2-closeBtn').click(function () {
        $('.a2-popup-wrapper').fadeOut();
    })

    $('.a2-popup-wrapper').on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    })
});



$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.a2-popup-wrapper').fadeOut();
            $('.pp-wrapper').fadeOut();
        }
    }
);



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};