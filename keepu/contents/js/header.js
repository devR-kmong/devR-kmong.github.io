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



if (window.innerWidth > 768) {
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
    
    $(document).bind("mouseleave", function(){
        $('.menu-hover').hide();
    });
}



if (window.innerWidth <= 768) {
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
    $('.menuBtns').click(function () {
        $('body').toggleClass('on');
        $('.menu').toggleClass('show');
    })
})