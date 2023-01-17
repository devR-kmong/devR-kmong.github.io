new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       300,
    mobile:       true,
    live:         true
}).init();


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true,
    loop: false,
    // autoplay: {
    //     delay: 1000,
    //     disableOnInteraction: true,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


$(function () {
    $('.fl-top').click(function (e) {
        $.scrollTo(this.hash || 0, 300);
        e.preventDefault();
    });
});


$(function () {
    $(".fl-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.fl-top').fadeIn(80);
                $('.scrollDown').fadeOut();
            } else {
                $('.fl-top').fadeOut(80);
                $('.scrollDown').fadeIn();
            }
        });
    });
});


$('.a5Btn').click(function () {
    $('.a5-graph').fadeIn().css('display', 'flex');
})

$('.a5-graph').click(function () {
    $(this).fadeOut();
})


$('.f-personal-text').click(function () {
    if ($('#cb').is(':checked')) {
        $('.f-personal').removeClass('f-personal-no');
        $('.f-personalBtn').removeClass('f-personalBtn-no');
        $('.f-personal-text label p').html('개인정보취급방침을 읽었으며, 이에 동의합니다.');
        $('.f-form .inputbox').attr('disabled', false);
        $('.f-form textarea').attr('disabled', false);
        $('.f-form .f-submit').attr('disabled', false);
    } else {
        $('.f-personal').addClass('f-personal-no');
        $('.f-personalBtn').addClass('f-personalBtn-no');
        $('.f-personal-text label p').html('개인정보취급방침에 동의하셔야 문의하실 수 있습니다.');
        $('.f-form .inputbox').attr('disabled', true);
        $('.f-form textarea').attr('disabled', true);
        $('.f-form .f-submit').attr('disabled', true);
    }
})

$('.f-personalBtn').click(function () {
    $('.f-popup-wrapper').fadeIn().css('display','flex');
})

$('.f-popup-wrapper').click(function () {
    $(this).fadeOut();
})



$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});


if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}