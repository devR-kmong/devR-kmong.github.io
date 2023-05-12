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



$('.i-location, .i-etc').hide();
    
$('input[name=store]').click(function() {
    if ($('#rb2').is(':checked')) {
        $('.i-location').show();
        $('.i-location input').attr('required','required');
    } else {
        $('.i-location').hide();
        $('.i-location input').removeAttr('required','required');
    }
});

$('input[name=route]').click(function() {
    if ($('#rb6').is(':checked')) {
        $('.i-etc').show();
        $('.i-etc input').attr('required','required');
    } else {
        $('.i-etc').hide();
        $('.i-etc input').removeAttr('required','required');
    }
});



$('.pBtn').click(function () {
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



$('.pp-wrapper').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
})