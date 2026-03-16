gsap.registerPlugin(ScrollTrigger);


gsap.from(".p-text h6", {
    y: 50,
    autoAlpha: 0,
    duration: 1,
})
gsap.from(".p-text h5", {
    y: 50,
    delay: 0.5,
    autoAlpha: 0,
    duration: 1,
})
gsap.from(".p-text p", {
    y: 50,
    delay: 1,
    autoAlpha: 0,
    duration: 1,
})
gsap.from(".pBtn", {
    scale: 0.7,
    delay: 1.6,
    autoAlpha: 0,
})


const a1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article1",
        start: "top top",
        end: "+=1500",
        scrub: true,
        pin: true,
        anticipatePin: 1,
    }
});

a1.from(".a1-sb", {
    x: -100,
    autoAlpha: 0,
})
a1.from(".a1-sisa", {
    x: 100,
    autoAlpha: 0,
}, "<")
a1.from(".a1-logo i", {
    autoAlpha: 0,
}, "<")
a1.from(".a1-text p", {
    y: 50,
    autoAlpha: 0,
    stagger: 0.5,
})
a1.to({}, { duration: 1 });



const a2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article2",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

a2.from(".a2-box", {
    y: 50,
    stagger: .15,
    duration: .5,
    autoAlpha: 0,
})



const a3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article3",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

a3.from(".info-table tr", {
    y: 20,
    stagger: .15,
    duration: .5,
    autoAlpha: 0,
})



const a4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article4",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

a4.from(".step-item", {
    y: 50,
    stagger: .15,
    duration: .5,
    autoAlpha: 0,
})


const a5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".article5",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

a5.from(".a5-box", {
    y: 50,
    stagger: .15,
    duration: .5,
    autoAlpha: 0,
})