$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});



$('.a8-personal-text').click(function () {
    if ($('#cb').is(':checked')) {
        $('.a8-personal').removeClass('a8-personal-no');
        $('.a8-personal-text label p').html('개인정보 수집 및 이용에 동의합니다.');
        $('.a8-form .a8-submit').attr('disabled', false);
    } else {
        $('.a8-personal').addClass('a8-personal-no');
        $('.a8-personal-text label p').html('개인정보처리방침에 동의해주세요.');
        $('.a8-form .a8-submit').attr('disabled', true);
    }
})