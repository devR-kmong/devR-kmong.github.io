AOS.init({
    once: true,
    delay: 100,
    offset: 200,
    duration: 1200,
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



$(function () {
    $('.logo, nav a').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};



var swiper = new Swiper(".hSwiper", {
    lazy: true,
    effect: "coverflow",
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



$(function () {
    $('.hs-year').click(function () {
        id = $($(this).data('target')).selector;
        $('body').css('overflow', 'hidden');
        $('.hs-popup-wrapper').hide();
        $('#' + id).fadeIn().css('display','flex');
    });

    $('.hs-closeBtn').click(function () {
        $('body').css('overflow', 'unset');
        $('.hs-popup').scrollTop(0)
        $('.hs-popup-wrapper').hide();
    })

    $(document).on(
        'keydown',
        function (event) {
            if (event.key == "Escape") {
                $('body').css('overflow', 'unset');
                $('.hs-popup').scrollTop(0)
                $('.hs-popup-wrapper').hide();
            }
        }
    );
})



if (window.innerWidth < 1650) {
    $(function () {
        // 타이머 변수 초기화
        let inactivityTimer;
    
        // 사용자가 상호작용(스크롤, 클릭)할 때마다 타이머를 재설정하는 함수
        function resetInactivityTimer() {
            // 기존 타이머가 있으면 제거
            clearTimeout(inactivityTimer);
    
            // 새로운 타이머 설정 (예: 5초)
            inactivityTimer = setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                $('body').css('overflow', 'unset');
                $('.hs-popup').scrollTop(0)
                $('.hs-popup-wrapper').hide();
                
            }, 10000); // 5000ms = 5초
        }
    
        // 상호작용 이벤트 리스너 등록
        window.addEventListener('scroll', resetInactivityTimer);
        window.addEventListener('click', resetInactivityTimer);
        window.addEventListener('touchstart', resetInactivityTimer);
    
        // 초기 타이머 설정 (페이지 로드 후 최초로 실행)
        resetInactivityTimer();
    })
}