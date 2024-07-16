$(document).scroll(function(){
    $('.sub-menu').removeClass('sub-menu-visible')
    $('.gnb-menu a').removeClass('gnb-menu-hover')
});

$('.header').bind("mouseleave", function(){
    $('.sub-menu').removeClass('sub-menu-visible')
});

$('.toggle-closeBtn').click(function(){
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
    $('.gnb-menu a').removeClass('gnb-menu-hover')
    $('.sub-menu').removeClass('sub-menu-visible')
});

$('.gnb-menu-item').hover(function(){
    $('.sub-menu').toggleClass('sub-menu-visible')
});

$('.s-m-l-1').hover(function(){
    $('.g-m-i-1 a').toggleClass('gnb-menu-item-hover')
});

$('.s-m-l-2').hover(function(){
    $('.g-m-i-2 a').toggleClass('gnb-menu-item-hover')
});

$('.s-m-l-3').hover(function(){
    $('.g-m-i-3 a').toggleClass('gnb-menu-item-hover')
});

$('.s-m-l-4').hover(function(){
    $('.g-m-i-4 a').toggleClass('gnb-menu-item-hover')
});

$('.s-m-l-5').hover(function(){
    $('.g-m-i-5 a').toggleClass('gnb-menu-item-hover')
});

$('.sub-menu').hover(function(){
    $('.sub-menu').toggleClass('sub-menu-visible')
});



$(function () {
    var Offset = $('.header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.header').addClass('Fixed');
            $('.logo-w').addClass('active');
            $('.logo').removeClass('active');
            $('.gnb-menu li a').addClass('Fixed2');
        }
        else {
            $('.header').removeClass('Fixed');
            $('.logo-w').removeClass('active');
            $('.logo').addClass('active');
            $('.gnb-menu li a').removeClass('Fixed2');
        }
    });
});


$('.menuBtns').click(function () {
    $('.menuBtns .bar').toggleClass('change')
    $('.toggle-menu').toggleClass('on')
})




if (window.innerWidth > 1250) {
    $('.toggle-menu').on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    })
} 