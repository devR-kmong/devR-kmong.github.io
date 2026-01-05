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



const lenis = new Lenis({
    duration: 1,
    wheelMultiplier: 0.8,
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