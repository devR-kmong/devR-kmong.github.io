$('.full-menu').hide();
$('.c-icon').hide();

$('.pc-m-icon').click(function () {
    $('.header').css('z-index','998');
    $('.full-menu').show();
    $(window).scrollTop(0);
    $('main, .footer').hide();
    $(this).hide();
    $('.c-icon').show();
    $('.m-icon').hide();
})

$('.fm-closeBtn').click(function () {
    $('.full-menu').hide();
    $('main, .footer').show();
    $('.pc-m-icon').show();
    $('.c-icon').hide();
    $('.m-icon').show();
})

$('.m-icon').click(function () {
    $('.header').css('z-index','999');
    $(this).hide();
    $('.c-icon').show();
    $('.full-menu').show();
    $('main, .footer').hide();
    $(window).scrollTop(0);
})

$('.c-icon').click(function () {
    $('.header').css('z-index','998');
    $(this).hide();
    $('.m-icon').show();
    $('.full-menu').hide();
    $('main, .footer').show();
})



for (let i=0; i < 99; i++) {
    $('.fm-l-' + i).hide();
    $('.fm-t-' + i).click(function () {
        $('.fm-l-' + i).slideToggle(100);
        $('.fm-list').not('.fm-l-' + i).slideUp(100);
    })
}