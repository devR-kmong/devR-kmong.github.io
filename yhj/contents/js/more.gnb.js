$('.header').bind("mouseleave", function(){
    $('.sub-menu').removeClass('sub-menu-visible')
});

$('.toggle-closeBtn, .toggle-menu-list li').click(function(){
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
    $('.gnb-menu a').removeClass('gnb-menu-hover')
    $('.sub-menu').removeClass('sub-menu-visible')
});

$('.gnb-menu-item').click(function(){
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

$('.sub-menu-list').click(function(){
    $('.sub-menu').removeClass('sub-menu-visible')
});


for (let i = 1; i < 99; i++) {
    $('.t-m-h-' + i).click(function () {
        $('.t-m-l-' + i).toggleClass('t-m-l-visible')
        $('.t-m-i-' + i).toggleClass('t-m-i-rotate')
    });
}

$('.t-m-h-1').click(function(){
    $('.t-m-l-2, .t-m-l-3, .t-m-l-4, .t-m-l-5').removeClass('t-m-l-visible')
    $('.t-m-i-2, .t-m-i-3, .t-m-i-4, .t-m-i-5').removeClass('t-m-i-rotate')
});

$('.t-m-h-2').click(function(){
    $('.t-m-l-1, .t-m-l-3, .t-m-l-4, .t-m-l-5').removeClass('t-m-l-visible')
    $('.t-m-i-1, .t-m-i-3, .t-m-i-4, .t-m-i-5').removeClass('t-m-i-rotate')
});

$('.t-m-h-3').click(function(){
    $('.t-m-l-2, .t-m-l-1, .t-m-l-4, .t-m-l-5').removeClass('t-m-l-visible')
    $('.t-m-i-2, .t-m-i-1, .t-m-i-4, .t-m-i-5').removeClass('t-m-i-rotate')
});

$('.t-m-h-4').click(function(){
    $('.t-m-l-2, .t-m-l-3, .t-m-l-1, .t-m-l-5').removeClass('t-m-l-visible')
    $('.t-m-i-2, .t-m-i-3, .t-m-i-1, .t-m-i-5').removeClass('t-m-i-rotate')
});

$('.t-m-h-5').click(function(){
    $('.t-m-l-2, .t-m-l-3, .t-m-l-4, .t-m-l-1').removeClass('t-m-l-visible')
    $('.t-m-i-2, .t-m-i-3, .t-m-i-4, .t-m-i-1').removeClass('t-m-i-rotate')
});