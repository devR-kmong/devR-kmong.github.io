/* SiteKit 프런트 : 헤더(메가 드롭다운 · 전체메뉴) + 메인 비주얼 슬라이더 (의존성 없음) */
(function () {
    'use strict';

    /* ---------- 헤더 : 스크롤 배경 · 메가 드롭다운 · 전체메뉴(사이트맵) ---------- */
    function initHeader() {
        var header = document.querySelector('.sk-header');
        if (!header) return;
        var root = document.documentElement;

        // 스크롤하면 흰 배경
        var ticking = false;
        var onScroll = function () {
            ticking = false;
            header.classList.toggle('is-scrolled', (window.pageYOffset || root.scrollTop) > 10);
        };
        window.addEventListener('scroll', function () {
            if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
        }, { passive: true });
        onScroll();

        // 메가 드롭다운 : 대메뉴에 마우스를 올리면 전체 하위메뉴 펼침, 헤더(패널 포함)를 벗어나면 닫힘
        var menu = header.querySelector('.pc-menu');
        if (menu && menu.querySelector('.sk-sub')) {
            var setMegaHeight = function () {
                var max = 0;
                var subs = menu.querySelectorAll('.sk-sub');
                for (var i = 0; i < subs.length; i++) max = Math.max(max, subs[i].offsetHeight);
                header.style.setProperty('--sk-mega-h', (max + 34) + 'px');
            };
            setMegaHeight();
            window.addEventListener('resize', setMegaHeight);
            if (document.fonts && document.fonts.ready) document.fonts.ready.then(setMegaHeight);

            var closeTimer = null;
            var open = function () { clearTimeout(closeTimer); header.classList.add('is-mega'); };
            var close = function () { clearTimeout(closeTimer); closeTimer = setTimeout(function () { header.classList.remove('is-mega'); }, 120); };
            menu.addEventListener('mouseenter', open);
            header.addEventListener('mouseleave', close);
            header.addEventListener('mouseenter', function () { if (header.classList.contains('is-mega')) clearTimeout(closeTimer); });
            // 키보드
            menu.addEventListener('focusin', open);
            menu.addEventListener('focusout', function (e) { if (!menu.contains(e.relatedTarget)) close(); });
        }

        // 전체메뉴(사이트맵)
        var check = header.querySelector('#check');
        if (!check) return;
        var btn = header.querySelector('.menuBtns');
        var setOpen = function (on) {
            check.checked = on;
            header.classList.toggle('is-open', on);
            header.classList.remove('is-mega');
            root.style.overflow = on ? 'hidden' : '';
            if (btn) btn.setAttribute('aria-label', on ? '전체메뉴 닫기' : '전체메뉴 열기');
        };
        check.addEventListener('change', function () { setOpen(check.checked); });
        header.addEventListener('click', function (e) {
            var a = e.target.closest ? e.target.closest('.sk-sitemap a') : null;
            if (a && check.checked) setOpen(false);   // 링크(같은 페이지 #앵커 포함) 누르면 닫기
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && check.checked) { setOpen(false); if (btn) btn.focus(); }
        });
    }

    /* ---------- 메인 비주얼 ---------- */
    function Hero(root) {
        var slides = root.querySelectorAll('.sk-hero-slide');
        var dots = root.querySelectorAll('.sk-hero-dot');
        var pauseBtn = root.querySelector('.sk-hero-pause');
        var delay = parseInt(root.getAttribute('data-autoplay'), 10) || 0;
        var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var cur = 0, timer = null, paused = false, hover = false;
        if (slides.length < 2) return;

        function go(n) {
            n = (n + slides.length) % slides.length;
            if (n === cur) return;
            slides[cur].classList.remove('is-active');
            slides[cur].setAttribute('aria-hidden', 'true');
            setFocusable(slides[cur], false);
            if (dots[cur]) { dots[cur].classList.remove('is-active'); dots[cur].removeAttribute('aria-current'); }
            cur = n;
            slides[cur].classList.add('is-active');
            slides[cur].removeAttribute('aria-hidden');
            setFocusable(slides[cur], true);
            if (dots[cur]) { dots[cur].classList.add('is-active'); dots[cur].setAttribute('aria-current', 'true'); }
            // 지연 로딩 이미지 미리 받아두기
            var next = slides[(cur + 1) % slides.length].querySelector('img[loading="lazy"]');
            if (next) next.loading = 'eager';
            restart();
        }
        function setFocusable(slide, on) {
            var links = slide.querySelectorAll('.p-text a');
            for (var i = 0; i < links.length; i++) {
                if (on) links[i].removeAttribute('tabindex'); else links[i].setAttribute('tabindex', '-1');
            }
        }
        function stop() { if (timer) { clearTimeout(timer); timer = null; } }
        function restart() {
            stop();
            if (!delay || paused || hover || document.hidden) return;
            timer = setTimeout(function () { go(cur + 1); }, delay);
        }

        root.querySelector('.sk-hero-prev').addEventListener('click', function () { go(cur - 1); });
        root.querySelector('.sk-hero-next').addEventListener('click', function () { go(cur + 1); });
        for (var i = 0; i < dots.length; i++) {
            (function (k) { dots[k].addEventListener('click', function () { go(k); }); })(i);
        }
        if (pauseBtn) {
            if (reduce) { paused = true; pauseBtn.classList.add('is-paused'); pauseBtn.setAttribute('aria-label', '자동재생 시작'); }
            pauseBtn.addEventListener('click', function () {
                paused = !paused;
                pauseBtn.classList.toggle('is-paused', paused);
                pauseBtn.setAttribute('aria-label', paused ? '자동재생 시작' : '자동재생 정지');
                restart();
            });
        }
        // 컨트롤에 마우스를 올리거나 키보드 포커스가 슬라이드 안에 있으면 잠시 멈춤
        var ctrl = root.querySelector('.sk-hero-ctrl');
        ctrl.addEventListener('mouseenter', function () { hover = true; stop(); });
        ctrl.addEventListener('mouseleave', function () { hover = false; restart(); });
        root.addEventListener('focusin', function () { hover = true; stop(); });
        root.addEventListener('focusout', function (e) { if (!root.contains(e.relatedTarget)) { hover = false; restart(); } });
        document.addEventListener('visibilitychange', restart);

        // 키보드 ← →
        root.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') go(cur - 1);
            else if (e.key === 'ArrowRight') go(cur + 1);
        });

        // 스와이프
        var sx = 0, sy = 0, tracking = false;
        root.addEventListener('touchstart', function (e) {
            if (e.touches.length !== 1) return;
            tracking = true; sx = e.touches[0].clientX; sy = e.touches[0].clientY;
        }, { passive: true });
        root.addEventListener('touchend', function (e) {
            if (!tracking) return;
            tracking = false;
            var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? cur + 1 : cur - 1);
        }, { passive: true });

        restart();
    }

    function init() {
        initHeader();
        var heroes = document.querySelectorAll('.sk-hero.is-multi');
        for (var i = 0; i < heroes.length; i++) new Hero(heroes[i]);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
