AOS.init({
    once: true,
    delay: 100,
    offset: 200,
    duration: 1200,
})



$(document).ready(function () {
    var Offset = $('.menu').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.menu').addClass('Fixed');
        }
        else {
            $('.menu').removeClass('Fixed');
        }
    });
});



$(function () {
    $('.scrBtn').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



$('.menuBtns').click(function () {
    $(this).toggleClass('change');
})

$('.menu li a').click(function () {
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