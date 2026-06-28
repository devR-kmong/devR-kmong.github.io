gsap.registerPlugin(ScrollTrigger);


gsap.set(['.p-text h5', '.p-text p', '.p-image', '.p-box', '.pb-wrap'], { autoAlpha: 0, y: 30 });
gsap.set('.p-image', { x: 40, y: 0 });

const promoTl = gsap.timeline({ delay: 0.4 });

promoTl
  .to('.p-text h5', { autoAlpha: 1, y: 0, duration: 1.2, ease: 'power3.out' })
  .to('.p-text p',  { autoAlpha: 1, y: 0, duration: 1.0, ease: 'power3.out' }, '-=0.7')
  .to('.p-image',   { autoAlpha: 1, x: 0, duration: 1.2, ease: 'power3.out' }, '-=0.8')
  .to('.p-box',     { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.15 }, '-=0.6')
  .to('.pb-wrap',   { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power2.out' }, '<');




function getOrbitRadius() {
    const w = window.innerWidth;
    if (w <= 768) {
        return w * 0.35;
    }
    return 280;
}

const orbitRadius = getOrbitRadius();
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

const isMobile = window.innerWidth <= 1024;

if (isMobile) {
    boxes.forEach((box) => {
        gsap.set(box, {
            x: parseFloat(box.dataset.tx),
            y: parseFloat(box.dataset.ty),
            opacity: 1,
        });
    });

    startOrbit();

} else {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.article1',
            start: 'top top',
            end: '+=300%',
            pin: true,
            scrub: 1,
        }
    });

    boxes.forEach((box, i) => {
        tl.to(box, {
            x: parseFloat(box.dataset.tx),
            y: parseFloat(box.dataset.ty),
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(1.4)',
        }, i * 0.1);
    });

    tl.add(() => startOrbit(), '+=0.2');

    tl.to('.a1-orbit-group', {
        x: '18vw',
        duration: 1,
        ease: 'power2.inOut',
    }, '+=0.5');

    tl.to('.a1-left-text', {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
    }, '-=0.4');

    tl.to({}, { duration: 1 });
}






gsap.set('.article2 .a2-box', { autoAlpha: 0, y: 40 });

gsap.to('.article2 .a2-box', {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.15,
    scrollTrigger: {
        trigger: '.article2',
        start: 'top 70%',
    }
});







gsap.set('.article4 .a4-box', { autoAlpha: 0, y: 40 });

gsap.to('.article4 .a4-box', {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.15,
    scrollTrigger: {
        trigger: '.article4',
        start: 'top 70%',
    }
});






gsap.set('.article5 .a5-text', { autoAlpha: 0, x: -60 });
gsap.set('.article5 .a5-image', { autoAlpha: 0, y: 40 });

const a5St = {
    scrollTrigger: {
        trigger: '.article5',
        start: 'top 70%',
    }
};

gsap.to('.article5 .a5-text', {
    autoAlpha: 1,
    x: 0,
    duration: 1.0,
    ease: 'power3.out',
    ...a5St
});

gsap.to('.article5 .a5-image', {
    autoAlpha: 1,
    y: 0,
    duration: 1.0,
    ease: 'power3.out',
    ...a5St
});





gsap.set('.article6 .a6-box', { autoAlpha: 0, y: 40 });

gsap.to('.article6 .a6-box', {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.15,
    scrollTrigger: {
        trigger: '.article6',
        start: 'top 70%',
    }
});



gsap.set('.article7 .process-item, .article7 .process-arrow', { autoAlpha: 0, x: -30 });

gsap.to('.article7 .process-item, .article7 .process-arrow', {
    autoAlpha: 1,
    x: 0,
    duration: 0.6,
    ease: 'power3.out',
    stagger: 0.15,
    scrollTrigger: {
        trigger: '.article7',
        start: 'top 70%',
        toggleActions: 'play none none reset'
    }
});





document.querySelectorAll('.article8 .faq-item').forEach(item => {
    gsap.set(item, { autoAlpha: 0, y: 30 });

    gsap.to(item, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
        }
    });
});