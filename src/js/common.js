AOS.init({
    once: true,
    delay: 100,
    offset: 200,
    duration: 800,
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




$(window).on('scroll', function () {
    $('section').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('nav ul li a').removeClass('actives');
            $('nav ul li a[href=#' + id + ']').addClass('actives');
        }
    });
});



$(function () {
    $('.logo, nav ul li a, .gnb-m ul li a, .logo-f, .fl-top ul li a').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



$('.menuBtns').click(function () {
    $(this).toggleClass('change');
});

$('.gnb-m ul li a').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};



if (window.innerWidth > 1550) {
    document.addEventListener("mousemove", parallax);
    function parallax(event) {
        this.querySelectorAll(".p-image").forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - event.pageX * position) / 90;
            const y = (window.innerHeight - event.pageY * position) / 90;

            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
}

if (window.innerWidth > 1550) {
    document.addEventListener("mousemove", parallax2);
    function parallax2(event2) {
        this.querySelectorAll(".a10-coin").forEach((shift) => {
            const position2 = shift.getAttribute("value");
            const x2 = (window.innerWidth - event2.pageX * position2) / 90;
            const y2 = (window.innerHeight - event2.pageY * position2) / 90;

            shift.style.transform = `translateX(${x2}px) translateY(${y2}px)`;
        });
    }
}


if (window.innerWidth <= 950) {
    $('.a1-box-image').attr('data-aos', 'fade-up');
}

if (window.innerWidth <= 550) {
    $('.a5-title').attr('data-aos', 'fade-right');
}