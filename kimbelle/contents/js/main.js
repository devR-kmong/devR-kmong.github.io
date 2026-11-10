(function () {
	function renderMap() {
		var box = document.querySelector('.kb-loc-map');
		if (!box || !window.daum || !daum.roughmap) return;
		new daum.roughmap.Lander({
			"timestamp": "1793330558582",
			"key": "46348w474op",
			"mapWidth": String(Math.round(box.clientWidth)),
			"mapHeight": String(Math.round(box.clientHeight))
		}).render();
	}
	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderMap);
	else renderMap();
})();

(function () {
	'use strict';

	var root = document.documentElement;
	var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
	var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var motion = hasGsap && !reduce;
	var canHover = window.matchMedia('(hover: hover)').matches;
	var pad = function (n) { return (n < 10 ? '0' : '') + n; };
	var $ = function (s, c) { return (c || document).querySelector(s); };
	var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

	var hero = $('.kb-hero');

	if (motion) {
		window.__kbMotion = true;           /* head 스니펫의 안전장치 해제 */
		root.classList.add('kb-motion');
		gsap.registerPlugin(ScrollTrigger);
		ScrollTrigger.config({ ignoreMobileResize: true });
	} else {
		/* 연출 없이 정적 표시 */
		root.classList.remove('kb-motion');
		if (hero) hero.classList.add('is-ready', 'is-playing');
		$$('.kb-counter').forEach(function (el) { el.textContent = Math.round(+el.getAttribute('data-count') || 0).toLocaleString('ko-KR'); });
	}

	/* ---------- Lenis 스무스 스크롤 ----------
	   빌더 common.js 가 이미 `const lenis = new Lenis(...)` 로 만들어 둔 경우
	   (최상위 const 라 window.lenis 로는 안 보임) 그 인스턴스를 그대로 사용.
	   새로 만들면 Lenis 가 2개가 되어 서로 스크롤을 당기면서 pin 위치가 튀고 끝까지 안 내려감 */
	var lenis = window.lenis || null;
	if (!lenis) {
		try { lenis = (new Function('return (typeof lenis !== "undefined" && lenis && typeof lenis.scrollTo === "function") ? lenis : null;'))(); }
		catch (e) { lenis = null; }
		if (lenis) window.lenis = lenis;
	}
	if (motion && !lenis && typeof window.Lenis === 'function') {
		lenis = new window.Lenis({ lerp: 0.09, anchors: true });
		window.lenis = lenis;
		gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
		gsap.ticker.lagSmoothing(0);
	}
	if (lenis && motion) lenis.on('scroll', ScrollTrigger.update);
	var scrollToY = function (y) {
		if (lenis) lenis.scrollTo(y, { duration: 1.2 });
		else window.scrollTo({ top: y, behavior: 'smooth' });
	};


	/* =========================================================
	   00. HERO : 4장 슬라이드 + 슬라이드별 문구 + 첫 진입 인트로
	========================================================= */
	if (hero) {
		var DURATION = 6; /* 초 */
		var slides = $$('.kb-hero-slide', hero);
		var copies = $$('.kb-hero-copy', hero);
		var bars = $$('.kb-hero-bars li', hero);
		var toggle = $('.kb-hero-toggle', hero);
		var total = slides.length;
		var index = 0;
		var zTop = 1;
		var leaveTimers = [];
		var doneCall = null; /* 정리 예약은 항상 하나만 */

		hero.style.setProperty('--kb-hero-dur', DURATION + 's');

		var media = function (slide) { return slide && slide.querySelector('img, video'); };
		var playVideo = function (slide, play) {
			var v = slide && slide.querySelector('video');
			if (!v) return;
			if (play) { v.currentTime = 0; var p = v.play(); if (p && p.catch) p.catch(function () { }); }
			else v.pause();
		};
		/* 켄번스 : 새로 보이기 시작하는 슬라이드만 처음부터 (보이는 중인 이미지는 절대 리셋하지 않음) */
		var kenburns = function (slide) {
			var m = media(slide);
			if (!m || !motion) return;
			gsap.killTweensOf(m);
			gsap.fromTo(m, { scale: 1.1 }, { scale: 1, duration: 9, ease: 'power2.out' });
		};

		/* 제목 글자 분리 (인트로 전용) */
		if (motion) {
			$$('.kb-hero-title .kb-line > span', hero).forEach(function (span) {
				span.innerHTML = span.textContent.split('').map(function (ch) {
					return ch === ' ' ? ' ' : '<span class="kb-ch">' + ch + '</span>';
				}).join('');
			});
			slides.forEach(function (s, i) { gsap.set(s, { opacity: i === 0 ? 1 : 0, zIndex: i === 0 ? 1 : 0 }); });
		}

		var go = function (next) {
			next = (next + total) % total;
			if (next === index) return;
			var prevI = index;
			var slide = slides[next];
			index = next;

			/* 배경 : 새 슬라이드를 맨 위에 올려 서서히 덮음 (아래 슬라이드는 그대로 유지 → 비침/튐 없음) */
			slides.forEach(function (s, i) { s.classList.toggle('is-active', i === next); s.classList.remove('is-prev'); });
			if (motion) {
				var op = function (el) { return parseFloat(gsap.getProperty(el, 'opacity')) || 0; };
				var zOf = function (el) { return parseInt(gsap.getProperty(el, 'zIndex'), 10) || 0; };
				var startOp = op(slide);
				var done = function () {
					if (index !== next) return;
					slides.forEach(function (s, i) { if (i !== next) { gsap.killTweensOf(s, 'opacity'); gsap.set(s, { opacity: 0 }); playVideo(s, false); } });
				};
				gsap.killTweensOf(slide, 'opacity');
				if (doneCall) { doneCall.kill(); doneCall = null; }
				if (startOp < 0.01) {
					/* 안 보이던 슬라이드 : 맨 위로 올려 서서히 덮음 */
					gsap.set(slide, { zIndex: ++zTop });
					kenburns(slide);
					gsap.to(slide, { opacity: 1, duration: 1.6, ease: 'power2.inOut' });
					doneCall = gsap.delayedCall(1.65, done);
				} else {
					/* 이미 아래에 보이고 있는 슬라이드 : 위로 끌어올리지 않고, 위를 덮은 슬라이드를 걷어냄 (즉시 전환 방지) */
					var z = zOf(slide);
					var above = slides.filter(function (s) { return s !== slide && zOf(s) > z && op(s) > 0; });
					above.forEach(function (s) { gsap.killTweensOf(s, 'opacity'); gsap.to(s, { opacity: 0, duration: 1.6 * op(s) + 0.2, ease: 'power2.inOut' }); });
					gsap.to(slide, { opacity: 1, duration: 1.6 * (1 - startOp) + 0.2, ease: 'power2.inOut' });
					doneCall = gsap.delayedCall(1.85, done);
				}
			} else {
				slides[prevI].classList.add('is-prev');
				setTimeout(function () { slides[prevI].classList.remove('is-prev'); }, 1800);
			}
			playVideo(slide, true);

			/* 문구 : 나가는 문구는 위로, 들어오는 문구는 아래에서 */
			var prevCopy = copies[prevI], nextCopy = copies[next];
			if (nextCopy) { clearTimeout(leaveTimers[next]); nextCopy.classList.remove('is-leave'); nextCopy.classList.add('is-active'); }
			if (prevCopy) {
				prevCopy.classList.remove('is-active');
				prevCopy.classList.add('is-leave');
				clearTimeout(leaveTimers[prevI]);
				leaveTimers[prevI] = setTimeout(function () { prevCopy.classList.remove('is-leave'); }, 900);
			}

			/* 진행바 */
			bars.forEach(function (b, i) {
				b.classList.remove('is-active');
				if (i === next) { void b.offsetWidth; b.classList.add('is-active'); }
			});
		};

		bars.forEach(function (b, i) {
			var fill = b.querySelector('i');
			if (fill) fill.addEventListener('animationend', function () { if (i === index) go(index + 1); });
			b.querySelector('button').addEventListener('click', function () { go(i); });
		});

		var userPaused = false;
		var setPaused = function (paused) {
			hero.classList.toggle('is-paused', paused);
			if (toggle) toggle.setAttribute('aria-label', paused ? '재생' : '일시정지');
			var v = slides[index].querySelector('video');
			if (v) { if (paused) v.pause(); else { var p = v.play(); if (p && p.catch) p.catch(function () { }); } }
		};
		if (toggle) toggle.addEventListener('click', function () {
			userPaused = !hero.classList.contains('is-paused');
			setPaused(userPaused);
		});
		document.addEventListener('visibilitychange', function () {
			if (document.hidden) setPaused(true);
			else if (!userPaused) setPaused(false);
		});

		playVideo(slides[0], true);
		slides.forEach(function (s) { var im = s.querySelector('img'); if (im && im.decode) im.decode().catch(function () { }); });

		/* ---------- 첫 진입 인트로 ---------- */
		if (motion) {
			var copy0 = copies[0];
			var wrap = $('.kb-hero-slides', hero);
			var chars = $$('.kb-hero-title .kb-ch', copy0);
			var lineSpans = $$('.kb-hero-label .kb-line > span, .kb-hero-sub .kb-line > span, .kb-hero-note .kb-line > span', copy0);
			var side = $('.kb-hero-side', hero);
			var scrollEls = $$('.kb-hero-scroll > *', hero);
			var toggleEl = toggle;

			hero.classList.add('is-intro');
			gsap.set(chars, { yPercent: 115, rotate: 6 });
			gsap.set(lineSpans, { y: 0, yPercent: 110 }); /* CSS translateY 를 px 로 읽지 않도록 y:0 명시 */
			gsap.set(slides[0], { scale: 1.3 });
			if (media(slides[0])) gsap.set(media(slides[0]), { scale: 1.1 });

			var runIntro = function () {
				/* 첫 이미지 켄번스 : 인트로 타임라인과 별개 (인트로 길이에 영향 없음) */
				if (media(slides[0])) gsap.to(media(slides[0]), { scale: 1, duration: 9, ease: 'power2.out' });
				var tl = gsap.timeline({
					defaults: { ease: 'expo.out' },
					onComplete: function () {
						/* 인트로 끝 → CSS 상태로 인계. 트랜지션을 잠시 끈 채로 바꿔야 줄이 다시 내려갔다 올라오지 않음 */
						var all = $$('.kb-line > span', copy0);
						all.forEach(function (sp) { sp.style.transition = 'none'; });
						gsap.set(chars, { clearProps: 'transform' });
						hero.classList.add('is-ready');
						hero.classList.remove('is-intro');
						lineSpans.forEach(function (sp) { sp.style.transform = ''; sp.style.translate = ''; sp.style.rotate = ''; sp.style.scale = ''; });
						void hero.offsetWidth; /* 스타일 확정 */
						all.forEach(function (sp) { sp.style.transition = ''; });
						hero.classList.add('is-playing');
					}
				});
				/* 1. 타원(인테리어의 곡선)이 펼쳐지며 배경 등장 */
				tl.fromTo(wrap, { clipPath: 'inset(42% 40% 42% 40% round 999px)' },
					{
						clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 1.9, ease: 'expo.inOut',
						onComplete: function () { gsap.set(wrap, { clipPath: 'none' }); }
					}, 0)
					.to(slides[0], { scale: 1, duration: 2.6, ease: 'expo.out' }, 0.25)
					/* 2. 라벨 → 제목(글자 단위) → 국문 → 보조문구 */
					.to(lineSpans.slice(0, 1), { yPercent: 0, duration: 1.2 }, 1.05)
					.to(chars, { yPercent: 0, rotate: 0, duration: 1.3, stagger: 0.028 }, 1.15)
					.to(lineSpans.slice(1), { yPercent: 0, duration: 1.2, stagger: 0.09 }, 1.6)
					/* 3. 하단 컨트롤 · 세로 문구 · 스크롤 표시 */
					.fromTo(bars, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.07 }, 1.9)
					.fromTo(toggleEl, { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 1, ease: 'back.out(1.8)' }, 2.1)
					.fromTo(side, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut' }, 1.9)
					.fromTo(scrollEls, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1 }, 2.2)
					/* 4. 배경 확대(타원 펼침 + 스케일) 완료 후 헤더 · 플로팅 메뉴 등장 */
					.call(showChrome, null, 2.85);
			};

			/* 헤더 · 플로팅 메뉴 등장 : transform 은 기존(is-hide, translateY(-50%))과 겹치지 않게 CSS translate 속성으로 */
			var chromeShown = false;
			var showChrome = function () {
				if (chromeShown) return;
				chromeShown = true;
				var hd = $('.kb-header'), qk = $('.kb-quick');
				if (hd) gsap.set(hd, { autoAlpha: 0, translate: '0px -30px' });
				if (qk) gsap.set(qk, { autoAlpha: 0, translate: '30px 0px' });
				root.classList.add('kb-chrome-in');
				if (hd) gsap.to(hd, { autoAlpha: 1, translate: '0px 0px', duration: 1.1, ease: 'expo.out', clearProps: 'opacity,visibility,translate' });
				if (qk) gsap.to(qk, { autoAlpha: 1, translate: '0px 0px', duration: 1.1, delay: 0.15, ease: 'expo.out', clearProps: 'opacity,visibility,translate' });
			};

			/* 첫 이미지와 폰트가 준비되면 시작 (최대 1.2초 대기) */
			var started = false;
			var start = function () { if (started) return; started = true; runIntro(); };
			var waits = [];
			var firstImg = slides[0].querySelector('img');
			if (firstImg && firstImg.decode) waits.push(firstImg.decode().catch(function () { }));
			if (document.fonts && document.fonts.ready) waits.push(document.fonts.ready);
			Promise.all(waits).then(start);
			setTimeout(start, 1200);
		}
	}


	/* =========================================================
	   공통 : 타이틀 줄 마스크 / 텍스트 블록 등장
	========================================================= */
	var splitLines = function (el) {
		if (!el.classList.contains('kb-split')) {
			var parts = el.innerHTML.split(/<br\s*\/?>/i);
			el.innerHTML = parts.map(function (p) { return '<span class="kb-line"><span>' + p.trim() + '</span></span>'; }).join('');
			el.classList.add('kb-split');
		}
		return $$('.kb-line > span', el);
	};

	if (motion) {
		$$('.kb-title, .kb-about-title').forEach(function (el) {
			var lines = splitLines(el);
			gsap.set(lines, { yPercent: 110 });
			gsap.set(el, { visibility: 'visible' });
			gsap.to(lines, {
				yPercent: 0, duration: 1.3, ease: 'expo.out', stagger: 0.1,
				scrollTrigger: { trigger: el, start: 'top 88%', once: true }
			});
		});
		$$('.kb-reveal').forEach(function (el) {
			gsap.fromTo(el, { y: 40, autoAlpha: 0 }, {
				y: 0, autoAlpha: 1, duration: 1.2, ease: 'power3.out',
				scrollTrigger: { trigger: el, start: 'top 90%', once: true }
			});
		});
	}


	/* =========================================================
	   반응형별 스크롤 연출
	========================================================= */
	var mm = motion ? gsap.matchMedia() : null;

	/* ---------- 00. HERO : 다음 섹션이 덮고 올라오는 커버 + 마우스 패럴랙스 ---------- */
	if (mm && hero) {
		var slidesWrap = $('.kb-hero-slides', hero);
		var baseScale = canHover ? 1.04 : 1;
		mm.add('(min-width: 1px)', function () {
			var about = $('.kb-about');
			var cover = gsap.timeline({
				scrollTrigger: {
					trigger: hero, start: 'top top', end: 'bottom top', scrub: true, pin: !!about, pinSpacing: false,
					onUpdate: function (self) { var on = self.progress > 0.06; hero.classList.toggle('is-scrolled', on); if (on) hero.classList.add('was-scrolled'); }
				}
			});
			cover
				.fromTo(slidesWrap, { scale: baseScale }, { scale: baseScale + 0.08, ease: 'none' }, 0)
				.fromTo($('.kb-hero-shade', hero), { opacity: 0 }, { opacity: 0.35, ease: 'none' }, 0)
				.fromTo($('.kb-hero-copies', hero), { y: 0, autoAlpha: 1 }, { y: -160, autoAlpha: 0, ease: 'none' }, 0);
			return function () { hero.classList.remove('is-scrolled'); };
		});

		if (canHover) {
			var side2 = $('.kb-hero-side', hero);
			var xTo = gsap.quickTo(slidesWrap, 'x', { duration: 1.4, ease: 'power3.out' });
			var yTo = gsap.quickTo(slidesWrap, 'y', { duration: 1.4, ease: 'power3.out' });
			var sTo = side2 ? gsap.quickTo(side2, 'y', { duration: 1.2, ease: 'power3.out' }) : null;
			hero.addEventListener('pointermove', function (e) {
				var nx = e.clientX / window.innerWidth - 0.5, ny = e.clientY / window.innerHeight - 0.5;
				xTo(nx * -36); yTo(ny * -24);
				if (sTo) sTo(ny * 30);
			});
			hero.addEventListener('pointerleave', function () { xTo(0); yTo(0); if (sTo) sTo(0); });
		}
	}

	/* ---------- 01. ABOUT ---------- */
	if (mm && $('.kb-about')) {
		mm.add('(min-width: 1px)', function () {
			var arch = $('.kb-about-arch');
			var img = $('img', arch);
			var badge = $('.kb-about-badge');

			gsap.fromTo(arch,
				{ clipPath: 'inset(100% 0% 0% 0% round 280px 280px 10px 10px)' },
				{
					clipPath: 'inset(0% 0% 0% 0% round 280px 280px 10px 10px)', duration: 1.6, ease: 'expo.inOut',
					scrollTrigger: { trigger: arch, start: 'top 82%', once: true },
					onComplete: function () { gsap.set(arch, { clipPath: 'none' }); }
				});
			gsap.fromTo(img, { scale: 1.3, yPercent: -6 }, {
				scale: 1.05, yPercent: 6, ease: 'none',
				scrollTrigger: { trigger: arch, start: 'top bottom', end: 'bottom top', scrub: true }
			});
			if (badge) {
				gsap.fromTo(badge, { autoAlpha: 0, scale: 0.6, rotate: -45 }, {
					autoAlpha: 1, scale: 1, rotate: 0, duration: 1.4, ease: 'power2.out',
					scrollTrigger: { trigger: arch, start: 'top 55%', once: true }
				});
				gsap.fromTo(badge, { y: 0 }, {
					y: -110, ease: 'none',
					scrollTrigger: { trigger: arch, start: 'top bottom', end: 'bottom top', scrub: true }
				});
			}
			gsap.fromTo('.kb-orb--about', { y: 0 }, {
				y: 260, ease: 'none',
				scrollTrigger: { trigger: '.kb-about', start: 'top bottom', end: 'bottom top', scrub: true }
			});
		});
	}

	/* ---------- 02. SIGNATURE ---------- */
	var sigBody = $('.kb-sig-body');
	var sigStage = $('.kb-sig-stage') || sigBody; /* 제목 + 목록을 함께 고정 */
	var sigList = $('.kb-sig-list');
	var sigItems = $$('.kb-sig-item');
	var sigImgs = $$('.kb-sig-arch img');
	var sigCur = $('.kb-sig-cur');
	var sigIndex = 0, sigZ = 1;
	var sigBase = 0, sigWiping = null, sigPending = null;  /* 바닥(완전 노출) / 전환 중 / 대기 */

	if (motion) sigImgs.forEach(function (img, i) {
		gsap.set(img, { zIndex: i === 0 ? 1 : 0, clipPath: i === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)' });
	});

	var setSig = function (n) {
		if (n === sigIndex) return;
		sigIndex = n;
		sigItems.forEach(function (el, i) { el.classList.toggle('is-active', i === n); });
		if (sigCur) sigCur.textContent = pad(n + 1);
		if (!sigImgs[n]) return;
		if (motion) {
			sigPending = n;
			if (sigWiping === null) sigWipe();
		} else {
			sigImgs.forEach(function (o, i) { o.classList.toggle('is-active', i === n); });
		}
	};
	/* 바닥 이미지 위에 새 이미지를 아래→위로 닦아냄. 전환이 끝나야 다음 전환 시작 */
	function sigWipe() {
		var n = sigPending;
		sigPending = null;
		if (n === null || n === sigBase) return;
		var img = sigImgs[n];
		sigWiping = n;
		gsap.set(img, { zIndex: ++sigZ });
		gsap.fromTo(img, { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.15 },
			{
				clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 0.85, ease: 'power3.inOut',
				onComplete: function () {
					sigBase = n;
					sigWiping = null;
					sigImgs.forEach(function (o) { if (o !== img) gsap.set(o, { clipPath: 'inset(100% 0% 0% 0%)' }); });
					if (sigPending !== null) sigWipe();
				}
			});
	}
	var sigScrub = null;

	sigItems.forEach(function (item, i) {
		$('.kb-sig-row', item).addEventListener('click', function () {
			if (sigScrub) {
				var y = sigScrub.start + (sigScrub.end - sigScrub.start) * (i / (sigItems.length - 1)) + 1;
				scrollToY(y);
			} else {
				setSig(i);
			}
		});
		item.addEventListener('mouseenter', function () {
			if (!sigScrub && window.matchMedia('(hover: hover) and (min-width: 769px)').matches) setSig(i);
		});
	});

	/* 펼쳐지는 항목에 따라 리스트 높이가 바뀌면 고정 구간이 틀어지므로 → 가장 큰 높이로 고정 */
	var lockSigList = function () {
		if (!sigList) return;
		sigList.style.minHeight = '';
		sigList.classList.add('is-measure');
		var max = 0, cur = sigIndex;
		sigItems.forEach(function (el, i) {
			sigItems.forEach(function (o, j) { o.classList.toggle('is-active', j === i); });
			max = Math.max(max, sigList.offsetHeight);
		});
		sigItems.forEach(function (o, j) { o.classList.toggle('is-active', j === cur); });
		sigList.offsetHeight; /* 강제 리플로우 후 트랜지션 복원 */
		sigList.classList.remove('is-measure');
		sigList.style.minHeight = max + 'px';
		sigLockH = max;
	};
	/* 창 크기가 바뀌면 refreshInit 시점엔 pin 요소가 아직 이전 너비로 고정돼 있어 높이를 잘못 잴 수 있음
	   → refresh 가 끝난 뒤(새 너비 적용 후) 다시 재고, 값이 달라졌으면 한 번 더 refresh 해서 pin 위치를 맞춤 */
	var sigLockH = 0, sigReLock = false;
	var onSigRefresh = function () {
		if (!sigList) return;
		if (sigReLock) { sigReLock = false; return; }
		var prev = sigLockH;
		lockSigList();
		if (Math.abs(sigLockH - prev) > 1) { sigReLock = true; ScrollTrigger.refresh(); }
	};

	if (mm && sigBody) {
		mm.add('(min-width: 1025px)', function () {
			var count = sigItems.length;
			var prog = $('.kb-sig-prog');
			sigBody.classList.add('is-scrub');
			lockSigList();
			ScrollTrigger.addEventListener('refreshInit', lockSigList);
			ScrollTrigger.addEventListener('refresh', onSigRefresh);
			sigScrub = ScrollTrigger.create({
				trigger: sigStage,
				/* 화면보다 작으면 가운데, 크면 위에 맞춰 고정 */
				start: function () { return sigStage.offsetHeight <= window.innerHeight ? 'center center' : 'top top'; },
				end: function () { return '+=' + Math.round(window.innerHeight * 0.55 * (count - 1)); },
				pin: true,
				pinSpacing: true, /* 부모(.article-wrapper)가 flex 라 명시 필요 */
				onUpdate: function (self) {
					setSig(Math.round(self.progress * (count - 1)));
					if (prog) gsap.set(prog, { scaleY: self.progress });
				}
			});
			gsap.fromTo('.kb-sig-arch', { y: 60 }, {
				y: -40, ease: 'none',
				scrollTrigger: { trigger: '.kb-signature', start: 'top bottom', end: 'bottom top', scrub: true }
			});
			gsap.fromTo('.kb-sig-arch', { clipPath: 'inset(100% 0% 0% 0% round 20px)' },
				{
					clipPath: 'inset(0% 0% 0% 0% round 20px)', duration: 1.6, ease: 'expo.inOut',
					scrollTrigger: { trigger: sigBody, start: 'top 80%', once: true },
					onComplete: function () { gsap.set('.kb-sig-arch', { clipPath: 'none' }); }
				});
			gsap.fromTo(sigItems, { x: 60, autoAlpha: 0 }, {
				x: 0, autoAlpha: 1, duration: 1.1, ease: 'power3.out', stagger: 0.09,
				scrollTrigger: { trigger: sigBody, start: 'top 78%', once: true }
			});

			return function () {
				ScrollTrigger.removeEventListener('refreshInit', lockSigList);
				ScrollTrigger.removeEventListener('refresh', onSigRefresh);
				if (sigList) sigList.style.minHeight = '';
				sigBody.classList.remove('is-scrub');
				sigScrub = null;
			};
		});

		mm.add('(max-width: 1024px)', function () {
			gsap.fromTo(sigItems, { y: 40, autoAlpha: 0 }, {
				y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out', stagger: 0.1,
				scrollTrigger: { trigger: '.kb-sig-list', start: 'top 85%', once: true }
			});
		});
	}

	/* ---------- 03. NUMBERS : 2% · 10년 · 650,000명 ---------- */
	if (mm && $('.kb-num')) {
		mm.add('(min-width: 1px)', function () {
			var sec = $('.kb-num');
			var fig = $('.kb-num-img', sec);
			var img = $('img', fig);
			var card = $('.kb-num-card', sec);
			var path = $('.kb-num-line path', sec);

			/* 메인 이미지 : 아래→위로 열리고, 안쪽은 패럴랙스 */
			gsap.fromTo(fig, { clipPath: 'inset(100% 0% 0% 0% round 10px)' }, {
				clipPath: 'inset(0% 0% 0% 0% round 10px)', duration: 1.5, ease: 'expo.inOut',
				scrollTrigger: { trigger: fig, start: 'top 82%', once: true },
				onComplete: function () { gsap.set(fig, { clipPath: 'none' }); }
			});
			gsap.fromTo(img, { yPercent: -15 }, {
				yPercent: 0, ease: 'none',
				scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: true }
			});
			/* 안내 카드 : 이미지가 열린 뒤 아래에서 */
			gsap.fromTo(card, { y: 40, autoAlpha: 0 }, {
				y: 0, autoAlpha: 1, duration: 1.1, ease: 'power3.out', delay: 0.7,
				scrollTrigger: { trigger: fig, start: 'top 82%', once: true }
			});
			/* 배경 곡선 : 스크롤에 맞춰 그려짐 */
			/* non-scaling-stroke 라 대시 길이는 화면 픽셀 기준 → getTotalLength(도면 단위)로 잡으면 선이 끝까지 안 그려져 끊겨 보임
			   → 화면 좌표로 환산한 실제 길이로 계산, 리사이즈 시 다시 계산 */
			if (path) {
				var lineLen = function () {
					var m = path.getScreenCTM(), L = path.getTotalLength(), sum = 0, px = null, py = null;
					if (!m) return L;
					for (var k = 0; k <= 120; k++) {
						var pt = path.getPointAtLength(L * k / 120);
						var x = m.a * pt.x + m.c * pt.y + m.e, y = m.b * pt.x + m.d * pt.y + m.f;
						if (px !== null) sum += Math.sqrt((x - px) * (x - px) + (y - py) * (y - py));
						px = x; py = y;
					}
					return Math.ceil(sum) + 4;
				};
				gsap.fromTo(path, { strokeDasharray: lineLen, strokeDashoffset: lineLen }, {
					strokeDashoffset: 0, ease: 'none',
					scrollTrigger: { trigger: sec, start: 'top 80%', end: 'center 50%', scrub: true, invalidateOnRefresh: true }
				});
			}
			/* 지표 : 줄마다 숫자가 차오르고 아래 선이 그어짐 */
			$$('.kb-num-list li', sec).forEach(function (li, i) {
				var el = $('.kb-counter', li);
				var target = parseInt(el.getAttribute('data-count'), 10) || 0;
				var o = { v: 0 };
				el.textContent = '0';
				var tl = gsap.timeline({ scrollTrigger: { trigger: li, start: 'top 88%', once: true }, delay: i * 0.08 });
				tl.fromTo(li, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' }, 0)
					.fromTo(li, { '--kb-line': 0 }, { '--kb-line': 1, duration: 1.2, ease: 'expo.inOut' }, 0.2)
					.to(o, {
						v: target, duration: target > 100 ? 2.4 : 1.4, ease: 'power3.out',
						onUpdate: function () { el.textContent = Math.round(o.v).toLocaleString('ko-KR'); }
					}, 0.15);
			});
		});
	}

	/* ---------- 03. WHY ---------- */
	if (mm && $('.kb-why')) {
		mm.add({ desk: '(min-width: 769px)', mob: '(max-width: 768px)' }, function (ctx) {
			var desk = ctx.conditions.desk;
			var items = $$('.kb-why-item');

			items.forEach(function (item, i) {
				var fig = $('.kb-why-img', item);
				var img = $('img', fig);
				var txt = $('.kb-why-txt', item);
				var delay = desk ? i * 0.12 : 0;
				gsap.fromTo(fig, { clipPath: 'inset(100% 0% 0% 0% round 10px)' }, {
					clipPath: 'inset(0% 0% 0% 0% round 10px)', duration: 1.4, ease: 'expo.inOut', delay: delay,
					scrollTrigger: { trigger: item, start: 'top 85%', once: true },
					onComplete: function () { gsap.set(fig, { clipPath: 'none' }); }
				});
				gsap.fromTo(txt, { y: 30, autoAlpha: 0 }, {
					y: 0, autoAlpha: 1, duration: 1.1, ease: 'power3.out', delay: delay + 0.5,
					scrollTrigger: { trigger: item, start: 'top 85%', once: true }
				});
				gsap.fromTo(img, { yPercent: -13 }, {
					yPercent: 0, ease: 'none',
					scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: true }
				});
			});

			if (desk) {
				var speeds = [40, 120, 70];
				items.forEach(function (item, i) {
					gsap.fromTo(item, { y: speeds[i] }, {
						y: -speeds[i], ease: 'none',
						scrollTrigger: { trigger: '.kb-why-list', start: 'top bottom', end: 'bottom top', scrub: true }
					});
				});
			}
			gsap.fromTo('.kb-orb--why', { y: 0 }, {
				y: -300, ease: 'none',
				scrollTrigger: { trigger: '.kb-why', start: 'top bottom', end: 'bottom top', scrub: true }
			});
		});
	}

	/* ---------- 04. SPACE ---------- */
	var space = $('.kb-space');
	var slider = $('.kb-space-slider');
	var track = $('.kb-space-track');
	var bar = $('.kb-space-progress span');
	var spaceItems = $$('.kb-space-track li');
	var spaceCur = $('.kb-space-cur');
	var dragOff = false;
	var spaceST = null;
	var spaceIdx = function () { return spaceST ? Math.round(spaceST.progress * (spaceItems.length - 1)) : 0; };
	var syncSpaceCtrl = function () {
		if (!spaceST) return;
		var n = spaceIdx();
		if (spaceCur) spaceCur.textContent = pad(n + 1);
		var p = $('.kb-space-prev'), x = $('.kb-space-next');
		if (p) p.disabled = spaceST.progress <= 0.001;
		if (x) x.disabled = spaceST.progress >= 0.999;
	};

	if (mm && space) {
		/* PC 도 가로 고정 스크롤 대신 드래그·버튼 슬라이더 (휠은 페이지 스크롤 그대로) */
		mm.add('(min-width: 1px)', function () {
			/* li 가 아닌 안쪽 요소를 움직임 (li 를 옮기면 스냅 위치가 같이 밀려 첫 화면이 80px 틀어짐) */
			gsap.fromTo($$('.kb-space-track li > *'), { x: 80, autoAlpha: 0 }, {
				x: 0, autoAlpha: 1, duration: 1.1, ease: 'power3.out', stagger: 0.1,
				scrollTrigger: { trigger: slider, start: 'top 85%', once: true }
			});
		});
	}

	/* 스와이프/드래그 슬라이더 (전 해상도) */
	if (slider) {
		var prevBtn = $('.kb-space-prev');
		var nextBtn = $('.kb-space-next');
		var count = spaceItems.length;
		var spaceTotal = $('.kb-space-total');
		if (spaceTotal) spaceTotal.textContent = pad(count);
		var maxScroll = function () { return Math.max(0, slider.scrollWidth - slider.clientWidth); };
		/* 사진 폭이 제각각이라 끝쪽 몇 장은 화면에 같이 들어와 시작점까지 갈 수 없음(maxScroll 에 걸림)
		   → 멈춤 위치 후보 = 사진 왼쪽 끝을 왼쪽에 맞춘 위치 + 사진 오른쪽 끝을 오른쪽(마지막 화면 기준)에 맞춘 위치
		   → 그중 균등 간격에 가장 가까운 장수(count)만큼 골라 01~마지막까지 한 장씩 멈춤
		     (항상 어떤 사진의 가장자리에 맞춰 멈추므로 사진 중간에서 어색하게 걸리지 않음) */
		var stops = function () {
			var base = spaceItems[0].offsetLeft, max = maxScroll();
			var L = spaceItems.map(function (li) { return li.offsetLeft - base; });
			var reach = L.filter(function (p) { return p < max - 2; }).length;
			if (reach >= count - 1) return L.map(function (p) { return Math.min(p, max); });
			/* 마지막 화면에서 마지막 사진 오른쪽 끝 = 오른쪽 기준선 */
			var off = L[count - 1] + spaceItems[count - 1].offsetWidth - max;
			var cand = [0, max].concat(L.slice(0, reach), spaceItems.map(function (li, i) { return L[i] + li.offsetWidth - off; }))
				.filter(function (p) { return p >= 0 && p <= max; })
				.map(Math.round).sort(function (a, b) { return a - b; });
			var c = [];
			cand.forEach(function (p) { if (!c.length || p - c[c.length - 1] > 2) c.push(p); });
			c[c.length - 1] = max;
			var n = c.length;
			if (n < count) return L.map(function (p, i) { return Math.round(max * i / (count - 1)); });
			/* DP : 첫 칸 0, 끝 칸 max 고정, 순서대로 count 개를 골라 균등 목표와의 거리 합이 최소가 되게 */
			var cost = [], from = [], k, i, q;
			for (k = 0; k < count; k++) { cost.push([]); from.push([]); }
			for (i = 0; i < n; i++) cost[0][i] = i === 0 ? 0 : Infinity;
			for (k = 1; k < count; k++) {
				var t = max * k / (count - 1);
				for (i = 0; i < n; i++) {
					cost[k][i] = Infinity;
					for (q = 0; q < i; q++) {
						var v = cost[k - 1][q] + Math.abs(c[i] - t);
						if (v < cost[k][i]) { cost[k][i] = v; from[k][i] = q; }
					}
				}
			}
			var out = [], at = n - 1;
			for (k = count - 1; k >= 0; k--) { out.unshift(c[at]); at = from[k][at]; }
			return out;
		};
		var nearest = function () {
			var arr = stops(), x = slider.scrollLeft, best = 0;
			if (x >= maxScroll() - 2) return count - 1;
			arr.forEach(function (p, i) { if (Math.abs(p - x) < Math.abs(arr[best] - x)) best = i; });
			return best;
		};
		var update = function () {
			if (dragOff) return;
			var max = maxScroll();
			var ratio = max > 0 ? slider.scrollLeft / max : 0;
			if (bar) bar.style.width = (100 / count + ratio * (100 - 100 / count)) + '%';
			if (spaceCur) spaceCur.textContent = pad(nearest() + 1);
			if (prevBtn) prevBtn.disabled = slider.scrollLeft <= 2;
			if (nextBtn) nextBtn.disabled = slider.scrollLeft >= max - 2;
		};
		/* 실제로 멈출 수 있는 위치(끝 부분에서 겹치는 위치는 하나로) */
		var positions = function () {
			var u = [];
			stops().forEach(function (p) { if (!u.length || Math.abs(p - u[u.length - 1]) > 2) u.push(p); });
			return u;
		};
		var nearestPos = function () {
			var u = positions(), x = slider.scrollLeft, best = 0;
			u.forEach(function (p, i) { if (Math.abs(p - x) < Math.abs(u[best] - x)) best = i; });
			return best;
		};
		var goPos = function (k) {
			var u = positions();
			k = Math.max(0, Math.min(u.length - 1, k));
			slider.scrollTo({ left: u[k], behavior: 'smooth' });
			return u[k];
		};
		var goTo = function (n) {
			var arr = stops();
			slider.scrollTo({ left: arr[Math.max(0, Math.min(count - 1, n))], behavior: 'smooth' });
		};
		/* 중간 위치는 li 시작점이 아니라 CSS 스냅이 끌어당기므로 스냅은 끄고 JS 로 멈춤 */
		slider.style.scrollSnapType = 'none';
		/* 트랙패드·shift+휠 등 네이티브 가로 스크롤이 멈추면 가장 가까운 위치로 맞춤 */
		var settleT = null;
		var settle = function () {
			clearTimeout(settleT);
			settleT = setTimeout(function () {
				if (down || slider.classList.contains('is-drag')) return;
				var u = positions(), k = nearestPos();
				if (Math.abs(slider.scrollLeft - u[k]) > 1) goPos(k);
			}, 140);
		};
		slider.addEventListener('scroll', update, { passive: true });
		slider.addEventListener('scroll', settle, { passive: true });
		window.addEventListener('resize', update);
		window.addEventListener('load', update);
		update();

		var spaceJump = function (dir) {
			var n = Math.max(0, Math.min(count - 1, spaceIdx() + dir));
			scrollToY(spaceST.start + (spaceST.end - spaceST.start) * (n / (count - 1)) + (n === 0 ? 0 : 1));
		};
		/* 현재 보이는 장 기준으로 한 장씩 이동 (스크롤 중 연타해도 목표 장 기준으로 누적) */
		var target = -1, targetT = 0;
		var stepTo = function (dir) {
			var base = (target >= 0 && Date.now() - targetT < 700) ? target : nearestPos();
			target = Math.max(0, Math.min(positions().length - 1, base + dir)); targetT = Date.now();
			goPos(target);
		};
		if (prevBtn) prevBtn.addEventListener('click', function () {
			if (spaceST) { spaceJump(-1); return; }
			stepTo(-1);
		});
		if (nextBtn) nextBtn.addEventListener('click', function () {
			if (spaceST) { spaceJump(1); return; }
			stepTo(1);
		});

		/* 마우스·터치 공통 드래그 : 가로 이동은 JS 가 직접 처리(CSS touch-action: pan-y),
		   세로 스와이프는 그대로 페이지 스크롤. 느리게 끌어도 40px 이상이면 한 장, 빠르게 튕기면 15px 이상이면 한 장 */
		var down = false, moved = false, startX = 0, startY = 0, startLeft = 0, startIdx = 0, lastDx = 0, startT = 0, pid = null;
		slider.addEventListener('pointerdown', function (e) {
			if (dragOff || (e.pointerType === 'mouse' && e.button !== 0)) return;
			if (e.pointerType === 'mouse') e.preventDefault(); /* 텍스트 선택·네이티브 드래그 방지 */
			down = true; moved = false; pid = e.pointerId; startX = e.clientX; startY = e.clientY; startLeft = slider.scrollLeft; startIdx = nearestPos(); lastDx = 0; startT = Date.now();
		});
		slider.addEventListener('dragstart', function (e) { e.preventDefault(); });
		window.addEventListener('pointermove', function (e) {
			if (!down || e.pointerId !== pid) return;
			var dx = e.clientX - startX, dy = e.clientY - startY;
			if (!moved) {
				if (Math.abs(dy) > 8 && Math.abs(dy) > Math.abs(dx)) { down = false; return; } /* 세로 스크롤 의도 */
				if (Math.abs(dx) > 4) { moved = true; slider.classList.add('is-drag'); }
			}
			if (moved) { slider.scrollLeft = startLeft - dx; lastDx = dx; }
		});
		var dragEnd = function (e) {
			if (!down || (e && e.pointerId !== pid)) return;
			down = false;
			if (!moved) return;
			/* 드래그 방향으로 한 장 (짧게 끌면 제자리) */
			var th = (Date.now() - startT < 300) ? 15 : 40;
			var n = lastDx < -th ? startIdx + 1 : lastDx > th ? startIdx - 1 : startIdx;
			n = Math.max(0, Math.min(positions().length - 1, n));
			target = n; targetT = Date.now();
			var goal = goPos(n);
			/* 이동이 끝난 뒤에 스냅을 다시 켬 (바로 켜면 브라우저 스냅과 부딪혀 중간에 멈춤) */
			var t0 = Date.now();
			(function wait() {
				if (down) return; /* 그 사이 다시 끌기 시작하면 그 드래그가 처리 */
				if (Math.abs(slider.scrollLeft - goal) <= 1 || Date.now() - t0 > 1200) { slider.classList.remove('is-drag'); return; }
				requestAnimationFrame(wait);
			})();
		};
		window.addEventListener('pointerup', dragEnd);
		window.addEventListener('pointercancel', dragEnd);
	}

	/* ---------- 카카오맵 마커 : 사이트 톤 마커로 교체 ----------
	   - 로드 실패(엑박) 마커 / marker·pin 계열 이미지를 커스텀 마커로 바꿈
	   - 카카오 마커 이미지 자리를 그대로 쓰므로 지도를 드래그해도 위치를 따라감
	   - 지도 타일(큰 이미지)은 건드리지 않음 */
	var mapBox = $('.kb-loc-map');
	if (mapBox) {
		/* 마커 색 = common.css 의 var(--main-color) 값을 읽어 SVG 에 넣음 (data URI 는 CSS 변수를 못 쓰기 때문) */
		var pinColor = (getComputedStyle(root).getPropertyValue('--main-color') || '').trim() || 'currentColor';
		var PIN = 'data:image/svg+xml,' + encodeURIComponent(
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 64">' +
			'<ellipse cx="24" cy="61" rx="9" ry="2.6" fill="' + pinColor + '" opacity=".22"/>' +
			'<path d="M24 2C12.4 2 3 11.2 3 22.6 3 37.8 24 59 24 59s21-21.2 21-36.4C45 11.2 35.6 2 24 2z" fill="' + pinColor + '"/>' +
			'<path d="M24 2C12.4 2 3 11.2 3 22.6 3 37.8 24 59 24 59s21-21.2 21-36.4C45 11.2 35.6 2 24 2z" fill="none" stroke="#e6d3b3" stroke-opacity=".55" stroke-width="1.2"/>' +
			'<circle cx="24" cy="22.5" r="11.5" fill="none" stroke="#e6d3b3" stroke-width="1.2"/>' +
			'<circle cx="24" cy="22.5" r="6" fill="#e6d3b3"/>' +
			'</svg>');
		var isMarkerSrc = function (src) { return /marker|pin_|_pin|spot|ico_?place|mapmark/i.test(src || ''); };
		var small = function (img) { var r = img.getBoundingClientRect(); return r.width <= 120 && r.height <= 120; };
		var swapPin = function (img) {
			if (img.__kbPin) return;
			img.__kbPin = true;
			img.classList.add('kb-map-pin');
			img.removeAttribute('srcset');
			img.src = PIN;
		};
		var checkImg = function (img) {
			if (img.__kbPin) return;
			if (isMarkerSrc(img.getAttribute('src'))) swapPin(img);
			else if (img.complete && img.naturalWidth === 0 && img.getAttribute('src') && small(img)) swapPin(img);
		};
		/* 이미지 로드 실패는 버블링되지 않으므로 캡처 단계에서 감지 */
		mapBox.addEventListener('error', function (e) {
			var t = e.target;
			if (!t || t.tagName !== 'IMG' || t.__kbPin) return;
			if (small(t)) swapPin(t); else t.style.visibility = 'hidden';
		}, true);
		if (window.MutationObserver) {
			new MutationObserver(function (muts) {
				muts.forEach(function (m) {
					if (m.type === 'attributes') { if (m.target.tagName === 'IMG') checkImg(m.target); return; }
					m.addedNodes.forEach(function (n) {
						if (n.nodeType !== 1) return;
						if (n.tagName === 'IMG') checkImg(n);
						else if (n.querySelectorAll) $$('img', n).forEach(checkImg);
					});
				});
			}).observe(mapBox, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
		}
		$$('img', mapBox).forEach(checkImg);
	}

	/* ---------- 05. LOCATION ---------- */
	if (mm && $('.kb-location')) {
		mm.add('(min-width: 1px)', function () {
			var map = $('.kb-loc-map');
			var info = $('.kb-loc-info');
			var tl = gsap.timeline({ scrollTrigger: { trigger: '.kb-loc-body', start: 'top 82%', once: true } });
			tl.fromTo(map, { clipPath: 'inset(100% 0% 0% 0%)' }, {
				clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut',
				onComplete: function () { gsap.set(map, { clipPath: 'none' }); }
			}, 0)
				.fromTo(info, { yPercent: 12, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 1.2, ease: 'power3.out' }, 0.2)
				.fromTo($$('.kb-loc-logo, .kb-loc-row, .kb-loc-btns', info), { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, ease: 'power3.out', stagger: 0.08 }, 0.5);
		});
	}

	/* ---------- FOOTER ---------- */
	if (mm && $('.kb-footer')) {
		mm.add('(min-width: 1px)', function () {
			gsap.fromTo($$('.kb-footer-top > *, .kb-footer-mid, .kb-footer-bottom'), { y: 30, autoAlpha: 0 }, {
				y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out', stagger: 0.08,
				scrollTrigger: { trigger: '.kb-footer', start: 'top 92%', once: true }
			});
		});
	}

	/* ---------- 마그네틱 버튼 (마우스 환경 / CSS transform 트랜지션이 없는 요소만) ---------- */
	if (motion && canHover) {
		$$('.kb-hero-toggle, .kb-space-btn, .kb-loc-btns a, .kb-footer-sns a').forEach(function (el) {
			el.classList.add('kb-magnet');
			var strength = el.closest('.kb-loc-btns') ? 0.18 : 0.35;
			var xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
			var yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
			el.addEventListener('pointermove', function (e) {
				var r = el.getBoundingClientRect();
				xTo((e.clientX - (r.left + r.width / 2)) * strength);
				yTo((e.clientY - (r.top + r.height / 2)) * strength);
			});
			el.addEventListener('pointerleave', function () { xTo(0); yTo(0); });
		});
	}

	/* =========================================================
	   HEADER : 스크롤 상태 + 메가메뉴 / 모바일 전체메뉴 / 퀵메뉴
	========================================================= */
	var header = $('.kb-header');
	var quick = $('.kb-quick');
	var lastY = window.pageYOffset || 0;
	var onScroll = function () {
		var y = window.pageYOffset || document.documentElement.scrollTop || 0;
		if (header) {
			header.classList.toggle('is-scrolled', y > 10);
			if (y > 200 && y > lastY + 4) header.classList.add('is-hide');
			else if (y < lastY - 4 || y <= 200) header.classList.remove('is-hide');
		}
		lastY = y;
	};
	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();

	if (header) {
		var gnb = $('.kb-gnb', header);
		var items = $$('.kb-gnb-item', header);
		var setSubH = function () {
			var max = 0;
			$$('.kb-gnb-sub', header).forEach(function (u) { u.style.height = 'auto'; max = Math.max(max, u.offsetHeight); });
			header.style.setProperty('--kb-sub-h', max + 'px');
			$$('.kb-gnb-sub', header).forEach(function (u) { u.style.height = ''; });
		};
		setSubH();
		window.addEventListener('resize', setSubH);
		if (document.fonts && document.fonts.ready) document.fonts.ready.then(setSubH);
		var open = function () { header.classList.add('is-open'); };
		var close = function () { header.classList.remove('is-open'); items.forEach(function (it) { it.classList.remove('is-hover'); }); };
		if (gnb) {
			gnb.addEventListener('mouseenter', open);
			header.addEventListener('mouseleave', close);
			gnb.addEventListener('focusin', open);
			header.addEventListener('focusout', function (e) { if (!header.contains(e.relatedTarget)) close(); });
		}
		items.forEach(function (it) {
			it.addEventListener('mouseenter', function () { items.forEach(function (o) { o.classList.toggle('is-hover', o === it); }); });
			it.addEventListener('focusin', function () { items.forEach(function (o) { o.classList.toggle('is-hover', o === it); }); });
		});
		/* 하위메뉴 클릭(같은 페이지 앵커) 시 닫기 */
		$$('.kb-gnb-sub a', header).forEach(function (a) { a.addEventListener('click', close); });
	}

	var mmenu = $('.kb-mmenu');
	var menuBtn = $('.kb-menu-btn');
	if (mmenu && menuBtn) {
		var setMenu = function (on) {
			mmenu.classList.toggle('is-open', on);
			mmenu.setAttribute('aria-hidden', on ? 'false' : 'true');
			menuBtn.setAttribute('aria-expanded', on ? 'true' : 'false');
			if (lenis) { if (on) lenis.stop(); else lenis.start(); }
			document.documentElement.style.overflow = on ? 'hidden' : '';
		};
		menuBtn.addEventListener('click', function () { setMenu(true); });
		$('.kb-mmenu-close', mmenu).addEventListener('click', function () { setMenu(false); });
		$$('.kb-mmenu-link', mmenu).forEach(function (btn) {
			btn.addEventListener('click', function () {
				var li = btn.parentNode, on = !li.classList.contains('is-open');
				$$('.kb-mmenu-list > li', mmenu).forEach(function (o) { o.classList.remove('is-open'); });
				li.classList.toggle('is-open', on);
			});
		});
		$$('.kb-mmenu-sub a', mmenu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
		document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && mmenu.classList.contains('is-open')) setMenu(false); });
		window.addEventListener('resize', function () { if (window.innerWidth > 1024 && mmenu.classList.contains('is-open')) setMenu(false); });
	}

	/* 퀵메뉴 : 처음부터 펼침 → X 로 접기(버튼이 돌며 K 로고로) → 로고로 다시 펼치기 */
	var quickToggle = $('.kb-quick-toggle');
	if (quick && quickToggle) quickToggle.addEventListener('click', function () {
		var fold = !quick.classList.contains('is-fold');
		quick.classList.toggle('is-fold', fold);
		quickToggle.setAttribute('aria-expanded', fold ? 'false' : 'true');
		quickToggle.setAttribute('aria-label', fold ? '빠른 메뉴 열기' : '빠른 메뉴 닫기');
	});

	var topBtn = $('.kb-quick-top');
	if (topBtn) topBtn.addEventListener('click', function () {
		if (lenis) lenis.scrollTo(0, { duration: 1.4 });
		else window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	/* 이미지·폰트 로드 후 위치 재계산 */
	if (motion) {
		window.addEventListener('load', function () { ScrollTrigger.refresh(); });
		if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });

		/* 반응형 구간(1024 / 768 / 550)을 넘나드는 리사이즈 보정
		   GSAP 3.12.x 는 matchMedia 구간이 바뀌는 refresh 도중, 이미 지나간 hero pin(pinSpacing:false)을
		   이동된 상태 그대로 재서 시작 위치가 틀어짐 → 구간이 바뀐 refresh 직후 한 번 더 refresh */
		var bpKey = function () { var w = window.innerWidth; return (w > 1024 ? 'a' : '') + (w > 768 ? 'b' : '') + (w > 550 ? 'c' : ''); };
		var lastBp = bpKey(), bpFix = false, rzBp = lastBp;
		/* 구간이 바뀌는 리사이즈 : 기본 refresh(지연 실행)를 기다리면 한 프레임 동안 pin 여백 없이 그려져 아래 섹션이 튐
		   → ResizeObserver(레이아웃 직후·화면에 그리기 전 실행)에서 바로 refresh */
		var onBpResize = function () {
			var k = bpKey();
			if (k === rzBp) return;
			rzBp = k;
			ScrollTrigger.refresh();
		};
		if (window.ResizeObserver) new ResizeObserver(onBpResize).observe(document.documentElement);
		window.addEventListener('resize', onBpResize);
		ScrollTrigger.addEventListener('refresh', function () {
			var k = bpKey();
			if (bpFix) { bpFix = false; lastBp = k; return; }
			if (k !== lastBp) { lastBp = k; bpFix = true; requestAnimationFrame(function () { ScrollTrigger.refresh(); }); }
		});
	}
})();