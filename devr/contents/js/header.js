$('.tb-closeBtn').click(function () {
    $('.top-banner').hide();
    $('.header').css('top', '0px');
    $('.tm-header').css('top', '0px');
})

$('.toggleBtn').click(function () {
    $('.toggle-menu').fadeIn().css('display', 'flex');
    $('.tm-left li').css('padding-left','0').css('opacity','1');
})

$('.tm-closeBtn').click(function () {
    $('.toggle-menu').hide();
    $('.tm-left li').css('padding-left','100px').css('opacity','0');
})

$('.menu-item').click(function () {
    $('.menu-hover').hide();
    $('.tm-left li').css('padding-left','100px').css('opacity','0');
})

$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.toggle-menu').hide();
            $('.tm-left li').css('padding-left', '100px').css('opacity', '0');
        }
    }
);


$(function () {    
    for (let i=0; i<$('.menu-item').length; i++) {
        $('.menu-item').eq(i).mouseenter(function () {
            $('.mh-' + i).fadeIn(120).css('display','flex');
        })

        $('.menu-item').eq(i).mouseleave(function () {
            $('.mh-' + i).hide();
        })
    }
})

$(window).scroll(function(){
    $('.menu-hover').hide();
});
$(document).bind("mouseleave", function(){
    $('.menu-hover').hide();
});


$('.toggle-menu').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
})