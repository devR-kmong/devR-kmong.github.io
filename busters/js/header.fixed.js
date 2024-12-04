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
            $('nav ul li a').addClass('Fixed2');
        }
        else {
            $('nav ul li a').removeClass('Fixed2');
        }
    });
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article4").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('header').addClass('Fixed3');
            $('nav ul li a').removeClass('Fixed2');
            $('.logo').addClass('active');
            $('.logo-w').removeClass('active');
        }
        else {
            $('header').removeClass('Fixed3');
        }
    })
});

////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article4").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
        }
    })
});

////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article4").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {

        }
    })
});
