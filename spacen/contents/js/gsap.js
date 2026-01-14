gsap.registerPlugin(ScrollTrigger);

const promotion = gsap.timeline();
let mm = gsap.matchMedia();

mm.add({
    isDesktop: "(min-width: 992px)",
    isMobile: "(max-width: 991px)"
}, (context) => {
    let { isDesktop, isMobile } = context.conditions;

    promotion.from(".logo", {
        width: isMobile ? "150rem" : "60%",
        y: isMobile ? "15%" : "0"
    });

    promotion.to(".logo", {
        left: "5%", 
        top: "5%"
    }, "<");

    promotion.to("video", {
        left: "70%",
        top: "40%",
        scale: 0.9
    }, "<");

    ScrollTrigger.create({
        animation: promotion,
        trigger: ".promotion",
        start: "top top",
        end: "bottom",
        scrub: true,
    });

    return () => {
        promotion.kill();
    };
});




const a1 = gsap.timeline();

ScrollTrigger.create({
    animation: a1,
    trigger: ".article1",
    start: "top top",
    end: "+=1500",
    scrub: true,
    pin: true,
});

a1.to(".a1-text-box div", {
    top: "-295%",
});

a1.to(".a1-text", {
    y: -50,
}, "<");




const a2 = gsap.timeline();

ScrollTrigger.create({
    animation: a2,
    trigger: ".article2",
    start: "top bottom",
    end: "top top",
    scrub: true,
    pin: false,
});

a2.to("video", {
    left: "50%",
    top: "60%",
    scale: .6,
    ease: "none",
});


ScrollTrigger.create({
    trigger: ".article2",
    start: "top top",
    end: "+=400",
    scrub: true,
    pin: true,
});



const a3 = gsap.timeline();

ScrollTrigger.create({
    animation: a3,
    trigger: ".article3",
    start: "top bottom",
    end: "+=1000",
    scrub: true,
    pin: false,
});

a3.to("video", {
    left: "30%",
    scale: 1,
    ease: "none",
});



ScrollTrigger.create({
    trigger: ".article3",
    start: "top bottom",
    scrub: true,
    pin: false,
});

a3.from(".a3-box", {
    y: 250,
    autoAlpha: 0,
});




const a4 = gsap.timeline();

ScrollTrigger.create({
    animation: a4,
    trigger: ".article4",
    start: "top bottom",
    end: "top top",
    scrub: true,
    pin: false,
});


a4.to("video", {
    top: "-10%",
    autoAlpha: 0,
});