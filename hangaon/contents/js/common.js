AOS.init({
    once: true,
    delay: 100,
    offset: 200,
    duration: 1200,
})



var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    speed: 500,
    loop: true,
    touchRatio: 0,
    loopedSlides: 1,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // on: {
    //     transitionStart: function () {

    //         var videos = document.querySelectorAll('video');

    //         Array.prototype.forEach.call(videos, function (video) {
    //             video.pause();
    //         });
    //     },

    //     transitionEnd: function () {

    //         var activeIndex = this.activeIndex;
    //         var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
    //         var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
    //         activeSlideVideo.play();

    //     },
    // }
});

var swiper = new Swiper(".mySwiper2", {
    initialSlide: 0,
    centeredSlides: false,
    slidesPerView: 1.5,
    spaceBetween: 30,
    speed: 1000,
    navigation: {
        nextEl: ".sbn",
        prevEl: ".sbp",
    },
    breakpoints: {
        769: {
            slidesPerView: 2,
            centeredSlides: true,
            spaceBetween: 60
        },
        1251: {
            slidesPerView: 2.5,
            centeredSlides: true,
            spaceBetween: 80
        },
    },
});




$(document).ready(function () {
    var Offset = $('.header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.header').addClass('Fixed');
        }
        else {
            $('.header').removeClass('Fixed');
        }
    });
});

if (window.innerWidth > 1500) {
    $(function () {    
        for (let i=0; i<$('.menu-item').length; i++) {
            $('.menu-item').eq(i).mouseenter(function () {
                $('.mh-' + i).show().css('display','flex');
            })
    
            $('.menu-item').eq(i).mouseleave(function () {
                $('.mh-' + i).hide();
            })
        }
    })

    $(window).scroll(function(){
        $('.menu-hover').hide();
    });
    
    $(document).bind("mouseleave", function(){
        $('.menu-hover').hide();
    });
}



$('.menuBtns').click(function () {
    $(this).toggleClass('change');
})

$('.menu li a').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
})

$('.overlay').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
})



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}