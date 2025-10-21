if (window.innerWidth > 768) {
    new WOW({
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       300,
        mobile:       true,
        live:         true
    }).init();
} else {
    new WOW({
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       200,
        mobile:       true,
        live:         true
    }).init();
}


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



$(window).on('scroll', function () {
    $('section').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('nav a').removeClass('actives');
            $('nav a[href=#' + id + ']').addClass('actives');
        }
    });
});



$(function () {
    $('.logo, nav a, .fBtn.scroll, .topBtn').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});




const swiper = new Swiper('.a5Swiper', {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: ".sbn-next",
        prevEl: ".sbn-prev",
    },
    breakpoints: {
        769: {
            slidesPerView: 2.5,
        },
        1251: {
            slidesPerView: 4,
        },
        1921: {
            slidesPerView: 5,
        },
    },
    autoplay: {
        delay: 1700,
        disableOnInteraction: false,
    },
});





const lenis = new Lenis({
    duration: 1.5,
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




// slider
const sliders = document.querySelectorAll('.slider');
const speed = 0.5;

sliders.forEach((slider) => {
    // 콘텐츠 복제 (무한 스크롤 효과)
    slider.innerHTML += slider.innerHTML;

    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let animationId;
    const resetThreshold = -slider.scrollWidth / 2; // 절반 길이까지만 이동

    function animate() {
        if (!isDragging) {
            currentTranslate -= speed;
            if (currentTranslate <= resetThreshold) {
                currentTranslate = 0; // 위치 리셋
            }
            setTranslate(currentTranslate);
        }
        animationId = requestAnimationFrame(animate);
    }

    function setTranslate(x) {
        slider.style.transform = `translateX(${x}px)`;
    }

    // PC 드래그
    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - currentTranslate;
        slider.classList.add('dragging');
        cancelAnimationFrame(animationId);
    });

    window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        slider.classList.remove('dragging');
        animate();
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        currentTranslate = e.pageX - startX;
        setTranslate(currentTranslate);
    });

    // 모바일 드래그
    slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - currentTranslate;
        slider.classList.add('dragging');
        cancelAnimationFrame(animationId);
    }, { passive: true });

    slider.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        slider.classList.remove('dragging');
        animate();
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentTranslate = e.touches[0].pageX - startX;
        setTranslate(currentTranslate);
    }, { passive: true });

    animate();
});




const bulbs = document.querySelectorAll('.bulb');

bulbs.forEach(b => {
    const preloadOn = new Image();
    preloadOn.src = b.dataset.on;
    const preloadOff = new Image();
    preloadOff.src = b.dataset.off;
});

// 부드러운 전환 함수
function toggleBulb(img) {
    const nextState = img.dataset.state === 'on' ? 'off' : 'on';
    const nextSrc = nextState === 'on' ? img.dataset.on : img.dataset.off;

    setTimeout(() => {
        img.src = nextSrc;
        img.dataset.state = nextState;
    }, 200);
}

// 1초마다 자동 토글
setInterval(() => {
    bulbs.forEach(toggleBulb);
}, 900);






$(function () {
    $('.popup').click(function () {
        $('.fBtn-popup-wrapper').fadeIn(100).css('display', 'flex');
        id = $($(this).data('target')).selector;
        $('.fp-text').hide();
        $('#' + id).show().css('display','flex');
    });

    $('.fBtn-closeBtn').click(function () {
        $('.fBtn-popup-wrapper').fadeOut(100);
    })
});

$(document).mouseup(function (e){
    var LayerPopup = $('.fBtn-popup-wrapper');
        if(LayerPopup.has(e.target).length === 0){
            LayerPopup.fadeOut(100);
        }
    });