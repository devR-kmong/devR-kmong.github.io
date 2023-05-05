$(document).ready(function () {
    var Offset = $('.gnb').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.gnb').addClass('Fixed');
        }
        else {
            $('.gnb').removeClass('Fixed');
        }
    });
});
