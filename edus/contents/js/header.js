$(document).scroll(function(){
    $('.sub-nav-wrapper').slideUp(120);
});

$('.header').bind("mouseleave", function(){
    $('.sub-nav-wrapper').slideUp(120);
});

$('.nav-bottom').hover(function(){
    $('.sub-nav-wrapper').slideDown(120).css('display','flex');
});