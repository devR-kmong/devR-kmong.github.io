$(document).ready(function () {
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


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    var Offset = $('.header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.logo-w').addClass('active');
            $('.logo').removeClass('active');
        }
        else {
            $('.logo-w').removeClass('active');
            $('.logo').addClass('active');
        }
    });
});