AOS.init({
    once: true,
    delay: 100,
    duration: 1200,
})



if (window.innerWidth > 1600) {
    new WOW({
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       0,
        mobile:       true,
        live:         true
    }).init();
} else {
    new WOW({
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       200,
        mobile:       true,
        live:         true
    }).init();
}



$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})



$(function () {
    $('.floating').hide();
    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('.floating').fadeIn();
            } else {
                $('.floating').fadeOut();
            }
        });
    });
});



$(window).on('scroll', function () {
    $('section').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('.gnb ul li a').removeClass('actives');
            $('.gnb ul li a[href=#' + id + ']').addClass('actives');
        }
    });
});


$(window).on('scroll', function () {
    $('.article').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('.remoteBtn').removeClass('actives');
            $('.remoteBtn[href=#' + id + ']').addClass('actives');
        }
    });
});



$(function () {
    $('.remoteBtn, .logo, .logo-w').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



if (window.innerWidth > 1600) {
    $('.header, .pp-wrapper').on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    })
}  



if (window.innerWidth > 1600) {
    document.write(
        '<script src="contents/js/box_scroll.js"><\/script>'
    )
    document.write(
        '<script src="contents/js/header.fixed.js"><\/script>'
    )
}
else {
    document.clear(
        '<script src="contents/js/box_scroll.js"><\/script>'
    )
    document.clear(
        '<script src="contents/js/header.fixed.js"><\/script>'
    )
    document.write(
        '<script src="contents/js/header.fixed.m.js"><\/script>'
    )
}



$(window).resize(function () {
    var width_size = window.innerWidth;

    if (width_size == 1920) {
        document.location.reload();
    }

    if (width_size == 2560) {
        document.location.reload();
    }
})




if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}




var isVisible = false;

$(window).on('scroll', function () {
    if (checkVisible($('.article6')) && !isVisible) {
        $(function () {
            var idx = 0;
            setInterval(time, 800);
            function time() {
                var box = $('.a6-list li');
                box.eq(idx).addClass('on');
                idx++;
                if (idx >= 6) {
                    box.removeClass('on');
                    idx = 0
                };
            }
        });
        isVisible = true;
    }
});

function checkVisible(elm, eval) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}