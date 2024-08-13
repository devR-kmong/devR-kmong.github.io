var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "slide",
    speed: 500,
    loop: true,
    loopedSlides: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});



$(function () {
    $('.a1Btn').click(function () {
        id = $($(this).data('target')).selector;
        $('body').css('overflow', 'hidden');
        $('.a1-popup-wrapper').hide();
        $('#' + id).fadeIn().css('display','flex');
    });

    $('.a1-closeBtn').click(function () {
        $('body').css('overflow', 'unset');
        $('.a1-popup').scrollTop(0)
        $('.a1-popup-wrapper').hide();
    })

    $(document).on(
        'keydown',
        function (event) {
            if (event.key == "Escape") {
                $('body').css('overflow', 'unset');
                $('.a1-popup').scrollTop(0)
                $('.a1-popup-wrapper').hide();
            }
        }
    );
})


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
    $('.topBtn, .logo, nav ul li a').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



$('.menuBtns').click(function () {
    $(this).toggleClass('change');
});

$('nav ul li a').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});

$('.overlay').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};