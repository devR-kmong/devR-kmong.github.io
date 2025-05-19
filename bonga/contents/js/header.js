$(function () {
    var Offset = $('.header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.header').addClass('Fixed');
            $('.logo-w').addClass('active');
            $('.logo').removeClass('active');
            $('.gnb ul li a').addClass('Fixed2');
            $('.bar1, .bar2, .bar3').addClass('bar-color');
        }
        else {
            $('.header').removeClass('Fixed');
            $('.logo-w').removeClass('active');
            $('.logo').addClass('active');
            $('.gnb ul li a').removeClass('Fixed2');
            $('.bar1, .bar2, .bar3').removeClass('bar-color');
        }
    });
});


$('.menuBtns').click(function () {
    $(this).toggleClass('change');
});

$('.gnb ul li a').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});

$('.overlay').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});