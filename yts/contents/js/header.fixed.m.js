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
            $('.bar1, .bar2, .bar3').addClass('bar-color');
        }
        else {
            $('.bar1, .bar2, .bar3').removeClass('bar-color');
        }
    });
});



////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    var Offset = $('.gnb').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.logo-w').addClass('active');
        }
        else {
            $('.logo-w').removeClass('active');
        }
    });
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    var Offset = $('.gnb').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.logo').removeClass('active');
        }
        else {
            $('.logo').addClass('active');
        }
    });
});