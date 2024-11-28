AOS.init({
    once: true,
    delay: 100,
    offset: 200,
    duration: 1200,
});



$(function () {
    $('.floating').hide();
    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.scrollDown').fadeOut(80);
            } else {
                $('.scrollDown').fadeIn(80);
            }
        });
    });
});



$('.menuBtns').click(function () {
    $(this).toggleClass('change');
});
$('nav ul li a').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});
$(window).scroll(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});
$(document).bind("mouseleave", function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};