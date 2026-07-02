gsap.registerPlugin(ScrollTrigger, SplitText);



const split = new SplitText("#chars", { type: "chars" });

gsap.from(split.chars, {
    x: 150,
    opacity: 0,
    duration: 0.7,
    ease: "power4",
    stagger: 0.04
});


/* promotion */
const prm = gsap.timeline();

prm.to(".main-video", {
    left: "50%",
});

ScrollTrigger.create({
    animation: prm,
    trigger: ".promotion",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    fastScrollEnd: true,
});


/* article1 */
const a1 = gsap.timeline();
const a1Pains = gsap.utils.toArray(".a1-pain p");

a1.from(".a1-big", {
    x: "100%",
    duration: 1,
}, 0)
.to(".main-video", {
    top: "90%",
    scale: 0.15,
}, 1)
.to(".a1b.top", {
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

a1.to({}, { duration: 1 })

.to(".main-video", {
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
    fastScrollEnd: true,
});





/* article2 */
function buildA2Line() {
    const svg = document.getElementById('a2LineSvg');
    const path = document.getElementById('a2LinePath');
    const wrapper = document.querySelector('.article2');
    const boxes = gsap.utils.toArray('.a2-box');
    if (!svg || !path || !boxes.length) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const wrapperTop = wrapperRect.top + window.scrollY;
    const wrapperHeight = wrapper.offsetHeight;

    svg.setAttribute('viewBox', `0 0 ${wrapper.offsetWidth} ${wrapperHeight}`);

    // 각 .a2-box의 "가운데 지점"을 wrapper 기준 좌표로 추출
    const points = boxes.map(box => {
        const r = box.getBoundingClientRect();
        const x = (r.left + window.scrollX) - (wrapperRect.left + window.scrollX) + r.width / 2;
        const y = (r.top + window.scrollY) - wrapperTop + r.height / 2;
        return { x, y };
    });

    const startX = points[0].x;
    const endX = points[points.length - 1].x;
    const allPoints = [{ x: startX, y: 0 }, ...points, { x: endX, y: wrapperHeight }];

    let d = `M ${allPoints[0].x} ${allPoints[0].y}`;
    for (let i = 0; i < allPoints.length - 1; i++) {
        const p0 = allPoints[i];
        const p1 = allPoints[i + 1];
        const midY = (p0.y + p1.y) / 2;
        d += ` C ${p0.x} ${midY}, ${p1.x} ${midY}, ${p1.x} ${p1.y}`;
    }
    path.setAttribute('d', d);

    const pathLength = path.getTotalLength();
    gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
}

function initA2Line() {
    buildA2Line();
    const path = document.getElementById('a2LinePath');

    gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: '.article2',
            start: 'top 60%',
            end: 'bottom bottom',
            scrub: 0.5,
            invalidateOnRefresh: true,
        }
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            buildA2Line();
            ScrollTrigger.refresh();
        }, 200);
    });
}

function initA2BoxReveal() {
    const boxTexts = gsap.utils.toArray('.a2-box-text');

    boxTexts.forEach(el => {
        gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                }
            }
        );
    });
}

document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            initA2Line();
            initA2BoxReveal();
        });
    });
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
const TRIGGER = '.article5';

ScrollTrigger.matchMedia({

    // 데스크톱
    "(min-width: 1025px)": function () {
        setupArticle5({
            speeds: { c1: 1900, c2: -900, c3: 2400 },
            pinDuration: 6000
        });
    },

    // 태블릿
    "(min-width: 769px) and (max-width: 1024px)": function () {
        setupArticle5({
            speeds: { c1: 400, c2: -350, c3: 800 },
            pinDuration: 4500
        });
    },

    // 모바일 (일반)
    "(min-width: 451px) and (max-width: 768px)": function () {
        setupArticle5({
            speeds: { c1: 200, c2: -350, c3: 800 },
            pinDuration: 3000
        });
    },

    // 모바일 (소형)
    "(max-width: 450px)": function () {
        setupArticle5({
            speeds: { c1: 400, c3: -450 },
            pinDuration: 2400
        });
    }

});

function setupArticle5({ speeds, pinDuration }) {

    document.querySelectorAll('.col').forEach((col) => {
        const key = [...col.classList].find(c => speeds[c]);
        const distance = speeds[key] || 500;

        gsap.to(col, {
            y: -distance,
            ease: 'none',
            scrollTrigger: {
                trigger: TRIGGER,
                start: 'top top',
                end: () => '+=' + pinDuration,
                scrub: true,
            }
        });
    });

    ScrollTrigger.create({
        trigger: TRIGGER,
        start: 'top top',
        end: () => '+=' + pinDuration,
        pin: true,
        pinSpacing: true,
        onEnter: () => {
            gsap.to('#gridWrap', { opacity: 1, duration: 0.6, ease: 'power2.out' });
        },
        onLeaveBack: () => {
            gsap.to('#gridWrap', { opacity: 0, duration: 0.4, ease: 'power2.in' });
        },
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: TRIGGER,
            start: 'top top',
            end: () => '+=' + pinDuration,
            scrub: true,
        }
    })
        .to('.pin-overlay', { opacity: 1, delay: 2 })
        .from('.pin-text', { opacity: 0, y: 40, duration: 0.2 }, "<")
        .to('.col.c2', { opacity: .4 }, "<")
        .to({}, { duration: 5 });

    // matchMedia가 브레이크포인트 이탈 시 자동으로 정리(kill)할 수 있도록 return
    return () => {
        // 필요 시 개별 정리 로직 추가 (matchMedia가 생성된 ScrollTrigger를 자동 kill 해줌)
    };
}




/* review */
function initArticle6Reveal() {
    const cards = gsap.utils.toArray('.review-card');
    if (!cards.length) return;

    gsap.set(cards, { opacity: 0, y: 60 });

    gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
            trigger: '.article6',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => requestAnimationFrame(initArticle6Reveal));
});






/* faq */
function initArticle7Reveal() {
    const items = gsap.utils.toArray('.faq-item');
    if (!items.length) return;

    gsap.set(items, { opacity: 0, y: 40 });

    gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: {
            trigger: '.article7',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => requestAnimationFrame(initArticle7Reveal));
});