gsap.registerPlugin(ScrollTrigger);


// let upBox = document.querySelectorAll('.upBox');

// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.article2',
//         pin: true,
//         scrub: 3,
//         start: 'top top',
//         end: '+=200%',
//         markers: true
//     }
// })

// tl.from(upBox, {
//     y: '200%',
//     duration: 8,
//     ease: 'none',
//     stagger: 3,
// })

// tl.to(upBox, {
//     y: 0
// })



gsap.utils.toArray('.parallax__item').forEach((item) => {
    let color = item.getAttribute('data-bgcolor');

    ScrollTrigger.create({
        trigger: item,
        start: 'top 50%',
        end: 'bottom 50%',
        markers: false,

        onEnter: () => gsap.to('section', {
            backgroundColor: color,
            duration: 1.4,
        }),
        onEnterBack: () => gsap.to('section', {
            backgroundColor: color,
            duration: 1.4,
        }),
    });
});




let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.a2-sticky',
        start: 'top top',
        end: 'bottom 50%',

        onEnter: () => gsap.to('.a2-sticky', {
            opacity: 1,
        }),
        onEnterBack: () => gsap.to('.a2-sticky', {
            opacity: 0,
        }),
    }
})