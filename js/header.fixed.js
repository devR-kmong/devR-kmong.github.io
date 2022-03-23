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
    if ($(window).width() > 900) {
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
    var Offset = $('header').offset();
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
    var Offset = $('header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.logo').removeClass('active');
        }
        else {
            $('.logo').addClass('active');
        }
    });
});


//////////////////////////////////////////////////////////
$(document).ready(function () {
    var Offset = $('header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('nav ul li a').addClass('Fixed2');
        }
        else {
            $('nav ul li a').removeClass('Fixed2');
        }
    });
});



//////////////////////////////////////////////////////////
$(document).ready(function () {
    var Offset = $('header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('nav ul a button').addClass('kBtn');
        }
        else {
            $('nav ul a button').removeClass('kBtn');
        }
    });
});