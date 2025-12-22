$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});



$('.a13-personal-text').click(function () {
    if ($('#cb').is(':checked')) {
        $('.a13-personal').removeClass('a13-personal-no');
        $('.a13-personal-text label p').html('개인정보수집 및 이용에 동의합니다.');
        $('.a13-form .a13-submit').attr('disabled', false);
    } else {
        $('.a13-personal').addClass('a13-personal-no');
        $('.a13-personal-text label p').html('개인정보처리방침에 동의해주세요.');
        $('.a13-form .a13-submit').attr('disabled', true);
    }
});



$('.a13-personalBtn').click(function () {
    $('.pp-wrapper').fadeIn().css('display','flex');
    $('.policy-popup textarea').scrollTop(0);
});

$('.pp-closeBtn').click(function () {
    $('.pp-wrapper').fadeOut();
});

$('.f-personal').click(function () {
    if ($('#cb2').is(':checked')) {
        $('.fl-form .f-submit').attr('disabled', false);
    } else {
        $('.fl-form .f-submit').attr('disabled', true);
    }
});

$('.ff-open2').click(function () {
    $('.fixed').toggleClass('up');
    $('.fixed .ff-closeBtn').toggleClass('i-rotate2');
});


$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.pp-wrapper').fadeOut();
        }
    }
);