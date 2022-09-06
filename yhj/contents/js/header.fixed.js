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


$(document).ready(function () {
    var Offset = $('.header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.gnb').css('width','1600px');
            $('.gnb').css('padding','0');
        }
        else {
            $('.gnb').css('width','100%');
            $('.gnb').css('padding','0 40px');
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



//////////////////////////////////////////////////////////
$(document).ready(function () {
    var Offset = $('.header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.gnb-menu li a').addClass('Fixed2');
        }
        else {
            $('.gnb-menu li a').removeClass('Fixed2');
        }
    });
});



//////////////////////////////////////////////////////////
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



