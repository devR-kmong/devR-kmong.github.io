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

