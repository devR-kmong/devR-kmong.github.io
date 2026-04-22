gsap.registerPlugin(ScrollTrigger);

const subp = gsap.timeline();

subp.from(".sub-promotion > *", {
    y: 50,
    delay: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.4,
    ease: "power2.out"
})

ScrollTrigger.create({
    animation: subp,
    trigger: ".sub-promotion",
    start: "top 50%",
});


gsap.to(".sub-p-image img", {
    top: "0%",
    ease: "none",
    scrollTrigger: {
        trigger: ".sub-p-image",
        start: "top bottom",
        scrub: 1
    }
});