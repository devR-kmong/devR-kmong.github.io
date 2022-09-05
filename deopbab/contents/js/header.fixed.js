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
    $(window).scroll(function () {

        var here = $(".article1").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.logo-w').addClass('active');
            $('.logo').removeClass('active');
            $('.actives').addClass('actives2');
        } else {
            $('.logo-w').removeClass('active');
            $('.logo').addClass('active');
            $('.actives').removeClass('actives2');
        }
    })
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article2").offset().top;
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

        var here = $(".article3").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.header').addClass('Fixed4');
        } else {
            $('.header').removeClass('Fixed4');
        }
    })
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article4").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.logo-w').addClass('active');
            $('.logo').removeClass('active');
            $('.actives').addClass('actives2');
        }
    })
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article5").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.logo-w').addClass('active');
            $('.logo').removeClass('active');
            $('.actives').addClass('actives2');
        }
    })
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article6").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.logo-w').addClass('active');
            $('.logo').removeClass('active');
            $('.actives').addClass('actives2');
        }
    })
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article7").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.header').addClass('Fixed5');
        } else {
            $('.header').removeClass('Fixed5');
        }
    })
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article8").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.logo-w').addClass('active');
            $('.logo').removeClass('active');
            $('.actives').addClass('actives2');
        }
    })
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article9").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.header').addClass('Fixed6');
        } else {
            $('.header').removeClass('Fixed6');
        }
    })
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article10").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.header').addClass('Fixed6');
        } else {
            $('.header').removeClass('Fixed6');
        }
    })
});


////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(window).scroll(function () {

        var here = $(".article11").offset().top;
        var height = $(document).scrollTop();

        if (here == height) {
            $('.header').addClass('Fixed7');
        } else {
            $('.header').removeClass('Fixed7');
        }
    })
});