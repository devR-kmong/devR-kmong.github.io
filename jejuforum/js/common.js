if (window.innerWidth > 768) {
    AOS.init({
        once: true,
        delay: 100,
        offset: 200,
        duration: 1200,
    })
} else {
    AOS.init({
        once: true,
        delay: 50,
        offset: 100,
        duration: 1200,
    })
}

$(function () {
    $('.topBtn').hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.topBtn').fadeIn(80);
            } else {
                $('.topBtn').fadeOut(80);
            }
        });
    });
});


$(function () {
    $('.topBtn, .scrto').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});


$(function () {
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


$('.menuBtns').click(function () {
    $(this).toggleClass('change');
});

$('nav ul li a').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});



$(function () {
    $('.a5Btn').click(function () {
        $('.a5-popup-wrapper').fadeIn(100).css('display', 'flex');
        id = $($(this).data('target')).selector;
        $('.a5-popup').hide();
        $('#' + id).show().css('display', 'flex');
        $('body').addClass('on');
    });

    $('.a5-popup-closeBtn').click(function () {
        $('.a5-popup-wrapper').fadeOut(100);
        $('body').removeClass('on');
    })
});

if (window.innerWidth > 991) {
    $(document).mouseup(function (e) {
        var LayerPopup = $('.a5-popup-wrapper');
        if (LayerPopup.has(e.target).length === 0) {
            LayerPopup.fadeOut(100);
            $('body').removeClass('on');
        }
    });
}

$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.a5-popup-wrapper').fadeOut(100);
            $('body').removeClass('on');
        }
    }
);


if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};