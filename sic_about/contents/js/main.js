$(function () {
    var Offset = $('.promotion').offset();
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();

        if (scrollTop > Offset.top + 100) {
            $('.main-bg').addClass('active');
        } else {
            $('.main-bg').removeClass('active');
        }
    });
});






const canvas = document.querySelector('.particle-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];
const COLORS = ['#a78bfa', '#818cf8', '#c4b5fd', '#ffffff', '#7c3aed'];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 2;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2 - 0.4;
        this.alpha = 1;
        this.decay = Math.random() * 0.025 + 0.015;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
        this.size *= 0.96;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

let lastTime = 0;

window.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTime < 20) return;
    lastTime = now;

    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
    }
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].alpha <= 0) particles.splice(i, 1);
    }

    requestAnimationFrame(animate);
}

animate();




var swiper = new Swiper(".a3Swiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        551: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        1024: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1251: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});





(function () {
    var cursor = document.createElement('div');
    cursor.classList.add('a3Swiper-cursor');
    cursor.textContent = 'DRAG';
    document.body.appendChild(cursor);

    var swiperEl = document.querySelector('.a3Swiper');

    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    swiperEl.addEventListener('mouseenter', function () {
        cursor.classList.add('is-active');
    });

    swiperEl.addEventListener('mouseleave', function () {
        cursor.classList.remove('is-active');
    });

    var excludeEls = document.querySelectorAll('.a3Swiper .ss-text a');

    excludeEls.forEach(function (el) {
        el.addEventListener('mouseenter', function () {
            cursor.classList.remove('is-active');
        });

        el.addEventListener('mouseleave', function () {
            cursor.classList.add('is-active');
        });
    });
})();






const cates = document.querySelectorAll('.a4-cate');
const wrappers = document.querySelectorAll('.a4-box-wrapper');

function setGridCols(wrapper) {
    const count = wrapper.querySelectorAll('.a4-box').length;
    const isMobile = window.innerWidth <= 1250;

    if (isMobile) {
        const cols = Math.min(count, 2);
        const gap = 24;
        wrapper.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    } else {
        const cols = Math.min(count, 3);
        const gap = 24;
        wrapper.style.gridTemplateColumns = `repeat(${cols}, calc((100% - ${gap * 2}px) / 3))`;
    }

    wrapper.style.justifyContent = 'center';
}

wrappers.forEach(w => setGridCols(w));

window.addEventListener('resize', () => {
    wrappers.forEach(w => setGridCols(w));
});

cates.forEach(cate => {
    cate.addEventListener('click', () => {
        cates.forEach(c => c.classList.remove('show'));
        wrappers.forEach(w => w.classList.remove('show'));

        cate.classList.add('show');
        const target = document.getElementById(cate.dataset.target);
        target.classList.add('show');
        setGridCols(target);
    });
});