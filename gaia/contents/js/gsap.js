gsap.registerPlugin(ScrollTrigger);

const promotion = gsap.timeline();

promotion.from(".logo", { fontSize: "250px" })

ScrollTrigger.create({
    animation: promotion,
    trigger: ".promotion",
    start: "top top",
    end: "bottom",
    scrub: true,
});


[1, 2, 3, 4].forEach((num) => {
    const tl = gsap.timeline();

    tl.from(`.a${num}-bg`, { scale: 1.05, autoAlpha: 0.1 })
        .from(`.article${num} .at-text`, { y: 80, ease: 'none', autoAlpha: 0 }, "<")
        .to(`.article${num} .at-text h5`, { autoAlpha: 1 })

    ScrollTrigger.create({
        animation: tl,
        trigger: `.article${num}`,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
    });
});