$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});



if (window.innerWidth <= 600) {
    $('.f-closeBtn').click(function () {
        $(this).hide();
        $('.ft-text').hide();
        $('.f-tel img').css('display', 'flex');
        $('.floating-wrapper form').hide();
        $('.f-personal').hide();
        $('.floating').addClass('floating-close');
    })

    $('.f-tel').click(function () {
        $('.floating').removeClass('floating-close');
        $('.f-closeBtn').show();
        $('.ft-text').show();
        $('.f-tel img').css('display', 'none');
        $('.floating-wrapper form').show();
        $('.f-personal').show();
    })
}



$('.f-personal').click(function () {
    if ($('#cb').is(':checked')) {
        $('.gform .f-submit').attr('disabled', false);
    } else {
        $('.gform .f-submit').attr('disabled', true);
    }
})



$('.f-personal span').click(function () {
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



$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.f-popup-wrapper').fadeOut();
        }
    }
);