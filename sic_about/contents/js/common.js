$('.menuBtns').click(function () {
    $(this).toggleClass('change');
});

$('.menu li a').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});




if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}




const lenis = new Lenis({
    duration: 1.2,
    wheelMultiplier: 0.7,
    smoothWheel: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.addEventListener('click', function (e) {
    const anchor = e.target.closest('a[href^="#"]');

    if (anchor) {
        e.preventDefault();

        const targetId = anchor.getAttribute('href');

        if (targetId === '#') {
            lenis.scrollTo(0);
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            lenis.scrollTo(targetElement, {
                offset: 0,
                immediate: false,
                duration: 1.2
            });
        }
    }
});




const App = () => {
	useEffect(() => {
    	setOneVh();
        window.addEventListener('resize', setOneVh);
    }, []);
	
    return (
    	{/* do something */}
    )
};