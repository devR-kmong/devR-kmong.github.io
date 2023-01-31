$(function () {
    $('.pBtn').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});


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


VanillaTilt.init(document.querySelector(".a3-card"), {
    max: 5,
    speed: 500,
});


var typed3 = new Typed('#typed', {
    strings: ['반응형 홈페이지', '랜딩페이지', '원페이지 사이트', '기업 웹사이트', '홈페이지 제작은'],
    typeSpeed: 70,
    backSpeed: 20,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    loop: true
});


$(function () {
    var a3n = $('.a3-notice');

    for (let i = 0; i < a3n.length; i++) {
        $('.a3-notice h1').eq(i).click(function () {
            $('.a3-notice p').eq(i).slideToggle(80);
            $('.a3-notice h1 i').eq(i).toggleClass('i-rotate');
        })
    }
})


$('.family-site').click(function () {
    $('.family-list').slideToggle(80).css('display', 'flex');
    $('.family-site i').toggleClass('i-rotate');
})


$(window).resize(function () {
    var width_size = window.innerWidth;

    if (width_size == 950) {
        document.location.reload();
    } else if (width_size == 951) {
        document.location.reload();
    } else if (width_size == 1920) {
        document.location.reload();
    } else if (width_size == 2560) {
        document.location.reload();
    }
})



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}


(function () {
    var w = window;
    if (w.ChannelIO) {
        return (window.console.error || window.console.log || function () { })('ChannelIO script included twice.');
    }
    var ch = function () {
        ch.c(arguments);
    };
    ch.q = [];
    ch.c = function (args) {
        ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
        if (w.ChannelIOInitialized) {
            return;
        }
        w.ChannelIOInitialized = true;
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
        s.charset = 'UTF-8';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
        l();
    } else if (window.attachEvent) {
        window.attachEvent('onload', l);
    } else {
        window.addEventListener('DOMContentLoaded', l, false);
        window.addEventListener('load', l, false);
    }
})();
ChannelIO('boot', {
    "pluginKey": "ffb93860-8413-4ffa-b10d-04947d3eb1a1"
});