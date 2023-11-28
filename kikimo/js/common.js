AOS.init({
    once: true,
    delay: 100,
    duration: 600,
});




var swiper = new Swiper(".a1Swiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        651: {
            centeredSlides: true,
            slidesPerView: 1.5,
        },
    },
});

var swiper = new Swiper(".a2Swiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        651: {
            centeredSlides: true,
            slidesPerView: 1.5,
        },
    },
});

var swiper = new Swiper(".a3Swiper", {
    spaceBetween: 20,
    grabCursor: true,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        651: {
            centeredSlides: true,
            slidesPerView: 1.5,
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
});



setInterval(function () {
    var tmp = document.getElementById("counterup").value;
    tmp++;

    document.getElementById("counterup").value = tmp;
}, 1000);




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
            } else {
                $('.floating').fadeOut(80);
            }
        });
    });
});




$(function () {
    $('.floating a, .logo, .logo-f, nav ul li a').click(function (e) {
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