$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});



$('.a5-personal-text').click(function () {
    if ($('#cb').is(':checked')) {
        $('.a5-personal').removeClass('a5-personal-no');
        $('.a5-personal-text label p').html('개인정보 수집 및 이용에 동의합니다.');
        $('.a5-form .a5-submit').attr('disabled', false);
    } else {
        $('.a5-personal').addClass('a5-personal-no');
        $('.a5-personal-text label p').html('개인정보처리방침에 동의해주세요.');
        $('.a5-form .a5-submit').attr('disabled', true);
    }
})



$('.ff-open2').click(function () {
    $('.floating').toggleClass('up');
    $('.floating .ff-closeBtn').toggleClass('i-rotate2');
})


$('.f-personal').click(function () {
    if ($('#cb2').is(':checked')) {
        $('.f-form .f-submit').attr('disabled', false);
    } else {
        $('.f-form .f-submit').attr('disabled', true);
    }
})



$('.f-personalBtn').click(function () {
    $('.f-popup-wrapper').fadeIn().css('display','flex');
    $('.policy-popup textarea').scrollTop(0);
})

$('.f-popup-closeBtn').click(function () {
    $('.f-popup-wrapper').fadeOut();
})


$('.f-popup-wrapper').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
})



$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.f-popup-wrapper').fadeOut();
        }
    }
);
