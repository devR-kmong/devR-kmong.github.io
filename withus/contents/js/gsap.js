gsap.registerPlugin(ScrollTrigger);


/* promotion */
const prom = gsap.timeline();

prom.to(".p-sb", { y: -270, scale: 0.5, autoAlpha: 0 })
    .to(".scrollDown", { bottom: '-70rem' }, "<")
    .from(".main-background", { autoAlpha: 0 }, "<")
    .from(".p-sbw", { autoAlpha: 0 })
    .from(".p-text h6", { y: 50, autoAlpha: 0 }, "<")
    .from(".p-text h5", { y: 50, autoAlpha: 0 })
    .from(".p-text p", { y: 50, autoAlpha: 0 })

ScrollTrigger.create({
    animation: prom,
    trigger: ".promotion",
    start: "top top",
    end: "+=2000",
    scrub: 2,
    pin: true,
    anticipatePin: 1,
    onEnter: () => {
        document.querySelector(".header").style.display = "none";
    },
    onEnterBack: () => {
        document.querySelector(".header").style.display = "none";
    }
});


/* article1 */
const a1 = gsap.timeline();

a1.from(".a1-title h5", { y: 50, autoAlpha: 0 })
  .from(".a1-title p", { y: 50, autoAlpha: 0 })
  .from(".a1-icon-wrapper", { autoAlpha: 0 })

ScrollTrigger.create({
    animation: a1,
    trigger: ".article1",
    start: "top top",
    end: "+=1000",
    scrub: 2,
    pin: true,
    anticipatePin: 1,
    onEnter: () => {
        document.querySelector(".header").style.display = "block";
        $('.gnb ul li a').addClass('black');
        $('.logo-w').addClass('hide');
        $('.logo').removeClass('hide');
    },
    onLeaveBack: () => {
        document.querySelector(".header").style.display = "block";
        $('.gnb ul li a').removeClass('black');
        $('.logo').addClass('hide');
        $('.logo-w').removeClass('hide');
    },
    onEnterBack: () => {
        $('.gnb ul li a').addClass('black');
        $('.logo-w').addClass('hide');
        $('.logo').removeClass('hide');
    }
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $('.gnb ul li a').addClass('black');
                $('.logo-w').addClass('hide');
                $('.logo').removeClass('hide');
            } else {
                $('.gnb ul li a').removeClass('black');
                $('.logo').addClass('hide');
                $('.logo-w').removeClass('hide');
            }
        });
    },
    {
        threshold: 0, // 단 1px이라도 보이면 감지됨
    }
);

observer.observe(document.querySelector(".article1"));



/* article2 */
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
    let target = +counter.dataset.target;

    ScrollTrigger.create({
        trigger: counter,
        start: 'top 80%',
        onEnter: () => {
            gsap.fromTo(counter,
                { innerText: 0 },
                {
                    innerText: target,
                    duration: 2,
                    ease: 'power1.out',
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        const value = Math.floor(counter.innerText);
                        counter.innerText = value.toLocaleString();
                    }
                }
            );
        }
    });
});



/* article4 */
const a4 = gsap.timeline();

a4.from(".article4 .a1-title", { y: 50, autoAlpha: 0 })
  .from(".article4 #slider", { autoAlpha: 0 })

ScrollTrigger.create({
    animation: a4,
    trigger: ".article4",
    start: "top top",
    end: "+=1000",
    scrub: 2,
    pin: true,
    anticipatePin: 1,
    onEnter: () => {
        $('.gnb ul li a').addClass('black');
        $('.logo-w').addClass('hide');
        $('.logo').removeClass('hide');
    },
    onLeaveBack: () => {
        $('.gnb ul li a').removeClass('black');
        $('.logo').addClass('hide');
        $('.logo-w').removeClass('hide');
    },
    onEnterBack: () => {
        $('.gnb ul li a').addClass('black');
        $('.logo-w').addClass('hide');
        $('.logo').removeClass('hide');
    }
});

const observer2 = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                $('.gnb ul li a').removeClass('black');
                $('.logo').addClass('hide');
                $('.logo-w').removeClass('hide');
            }
        });
    },
    {
        threshold: 0, // 단 1px이라도 보이면 감지됨
    }
);

observer2.observe(document.querySelector(".article4"));



/* article5 */
const a5 = gsap.timeline();

a5.from(".article5 .a1-title", { y: 50, autoAlpha: 0 })
  .from(".a5-left", { x: -150, autoAlpha: 0 })
  .from(".a5-right .a5-box-title", { y: 50, autoAlpha: 0 })
  .from(".a5-right .a5-box.one", { y: 50, autoAlpha: 0 })
  .from(".a5-right .a5-box.two", { y: 50, autoAlpha: 0 })
  .from(".a5-right .a5-box.three", { y: 50, autoAlpha: 0 })
  .to(".a5-left", { x: 200, autoAlpha: 0 })
  .to(".a5-right", { x: -350 }, "<")
  .to(".a5-right", { autoAlpha: 1 })
  .to(".a5-right", { autoAlpha: 1 })

ScrollTrigger.create({
    animation: a5,
    trigger: ".article5",
    start: "top top",
    end: "+=3000",
    scrub: 2,
    pin: true,
    anticipatePin: 1,
});