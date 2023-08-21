AOS.init({
    once: true
})



var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    speed: 1200,
    loop: true,
    loopedSlides: 1,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".mySwiper2", {
    initialSlide: 0,
    centeredSlides: true,
    slidesPerView: 3.5,
    spaceBetween: 30,
    speed : 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
        },
    },
        breakpoints: {
        2250: {
            slidesPerView: 4.5,
        },
    },
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
}