$(function () {
    $('.menu').bind("mouseenter", function () {
        $('.sub-menu').fadeIn(50).css('display','flex');
        $('.header').addClass('more');
    })

    $('.header').bind("mouseleave", function () {
        $('.sub-menu').fadeOut(50);
        $('.header').removeClass('more');
    })
});



$(window).scroll(function () {
    $('.sub-menu').fadeOut(150);
    $('.header').removeClass('more');
});
$(document).bind("mouseleave", function () {
    $('.sub-menu').fadeOut(150);
    $('.header').removeClass('more');
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



$(function () {
    $('.menuBtns').click(function () {
        $('.toggleMenu').fadeIn(300).css('display','flex');
    })
    
    $('.tgm-close').click(function () {
        $('.toggleMenu').fadeOut(300);
    })
});

if (window.innerWidth > 768) {
    $(function () {
        $('.tgm-menu').bind("mouseenter", function () {
            id = $($(this).data('target')).selector;
            $('.tgm-sub').hide();
            $('#' + id).fadeIn(150).css('display','flex');
        });
    
        $('.tgm-menu').bind("mouseleave", function () {
            $('.tgm-sub').fadeOut(150);
        });
    })
};

if (window.innerWidth < 769) {
    let thead = $('.tgm-head');
    let tsub = $('.tgm-sub');
    let tarrow = $('.tgm-head i');
    
    tsub.hide();
    
    for (let i = 0; i < thead.length; i++) {
        thead.eq(i).click(function (e) {
            e.preventDefault();
    
            tsub.not(tsub.eq(i)).slideUp(80);
            tsub.eq(i).slideToggle(80);
            tarrow.not(tarrow.eq(i)).removeClass('i-rotate');
            tarrow.eq(i).toggleClass('i-rotate');
        })
    }
};

$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.toggleMenu').fadeOut(300);
        }
    }
);


$('.toggleMenu').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
});