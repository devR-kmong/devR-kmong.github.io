gsap.registerPlugin(ScrollTrigger);


gsap.from(".promotion-wrapper > *", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.4,
    ease: "power2.out"
})



const a1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article1",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

a1.from(".article1 .ar-title", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
})

a1.from(".a1-wrapper > *", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
}, "-=0.5");



const a2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article2",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

a2.from(".article2 .ar-title", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
})

a2.from(".a2Swiper", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
}, "-=0.5");



const a3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article3",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

a3.from(".a3-wrapper > *", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
})



const a4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article4",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

a4.from(".a4-box", {
    x: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.06,
    ease: "power2.out"
})



const a5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article5",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

a5.from(".article5 .ar-title", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
})

a5.from(".faq-container > *", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out"
}, "-=0.5")



const a6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article6",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

a6.from(".article6 .p-text", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
})

a6.from(".article6 .pBtn", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power2.out"
}, "-=0.5")