gsap.registerPlugin(ScrollTrigger);



const loop = gsap.to(".a1-flow", {
    xPercent: -50,
    ease: "none",
    duration: 40,
    repeat: -1
});

// 2. 스크롤 반응형 설정 (반응 속도 최적화)
ScrollTrigger.create({
    onUpdate: (self) => {
        // 스크롤 속도 감도를 높임 (나누는 수를 줄여서 더 민감하게 반응)
        let velocityScale = Math.abs(self.getVelocity() / 250);
        let newTimeScale = 1 + velocityScale;

        // [확 빨라지게] 0.1초 만에 최고 속도 도달
        gsap.to(loop, {
            timeScale: newTimeScale,
            duration: 0.1,
            overwrite: true,
            ease: "power2.out"
        });

        // [다시 느려지게] 0.4초 만에 기본 속도로 급감속
        gsap.to(loop, {
            timeScale: 1,
            duration: 0.4, // 이 값을 줄일수록 다시 느려지는 속도가 빨라집니다.
            ease: "power2.inOut",
            overwrite: false
        });
    }
});





document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.article2');
    if (!section) return;

    const counters = section.querySelectorAll('.rolling-counter');

    ScrollTrigger.create({
        trigger: section,
        start: 'top 60%',
        once: true,
        onEnter: () => {
            counters.forEach(el => {
                const target = +el.dataset.target;
                gsap.to({ val: 0 }, {
                    val: target,
                    duration: 1.5,
                    ease: 'power2.out',
                    onUpdate: function () {
                        el.textContent = Math.floor(this.targets()[0].val);
                    }
                });
            });
        }
    });
});