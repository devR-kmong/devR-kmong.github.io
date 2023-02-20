$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});



$('.f-personal-text').click(function () {
    if ($('#cb').is(':checked')) {
        $('.f-personal').removeClass('f-personal-no');
        $('.f-personal-text label p').html('개인정보수집 및 이용에 동의합니다.');
        $('.gform .f-submit').attr('disabled', false);
    } else {
        $('.f-personal').addClass('f-personal-no');
        $('.f-personal-text label p').html('개인정보처리방침에 동의해주세요.');
        $('.gform .f-submit').attr('disabled', true);
    }
})



$('.f-personalBtn').click(function () {
    $('.pp-wrapper').fadeIn().css('display','flex');
    $('.policy-popup textarea').scrollTop(0);
})

$('.pp-closeBtn').click(function () {
    $('.pp-wrapper').fadeOut();
})



$(function () {
    
    $('.i-department, .i-textarea').hide();
    
    $('#cb2').click(function () {
        var checked = $(this).is(':checked');

        if (checked) {
            $('.i-department').show();
            $('.i-department input').attr('required','required');
        } else {
            $('.i-department').hide();
            $('.i-department input').removeAttr('required');
        }
    });

    $('#cb6').click(function () {
        var checked = $(this).is(':checked');

        if (checked) {
            $('.i-textarea').show();
            $('.i-textarea textarea').attr('required','required');
        } else {
            $('.i-textarea').hide();
            $('.i-textarea textarea').removeAttr('required');
        }
    });

})