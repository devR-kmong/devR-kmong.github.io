var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    speed: 500,
    loop: true,
    loopedSlides: 1,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



$(function () {
    $(".floating").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.floating').fadeIn();
            } else {
                $('.floating').fadeOut();
            }
        });
    });
});



$(function () {
    $('.topBtn, .logo').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};