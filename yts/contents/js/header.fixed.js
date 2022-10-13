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

        var here = $(".article4").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.logo-w').addClass('active');
            $('.logo').removeClass('active');
            $('.gnb-menu li a').css('color','#222');
            $('.remoteBtn a').addClass('dark');
            $('.remoteBtn a.actives').addClass('dark');
            $('.gnb-menu li a.actives').addClass('dark');
        } else {
            $('.logo-w').removeClass('active');
            $('.logo').addClass('active');
            $('.gnb-menu li a').css('color','#fff');
            $('.remoteBtn a').removeClass('dark');
            $('.remoteBtn a.actives').removeClass('dark');
            $('.gnb-menu li a.actives').removeClass('dark');
        }
    })
});
