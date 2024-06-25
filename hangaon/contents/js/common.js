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