gsap.registerPlugin(ScrollTrigger);



gsap.set(".p-logo", {scale: 0})
gsap.set([".intro-logo", ".p-info", ".pBtn"], { opacity: 0 });
gsap.set([".p-text h5", ".p-text p"], {
    opacity: 0,
    y: 40
});

gsap.timeline({ defaults: { ease: "power3.out" } })
    // 인트로: 로고 등장
    .to(".intro-logo", { opacity: 1, duration: 0.8 })
    // 1.0s 유지
    .to(".intro-logo", { opacity: 1, duration: 1.0 })
    // 전체 화면 페이드아웃
    .to(".intro-overlay", {
        opacity: 0, duration: 0.8, onComplete: () => {
            document.querySelector(".intro-overlay").style.display = "none";
        }
    })
    // 본문 순차 진입
    .to(".p-logo", { opacity: 1, scale: 1, duration: 0.8 }, "-=0.2")
    .to(".p-text h5", { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
    .to(".p-text p", { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
    .to(".p-info", { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, "-=0.5")
    .to(".pBtn", { opacity: 1, y: 0, duration: 0.8 }, "-=0.4");



const a0 = gsap.timeline();

a0.from(".a0-bg", {
    opacity: 0,
});

ScrollTrigger.create({
    animation: a0,
    trigger: ".article0",
    start: "top 70%",
    end: "top 50%",
    scrub: 2,
});



window.onload = () => {
    const boxWrapper = document.querySelector(".a1-box-wrapper");
    const delay = 1300; // px 단위로 조절

    gsap.to(boxWrapper, {
        x: () => -(boxWrapper.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: ".article1",
            start: "top top",
            end: () => `+=${boxWrapper.scrollWidth - window.innerWidth + delay}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
        }
    });
};