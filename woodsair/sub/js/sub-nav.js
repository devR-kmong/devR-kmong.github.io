$(function () {
    var Offset = $('.sub-nav').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top - 100) {
            $('.sub-nav').addClass('sub-nav-fixed');
        }
        else {
            $('.sub-nav').removeClass('sub-nav-fixed');
        }
    });
});


$(function () {
    $(window).scroll(function () {
        var scrT = $(document).scrollTop();
        if (scrT == $(document).height() - $(window).height()) {
            $('.sub-nav-fixed').css('bottom', '324px');
        } else {
            $('.sub-nav-fixed').css('bottom', '0');
        }
    });
})