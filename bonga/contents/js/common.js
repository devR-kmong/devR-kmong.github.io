new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       300,
    mobile:       true,
    live:         true
}).init();


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
    $('.floating').hide();
    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.floating').fadeIn(80);
            } else {
                $('.floating').fadeOut(80);
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



$(function () {
    $('.logo, .logo-f, .gnb ul li a, .scroll, .topBtn').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};