$(document).ready(function () {
    var Offset = $('header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('header').addClass('Fixed');
        }
        else {
            $('header').removeClass('Fixed');
        }
    });
});


$(window).resize(function () {
    if ($(window).width() > 1600) {
        $(document).ready(function () {
            var Offset = $('header').offset();
            $(window).scroll(function () {
                if ($(document).scrollTop() > Offset.top) {
                    $('header').addClass('Fixed');
                }
                else {
                    $('header').removeClass('Fixed');
                }
            });
        });
    }
    else {
        $(document).ready(function () {
            var Offset = $('header').offset();
            $(window).scroll(function () {
                if ($(document).scrollTop() > Offset.top) {
                    $('header').removeClass('Fixed');
                }
            });
        });
    }
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    var Offset = $('nav').offset();
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
    var Offset = $('nav').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('nav ul li a').addClass('dark-nav');
        }
        else {
            $('nav ul li a').removeClass('dark-nav');
        }
    });
});