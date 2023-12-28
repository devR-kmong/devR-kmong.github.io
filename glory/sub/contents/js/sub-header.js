$(function () {
    $('.menu').bind("mouseenter", function () {
        $('.logo').show();
        $('.logo-s').hide();
    })

    $('.header').bind("mouseleave", function () {
        $('.logo').hide();
        $('.logo-s').show();
    })
});