AOS.init({
    once: true
})



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}




for (let i = 0; i < $('.p-tabBtn').length; i++) {
    $('.p-tabBtn').eq(i).click(function () {
        $('.p-tabBtn').removeClass('show');
        $(this).addClass('show');
        $('.p-box').removeClass('show');
        $('.p-box').eq(i).addClass('show');
    })
}



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        451: {
            slidesPerView: 1.5,
        },
        769: {
            slidesPerView: 2,
        },
        1251: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        769: {
            slidesPerView: 3,
        },
        1251: {
            slidesPerView: 4,
        },
    },
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
});