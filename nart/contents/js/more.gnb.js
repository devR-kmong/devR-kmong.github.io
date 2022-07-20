$('.header').bind("mouseleave", function(){
    $('.sub-menu').removeClass('sub-menu-visible')
});

$('.toggle-closeBtn').click(function(){
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
    $('.gnb-more-menu a').removeClass('gnb-menu-hover')
    $('.sub-menu').removeClass('sub-menu-visible')
});

$('.gnb-more-menu').hover(function(){
    $('.sub-menu').toggleClass('sub-menu-visible')
});

$('.sub-menu').hover(function(){
    $('.sub-menu').toggleClass('sub-menu-visible')
    $('.gnb-more-menu a').toggleClass('gnb-menu-item-hover')
});