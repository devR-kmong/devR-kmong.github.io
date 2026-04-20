$('.menuBtns').click(function () {
    $(this).toggleClass('change');
});

$('nav ul li a').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});

$('.overlay').click(function () {
    $('#check').prop('checked', false);
    $('.menuBtns').removeClass('change');
});




$('.promotion').ripples({
    resolution: 400,
    dropRadius: 50,
    perturbance: 0,
});




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





gsap.registerPlugin(ScrollTrigger);


const isVisited = sessionStorage.getItem("isVisited");
const loadingScreen = document.querySelector(".loading-screen");
const barFill = document.querySelector(".loading-bar-fill");
const counterText = document.querySelector(".loading-counter");

if (!isVisited) {
    const loadTL = gsap.timeline();

    loadTL
        // 1. 로딩바 채우기 (0% -> 100%)
        .to(barFill, {
            width: "100%",
            duration: 0.7,
            ease: "power2.inOut"
        })
        // 2. 숫자 카운트 (동시 진행)
        .to(counterText, {
            innerText: 100, // 텍스트 숫자를 100으로 변경
            duration: 0.7,
            snap: { innerText: 1 }, // 소수점 없이 1단위로 끊어서 카운트
            ease: "power2.inOut",
            onUpdate: function () {
                // 숫자가 업데이트될 때마다 '%'를 붙여줌
                counterText.innerText += "%";
            }
        }, "<")

        // 3. 로딩바와 숫자가 100%가 된 후, 약간 대기했다가 로딩화면 페이드아웃
        .to(".loading-screen", {
            opacity: 0,
            delay: 0.4,
            duration: 0.4,
            display: "none",
            ease: "power1.inOut",
            onStart: () => {
                // 이 시점에 방문 기록을 남겨야 합니다.
                sessionStorage.setItem("isVisited", "true");
            }
        });

    gsap.from(".promotion-wrapper > *", {
        y: 50,
        delay: 1.3,
        opacity: 0,
        duration: 0.8,
        stagger: 0.4,
        ease: "power2.out"
    })
} else {
    if (loadingScreen) {
        loadingScreen.style.display = "none";
    }

    gsap.from(".promotion-wrapper > *", {
        y: 50,
        delay: 0,
        opacity: 0,
        duration: 0.8,
        stagger: 0.4,
        ease: "power2.out"
    })
}




/* article1 */
const a1 = gsap.timeline();

a1.to(".a1-text", {
    x: -2000,
});

ScrollTrigger.create({
    animation: a1,
    trigger: ".article1",
    start: "top top",
    end: "=+2000",
    scrub: 2,
    pin: true,
});




/* article2 */
const a2 = gsap.timeline();

a2.from(".a2-title", {
    x: 30,
    opacity: 0,
});
a2.from(".a2-box", {
    x: 30,
    opacity: 0,
    stagger: 0.1,
});

ScrollTrigger.create({
    animation: a2,
    trigger: ".article2",
    start: "top 50%",
    toggleActions: "play none none reverse"
});




/* article3 */
const a3 = gsap.timeline();

a3.from(".a3-title", {
    x: 30,
    opacity: 0,
});


ScrollTrigger.create({
    animation: a3,
    trigger: ".article3",
    start: "top 50%",
    toggleActions: "play none none reverse"
});


document.querySelectorAll('.rolling-counter').forEach(counter => {
    const target = counter.getAttribute('data-target');
    const digits = target.split('');

    counter.innerHTML = '';

    digits.forEach((num, index) => {
        const col = document.createElement('div');
        col.classList.add('digit-col');

        const rail = document.createElement('div');
        rail.classList.add('digit-rail');

        for (let i = 0; i <= 9; i++) {
            const item = document.createElement('div');
            item.textContent = i;
            rail.appendChild(item);
        }

        col.appendChild(rail);
        counter.appendChild(col);

        gsap.to(rail, {
            yPercent: -10 * parseInt(num),
            duration: 2.5,
            ease: "expo.out",
            scrollTrigger: {
                trigger: ".article3",
                start: "top 30%",
                end: "bottom top",
                toggleActions: "play none none reverse"
            },
            delay: index * 0.1
        });
    });
});




/* article5 */
const a5 = gsap.timeline();

a5.from(".a5-title", {
    x: 30,
    opacity: 0,
});
a5.from(".a5Btn", {
    x: 20,
    opacity: 0,
    stagger: 0.1,
});


ScrollTrigger.create({
    animation: a5,
    trigger: ".article5",
    start: "top 50%",
    toggleActions: "play none none reverse"
});