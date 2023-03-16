$('.menuBtns').click(function () {
    var menubar = $('.menuBtns .bar');
    
    menubar.toggleClass('change');

    if ( menubar.hasClass('change') === true ) {
        $('.toggle-menu').fadeIn(150).css('display', 'flex');
        $('.tm-left li').css('padding-left','0').css('opacity','1');
        $('.tm-info').css('bottom','60px').css('opacity','1');
        $('.tm-vertical').css('width','400px');
    } else {
        $('.toggle-menu').fadeOut(0);
        $('.tm-left li').css('padding-left','80px').css('opacity','0');
        $('.tm-info').css('bottom','-60px').css('opacity','0');
        $('.tm-vertical').css('width','0');
    }
})



$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.tm-left li').css('padding-left','80px').css('opacity','0');
            $('.tm-info').css('bottom','-60px').css('opacity','0');
            $('.tm-vertical').css('width','0');
            $('.menuBtns .bar').removeClass('change');
            $('.toggle-menu').fadeOut(0);
        }
    }
);


$('.toggle-menu').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
})


if (window.innerWidth <= 950) {
    var tmh = $('.tm-l-head');
    $('.tm-left-sub').hide();

    for (let i = 0; i < tmh.length; i++) {
        tmh.eq(i).click(function (e) {
            e.preventDefault();
    
            $('.tm-left-sub').eq(i).slideToggle(80);
            $('.tm-l-head i').eq(i).toggleClass('i-rotate');
            $('.tm-left-sub').not($('.tm-left-sub').eq(i)).slideUp(80);
            $('.tm-l-head i').not($('.tm-l-head i').eq(i)).removeClass('i-rotate');
        })
    }
}