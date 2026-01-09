gsap.registerPlugin(ScrollTrigger);

const promotion = gsap.timeline();
let mm = gsap.matchMedia();

mm.add({
    isDesktop: "(min-width: 992px)",
    isMobile: "(max-width: 991px)"
}, (context) => {
    let { isDesktop, isMobile } = context.conditions;

    promotion.from(".logo", {
        fontSize: isMobile ? "150px" : "250px",
        y: isMobile ? "15%" : "0"
    });

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


[1, 2, 3, 4].forEach((num) => {
    const tl = gsap.timeline();

    tl.from(`.a${num}-bg`, { scale: 1.2, autoAlpha: 0.1 })
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