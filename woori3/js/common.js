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
    $('.floating').hide();
    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.floating').fadeIn(80);
            } else {
                $('.floating').fadeOut(80);
            }
        });
    });
});



$(window).on('scroll', function () {
    $('section').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('.menu li a').removeClass('actives');
            $('.menu li a[href=#' + id + ']').addClass('actives');
        }
    });
});




$('.menuBtns').click(function () {
    $(this).toggleClass('change');
});

$('.menu li a').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});

$('.overlay').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
};





const lenis = new Lenis({
    duration: 1.2,
    wheelMultiplier: 1.2,
    smoothWheel: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.querySelector('.topBtn')?.addEventListener('click', () => {
    lenis.scrollTo(0);
});

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
                offset: -80,
                immediate: false,
                duration: 1.2
            });
        }
    }
});






(function () {
    const section = document.querySelector('section.article3');
    if (!section) return;

    const listItems = section.querySelectorAll('.list li');
    const slides = section.querySelectorAll('.right .slide');
    const list = section.querySelector('.list');

    function setActive(idx) {
        listItems.forEach(li => li.classList.remove('active'));
        if (!listItems[idx]) return;
        listItems[idx].classList.add('active');

        /* 모바일: active 탭을 가로 중앙으로 스크롤 */
        if (window.innerWidth <= 1024 && list) {
            const activeLi = listItems[idx];
            const listRect = list.getBoundingClientRect();
            const liRect = activeLi.getBoundingClientRect();
            const offset = liRect.left - listRect.left - (listRect.width / 2) + (liRect.width / 2);
            list.scrollBy({ left: offset, behavior: 'smooth' });
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const idx = Array.from(slides).indexOf(entry.target);
            setActive(idx);
        });
    }, {
        rootMargin: '-30% 0px -70% 0px',
        threshold: 0
    });

    slides.forEach(slide => observer.observe(slide));

    /* 탭 클릭 시 해당 슬라이드로 스크롤 */
    listItems.forEach((li, idx) => {
        li.addEventListener('click', (e) => {
            e.preventDefault();
            const target = slides[idx];
            if (!target) return;

            if (window.innerWidth <= 1024 && list) {
                /* sticky 탭 바 높이만큼 offset 보정 */
                const listHeight = list.offsetHeight;
                const top = target.getBoundingClientRect().top + window.scrollY - listHeight - 120; /* 70: 헤더 높이 근사값, 실제값으로 조정 */
                window.scrollTo({ top, behavior: 'smooth' });
            } else {
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
})();





// FAQ 카테고리 필터
document.querySelectorAll('.faq-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.faq-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.dataset.cat;
        document.querySelectorAll('.faq-item').forEach(item => {
            if (cat === 'all' || item.dataset.cat === cat) {
                item.style.display = '';
                gsap.set(item, { autoAlpha: 1, y: 0 });
            } else {
                item.style.display = 'none';
                item.classList.remove('open');
            }
        });
    });
});

// 아코디언
document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');

        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

        if (!isOpen) item.classList.add('open');
    });
});