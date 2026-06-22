var swiper = new Swiper(".a3Swiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});






const a2Btn = document.querySelector('.a2Btn');
    const a2Hover = document.querySelector('.a2-hover');

    a2Btn.addEventListener('mousemove', (e) => {
        const rect = a2Btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        a2Hover.style.left = x + 'px';
        a2Hover.style.top = y + 'px';
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
    const cols = Math.min(count, 3);
    const gap = 24; // CSS gap 값과 동일하게
    wrapper.style.gridTemplateColumns = `repeat(${cols}, calc((100% - ${gap * 2}px) / 3))`;
    wrapper.style.justifyContent = 'center';
}

wrappers.forEach(w => setGridCols(w));

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