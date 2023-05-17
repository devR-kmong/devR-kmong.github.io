AOS.init({
    once: true
});



var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mySwiper5", {
    spaceBetween: 30,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper4", {
    effect: "fade",
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
    var a2Btn = $('.a2-button');
    var a2Box = $('.a2-box');
    
    for (let i = 1; i <= a2Btn.length; i++) {
        $('.a2Btn-' + i).click(function () {
            a2Btn.removeClass('active');
            a2Box.removeClass('active');
            $('.a2Btn-' + i).addClass('active');
            $('.a2Box-' + i).addClass('active');
        })
    }
})

$(function () {
    var a4Btn = $('.a4-button');
    var a4Box = $('.a4-box');
    
    for (let i = 1; i <= a4Btn.length; i++) {
        $('.a4Btn-' + i).click(function () {
            a4Btn.removeClass('active');
            a4Box.removeClass('active');
            $('.a4Btn-' + i).addClass('active');
            $('.a4Box-' + i).addClass('active');
        })
    }
})




$(function () {
    $(".floating").hide();
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
    $('.logo, nav ul li a, .logo-f, .fBtn').click(function (e) {
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


if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};