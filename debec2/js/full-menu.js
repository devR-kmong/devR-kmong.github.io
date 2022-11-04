$('.c-icon').hide();

$('.pc-m-icon').click(function () {
    $('.header').css('z-index','998');
    $('.full-menu').show().css('display','flex');
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
    $('.m-fm-middle .fm-list-wrapper .fm-list').hide();
})


let fmTit = $('.m-fm-middle .fm-list-wrapper .fm-list-title')
let fmList = $('.m-fm-middle .fm-list-wrapper .fm-list')

fmList.hide();

for (let i = 0; i < fmList.length; i++) {
    fmTit.eq(i).click(function () {
        fmList.eq(i).slideToggle(100);
        fmList.not(fmList.eq(i)).slideUp(100);
    })
}