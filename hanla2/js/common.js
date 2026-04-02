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
                offset: 0,
                immediate: false,
                duration: 1.2
            });
        }
    }
});





var swiper = new Swiper(".a2Swiper", {
    loop: true,
    centeredSlides: false,
    slidesPerView: 1.2,
    spaceBetween: 10,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChangeTransitionStart: function () {
            document.querySelector(".sbn-prev").style.opacity = "0";
            document.querySelector(".sbn-next").style.opacity = "0";
        },
        slideChangeTransitionEnd: function () {
            document.querySelector(".sbn-prev").style.opacity = "1";
            document.querySelector(".sbn-next").style.opacity = "1";
        },
    },
    breakpoints: {
        551: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        1051: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        2000: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
    },
});



(function($) {
    $(function () {
        $('.faq-q').on('click', function () {
            var $item = $(this).closest('.faq-item');
            var $answer = $(this).next('.faq-a');

            if ($item.hasClass('on')) {
                $item.removeClass('on');
                $answer.stop().slideUp(300);
            } else {
                $('.faq-item').removeClass('on');
                $('.faq-a').stop().slideUp(300);

                $item.addClass('on');
                $answer.stop().slideDown(300);
            }
        });
    });
    })(jQuery);