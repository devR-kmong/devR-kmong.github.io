$(function () {
    $(window).scroll(function () {
        var here = $('.header').offset().top;

        if (here > 0) {
            $('.logo').removeClass('active');
            $('.logo-w').addClass('active');
            $('.menuBtn').addClass('on');
            $('.telBtn').addClass('on');
        } else {
            $('.logo').addClass('active');
            $('.logo-w').removeClass('active');
            $('.menuBtn').removeClass('on');
            $('.telBtn').removeClass('on');
        }
    })
});


////////////////////////////////////////////////////////////////////
if (window.innerWidth > 1600) {
    $(function () {
        $(window).scroll(function () {
            var here = $('.article8').offset().top;
            var height = $(document).scrollTop();
    
            if (here <= height) {
                $('.logo').addClass('active');
                $('.logo-w').removeClass('active');
                $('.menuBtn').removeClass('on');
                $('.telBtn').removeClass('on');
                $('.remoteBtn.actives').addClass('on');
            }
        })
    });
}