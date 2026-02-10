if (window.innerWidth > 768) {
    AOS.init({
        once: true,
        delay: 100,
        offset: 200,
        duration: 1200,
    })
} else {
    AOS.init({
        once: true,
        delay: 50,
        offset: 100,
        duration: 1200,
    })
}



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}




$(function() {
    $(".sb").hover(
        function () {
            $(".left_pr").stop(true).delay(0).show().animate({ opacity: 1, marginLeft: '3px' }, 200);
            $(".com").stop(true).delay(50).show().animate({ opacity: 1, marginLeft: '-5px' }, 200);
            $(".right_pr").stop(true).delay(100).show().animate({ opacity: 1, marginLeft: '-5px' }, 200);
        },
        function () {
            $(".right_pr, .com, .left_pr").stop(true).animate({ opacity: 0, marginLeft: '0px' }, 150, function () {
                $(this).hide();
            });
        }
    );
})






const lenis = new Lenis({
    duration: 1.2,
    wheelMultiplier: 0.6,
    wrapper: window,
    content: document.documentElement,
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
});

document.querySelectorAll('.fBtn-popup').forEach(el => {
    el.addEventListener('wheel', e => {
        // 내부에서 스크롤이 가능한 경우 이벤트 전파 막지 않음
        const isScrollable = el.scrollHeight > el.clientHeight
        if (isScrollable) {
            e.stopPropagation()
        }
    })
})

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);