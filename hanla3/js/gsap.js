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





const a1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article1",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

a1.from(".article1 .ar-title", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
})

a1.from(".a1-wrapper > *", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
}, "-=0.5");



const a2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article2",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

a2.from(".article2 .ar-title", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
})

a2.from(".a2Swiper", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
}, "-=0.5");



const a3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article3",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

a3.from(".a3-wrapper > *", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
})



const a4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article4",
        start: "top bottom",
        toggleActions: "play none none reverse"
    }
});

a4.from(".a4-box", {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power2.out"
})



const a5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article5",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

a5.from(".article5 .ar-title", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
})

a5.from(".faq-container > *", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out"
}, "-=0.5")



const a6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article6",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

a6.from(".article6 .p-text", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
})

a6.from(".article6 .pBtn", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power2.out"
}, "-=0.5")