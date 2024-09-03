AOS.init({
    once: true,
    delay: 100,
    offset: 200,
    duration: 1200,
});



var swiper = new Swiper(".a2Swiper", {
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



$(function () {
    $('.topBtn').hide();
    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.topBtn').fadeIn(80);
            } else {
                $('.topBtn').fadeOut(80);
            }
        });
    });
});


$(function () {
    $('.pBtn, .topBtn').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});




if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};



function countToInfinity() {
    let count = 0;
    const display = document.getElementById('counter'); // 숫자 또는 무한대를 표시할 HTML 요소

    // 1초마다 숫자를 증가시키는 함수
    const intervalId = setInterval(() => {
        display.textContent = count;
        count += 22;
    }, 1);

    // 10초 후에 숫자 카운트를 멈추고 무한대 기호를 표시
    setTimeout(() => {
        clearInterval(intervalId);
        display.textContent = '∞';
    }, 3000);
}

// Intersection Observer 설정
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            countToInfinity(); // 섹션이 화면에 보일 때 함수 실행
            observer.disconnect(); // 한 번 실행된 후 관찰 중지
        }
    });
});

// 관찰할 요소 설정
observer.observe(document.getElementById('counter'));