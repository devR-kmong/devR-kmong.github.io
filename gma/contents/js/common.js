new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       200,
    mobile:       true,
    live:         true
}).init();



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
});




if (window.innerWidth > 850) {
    $(function () {
        $('.floating').hide();
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    $('.floating').fadeIn(120);
                    $('.scrollDown').fadeOut(120);
                } else {
                    $('.floating').fadeOut(120);
                    $('.scrollDown').fadeIn(120);
                }
            });
        });
    });
}



$(window).on('scroll', function () {
    $('section').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('.gnb li a').removeClass('actives');
            $('.gnb li a[href=#' + id + ']').addClass('actives');
        }
    });
});




$('.menuBtns').click(function () {
    $(this).toggleClass('change');
})

$('.gnb li a').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
})

$('.overlay').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
})




if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}