$('.i-company').hide();
    
$('.ccradio input').click(function() {
    var sval = this.value;

    if (sval == '개인') {
        $('.i-name').show();
        $('.i-name input').attr('required','required');
        $('.i-company').hide();
        $('.i-company input').removeAttr('required','required');
    } else if (sval == '기업') {
        $('.i-company').show().attr('required','required');
        $('.i-company input').attr('required','required');
        $('.i-name').hide();
        $('.i-name input').removeAttr('required','required');
    } else {
        $('.i-name, .i-company').hide();
    }
});


$('.f-personal-text').click(function () {
    if ($('#cb').is(':checked')) {
        $('.f-personal').removeClass('f-personal-no');
        $('.f-personal-text label p').html('개인정보취급방침을 읽었으며, 이에 동의합니다.');
        $('.gform .f-submit').attr('disabled', false);
    } else {
        $('.f-personal').addClass('f-personal-no');
        $('.f-personal-text label p').html('개인정보취급방침에 동의하셔야 문의하실 수 있습니다.');
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


$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});