new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       200,
    mobile:       true,
    live:         true
}).init();



$('.closeBtn-0').click(function () {
    $('.popup-0').hide()
});



$(window).on('scroll', function () {
    $('section').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('.gnb ul li a').removeClass('actives');
            $('.gnb ul li a[href=#' + id + ']').addClass('actives');
        }
    });
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },
});


var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
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
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




if (window.innerWidth > 768) {
    $(function () {
        $(".floating").hide();
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
}



if (window.innerWidth <= 1850) {
    $('.a1-1').removeClass('wow');
    $('.a1-1').removeClass('animate');
    $('.a1-1').removeClass('bounceInLeft');
    $('.a1-1').removeClass('faster');
    $('.a1-1').removeClass('animated');
}




$(function () {
    $('.logo, nav ul li a, .gnbBtn, .logo-f, .fBtn a').click(function (e) {
        $.scrollTo(this.hash || 0, 400);
        e.preventDefault();
    });
});




if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};