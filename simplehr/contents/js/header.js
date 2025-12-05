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
            mhv.eq(i).toggleClass('on');
            arrow.eq(i).toggleClass('i-rotate');
        })
    }
}



$(function () {
    $('.toggleBtn').on('click', function () {
        $(this).toggleClass('closeBtn');
        $(this).find('i').toggleClass('ri-menu-line ri-close-large-line');

        if ($(this).hasClass('closeBtn')) {
            $('.menu').css('display', 'flex'); // 열기
        } else {
            $('.menu').hide(); // 닫기
        }
    });

    $('.svBtn').click(function () {
        $('.menu').hide(); // 닫기
        $('.toggleBtn').removeClass('closeBtn');
        $('.toggleBtn').find('i').toggleClass('ri-menu-line ri-close-large-line');
    })
});
