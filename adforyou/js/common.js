AOS.init({
    once: true
})



$('.counter').counterUp({
    delay: 10,
    time: 1000
});



var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    speed: 1200,
    loop: true,
    loopedSlides: 1,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});


var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
});


var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: true,
    },
});




if (window.innerWidth > 1600) {
    document.write(
        '<script src="js/box_scroll.js"><\/script>'
    )
    document.write(
        '<script src="js/header.fixed.js"><\/script>'
    )
}
else {
    document.clear(
        '<script src="js/box_scroll.js"><\/script>'
    )
    document.clear(
        '<script src="js/header.fixed.js"><\/script>'
    )
    document.write(
        '<script src="js/header.fixed.m.js"><\/script>'
    )
}




$(window).on('scroll', function () {
    $('section').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('nav ul li a').removeClass('actives');
            $('nav ul li a[href=#' + id + ']').addClass('actives');
        }
    });
});




$(window).on('scroll', function () {
    $('.article').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('.remoteBtn').removeClass('actives');
            $('.remoteBtn[href=#' + id + ']').addClass('actives');
        }
    });
});




$(function () {
    $('.toptop, .remoteBtn, .logo, .logo-w, nav ul li a, .mobile-menu li a').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});




if (window.innerWidth > 1600) {
    $('header, .floating').on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    })
}




$('.menuBtns').click(function () {
    $(this).toggleClass('change')
})

$('.mobile-menu li a').click(function () {
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
})

$('.overlay').click(function () {
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
})




$(function () {
    let a5Menu = $('.a5-menu');
    let a5Box = $('.a5-box');

    for (let i = 0; i < a5Menu.length; i++) {
        a5Menu.eq(i).click(function () {
            a5Menu.addClass('on');
            a5Box.addClass('on');
            a5Menu.not(a5Menu.eq(i)).removeClass('on');
            a5Box.not(a5Box.eq(i)).removeClass('on');
        })
    }
})




var isVisible = false;

$(window).on('scroll', function () {
    if (checkVisible($('.article5')) && !isVisible) {
        $(function () {
            var idx = 1;
            setInterval(time, 4000);
            function time() {
                var box = $('.a5-menu');
                var box2 = $('.a5-box');
                box.removeClass('on');
                box2.removeClass('on');
                box.eq(idx).addClass('on');
                box2.eq(idx).addClass('on');
                idx++;
                if (idx >= 5) idx = 0;
            }
        });

        isVisible = true;
    }
});

function checkVisible(elm, eval) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}



$('.ff-open').click(function () {
    $('.floating').toggleClass('show');
    $('.floating .ff-open i').toggleClass('moving');
    $('.floating .ff-open i').toggleClass('i-rotate');
})

$(window).scroll(function () {
    $('.floating').removeClass('show');
    $('.floating .ff-open i').addClass('moving');
    $('.floating .ff-open i').removeClass('i-rotate');
})




if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}