if (window.innerWidth > 1165) {
    $(document).ready(function () {
        var Offset = $('.global').offset();
        $(window).scroll(function () {
            if ($(document).scrollTop() > Offset.top) {
                $('.global, .header').addClass('Fixed');
                $('.logo-w').removeClass('active');
                $('.logo').addClass('active');
                $('.menu li a').addClass('Fixed');
            }
            else {
                $('.global, .header').removeClass('Fixed');
                $('.logo-w').addClass('active');
                $('.logo').removeClass('active');
                $('.menu li a').removeClass('Fixed');
            }
        });
    });
} else {
    $(document).ready(function () {
        var Offset = $('.header-m').offset();
        $(window).scroll(function () {
            if ($(document).scrollTop() > Offset.top) {
                $('.header-m').addClass('Fixed');
            }
            else {
                $('.header-m').removeClass('Fixed');
            }
        });
    });
}


$('.menu').bind('mouseenter', function () {
    $('.sub-nav-wrapper').addClass('sub-visible');
});

$('.header').bind('mouseleave', function () {
    $('.sub-nav-wrapper').removeClass('sub-visible');
    $('.menu li').removeClass('bb');
    $('.menu li a').removeClass('cr');
});


if (window.innerWidth > 1250) {
    var menu = $('.menu li');
    var sub = $('.sub-nav ul');
    
    for (let i = 0; i < menu.length; i++) {
        menu.eq(i).hover(function () {
            menu.toggleClass('bb');
            menu.not(menu.eq(i)).removeClass('bb');
            menu.eq(i).children('a').toggleClass('cr');
        })

        sub.eq(i).hover(function () {
            menu.toggleClass('bb');
            menu.not(menu.eq(i)).removeClass('bb');
            menu.eq(i).children('a').toggleClass('cr');
        })
    }
}



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