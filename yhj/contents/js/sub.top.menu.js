$('.s-t-m-title-1').click(function () {
    $('.s-t-menulist-1').addClass('s-t-m-visible')
});

$('.s-t-m-title-2').click(function () {
    $('.s-t-menulist-2').addClass('s-t-m-visible')
});

$('.s-t-menuBtn').mouseleave(function(){
    $('.s-t-menulist-1').removeClass('s-t-m-visible')
    $('.s-t-menulist-2').removeClass('s-t-m-visible')
});

$('.s-t-menulist').click(function(){
    $('.s-t-menulist').removeClass('s-t-m-visible')
});