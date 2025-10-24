        gsap.registerPlugin(ScrollTrigger);

        const a1 = gsap.timeline();

        ScrollTrigger.create({
            animation: a1,
            trigger: ".article1",
            start: "top top",
            end: "bottom",
            scrub: true,
        });

        
        const a2 = gsap.timeline();

        ScrollTrigger.create({
            animation: a2,
            trigger: ".article1",
            start: "top top",
            end: "+=800",
            scrub: true,
        });

        a2.from(".article2", {
            width: '1400rem',
        }, "<");

        a2.to(".article2", {
            "--darkness": 0.7,
        }, "<");

        a2.to(".article2::before", {
            backdropFilter: "blur(6px)",
        });

        a2.from(".a2-title", {
            autoAlpha: 0,
        }, "<");
        a2.from(".a2-box", {
            autoAlpha: 0,
            y: 30,
            stagger: 0.2
        }, "<");