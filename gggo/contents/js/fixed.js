$('.fixedBtn').click(function () {
    $(this).toggleClass('show');
    $('.fixed').toggleClass('show');
    $('.overlay').toggleClass('show');
    $('.fb-arrow').toggleClass('i-rotate');
})

$('.overlay').click(function () {
    $('.fixed').removeClass('show');
    $('.fixedBtn').removeClass('show');
    $('.overlay').removeClass('show');
    $('.fb-arrow').removeClass('i-rotate');
})

$(window).scroll(function () {
    $('.fixed').removeClass('show');
    $('.fixedBtn').removeClass('show');
    $('.overlay').removeClass('show');
    $('.fb-arrow').removeClass('i-rotate');
})