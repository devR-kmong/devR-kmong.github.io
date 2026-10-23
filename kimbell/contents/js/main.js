/* =========================================================
   킴벨피부과병원 MAIN  (GSAP + ScrollTrigger 필요 / 없으면 정적 표시)
========================================================= */
(function () {
	'use strict';

	var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
	if (hasGsap) gsap.registerPlugin(ScrollTrigger);

	/* ---------- 00. HERO : 4장 슬라이드 (이미지/영상) ---------- */
	var hero = document.querySelector('.kb-hero');
	if (hero) {
		var DURATION = 6; /* 초 */
		var slides = hero.querySelectorAll('.kb-hero-slide');
		var bars = hero.querySelectorAll('.kb-hero-bars li');
		var curEl = hero.querySelector('.kb-hero-cur');
		var toggle = hero.querySelector('.kb-hero-toggle');
		var total = slides.length;
		var index = 0;
		var prevTimer = null;

		hero.style.setProperty('--kb-hero-dur', DURATION + 's');

		var pad = function (n) { return (n < 10 ? '0' : '') + n; };
		var playVideo = function (slide, play) {
			var v = slide.querySelector('video');
			if (!v) return;
			if (play) { v.currentTime = 0; var p = v.play(); if (p && p.catch) p.catch(function () {}); }
			else v.pause();
		};

		var go = function (next) {
			if (next === index) return;
			next = (next + total) % total;
			var prev = slides[index];

			slides.forEach(function (s) { s.classList.remove('is-prev'); });
			prev.classList.remove('is-active');
			prev.classList.add('is-prev');
			slides[next].classList.add('is-active');
			playVideo(slides[next], true);

			clearTimeout(prevTimer);
			prevTimer = setTimeout(function () {
				prev.classList.remove('is-prev');
				playVideo(prev, false);
			}, 1800);

			bars.forEach(function (b, i) {
				b.classList.remove('is-active');
				if (i === next) { void b.offsetWidth; b.classList.add('is-active'); }
			});
			if (curEl) curEl.textContent = pad(next + 1);
			index = next;
		};

		/* 진행바 애니메이션이 끝나면 다음 슬라이드 (일시정지와 자연스럽게 연동) */
		bars.forEach(function (b, i) {
			var fill = b.querySelector('i');
			if (fill) fill.addEventListener('animationend', function () { if (i === index) go(index + 1); });
			b.querySelector('button').addEventListener('click', function () { go(i); });
		});

		if (toggle) {
			toggle.addEventListener('click', function () {
				var paused = hero.classList.toggle('is-paused');
				toggle.setAttribute('aria-label', paused ? '재생' : '일시정지');
				var v = slides[index].querySelector('video');
				if (v) paused ? v.pause() : v.play();
			});
		}

		document.addEventListener('visibilitychange', function () {
			if (document.hidden) hero.classList.add('is-paused');
			else if (!hero.dataset.userPaused) hero.classList.remove('is-paused');
		});
		if (toggle) toggle.addEventListener('click', function () {
			if (hero.classList.contains('is-paused')) hero.dataset.userPaused = '1';
			else delete hero.dataset.userPaused;
		});

		playVideo(slides[0], true);
		requestAnimationFrame(function () {
			requestAnimationFrame(function () { hero.classList.add('is-ready'); });
		});

		if (hasGsap) {
			gsap.to('.kb-hero-inner', {
				yPercent: 12, autoAlpha: 0.2, ease: 'none',
				scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
			});
			gsap.to('.kb-hero-slides', {
				yPercent: 18, ease: 'none',
				scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
			});
		}
	}

	/* ---------- 공통 등장 ---------- */
	if (hasGsap) {
		gsap.utils.toArray('.kb-reveal').forEach(function (el) {
			gsap.from(el, {
				y: 50, autoAlpha: 0, duration: 1.2, ease: 'power3.out',
				scrollTrigger: { trigger: el, start: 'top 88%', once: true }
			});
		});
	}

	/* ---------- 01. INTRO : 이미지 확장 ---------- */
	var introMedia = document.querySelector('.kb-intro-media');
	if (hasGsap && introMedia) {
		gsap.fromTo(introMedia,
			{ clipPath: 'inset(0% 14% 0% 14% round 10px)' },
			{ clipPath: 'inset(0% 0% 0% 0% round 10px)', ease: 'none',
				scrollTrigger: { trigger: introMedia, start: 'top 90%', end: 'top 30%', scrub: 0.6 } }
		);
		gsap.fromTo(introMedia.querySelector('img'),
			{ scale: 1.15 },
			{ scale: 1, ease: 'none',
				scrollTrigger: { trigger: introMedia, start: 'top bottom', end: 'bottom top', scrub: true } }
		);
	}

	/* ---------- 02. SIGNATURE : 시계 링 회전 + 아크 ---------- */
	var sig = document.querySelector('.kb-signature');
	if (hasGsap && sig) {
		gsap.fromTo('.kb-sig-ring', { rotate: -8 }, {
			rotate: 8, ease: 'none',
			scrollTrigger: { trigger: sig, start: 'top bottom', end: 'bottom top', scrub: true }
		});
		gsap.fromTo('.kb-sig-circle-arc', { strokeDashoffset: 22 }, {
			strokeDashoffset: -40, ease: 'none',
			scrollTrigger: { trigger: sig, start: 'top bottom', end: 'bottom top', scrub: true }
		});
	}

	/* ---------- 03. COUNT ---------- */
	var counter = document.querySelector('.kb-counter');
	if (counter) {
		var target = parseInt(counter.getAttribute('data-count'), 10) || 0;
		var format = function (n) { return Math.round(n).toLocaleString('ko-KR'); };
		if (hasGsap) {
			var obj = { v: 0 };
			counter.textContent = '0';
			gsap.to(obj, {
				v: target, duration: 2.6, ease: 'power3.out',
				scrollTrigger: { trigger: counter, start: 'top 85%', once: true },
				onUpdate: function () { counter.textContent = format(obj.v); }
			});
		} else {
			counter.textContent = format(target);
		}
	}

	/* ---------- 04. SPECIAL : 아코디언 ---------- */
	var specialItems = document.querySelectorAll('.kb-special-item');
	var setActive = function (item) {
		specialItems.forEach(function (el) { el.classList.toggle('is-active', el === item); });
	};
	specialItems.forEach(function (item) {
		item.addEventListener('mouseenter', function () {
			if (window.matchMedia('(hover: hover)').matches) setActive(item);
		});
		item.addEventListener('click', function () { setActive(item); });
	});

	/* ---------- 05. SPACE : 드래그 슬라이더 ---------- */
	var slider = document.querySelector('.kb-space-slider');
	if (slider) {
		var items = slider.querySelectorAll('.kb-space-track li');
		var bar = document.querySelector('.kb-space-progress span');
		var cur = document.querySelector('.kb-space-cur');
		var count = items.length;

		var update = function () {
			var max = slider.scrollWidth - slider.clientWidth;
			var ratio = max > 0 ? slider.scrollLeft / max : 0;
			if (bar) bar.style.width = (100 / count + ratio * (100 - 100 / count)) + '%';
			if (cur) cur.textContent = String(Math.min(count, Math.round(ratio * (count - 1)) + 1)).padStart(2, '0');
		};
		var step = function () {
			if (items.length < 2) return slider.clientWidth;
			return items[1].offsetLeft - items[0].offsetLeft;
		};

		slider.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);
		update();

		var prev = document.querySelector('.kb-space-prev');
		var next = document.querySelector('.kb-space-next');
		if (prev) prev.addEventListener('click', function () { slider.scrollBy({ left: -step(), behavior: 'smooth' }); });
		if (next) next.addEventListener('click', function () { slider.scrollBy({ left: step(), behavior: 'smooth' }); });

		/* 마우스 드래그 (터치는 네이티브 스크롤) */
		var down = false, moved = false, startX = 0, startLeft = 0;
		slider.addEventListener('pointerdown', function (e) {
			if (e.pointerType !== 'mouse') return;
			down = true; moved = false; startX = e.clientX; startLeft = slider.scrollLeft;
		});
		window.addEventListener('pointermove', function (e) {
			if (!down) return;
			var dx = e.clientX - startX;
			if (!moved && Math.abs(dx) > 4) { moved = true; slider.classList.add('is-drag'); }
			if (moved) slider.scrollLeft = startLeft - dx;
		});
		window.addEventListener('pointerup', function () {
			if (!down) return;
			down = false;
			if (!moved) return;
			var s = step();
			var target = Math.round(slider.scrollLeft / s) * s;
			slider.classList.remove('is-drag');
			slider.scrollTo({ left: target, behavior: 'smooth' });
		});
	}
})();
