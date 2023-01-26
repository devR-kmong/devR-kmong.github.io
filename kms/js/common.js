AOS.init({
    once: true,
    offset: 120,
    delay: 200,
    duration: 1000,
    easing: 'ease'
})


$(function () {
    $(".floating").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.floating').fadeIn();
                $('.scrollDown').fadeOut();
            } else {
                $('.floating').fadeOut();
                $('.scrollDown').fadeIn();
            }
        });
    });
});



$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
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
    $('.floating a, .logo, nav ul li a, .a1Btn, .logo-f, .fBtn a').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});


$('.menuBtns').click(function () {
    $(this).toggleClass('change')
})

$('nav ul li a').click(function () {
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
})

$('.overlay').click(function () {
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
})


$('.f-submit').click(function () {
    if ($('#cb').is(':checked')) {
    } else {
        $('.f-alert-wrapper').fadeIn().css('display','flex');
    }
})

$('.f-alert-wrapper').click(function () {
    $(this).fadeOut();
})


$('.f-personal-text').click(function () {
    if ($('#cb').is(':checked')) {
        $('.f-personal').removeClass('f-personal-no');
        $('.f-personal-text label p').html('I have read the Privacy Policy and agree to it.');
        $('.gform .f-submit').attr('disabled', false);
    } else {
        $('.f-personal').addClass('f-personal-no');
        $('.f-personal-text label p').html('You must agree to the Privacy Policy to inquire.');
        $('.gform .f-submit').attr('disabled', true);
    }
})

$('.f-personalBtn').click(function () {
    $('.f-popup-wrapper').fadeIn().css('display','flex');
})

$('.f-popup-wrapper').click(function () {
    $(this).fadeOut();
})


$('.f-popup-wrapper').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
})


if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}