gsap.registerPlugin(ScrollTrigger);



/* article1 */
const a1 = gsap.timeline();


a1.to(".a1-image", {
    opacity: 0.5,
    filter: "grayscale(1)",
})
.to(".a1-text", {
    opacity: 1,
})

.to({}, { duration: 1 })

.from(".a1-image", {
    width: "500rem",
    height: "700rem",
})
.to(".a1-text", {
    marginTop: "-170rem"
})
.to(".a1-box-wrapper", {
    opacity: 1,
})

.to({}, { duration: 1 })

.to(".a1-text, .a1-box-wrapper", {
    opacity: 0,
    visibillity: "hidden",
})
.to(".a1-image", {
    opacity: 0.2,
})
.to(".reveal-text", {
    opacity: 1,
    visibility: "visible",
},"<")
.to(".reveal-text", {
    backgroundSize: "100% 100%",
    ease: "none",
})
.to({}, { duration: 1 })
.to(".reveal-text", {
    opacity: 0,
})
.to(".reveal-text2", {
    opacity: 1,
    visibility: "visible",
})
.to(".reveal-text2", {
    backgroundSize: "100% 100%",
    ease: "none",
})
.to({}, { duration: 1 })


ScrollTrigger.create({
    animation: a1,
    trigger: ".article1",
    start: "top top",
    end: "+=6000",
    scrub: 3,
    pin: true,
    anticipatePin: 1,
});