$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});



$('.ff-open2').click(function () {
    $('.floating').toggleClass('up');
    $('.floating .ff-closeBtn').toggleClass('i-rotate2');
})



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