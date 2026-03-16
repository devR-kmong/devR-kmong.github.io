$(function () {
    let lastScroll = 0;

    $(window).on('scroll', function () {
        const currentScroll = $(this).scrollTop();

        if (currentScroll <= 0) {
            $('.header').removeClass('hide');
        } else if (currentScroll > lastScroll) {
            $('.header').addClass('hide');
        } else {
            $('.header').removeClass('hide');
        }

        lastScroll = currentScroll;
    });
});


$(function () {
    var Offset = $('.header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.header').addClass('Fixed');
        }
        else {
            $('.header').removeClass('Fixed');
        }
    });
});



$('.menuBtns').click(function () {
    $(this).toggleClass('change');
})

$('.menu li a').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
})