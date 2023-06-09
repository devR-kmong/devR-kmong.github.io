AOS.init({
    once: true
});


new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       200,
    mobile:       true,
    live:         true
}).init();



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
});



$(function () {
    $('.floating').hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.scrollDown').fadeOut(80);
            } else {
                $('.scrollDown').fadeIn(80);
            }
        });
    });
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
    $('.logo, .logo-w, .askBtn, .moreBtn').click(function (e) {
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


if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};