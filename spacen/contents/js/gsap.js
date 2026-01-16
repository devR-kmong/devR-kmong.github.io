gsap.registerPlugin(ScrollTrigger);

const promotion = gsap.timeline();
let mm = gsap.matchMedia();

mm.add({
    isDesktop: "(min-width: 992px)",
    isMobile: "(max-width: 991px)"
}, (context) => {
    let { isDesktop, isMobile } = context.conditions;

    promotion.from(".logo", {
        width: isMobile ? "100rem" : "60%",
        y: isMobile ? "15%" : "0"
    });

    promotion.to(".logo", {
        left: "70rem", 
        top: "40rem"
    }, "<");

    promotion.to(".main-video", {
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




// 비디오 요소 선택
const videos = document.querySelectorAll(".main-video video");
const mainVideo2 = videos[1];

const a1 = gsap.timeline();
ScrollTrigger.create({
    animation: a1,
    trigger: ".article1",
    start: "top top",
    end: "+=1500",
    scrub: true,
    pin: true,
});

a1.to(".a1-text-box div", { top: "-295%" });
a1.to(".a1-text", { y: -50 }, "<");

gsap.to(mainVideo2, {
    opacity: 1,
    duration: 0.5,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".article1",
        start: "top top",
        end: "+=1500",
        toggleActions: "play reverse play reverse",
    }
});




const a2 = gsap.timeline();

ScrollTrigger.create({
    animation: a2,
    trigger: ".article2",
    start: "top bottom",
    end: "top top",
    scrub: true,
    pin: false,
});

a2.to(".main-video", {
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

a3.to(".main-video", {
    left: "30%",
    scale: 1,
    ease: "none",
});


gsap.from(".a3-box", {
    y: 100,
    autoAlpha: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: ".a3-box-wrapper",
        start: "top 50%",
        toggleActions: "play reverse play reverse"
    }
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


a4.to(".main-video", {
    top: "-15%",
    autoAlpha: 0,
});