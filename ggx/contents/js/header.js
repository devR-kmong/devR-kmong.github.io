$('.toggle-closeBtn').click(function(){
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
    $('.gnb-menu a').removeClass('gnb-menu-hover')
    $('.sub-menu').removeClass('sub-menu-visible')
});



$(function () {
    var Offset = $('.header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.header').addClass('Fixed');
        }
        else {
            $('.header').removeClass('Fixed');
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

$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.menuBtns .bar').toggleClass('change')
            $('.toggle-menu').removeClass('on')
        }
    }
);



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