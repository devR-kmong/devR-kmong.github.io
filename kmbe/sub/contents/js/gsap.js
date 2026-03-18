gsap.registerPlugin(ScrollTrigger);


gsap.from(".sub-p-text", {
    autoAlpha: 0,
    x: -50,
    duration: 1,
})
gsap.from(".sub-p-image", {
    delay: .5,
    autoAlpha: 0,
    duration: 1,
})

gsap.to(".sub-p-image img", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
        trigger: ".sub-p-image",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});