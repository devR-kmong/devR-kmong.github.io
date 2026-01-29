const promotion = gsap.timeline({
    scrollTrigger: {
        trigger: ".promotion",
        start: "top top",
        end: "bottom",
        scrub: true,
    }
});

promotion.from(".logo", {
    width: "60%",
    y: "15%",
});

promotion.to(".logo", {
    width: "100rem",
    left: "70rem",
    top: "20rem"
}, "<");

promotion.to(".main-video", {
    left: "70%",
    top: "40%",
    scale: 0.9
}, "<");




// 비디오 요소 선택
const videos = document.querySelectorAll(".main-video video");
const mainVideo2 = videos[1];

const a1 = gsap.timeline();

ScrollTrigger.create({
    animation: a1,
    trigger: ".article1",
    start: "top top",
    end: "+=500",
    scrub: true,
    pin: true,
    anticipatePin: 1
});

a1.to(".a1-text-box div", { top: "-295%" });

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
    scrub: true,
    pin: false,
    anticipatePin: 1
});

a2.to(".main-video", {
    left: "50%",
    top: "60%",
    scale: .7,
    ease: "none",
});


gsap.from(".a2-box", {
    y: 100,
    autoAlpha: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger: {
        trigger: ".a2-box-wrapper",
        start: "top 50%",
        toggleActions: "play reverse play reverse"
    }
});