$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});



$('.floating .f-personal-text').click(function () {
    if ($('#cb1').is(':checked')) {
        $('.floating .f-personal').removeClass('f-personal-no');
        $('.floating .f-personal-text label p').html('개인정보수집 및 이용에 동의합니다.');
        $('.floating .f-submit').attr('disabled', false);
    } else {
        $('.floating .f-personal').addClass('f-personal-no');
        $('.floating .f-personal-text label p').html('개인정보처리방침에 동의해주세요.');
        $('.floating .f-submit').attr('disabled', true);
    }
})

$('.a7-right .f-personal-text').click(function () {
    if ($('#cb2').is(':checked')) {
        $('.a7-right .f-personal').removeClass('f-personal-no');
        $('.a7-right .f-personal-text label p').html('개인정보수집 및 이용에 동의합니다.');
        $('.a7-right .f-submit').attr('disabled', false);
    } else {
        $('.a7-right .f-personal').addClass('f-personal-no');
        $('.a7-right .f-personal-text label p').html('개인정보처리방침에 동의해주세요.');
        $('.a7-right .f-submit').attr('disabled', true);
    }
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


$('.ff-open2').click(function () {
    $('.floating').toggleClass('up');
    $('.floating .ff-closeBtn').toggleClass('i-rotate2');
})