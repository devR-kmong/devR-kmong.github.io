AOS.init({
    once: true,
    delay: 100,
    duration: 1200,
})



var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});



$(function () {
    $('.menu').bind("mouseenter", function () {
        $('.sub-menu').fadeIn(300).css('display','flex');
        $('.header').addClass('more');
    })

    $('.menu').bind("mouseleave", function () {
        $('.sub-menu').hide();
        $('.header').removeClass('more');
    })
})


$(window).scroll(function(){
    $('.sub-menu').hide();
    $('.header').removeClass('more');
});
$(document).bind("mouseleave", function(){
    $('.sub-menu').hide();
    $('.header').removeClass('more');
});



$(function () {
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



$('.menuBtns').click(function () {
    $(this).toggleClass('change');
})



$('.f-personalBtn').click(function () {
    $('.pp-wrapper').fadeIn().css('display','flex');
    $('.policy-popup textarea').scrollTop(0);
})

$('.pp-closeBtn').click(function () {
    $('.pp-wrapper').fadeOut();
})



$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.pp-wrapper').fadeOut();
        }
    }
);



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}