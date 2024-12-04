if (window.innerWidth > 768) {
    AOS.init({
        once: true,
        delay: 100,
        offset: 200,
        duration: 1200,
    })
} else {
    AOS.init({
        once: true,
        delay: 50,
        offset: 100,
        duration: 1200,
    })
}



$(function () {
    $('.floating').hide();
    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.scrollDown').fadeOut(80);
            } else {
                $('.scrollDown').fadeIn(80);
            }
        });
    });
});



$('.menuBtns').click(function () {
    $(this).toggleClass('change');
});
$('nav ul li a').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});
$(window).scroll(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});
$(document).bind("mouseleave", function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};



var swiper = new Swiper(".a5Swiper", {
    initialSlide: 0,
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 1.5,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1050: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        1050: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        1650: {
            slidesPerView: 4.5,
            spaceBetween: 40,
        },
        2250: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});