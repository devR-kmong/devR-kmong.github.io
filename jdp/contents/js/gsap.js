gsap.registerPlugin(ScrollTrigger);

const article1 = gsap.timeline();

gsap.set(".main-background", { filter: "brightness(100%)" });

ScrollTrigger.create({
    animation: article1,
    trigger: ".article1",
    start: "top top",
    end: "+=1200",
    scrub: true,
    pin: true,
});

article1.to(".main-background", {
    filter: "brightness(30%)",
    ease: "none"
});

article1.from(".a1-title", {
    autoAlpha: 0,
    duration: 1,
    y: 100
}, "<");

article1.from(".a1-text", {
    autoAlpha: 0,
    duration: 1,
    y: 100
});