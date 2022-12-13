$(document).ready(function () {
    var Offset = $('nav').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('nav').addClass('Fixed');
        }
        else {
            $('nav').removeClass('Fixed');
        }
    });
});