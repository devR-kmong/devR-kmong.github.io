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