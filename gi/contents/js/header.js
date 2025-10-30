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




if (window.innerWidth < 1501) {
    let tmHead = $('.tm-l-head');
    let tmList = $('.tm-listBox ul');
    let tmArrow = $('.tm-l-head i');
    
    for (let i = 0; i < tmHead.length; i++) {
        tmHead.eq(i).click(function (e) {
            e.preventDefault();
            tmList.eq(i).toggleClass('on');
            tmArrow.eq(i).toggleClass('i-rotate2');
            tmList.not(tmList.eq(i)).removeClass('on');
            tmArrow.not(tmArrow.eq(i)).removeClass('i-rotate2');
        })
    }
}


$(function () {
    let activeIndex = null;

    // GNB 항목 hover 진입
    $('.gnb-menu-item').on('mouseenter', function () {
        activeIndex = $(this).index() + 1;
        $('.gnb-menu-item a').removeClass('gnb-menu-item-hover');
        $('.gmi-' + activeIndex + ' a').addClass('gnb-menu-item-hover');
    });

    // Sub-menu hover 진입
    $('.sub-menu-list').on('mouseenter', function () {
        activeIndex = $(this).index() + 1;
        $('.gnb-menu-item a').removeClass('gnb-menu-item-hover');
        $('.gmi-' + activeIndex + ' a').addClass('gnb-menu-item-hover');
    });

    // GNB / Sub-menu 영역 벗어날 때
    $('.gnb-menu-item, .sub-menu-list').on('mouseleave', function () {
        setTimeout(function () {
            // 1️⃣ header 전체가 아닌,
            // 2️⃣ gnb-menu 영역만 벗어났을 때 hover 제거
            if (!$('.gnb-menu').is(':hover') && !$('.sub-menu').is(':hover')) {
                $('.gnb-menu-item a').removeClass('gnb-menu-item-hover');
                activeIndex = null;
            }
        }, 50);
    });
});



$(window).scroll(function () {
    $('.sub-menu').removeClass('show');
    $('.gnb-menu-item a').removeClass('gnb-menu-item-hover');
});
$(document).bind("mouseleave", function () {
    $('.sub-menu').removeClass('show');
    $('.gnb-menu-item a').removeClass('gnb-menu-item-hover');
});