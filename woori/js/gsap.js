gsap.registerPlugin(ScrollTrigger);

const orbitRadius = 280;
const boxes = document.querySelectorAll('.a1-orbit-box');
const total = boxes.length;

boxes.forEach((box, i) => {
    const angle = (360 / total) * i - 90;
    const rad = angle * (Math.PI / 180);
    const x = Math.cos(rad) * orbitRadius;
    const y = Math.sin(rad) * orbitRadius;

    gsap.set(box, { x: 0, y: 0, opacity: 0 });

    box.dataset.tx = x;
    box.dataset.ty = y;
    box.dataset.angle = angle;
});

let orbitStarted = false;

function startOrbit() {
    if (orbitStarted) return;
    orbitStarted = true;

    let currentAngle = 0;

    gsap.ticker.add(() => {
        currentAngle += 0.2;

        boxes.forEach((box, i) => {
            const baseAngle = (360 / total) * i - 90;
            const rad = (baseAngle + currentAngle) * (Math.PI / 180);
            const x = Math.cos(rad) * orbitRadius;
            const y = Math.sin(rad) * orbitRadius;

            gsap.set(box, { x, y });
        });
    });
}

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.article1',
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: 1,
    }
});

// 1단계: 8개 박스 원형 배치
boxes.forEach((box, i) => {
    tl.to(box, {
        x: parseFloat(box.dataset.tx),
        y: parseFloat(box.dataset.ty),
        opacity: 1,
        duration: 0.5,
        ease: 'back.out(1.4)',
    }, i * 0.1);
});

// 2단계: 원형 배치 완료 후 공전 시작
tl.add(() => startOrbit(), '+=0.2');

// 3단계: 원형 그룹 우측으로 이동
tl.to('.a1-orbit-group', {
    x: '18vw',
    duration: 1,
    ease: 'power2.inOut',
}, '+=0.5');

// 4단계: 좌측 텍스트 등장
tl.to('.a1-left-text', {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
}, '-=0.4');





const list = document.querySelector('.list');
const fill = document.querySelector('.fill');
const listItems = gsap.utils.toArray('li', list);
const slides = gsap.utils.toArray('.slide');

const a3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.pin-section',
        start: 'top top',
        end: '+=' + listItems.length * 50 + '%',
        pin: true,
        scrub: true,
    }
});

fill &&
    gsap.set(fill, {
        scaleY: 1 / listItems.length,
        transformOrigin: 'top left'
    });

listItems.forEach((item, i) => {
    const previousItem = listItems[i - 1];
    if (previousItem) {
        a3.set(item, { backgroundColor: 'var(--main-color)', color: '#fff' }, 0.5 * i)
            .to(slides[i], { autoAlpha: 1, duration: 0.2 }, '<')
            .set(previousItem, { backgroundColor: 'transparent', color: '#222' }, '<')
            .to(slides[i - 1], { autoAlpha: 0, duration: 0.2 }, '<');
    } else {
        gsap.set(item, { backgroundColor: 'var(--main-color)', color: '#fff' });
        gsap.set(slides[i], { autoAlpha: 1 });
    }
});

a3.to(
    fill,
    {
        scaleY: 1,
        transformOrigin: 'top left',
        ease: 'none',
        duration: tl.duration()
    },
    0
).to({}, {});