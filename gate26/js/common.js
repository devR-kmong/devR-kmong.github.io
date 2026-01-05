if (window.innerWidth > 768) {
    AOS.init({
        once: true,
        delay: 100,
        offset: 300,
        duration: 1200,
    })
} else if (window.innerWidth > 2250) {
    AOS.init({
        once: true,
        delay: 150,
        offset: 400,
        duration: 1200,
    })
} else {
    AOS.init({
        once: true,
        delay: 50,
        offset: 200,
        duration: 1200,
    })
}

if (window.innerWidth > 768) {
    new WOW({
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       200,
        mobile:       true,
        live:         false
    }).init();
} else {
    new WOW({
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       300,
        mobile:       true,
        live:         false
    }).init();
}



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



$(function () {
    $('.remoteBtn a, .logo, .logo-w, .logo-f').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



$(window).on('scroll', function () {
    $('.article').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 350) {
            var id = $(this).attr('id');
            $('.remoteBtn a').removeClass('actives');
            $('.remoteBtn a[href=#' + id + ']').addClass('actives');
        }
    });
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};



$('.menuBtns').click(function () {
    $(this).toggleClass('change');
    $('.logo-w').toggleClass('hide');
    $('.logo').toggleClass('hide');
});

$('.m-menuBtn').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
    $('.logo-w').removeClass('hide');
    $('.logo').addClass('hide');
});



if (window.innerWidth > 768) {
    $(function () {
        $('.a0-video').click(function () {
            $('.a0-playBtn').hide();
            $('.a0-image').hide();
            $(this).css('cursor', 'default');
        });
    })
}




if (window.innerWidth > 550) {
    $('.formBtn').click(function () {
        $('.fixed-form').fadeIn().css('display', 'flex');
    })
    
    $('.f-form-closeBtn').click(function () {
        $('.fixed-form').fadeOut();
    })
} else {
    $('.formBtn').click(function () {
        $('.fixed-form').show().css('display', 'flex');
    })
    
    $('.f-form-closeBtn').click(function () {
        $('.fixed-form').hide();
    })
}



$('.f-personal-text').click(function () {
    if ($('#cb').is(':checked')) {
        $('.f-personal').removeClass('f-personal-no');
        $('.gform .f-submit').attr('disabled', false);
    } else {
        $('.f-personal').addClass('f-personal-no');
        $('.gform .f-submit').attr('disabled', true);
    }
})

if (window.innerWidth > 550) {
    $('.fixed-form').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
})
}

$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});

$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.fixed-form').fadeOut();
        }
    }
);




const lenis = new Lenis({
    duration: 1.2,
    wheelMultiplier: 0.6,
    wrapper: window,
    content: document.documentElement,
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
});

document.querySelectorAll('.fBtn-popup').forEach(el => {
    el.addEventListener('wheel', e => {
        // 내부에서 스크롤이 가능한 경우 이벤트 전파 막지 않음
        const isScrollable = el.scrollHeight > el.clientHeight
        if (isScrollable) {
            e.stopPropagation()
        }
    })
})

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);