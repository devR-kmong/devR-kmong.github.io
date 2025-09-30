
$('.toggle-closeBtn').click(function(){
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
    $('.gnb-menu a').removeClass('gnb-menu-hover')
    $('.sub-menu').removeClass('show')
});

$(function () {
    $('.gnb-menu-item[data-target]').on("mouseenter", function () {
        $('.sub-menu').addClass('show');
        var id = $(this).data('target');
        $('.sub-menu-list').hide();
        $('#' + id).show().css('display','flex');
    });

    $('.gnb-menu-item[data-target], .sub-menu').on("mouseleave", function (e) {
        if ($(e.relatedTarget).closest('.sub-menu').length) return;

        $('.sub-menu').removeClass('show');
        $('.sub-menu-list').hide();
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
    $(this).toggleClass('on');
})




if (window.innerWidth > 1250) {
    $('.toggle-menu').on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    })
} 



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