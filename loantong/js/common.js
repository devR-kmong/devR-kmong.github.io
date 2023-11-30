AOS.init({
    once: true,
    offset: 300,
    duration: 1200,
    easing: 'ease'
});



$('.tb-closeBtn').click(function () {
    $('.top-banner').hide();
    $('header').css('top', '0px');
})


$(function () {
    if (window.innerWidth > 850) {
        $('.p-text').removeAttr('data-aos');
    }
})



$(function () {
    if (window.innerWidth > 850) {
        $(".totop").hide();
        $(".floating").hide();
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    $('.floating').fadeIn(120).css('display', 'flex');
                    $('.totop').fadeIn(120);
                } else {
                    $('.floating').fadeOut(120);
                    $('.totop').fadeOut(120);
                }
            });
        });
    }
});



$(window).on('scroll', function () {
    $('section').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('nav ul li a').removeClass('actives');
            $('nav ul li a[href=#' + id + ']').addClass('actives');
        }
    });
});



$(function () {
    $('.logo, nav ul li a, .a1-box, .topBtn, .totop').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



$('.menuBtns').click(function () {
    $(this).toggleClass('change')
});

$('nav ul li a').click(function () {
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
});

$('.overlay').click(function () {
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
});



$(window).resize(function () {
    var width_size = window.innerWidth;

    if (width_size == 1920) {
        document.location.reload();
    } else if (width_size == 2560) {
        document.location.reload();
    }
})



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};