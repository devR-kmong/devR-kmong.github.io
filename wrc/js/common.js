AOS.init({
    once: true,
    delay: 100,
    offset: 200,
    duration: 1200,
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



$(function () {
    $('.logo, nav a').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};



var swiper = new Swiper(".hSwiper", {
    lazy: true,
    effect: "coverflow",
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



$(function () {
    $('.hs-year').click(function () {
        id = $($(this).data('target')).selector;
        $('body').css('overflow', 'hidden');
        $('.hs-popup-wrapper').hide();
        $('#' + id).fadeIn().css('display','flex');
    });

    $('.hs-closeBtn').click(function () {
        $('body').css('overflow', 'unset');
        $('.hs-popup').scrollTop(0)
        $('.hs-popup-wrapper').hide();
    })

    $(document).on(
        'keydown',
        function (event) {
            if (event.key == "Escape") {
                $('body').css('overflow', 'unset');
                $('.hs-popup').scrollTop(0)
                $('.hs-popup-wrapper').hide();
            }
        }
    );
})