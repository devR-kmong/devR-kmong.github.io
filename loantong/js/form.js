$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});



$('.f-personal-text').click(function () {
    if ($('#cb').is(':checked')) {
        $('.f-personal-text label p').html('개인정보수집 및 이용에 동의합니다.');
        $('.gform .f-submit').attr('disabled', false);
    } else {
        $('.f-personal-text label p').html('개인정보처리방침에 동의해주세요.');
        $('.gform .f-submit').attr('disabled', true);
    }
})


$('.f-personal-text2').click(function () {
    if ($('#cb2').is(':checked')) {
        $('.f-personal-text2 label p').html('개인정보수집 및 이용에 동의합니다.');
        $('.gform .f-submit2').attr('disabled', false);
    } else {
        $('.f-personal-text2 label p').html('개인정보처리방침에 동의해주세요.');
        $('.gform .f-submit2').attr('disabled', true);
    }
})


$('.f-personal-text3').click(function () {
    if ($('#cb3').is(':checked')) {
        $('.f-personal3').removeClass('f-personal-no');
        $('.f-personal-text3 label p').html('개인정보수집 및 이용에 동의합니다.');
        $('.gform .f-submit3').attr('disabled', false);
    } else {
        $('.f-personal3').addClass('f-personal-no');
        $('.f-personal-text3 label p').html('개인정보처리방침에 동의해주세요.');
        $('.gform .f-submit3').attr('disabled', true);
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