AOS.init({
    once: true
});



var swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },
    breakpoints: {
        551: {
            centeredSlides: false,
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        769: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1000: {
            centeredSlides: false,
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1651: {
            centeredSlides: false,
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
    },
});

var swiper = new Swiper(".mySwiper2", {
    effect: "fade",
    loop: true,
    grabCursor: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 800,
        disableOnInteraction: false,
    },
});




$(window).on('scroll', function () {
    $('section').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('.gnb li a').removeClass('actives');
            $('.gnb li a[href=#' + id + ']').addClass('actives');
        }
    });
});



$(function () {
    $('.logo, .gnb li a, .logo-f').click(function (e) {
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




if (window.innerWidth > 1919) {
    $(function () {
        var a5R = $('.a5-reason');
    
        for (let i = 0; i < a5R.length; i++) {
            a5R.eq(i).hover(function () {
                a5R.eq(i).children('.a5-image').toggleClass('imageShow');
                a5R.eq(i).children('.a5-r-text').toggleClass('textShow');
                a5R.eq(i).children('.a5-r-title').toggleClass('titleNot');
                $('.a5-r-title').toggleClass('titleOpacity');
                $('.article5').toggleClass('a5-bg-'+ i);
            })
        }
    });
}



$(window).resize(function () {
    var width_size = window.innerWidth;

    if (width_size == 1920) {
        document.location.reload();
    } else if (width_size == 2560) {
        document.location.reload();
    }
})




if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};