gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".a1-box h5").forEach(function (el) {
    var target = parseFloat(el.dataset.count);
    var numNode = Array.prototype.filter.call(el.childNodes, function (n) {
        return n.nodeType === 3 && n.nodeValue.trim() !== "";
    })[0];

    if (!numNode) return;

    var counter = { value: 0 };

    gsap.to(counter, {
        value: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".article1",
            start: "top 70%",
            toggleActions: "play none none reverse"
        },
        onUpdate: function () {
            numNode.nodeValue = Math.round(counter.value).toLocaleString("en-US");
        },
        onComplete: function () {
            numNode.nodeValue = target.toLocaleString("en-US");
        }
    });
});




(function(){
    var section = document.querySelector('.article3');
    if(!section || typeof gsap === 'undefined') return;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    var isMobile = window.matchMedia('(max-width:860px)').matches;

    /* 1. 헤드라인 */
    gsap.timeline({
        scrollTrigger:{ trigger:'.a3-head', start:'top 78%', toggleActions:'play none none reverse' }
    })
    .to('.a3-eyebrow', { opacity:1, duration:.5, ease:'power2.out' })
    .to('.a3-eyebrow-rule', { scaleX:1, duration:.7, ease:'power3.inOut' }, '<')
    .to('.a3-headline .a3-hl > span', {
        yPercent:0, duration:1.15, ease:'power4.out', stagger:.09
    }, '-=.35')
    .to('.a3-em-line', { scaleX:1, duration:.75, ease:'power2.inOut' }, '-=.45')
    .to('.a3-headline-mark', { scale:1, duration:.5, ease:'back.out(3)' }, '-=.4');

    /* 2. 스토리 블록 */
    gsap.utils.toArray('.a3-block').forEach(function(block){
        var lines  = block.querySelectorAll('.a3-ln');
        var marks  = block.querySelectorAll('.a3-mark');
        var strike = block.querySelectorAll('.a3-strike i');

        var tl = gsap.timeline({
            scrollTrigger:{ trigger:block, start:'top 82%', toggleActions:'play none none reverse' }
        });

        tl.fromTo(lines,
            { opacity:0, y:36, filter:'blur(6px)' },
            { opacity:1, y:0, filter:'blur(0px)', duration:1, ease:'power3.out', stagger:.13 }, 0);

        if(marks.length){
            tl.to(marks, { backgroundSize:'100% 100%', duration:.7, ease:'power2.inOut', stagger:.16 }, .7);
        }
        if(strike.length){
            tl.to(strike, { scaleX:1, duration:.45, ease:'power2.inOut' }, .9);
        }
    });

    /* 3. 블록 패럴랙스 */
    if(!isMobile){
        gsap.utils.toArray('.a3-block').forEach(function(block){
            var speed = parseFloat(block.dataset.speed || 1);
            gsap.fromTo(block,
                { y:(1 - speed) * 60 },
                {
                    y:(speed - 1) * 60,
                    ease:'none',
                    scrollTrigger:{ trigger:block, start:'top bottom', end:'bottom top', scrub:1 }
                });
        });
    }

    /* 4. 배경 */
    gsap.to('.a3-bg-orb', {
        yPercent:-22, ease:'none',
        scrollTrigger:{ trigger:section, start:'top bottom', end:'bottom top', scrub:1.4 }
    });
    gsap.to('.a3-bg-dots', {
        yPercent:10, ease:'none',
        scrollTrigger:{ trigger:section, start:'top bottom', end:'bottom top', scrub:1.6 }
    });

    /* 5. 런칭 */
    gsap.timeline({
        scrollTrigger:{ trigger:'.a3-launch', start:'top 80%', toggleActions:'play none none reverse' }
    })
    .fromTo('.a3-launch-rule',
        { scaleX:0 },
        { scaleX:1, duration:1.1, ease:'power3.inOut', transformOrigin:'left center' })
    .to('.a3-launch-tag', { opacity:1, duration:.5, ease:'power2.out' }, '-=.7')
    .fromTo('.a3-launch .a3-ln',
        { opacity:0, y:30 },
        { opacity:1, y:0, duration:.9, ease:'power3.out' }, '-=.5')
    .to('.a3-brand em', { opacity:1, y:0, rotate:0, duration:.75, ease:'back.out(2.2)', stagger:.09 }, '-=.45')
    .fromTo('.a3-brand-glow',
        { opacity:0, scale:.4 },
        { opacity:1, scale:1, duration:1, ease:'power2.out' }, '-=.55');

    window.addEventListener('load', function(){ ScrollTrigger.refresh(); });
})();