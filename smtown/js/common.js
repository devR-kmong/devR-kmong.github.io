AOS.init({
    once: true,
    delay: 100,
    duration: 1200,
})

new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       200,
    mobile:       true,
    live:         true
}).init();



$(function () {
    $('.morelang').hide();
    $('.m-langlist').hide();

    $('.langBtn').click(function () {
        $('.morelang').show();
    });

    $('.morelang').bind("mouseleave", function () {
        $('.morelang').hide();
    });

    $('.m-langBtn').click(function () {
        $('.m-langlist').toggle();
    });

    $(document).click(function (e) {
        if (!$(e.target).hasClass('m-langBtn')) {
            $('.m-langlist').hide();
        }
    })
})


$(document).ready(function () {
    var Offset = $('header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('header').addClass('Fixed');
        }
        else {
            $('header').removeClass('Fixed');
        }
    });
});



$(function () {
    $('.topBtn').hide();
    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.topBtn').fadeIn(150);
            } else {
                $('.topBtn').fadeOut(150);
            }
        });
    });
});

if (window.innerWidth > 1050) {
    $(function () {
        $('.fixed-wrapper').hide();
        
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    $('.fixed-wrapper').fadeIn(150);
                } else {
                    $('.fixed-wrapper').fadeOut(150);
                }
            });
        });
    });
}

if (window.innerWidth < 1051) {
    $(function () {
        $('.fixed-m').hide();
        
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    $('.fixed-m').fadeIn(150);
                } else {
                    $('.fixed-m').fadeOut(150);
                }
            });
        });
    });
}



$(function () {
    $('.topBtn, .remoteBtn a').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



$(window).on('scroll', function () {
    $('.article').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('.remoteBtn a').removeClass('actives');
            $('.remoteBtn a[href=#' + id + ']').addClass('actives');
        }
    });
});




$('.menuBtns').click(function () {
    $(this).toggleClass('change');
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};



$(window).resize(function () {
    var width_size = window.innerWidth;

    if (width_size == 1920) {
        document.location.reload();
    } else if (width_size == 2560) {
        document.location.reload();
    }
})