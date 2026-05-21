/**
 * studioMaker — Dynamic Visual Effects
 * 기존 CSS/HTML 구조를 변경하지 않고 JS로만 추가되는 이펙트
 *
 * 포함된 효과:
 * 1. 커스텀 골드 커서 (링 + 닷)
 * 2. 마우스 따라다니는 오디오 파티클
 * 3. 프로모션 섹션 배경 사운드웨이브 캔버스
 */

(function () {
    "use strict";

    /* ─────────────────────────────────────────────
       1. CUSTOM CURSOR
    ───────────────────────────────────────────── */
    function initCursor() {
        const style = document.createElement("style");
        style.textContent = `
      * { cursor: none !important; }

      #sm-cursor-ring {
        position: fixed;
        width: 36px; height: 36px;
        border: 1.5px solid rgba(194,155,89,0.75);
        border-radius: 50%;
        pointer-events: none;
        z-index: 99999;
        transform: translate(-50%, -50%);
        transition: width 0.25s ease, height 0.25s ease,
                    border-color 0.25s ease, opacity 0.25s ease;
        mix-blend-mode: screen;
      }

      #sm-cursor-dot {
        position: fixed;
        width: 8px; height: 8px;
        background: rgba(194,155,89,1);
        border-radius: 50%;
        pointer-events: none;
        z-index: 99999;
        transform: translate(-50%, -50%);
        transition: transform 0.08s ease;
        mix-blend-mode: screen;
      }

      #sm-cursor-ring.hover {
        width: 56px; height: 56px;
        border-color: rgba(194,155,89,0.4);
        background: rgba(194,155,89,0.06);
      }

      #sm-cursor-ring.click {
        width: 22px; height: 22px;
        border-color: rgba(194,155,89,1);
      }
    `;
        document.head.appendChild(style);

        const ring = document.createElement("div");
        ring.id = "sm-cursor-ring";
        const dot = document.createElement("div");
        dot.id = "sm-cursor-dot";
        document.body.appendChild(ring);
        document.body.appendChild(dot);

        let mx = -100, my = -100;
        let rx = -100, ry = -100;

        document.addEventListener("mousemove", (e) => {
            mx = e.clientX;
            my = e.clientY;
            dot.style.left = mx + "px";
            dot.style.top = my + "px";
        });

        // 링은 부드럽게 래그
        function animateRing() {
            rx += (mx - rx) * 0.12;
            ry += (my - ry) * 0.12;
            ring.style.left = rx + "px";
            ring.style.top = ry + "px";
            requestAnimationFrame(animateRing);
        }
        animateRing();

        // 호버 인터랙티브 요소
        const hoverTargets = "a, button, label, input, .pBtn, .menu-item, .post-card, .service-item";
        document.querySelectorAll(hoverTargets).forEach((el) => {
            el.addEventListener("mouseenter", () => ring.classList.add("hover"));
            el.addEventListener("mouseleave", () => ring.classList.remove("hover"));
        });

        document.addEventListener("mousedown", () => ring.classList.add("click"));
        document.addEventListener("mouseup", () => ring.classList.remove("click"));
    }

    /* ─────────────────────────────────────────────
       2. MOUSE PARTICLE TRAIL (오디오 웨이브 파티클)
    ───────────────────────────────────────────── */
    function initParticleTrail() {
        const canvas = document.createElement("canvas");
        canvas.id = "sm-particle-canvas";
        Object.assign(canvas.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: "9998",
            opacity: "1",
        });
        document.body.appendChild(canvas);

        const ctx = canvas.getContext("2d");
        let W = (canvas.width = window.innerWidth);
        let H = (canvas.height = window.innerHeight);
        window.addEventListener("resize", () => {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        });

        const particles = [];
        let mx = W / 2, my = H / 2;
        let lastMx = mx, lastMy = my;
        let isMoving = false;
        let moveTimer;

        document.addEventListener("mousemove", (e) => {
            mx = e.clientX;
            my = e.clientY;
            isMoving = true;
            clearTimeout(moveTimer);
            moveTimer = setTimeout(() => (isMoving = false), 100);

            // 속도에 따라 파티클 생성
            const dx = mx - lastMx;
            const dy = my - lastMy;
            const speed = Math.sqrt(dx * dx + dy * dy);
            const count = Math.min(Math.floor(speed * 0.25), 4);

            for (let i = 0; i < count; i++) {
                spawnParticle(mx, my, speed);
            }
            lastMx = mx;
            lastMy = my;
        });

        function spawnParticle(x, y, speed) {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 2 + 1;
            const spread = Math.random() * 18 - 9;
            // 오디오 바 형태로 수직 막대 파티클
            particles.push({
                x: x + spread,
                y: y + spread,
                vx: (Math.random() - 0.5) * 1.2,
                vy: (Math.random() - 0.5) * 1.2 - 0.8,
                w: Math.random() * 1.5 + 0.5,
                h: Math.random() * 14 + 6,
                alpha: Math.random() * 0.5 + 0.3,
                decay: Math.random() * 0.018 + 0.01,
                gold: Math.random() > 0.6,
            });
        }

        function render() {
            ctx.clearRect(0, 0, W, H);

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.04; // gravity
                p.alpha -= p.decay;

                if (p.alpha <= 0) {
                    particles.splice(i, 1);
                    continue;
                }

                ctx.save();
                ctx.globalAlpha = p.alpha;
                ctx.fillStyle = p.gold
                    ? `rgba(194,155,89,${p.alpha})`
                    : `rgba(255,255,255,${p.alpha * 0.5})`;
                ctx.fillRect(p.x - p.w / 2, p.y - p.h / 2, p.w, p.h);
                ctx.restore();
            }

            requestAnimationFrame(render);
        }
        render();
    }

    /* ─────────────────────────────────────────────
       3. PROMOTION SECTION — SOUNDWAVE CANVAS BG
    ───────────────────────────────────────────── */
    function initSoundwaveBg() {
        const promotion = document.querySelector(".promotion");
        if (!promotion) return;

        // 프로모션 섹션이 relative 포지션 갖도록
        const prevPos = getComputedStyle(promotion).position;
        if (prevPos === "static") promotion.style.position = "relative";

        const canvas = document.createElement("canvas");
        canvas.id = "sm-wave-canvas";
        Object.assign(canvas.style, {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: "2",
            opacity: "1",
            mixBlendMode: "screen",
        });

        // 프로모션의 첫 번째 자식으로 삽입 (배경 뒤)
        promotion.insertBefore(canvas, promotion.firstChild);

        // wrapper, p-text z-index 높이기
        const wrapper = promotion.querySelector(".promotion-wrapper");
        if (wrapper) {
            wrapper.style.position = "relative";
            wrapper.style.zIndex = "10";
        }
        const pText = promotion.querySelector(".p-text");
        if (pText) {
            pText.style.position = "relative";
            pText.style.zIndex = "11";
        }

        const ctx = canvas.getContext("2d");
        let W, H;

        function resize() {
            W = canvas.width = promotion.offsetWidth;
            H = canvas.height = promotion.offsetHeight;
        }
        resize();
        window.addEventListener("resize", resize);

        // 마우스 위치 (프로모션 내부 기준)
        let mouseX = W * 0.3;
        let mouseY = H * 0.5;

        document.addEventListener("mousemove", (e) => {
            const rect = promotion.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });

        // 웨이브 라인 설정
        const LINES = 9;
        const lines = Array.from({ length: LINES }, (_, i) => ({
            baseY: H * (0.2 + (i / (LINES - 1)) * 0.6),
            offset: (i / LINES) * Math.PI * 2,
            speed: 0.00012 + i * 0.000025,
            amp: 14 + i * 5,
            freq: 0.003 + i * 0.0004,
            opacity: 0.15 + (i % 3) * 0.15,
        }));

        let t = 0;

        function draw() {
            ctx.clearRect(0, 0, W, H);

            lines.forEach((line) => {
                line.baseY = H * (0.2 + (lines.indexOf(line) / (LINES - 1)) * 0.6);

                ctx.beginPath();

                const influenceX = mouseX / W;
                const influenceY = mouseY / H;

                for (let x = 0; x <= W; x += 3) {
                    // 마우스 위치에서 가까울수록 진폭 증가
                    const distToMouse = Math.abs(x - mouseX) / W;
                    const mouseFactor = Math.max(0, 1 - distToMouse * 3) * 1.8;

                    const wave =
                        Math.sin(x * line.freq + t * line.speed * 100 + line.offset) *
                        line.amp *
                        (1 + mouseFactor);

                    const mouseInfluence = (influenceY - 0.5) * 30;
                    const y = line.baseY + wave + mouseInfluence;

                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }

                // 골드 ~ 화이트 그라디언트
                const grad = ctx.createLinearGradient(0, 0, W, 0);
                grad.addColorStop(0, "rgba(194,155,89,0)");
                grad.addColorStop(0.3, `rgba(194,155,89,${line.opacity})`);
                grad.addColorStop(0.5, `rgba(255,240,200,${line.opacity * 1.5})`);
                grad.addColorStop(0.7, `rgba(194,155,89,${line.opacity})`);
                grad.addColorStop(1, "rgba(194,155,89,0)");

                ctx.strokeStyle = grad;
                ctx.lineWidth = lines.indexOf(line) % 3 === 0 ? 2.5 : 1.2;
                ctx.stroke();
            });

            // 마우스 주변 발광 원형 광원
            const glow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 260);
            glow.addColorStop(0, "rgba(194,155,89,0.22)");
            glow.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = glow;
            ctx.fillRect(0, 0, W, H);

            t++;
            requestAnimationFrame(draw);
        }
        draw();
    }

    /* ─────────────────────────────────────────────
       4. SECTION ENTRANCE FADE-IN (gsap 없이도 동작)
    ───────────────────────────────────────────── */
    function initFadeIn() {
        const style = document.createElement("style");
        style.textContent = `
      .sm-fade-up {
        opacity: 0;
        transform: translateY(32px);
        transition: opacity 0.8s cubic-bezier(.22,.68,0,1.2),
                    transform 0.8s cubic-bezier(.22,.68,0,1.2);
      }
      .sm-fade-up.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
        document.head.appendChild(style);

        const targets = document.querySelectorAll(
            ".service-item, .post-card, .a2-text, .a3-title"
        );

        targets.forEach((el, i) => {
            el.classList.add("sm-fade-up");
            el.style.transitionDelay = (i % 4) * 0.1 + "s";
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        targets.forEach((el) => observer.observe(el));
    }

    /* ─────────────────────────────────────────────
       INIT
    ───────────────────────────────────────────── */
    function init() {
        initCursor();
        initParticleTrail();
        initSoundwaveBg();
        initFadeIn();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();