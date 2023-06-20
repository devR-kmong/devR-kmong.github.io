AOS.init({
    once: true
})



$('.gnb label').click(function () {
    $('.menuBtns').toggleClass('change');
})

$('.gnb label').click(function () {
    if ( $('.menuBtns').hasClass('change') === true ) {
        $('.sub-wrapper').slideDown(80).css('display','flex');
    } else {
        $('.sub-wrapper').slideUp(80);
    }
})

$(window).scroll(function () {
    $('.menuBtns').removeClass('change');
    $('.sub-wrapper').slideUp(80);
})

$('.header').bind('mouseleave', function () {
    $('.menuBtns').removeClass('change');
    $('.sub-wrapper').slideUp(80);
})



$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});




if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}




$(function () {
    let a4Image = $('.a4-image');
    let a4Thumb = $('.a4-thumbnail');

    for (let i = 0; i < a4Image.length; i++) {
        a4Thumb.eq(i).hover(function () {
            a4Image.addClass('show');
            a4Thumb.addClass('show');
            a4Image.not(a4Image.eq(i)).removeClass('show');
            a4Thumb.not(a4Thumb.eq(i)).removeClass('show');
        })
    }
})




var isVisible = false;

$(window).on('scroll', function () {
    if (checkVisible($('.article4')) && !isVisible) {
        $(function () {
            var idx = 1;
            setInterval(time, 2500);
            function time() {
                var box = $('.a4-image');
                var box2 = $('.a4-thumbnail');
                box.removeClass('show');
                box2.removeClass('show');
                box.eq(idx).addClass('show');
                box2.eq(idx).addClass('show');
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