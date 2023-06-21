AOS.init({
    once: true
})



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
});



$(function () {
    $('.floating').hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.floating').fadeIn();
                $('.scrollDown').fadeOut(120);
            } else {
                $('.floating').fadeOut();
                $('.scrollDown').fadeIn(120);
            }
        });
    });
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
    $('.floating a, .logo, .logo-w, .gnb li a, .a6Btn, .logo-f, .fBtn').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



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




if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}



for (let i = 1; i <= 2; i++) {
    $('.a2Btn-' + i).click(function () {
        $('.a2Btn').removeClass('on');
        $('.a2-box-wrapper').removeClass('on');
        $('.a2Btn-'+ i).addClass('on');
        $('.a2-m-' + i).addClass('on');
    })
}



var isVisible = false;

$(window).on('scroll', function () {
    if (checkVisible($('.article3')) && !isVisible) {
        $(function () {
            var idx = 1;
            setInterval(time, 1200);
            function time() {
                var box = $('.a3-box');
                box.removeClass('on');
                box.eq(idx).addClass('on');
                idx++;
                if (idx >= 4) idx = 0;
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



$(function () {
    $('.dropdown-answer').hide();

    for (let i = 0; i < $('.dropdownBox').length; i++) {
        $('.dropdownBox').eq(i).click(function () {
            $('.dropdown-answer').eq(i).slideToggle(120);
            $('.dropdown-arrow').eq(i).toggleClass('i-rotate');
            $('.dropdown-answer').not($('.dropdown-answer').eq(i)).slideUp(120);
            $('.dropdown-arrow').not($('.dropdown-arrow').eq(i)).removeClass('i-rotate');
        })
    }
})