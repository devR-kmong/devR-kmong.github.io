$(document).scroll(function(){
    $('.sub-nav-wrapper').slideUp(120);
});

$('.header').bind("mouseleave", function(){
    $('.sub-nav-wrapper').slideUp(120);
});

$('.nav-bottom').hover(function(){
    $('.sub-nav-wrapper').slideDown(120).css('display','flex');
});



if (window.innerHeight > 700) {
    $('.tgm-wrapper').on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    })
}


if (window.innerWidth <= 1250) {
    var tmh = $('.tgm-head');
    $('.tgm-more').hide();

    for (let i = 0; i < tmh.length; i++) {
        tmh.eq(i).click(function (e) {
            e.preventDefault();
    
            $('.tgm-more').eq(i).slideToggle(80);
            $('.tgm-head i').eq(i).toggleClass('i-rotate');
            $('.tgm-more').not($('.tgm-more').eq(i)).slideUp(80);
            $('.tgm-head i').not($('.tgm-head i').eq(i)).removeClass('i-rotate');
        })
    }
}


$('.tg-menu').click(function () {
    $('.tgm-wrapper').show();
})
$('.tg-close').click(function () {
    $('.tgm-wrapper').hide();
})