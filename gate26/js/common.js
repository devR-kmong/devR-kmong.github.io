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
        delay: 0,
        offset: 100,
        duration: 1200,
    })
}

new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       200,
    mobile:       true,
    live:         false
}).init();



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
    $('.remoteBtn a').click(function (e) {
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



$('.a0-video').click(function () {
    $('.a0-playBtn').hide();
    $('.a0-image').fadeOut();
    $(this).css('cursor', 'default');
});


$('.formBtn').click(function () {
    $('.fixed-form').fadeIn().css('display', 'flex');
})

$('.f-form-closeBtn').click(function () {
    $('.fixed-form').fadeOut();
})



$('.f-personal-text').click(function () {
    if ($('#cb').is(':checked')) {
        $('.f-personal').removeClass('f-personal-no');
        $('.gform .f-submit').attr('disabled', false);
    } else {
        $('.f-personal').addClass('f-personal-no');
        $('.gform .f-submit').attr('disabled', true);
    }
})

$('.fixed-form').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
})

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