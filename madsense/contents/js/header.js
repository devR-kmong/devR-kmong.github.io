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



if (window.innerWidth > 1400) {
    $(function () {    
        for (let i=0; i<$('.menu-item').length; i++) {
            $('.menu-item').eq(i).mouseenter(function () {
                $('.mh-' + i).show().css('display','flex');
            })
    
            $('.menu-item').eq(i).mouseleave(function () {
                $('.mh-' + i).hide();
            })
        }
    })

    $(window).scroll(function(){
        $('.menu-hover').hide();
    });
    
    $(document).bind("mouseleave", function(){
        $('.menu-hover').hide();
    });
}



if (window.innerWidth <= 1400) {
    let mih = $('.mi-head');
    let mhv = $('.menu-hover');
    let arrow = $('.mi-head i');

    mih.click(function (e) {
        e.preventDefault();
    })

    for (let i = 0; i < mih.length; i++) {
        mih.eq(i).click(function () {
            mhv.not(mhv.eq(i)).removeClass('on');
            arrow.not(arrow.eq(i)).removeClass('i-rotate');
            mhv.eq(i).toggleClass('on');
            arrow.eq(i).toggleClass('i-rotate');
        })
    }
}



$(function () {
    $('.toggleBtn').click(function () {
        $('body').addClass('on');
        $('.menu').show();
        $('.closeBtn').show();
    })

    $('.closeBtn').click(function () {
        $('body').removeClass('on');
        $(this).hide();
        $('.menu').hide();
    })
})