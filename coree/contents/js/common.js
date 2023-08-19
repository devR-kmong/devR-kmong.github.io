AOS.init({
    once: true
})


$('.counter').counterUp({
    delay: 10,
    time: 1000
});



$(function () {
    $('.sub-navBtn').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1051: {
            slidesPerView: 2,
        },
        1251: {
            slidesPerView: 3,
        },
        2000: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
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



if (window.innerWidth > 950) {
    $(function () {    
        for (let i=0; i<$('.menu-item').length; i++) {
            $('.menu-item').eq(i).mouseenter(function () {
                $('.mh-' + i).fadeIn(120).css('display','flex');
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
});

$('.menu li a').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});




$('.f-select, .f-select p, .f-select i').click(function () {
    $('.f-select-item').slideToggle(50).css('display','flex');
})

$('html').click(function (e) {
    if (!$(e.target).hasClass('f-select')) {
        $('.f-select-item').hide();
    }
});

$(document).scroll(function (e) {
    if (!$(e.target).hasClass('f-select')) {
        $('.f-select-item').hide();
    }
})




if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}