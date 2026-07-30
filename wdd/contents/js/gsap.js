gsap.registerPlugin(ScrollTrigger);



// promotion
const prom = gsap.timeline();


prom.to(".hero", {
    scale: 5,
})
.to(".hero", {
    opacity: 0,
})

.to({}, { duration: 1 })

ScrollTrigger.create({
    animation: prom,
    trigger: ".promotion",
    start: "top top",
    end: "+=3000",
    scrub: 1,
});