gsap.registerPlugin(ScrollTrigger);


/* promotion */
const prm = gsap.timeline();

prm.to(".main-video", {
    left: "50%",
});

ScrollTrigger.create({
    animation: prm,
    trigger: ".promotion",
    start: "top top",
    scrub: 2,
});


/* article1 */
const a1 = gsap.timeline();
const a1Pains = gsap.utils.toArray(".a1-pain p");

a1.from(".a1-big", {
    x: "100%",
    duration: 1,
}, 0)
a1.to(".main-video", {
    top: "90%",
    scale: 0.15,
}, 1);
a1.to(".a1b.top", {
    y: "-60px",
}, 2)
.to(".a1b.bottom", {
    y: "60px",
}, 2)
.to(".a1-text", {
    opacity: 1,
}, 3)

.to({}, { duration: 5 })

.to(".a1-text", {
    opacity: 0,
}, 4)
.to(".a1b.top", {
    y: "0",
}, 4)
.to(".a1b.bottom", {
    y: "0",
}, 4)

.to(".a1-big", {
    scale: 40,
    duration: 1.5,
}, 5)
.to(".a1-text", {
    opacity: 0,
}, 6)


a1Pains.forEach((p, i) => {
    const startTime = 6 + i * 2.5;
    a1.to(p, {
        opacity: 1,
        duration: 0.5,
    }, startTime);

    if (i < a1Pains.length - 1) {
        a1.to(p, {
            opacity: 0,
            duration: 0.5,
        }, startTime + 2);
    }
});

a1.to({}, { duration: 1 });

a1.to(".main-video", {
    opacity: 0,
})


ScrollTrigger.create({
    animation: a1,
    trigger: ".article1",
    start: "top top",
    end: "+=8000",
    scrub: 2,
    pin: true,
    anticipatePin: 1,
});





/* article3 */
function buildFlipDigits(el, digitCount) {
    const wrap = el.querySelector('.flip-wrap');
    wrap.innerHTML = '';
    for (let i = 0; i < digitCount; i++) {
        const digit = document.createElement('span');
        digit.classList.add('flip-digit');
        const inner = document.createElement('span');
        inner.classList.add('digit-inner');
        for (let n = 0; n <= 29; n++) {
            const s = document.createElement('span');
            s.textContent = n % 10;
            inner.appendChild(s);
        }
        digit.appendChild(inner);
        wrap.appendChild(digit);
    }
}

function startFlip() {
    const counts = document.querySelectorAll('.count');

    counts.forEach(el => {
        const target = parseInt(el.dataset.target);
        const targetStr = String(target);
        const digitCount = targetStr.length;

        buildFlipDigits(el, digitCount);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const digits = el.querySelectorAll('.flip-digit');

                const sampleSpan = digits[0].querySelector('.digit-inner span');
                const spanHeight = sampleSpan.getBoundingClientRect().height;

                digits.forEach((digit, i) => {
                    digit.style.height = spanHeight + 'px';

                    const inner = digit.querySelector('.digit-inner');
                    const spans = inner.querySelectorAll('span');
                    spans.forEach(s => {
                        s.style.height = spanHeight + 'px';
                        s.style.lineHeight = spanHeight + 'px';
                    });

                    const targetNum = parseInt(targetStr[i]);
                    const stopIndex = 10 + targetNum;

                    gsap.to(inner, {
                        y: -(stopIndex * spanHeight),
                        duration: 1.8,
                        delay: i * 0.12,
                        ease: 'power4.out',
                    });
                });
            });
        });
    });
}

ScrollTrigger.create({
    trigger: '.article3',
    start: 'top 80%',
    once: true,
    onEnter: () => {
        startFlip();
    }
});



// portfolio
const speeds = {
    c1: 1900,
    c2: -900,  // 가운데 컬럼은 위→아래로 반대 방향 이동
    c3: 2400
};

const PIN_DURATION = 6000; // pin 구간에서 스크롤해야 하는 px 양 (이 값으로 "일정 px" 조절)
const TRIGGER = '.article5';

document.querySelectorAll('.col').forEach((col) => {
    const key = [...col.classList].find(c => speeds[c]);
    const distance = speeds[key] || 500;

    gsap.to(col, {
        y: -distance,
        ease: 'none',
        scrollTrigger: {
            trigger: TRIGGER,
            start: 'top top',
            end: () => '+=' + PIN_DURATION,
            scrub: true,
        }
    });
});

// 섹션 자체를 pin + 일정 px 스크롤 후 해제
// pin이 걸리는 순간(onEnter)에 그리드를 페이드인, 풀리는 순간(onLeaveBack)엔 다시 숨김
ScrollTrigger.create({
    trigger: TRIGGER,
    start: 'top top',
    end: () => '+=' + PIN_DURATION,
    pin: true,
    pinSpacing: true,
    onEnter: () => {
        gsap.to('#gridWrap', { opacity: 1, duration: 0.6, ease: 'power2.out' });
    },
    onLeaveBack: () => {
        gsap.to('#gridWrap', { opacity: 0, duration: 0.4, ease: 'power2.in' });
    },
});

// 텍스트는 pin 구간 초반엔 살짝 페이드인, 중후반엔 그대로 유지하다가
// pin이 풀리기 직전 살짝 페이드아웃 (선택 사항 — 더 풍부한 전환감)
gsap.timeline({
    scrollTrigger: {
        trigger: TRIGGER,
        start: 'top top',
        end: () => '+=' + PIN_DURATION,
        scrub: true,
    }
})
    .to('.pin-overlay', { opacity: 1, delay: 2 })
    .from('.pin-text', { opacity: 0, y: 40, duration: 0.2 }, "<")
    .to('.col.c2', { opacity: .4 }, "<")
    .to({}, { duration: 5 });