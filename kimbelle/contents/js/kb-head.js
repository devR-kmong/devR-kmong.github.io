/* KIMBELLE 모션 스니펫 : <head> 안, CSS 링크보다 위에서 (defer/async 없이) 로드
   - 첫 페인트 전에 html.kb-motion 부여 → 스크립트 실행 전 깜빡임 방지
   - 4초 안에 main.js 가 동작하지 않으면 자동으로 정적 표시로 전환
   - 새로고침 시 스크롤 위치 복원 끄기 (고정 구간 재계산으로 인한 화면 튐 방지) */
(function(d,w){var h=d.documentElement;if('scrollRestoration' in history)history.scrollRestoration='manual';
if(w.matchMedia&&w.matchMedia('(prefers-reduced-motion: reduce)').matches)return;h.className+=' kb-motion';
setTimeout(function(){if(w.__kbMotion)return;h.className=h.className.replace(/\bkb-motion\b/g,'');var e=d.querySelector('.kb-hero');if(e)e.className+=' is-ready is-playing';},4000);})(document,window);
