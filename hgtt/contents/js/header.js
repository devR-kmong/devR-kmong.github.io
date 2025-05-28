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

$('.gnb-menu').hover(function(){
    $('.sub-menu').toggleClass('sub-menu-visible')
});

$('.sub-menu').hover(function(){
    $('.sub-menu').toggleClass('sub-menu-visible')
});

for (let i = 1; i <= $('.sub-menu-list').length; i++) {
    $('.s-m-l-'+i).hover(function(){
        $('.g-m-i-'+i+' a').toggleClass('gnb-menu-item-hover')
    });
}



$(function () {
    var Offset = $('.header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.header').addClass('Fixed');
            $('.logo-w').addClass('active');
            $('.logo').removeClass('active');
            $('.menu li a').addClass('Fixed2');
            $('.bar1, .bar2, .bar3').addClass('bar-color');
        }
        else {
            $('.header').removeClass('Fixed');
            $('.logo-w').removeClass('active');
            $('.logo').addClass('active');
            $('.menu li a').removeClass('Fixed2');
            $('.bar1, .bar2, .bar3').removeClass('bar-color');
        }
    });
});


$('.menu li a').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
})

$('.overlay').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
})

$('.menuBtns').click(function () {
    $('.menuBtns .bar').toggleClass('change')
    $('.toggle-menu').toggleClass('on')
    $(this).toggleClass('on');
    $('.tm-listBox ul').removeClass('on');
    $('.tm-l-head i').removeClass('i-rotate2');
})



if (window.innerWidth < 1251) {
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