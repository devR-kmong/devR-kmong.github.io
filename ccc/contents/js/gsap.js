const heroTl = gsap.timeline();

heroTl
    // 1. C 알파벳(original) 등장
    .from(".hero-original", { duration: 1.2, scale: 0.5, opacity: 0, ease: "back.out(1.7)" })
    .to(".hero-original", { x: -400 })

    // 2. 반전된 C(mirrored) 생성 및 우측 이동
    .to(".hero-mirrored", { duration: 0.8, opacity: 1, x: 400, ease: "power2.out" })

    // 3. 교차하여 교집합 형성 (1.5초)
    .to(".hero-original", { x: 160, duration: 1.5, ease: "power2.inOut" }, "cross")
    .to(".hero-mirrored", { x: -160, duration: 1.5, ease: "power2.inOut" }, "cross")

    // 3-1. 1초 정지
    .to({}, { duration: 1 })

    // 4. 교집합이 벌어지며 내부 ( company ) 등장
    // 이때 mirrored는 점점 투명해지며 사라지고, 원래 구성 요소들이 나타남
    .to(".hero-original", {
        x: -250, // 최종 로고의 C 위치로 이동
        duration: 1.2,
        ease: "expo.inOut"
    }, "reveal")
    .to(".hero-mirrored", {
        x: 250,
        opacity: 0, // 역할을 다하고 사라짐
        duration: 1.2,
        ease: "expo.inOut"
    }, "reveal")
    .from(".hero-inner-content", {
        scale: 0.2,
        ease: "power2.out"
    }, "reveal+=1")
    .to(".hero-inner-content", {
        opacity: 1,
        scale: 1,
        width: "auto",
        duration: 1,
        ease: "power2.out"
    }, "reveal+=1")

    // 5. 최종 로고 형태로 정렬 (original C는 좌측 끝, 나머지는 우측으로)
    .to(".hero-logo-wrapper", {
        duration: 0.8,
        ease: "power2.inOut"
    }, "final")
    .to(".hero-original", {
        x: -420,
        duration: 0.8
    }, "final")
    .to(".hero-inner-content", {
        x: 220,
        duration: 0.8
    }, "final");




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
    scale: .9,
    ease: "none",
});


gsap.from(".a2-box", {
    y: 100,
    autoAlpha: 0,
    stagger: 0.2,
    duration: 0.7,
    scrollTrigger: {
        trigger: ".a2-box-wrapper",
        start: "top 50%",
        toggleActions: "play reverse play reverse"
    }
});