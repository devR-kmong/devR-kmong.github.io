$(function () {
    let lastScroll = 0;

    $(window).on('scroll', function () {
        const currentScroll = $(this).scrollTop();

        if (currentScroll <= 0) {
            $('.header').removeClass('hide');
        } else if (currentScroll > lastScroll) {
            $('.header').addClass('hide');
        } else {
            $('.header').removeClass('hide');
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



$(function () {
    $('.menu-item.dt').bind('mouseenter', function () {
        id = $($(this).data('target')).selector;
        $('.sub-menu').slideDown(60).css('display', 'flex');
        $('.sub-menu ul').hide();
        $('#' + id).show().css('display','flex');
    });

    $('.header').bind('mouseleave', function () {
        $('.sub-menu').slideUp(60);
    })

    $('.menu-item.no-sub').bind('mouseenter', function () {
        $('.sub-menu').hide();
    })
});



$(function () {
    $('.menuBtns').click(function () {
        $(this).toggleClass('change');
    })
    
    $('.mobile-menu li a').click(function () {
        $('#check').prop('checked', false);
        $('.menuBtns').removeClass('change');
    })
})


if (window.innerWidth <= 1450) {
    $('.mobile-menu .m-head').click(function () {
        let $sub = $(this).siblings('.m-sub');
        let $arrow = $(this).find('i');

        $('.mobile-menu .m-sub').not($sub).removeClass('on');
        $('.mobile-menu .m-head i').not($arrow).removeClass('i-rotate');

        $sub.toggleClass('on');
        $arrow.toggleClass('i-rotate');
    });
}