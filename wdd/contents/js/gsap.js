gsap.registerPlugin(ScrollTrigger);



// promotion
const prom = gsap.timeline();


prom.to(".p-text", {
    duration: 0.1,
    opacity: 0,
})
.to(".hero", {
    scale: 5,
}, "<")
.to(".hero", {
    opacity: 0,
})

.to({}, { duration: 1 })

ScrollTrigger.create({
    animation: prom,
    trigger: ".promotion",
    start: "top top",
    end: "+=2000",
    scrub: 1,
});