$(document).ready(function () {
    var Offset = $('.mobile-nav').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.mobile-nav').addClass('Fixed');
        }
        else {
            $('.mobile-nav').removeClass('Fixed');
        }
    });
});



////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    var Offset = $('.mobile-nav').offset();
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


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    var Offset = $('.mobile-nav').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.m-icon').addClass('Fixed2');
        }
        else {
            $('.m-icon').removeClass('Fixed2');
        }
    });
});
