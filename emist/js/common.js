AOS.init({
    once: true,
    delay: 100,
    offset: 300,
    duration: 600,
});



$('.counter').counterUp({
    delay: 20,
    time: 1300
});



$(function () {
    $('.morelang').hide();

    $('.langBtn').click(function () {
        $('.morelang').show();
    });

    $('.morelang').bind("mouseleave", function () {
        $('.morelang').hide();
    });
})



setInterval(function () {
    var tmp = document.getElementById("counterup").value;
    tmp++;

    document.getElementById("counterup").value = tmp;
}, 1000);



if (window.innerWidth > 768) {
    VanillaTilt.init(document.querySelectorAll('.a1-wrapper'), {
        max: 3,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
    });
}



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
            if ($(this).scrollTop() > 250) {
                $('.floating').fadeIn(80);
                $('.scrollDown').fadeOut(80);
            } else {
                $('.floating').fadeOut(80);
                $('.scrollDown').fadeIn(80);
            }
        });
    });
});




var swiper = new Swiper(".a3Swiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".a4Swiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        551: {
            slidesPerView: 1.5,
        },
        851: {
            slidesPerView: 2.5,
        },
    },
});

var swiper = new Swiper(".a8Swiper", {
    loop: true,
    speed: 300,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    breakpoints: {
        651: {
            slidesPerView: 1.5,
        },
        1351: {
            speed: 800,
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        2000: {
            speed: 1000,
            initialSlide: 2,
            slidesPerView: 4.5,
            spaceBetween: 40,
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
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
    $('.floating a, .logo, nav ul li a, .logo-f').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});




if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};