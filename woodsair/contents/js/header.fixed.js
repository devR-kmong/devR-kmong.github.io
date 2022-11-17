$(document).ready(function () {
    var Offset = $('.header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.header').addClass('Fixed');
            $('.logo-w').addClass('active');
            $('.logo').removeClass('active');
            $('.gnb').addClass('gnb-scroll');
            $('.gnb-menu li a').addClass('gnb-d');
            $('.gnb-r-left a, .gnb-r-left span').addClass('gnb-d');
            $('.bar1, .bar2, .bar3').addClass('bar-color');
        }
        else {
            $('.header').removeClass('Fixed');
            $('.logo-w').removeClass('active');
            $('.logo').addClass('active');
            $('.gnb').removeClass('gnb-scroll');
            $('.gnb-menu li a').removeClass('gnb-d');
            $('.gnb-r-left a, .gnb-r-left span').removeClass('gnb-d');
            $('.bar1, .bar2, .bar3').removeClass('bar-color');
        }
    });
});


$(window).resize(function () {
    if ($(window).width() > 1600) {
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
    }
    else {
        $(document).ready(function () {
            var Offset = $('.header').offset();
            $(window).scroll(function () {
                if ($(document).scrollTop() > Offset.top) {
                    $('.header').removeClass('Fixed');
                }
            });
        });
    }
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article1").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.header').addClass('Fixed0');
        } else {
            $('.header').removeClass('Fixed0');
        }
    })
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article2").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.header').addClass('Fixed1');
        } else {
            $('.header').removeClass('Fixed1');
        }
    })
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article3").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.header').addClass('Fixed2');
        } else {
            $('.header').removeClass('Fixed2');
        }
    })
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article5").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.header').addClass('Fixed3');
        } else {
            $('.header').removeClass('Fixed3');
        }
    })
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article99").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.header').addClass('Fixed4');
            $('.logo').addClass('active');
            $('.logo-w').removeClass('active');
            $('.gnb-menu li a').removeClass('gnb-d');
            $('.gnb-r-left a, .gnb-r-left span').removeClass('gnb-d');
            $('.bar1, .bar2, .bar3').removeClass('bar-color');
        } else {
            $('.header').removeClass('Fixed4');
        }
    })
});