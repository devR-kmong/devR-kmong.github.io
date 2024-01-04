var swiper = new Swiper(".eSwiper", {
    speed: 600,
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 0,
    grabCursor: false,
    breakpoints: {
        769: {
            slidesPerView: 13,
            slidesPerGroup: 13,
        },
        2250: {
            slidesPerView: 17,
            slidesPerGroup: 17,
        }
    },
    navigation: {
        nextEl: ".e-sbn",
        prevEl: ".e-sbp",
    },
});




$('.swiper-slide').click(function () {
    $(this).addClass('on');
    $('.swiper-slide').not($(this)).removeClass('on');
    $('.es-univ img').removeClass('on')
    $('.es-box-wrapper, .es-5, .es-table').hide();
})




$('.es-1').click(function () {
    $('.es-box-wrapper').show().css('display', 'flex');
})




$(function () {
    $('.esBtn').click(function () {
        id = $($(this).data('target')).selector;
        $('.es-box').hide();
        $('#' + id).show().css('display','flex');
    });
});




$(function () {
    for (let i = 0; i < $('.esBtn').length; i++) {
        $('.esBtn').eq(i).click(function () {
            $('.esBtn').removeClass('on');
            $(this).addClass('on');
        })
    }
})




$('.es-univ img').click(function () {
    $(this).toggleClass('on');
})




$('.es-4-07').click(function () {
    $('.es-5').toggle();
    $('.es-table').toggle();
})

$('.es-4-12').click(function () {
    $('.es-4-12-tr').toggle();
})




$('.es5Btn.wish').click(function () {
    $(this).toggleClass('on');
    $(this).text($(this).text() == '삭제' ? '추가' : '삭제');
})