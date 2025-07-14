gsap.registerPlugin(ScrollTrigger);


/* promotion */
const prom = gsap.timeline();

prom.to(".p-image", { width: '100%', borderRadius: 0 })
    .from(".p-image img", { scale: 1.3 }, "<")

ScrollTrigger.create({
    animation: prom,
    trigger: ".promotion",
    start: "top top",
    end: "+=500",
    scrub: 2,
});


/* article1 */
const article1 = gsap.timeline();

article1.from(".a1-bg", { scale: 1.3 })
    .from(".article1 .at-text", { y: 80, autoAlpha: 0 }, "<")

ScrollTrigger.create({
    animation: article1,
    trigger: ".article1",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
});


/* article2 */
const article2 = gsap.timeline();
const isMobile = window.innerWidth < 769;

article2.to(".a2-bg", isMobile ? { scale: 1.2 } : { x: -150 })
    .from(".article2 .at-text", { y: 80, autoAlpha: 0 })

ScrollTrigger.create({
    animation: article2,
    trigger: ".article2",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
});


/* article3 */
const article3 = gsap.timeline();
const isMobile2 = window.innerWidth < 769;

article3.to(".a3-bg", isMobile2 ? { scale: 1.2 } : { x: 150 })
    .from(".article3 .at-text", { y: 80, autoAlpha: 0 })

ScrollTrigger.create({
    animation: article3,
    trigger: ".article3",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
});



/* article4 */
const article4 = gsap.timeline();

article4.from(".article4 .at-text", { y: 80, autoAlpha: 0 })
    .to(".a4-bg", { scale: 1.2,  }, "<")

ScrollTrigger.create({
    animation: article4,
    trigger: ".article4",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
});



/* article6 */
const article6 = gsap.timeline();

article6.to(".a6-image", { width: '100%', borderRadius: 0 })
    .from(".a6-image img", { scale: 1.3 }, "<")

ScrollTrigger.create({
    animation: article6,
    trigger: ".article6",
    start: "top top",
    end: "+=500",
    scrub: 2,
});


/* articlex3 */
const articlex3 = gsap.timeline();

articlex3.from(".axt1", { y: 80, autoAlpha: 0 })
    .from(".axt2", { y: 80, autoAlpha: 0 })

ScrollTrigger.create({
    animation: articlex3,
    trigger: ".articlex3",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
});



window.addEventListener("load", function () {
    setTimeout(() => {
        ScrollTrigger.refresh(true);
    }, 300);
});