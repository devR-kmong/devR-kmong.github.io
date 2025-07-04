$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});



$('.f-personal-text').click(function () {
    if ($('#cb').is(':checked')) {
        $('.f-personal-text label p').html('개인정보 수집 및 이용 동의');
        $('.gform .f-submit').attr('disabled', false);
    } else {
        $('.f-personal-text label p').html('개인정보처리방침에 동의해주세요.');
        $('.gform .f-submit').attr('disabled', true);
    }
});