$(function () {
    let lastScroll = 0;

    $(window).on('scroll', function () {
        const currentScroll = $(this).scrollTop();

        if (currentScroll <= 0) {
            $('.header').removeClass('white hide');
        } else if (currentScroll > lastScroll) {
            $('.header').addClass('hide').removeClass('white');
        } else {
            $('.header').removeClass('hide').addClass('white');
        }

        lastScroll = currentScroll;
    });
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
    $('.overlay').toggleClass('on')
    $('body').toggleClass('no-scroll');
    $(this).toggleClass('on');
})

$('.overlay').click(function () {
    $('.toggle-menu').removeClass('on');
    $('.menuBtns').removeClass('on');
    $('.menuBtns .bar').removeClass('change');
    $('body').removeClass('no-scroll');
    $(this).removeClass('on');
})


if (window.innerWidth < 551) {
    let tmHead = $('.tm-l-head');
    let tmList = $('.tm-listBox ul');
    let tmArrow = $('.tm-l-head i');
    
    for (let i = 0; i < tmHead.length; i++) {
        tmHead.eq(i).click(function () {
            tmList.eq(i).toggleClass('on');
            tmArrow.eq(i).toggleClass('i-rotate2');
            tmList.not(tmList.eq(i)).removeClass('on');
            tmArrow.not(tmArrow.eq(i)).removeClass('i-rotate2');
        })
    }
}