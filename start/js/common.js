new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 300,
    mobile: true,
    live: true
}).init();



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
});



var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



$(function () {
    $('.fl-top').click(function (e) {
        $.scrollTo(this.hash || 0, 300);
        e.preventDefault();
    });
});



$(function () {
    $(".fl-top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.fl-top').fadeIn(80);
                $('.scrollDown').fadeOut();
            } else {
                $('.fl-top').fadeOut(80);
                $('.scrollDown').fadeIn();
            }
        });
    });
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}