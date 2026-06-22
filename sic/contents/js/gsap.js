gsap.registerPlugin(ScrollTrigger);

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