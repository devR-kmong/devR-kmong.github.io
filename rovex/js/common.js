AOS.init({
    once: true,
    delay: 100,
    duration: 1200,
});



$(function () {
    var Offset = $('header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('header').addClass('Fixed');
            $('.sb').addClass('active');
            $('.logo').removeClass('active');
            $('nav ul').fadeIn().css('display','flex');
        }
        else {
            $('header').removeClass('Fixed');
            $('.sb').removeClass('active');
            $('.logo').addClass('active');
            $('nav ul').fadeOut();
        }
    });
});



var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    speed: 1000,
    loop: true,
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



$(function () {
    $('.floating').hide();
    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
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
    $('.floating a, .sb, .logo, nav ul li a, .p-text a, .logo-f, .fBtn a').click(function (e) {
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




if (window.innerWidth > 850) {
    $(function () {
        $('.a1Btn').hover(function () {
            id = $($(this).data('target')).selector;
            $('.a1-box').hide();
            $('#' + id).show().css('display','flex');
        });
    });
    
    $(function () {
        for (let i = 0; i < $('.a1Btn').length; i++) {
            $('.a1Btn').eq(i).hover(function () {
                $('.a1Btn').removeClass('on');
                $(this).addClass('on');
                $('.a1-box').removeClass('on');
                $('.a1-box').addClass('on');
            })
        }
    })
} else {
    $(function () {
        $('.a1Btn').click(function () {
            id = $($(this).data('target')).selector;
            $('.a1-box').hide();
            $('#' + id).show().css('display','flex');
        });
    });
    
    $(function () {
        for (let i = 0; i < $('.a1Btn').length; i++) {
            $('.a1Btn').eq(i).click(function () {
                $('.a1Btn').removeClass('on');
                $(this).addClass('on');
                $('.a1-box').removeClass('on');
                $('.a1-box').addClass('on');
            })
        }
    })
}




if (window.innerWidth > 768) {
    VanillaTilt.init(document.querySelectorAll('.a4-box'), {
        max: 10,
        speed: 100,
        glare: true,
        "max-glare": 0.3,
    });
}


if (window.innerWidth > 768) {
    VanillaTilt.init(document.querySelectorAll('.a6-box'), {
        max: 1,
        speed: 100,
        glare: true,
        "max-glare": 0.3,
    });
}




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