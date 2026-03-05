$(function () {
    $('.pBtn, .a2Btn').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});


$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}



const image = document.querySelector('.a2-image');

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

// 설정값 (취향에 따라 조절하세요)
const sensitivity = 40; // 숫자가 클수록 움직임이 절제됨 (20~50 추천)
const friction = 0.05;  // 낮을수록 더 쫀득하고 부드럽게 따라옴 (0.05가 가장 기분 좋은 속도)

window.addEventListener('mousemove', (e) => {
    // 화면 전체 크기 기준 중앙점 계산
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // 중앙에서 마우스가 얼마나 떨어져 있는지 계산 (반대 방향을 위해 마이너스)
    targetX = (centerX - e.clientX) / sensitivity;
    targetY = (centerY - e.clientY) / sensitivity;
});

function animate() {
    // 프레임마다 현재 위치를 목표 위치로 서서히 근접시킴 (LERP)
    currentX += (targetX - currentX) * friction;
    currentY += (targetY - currentY) * friction;

    // 소수점 셋째 자리까지 제한하여 브라우저 연산 최적화
    image.style.transform = `translate3d(${currentX.toFixed(3)}px, ${currentY.toFixed(3)}px, 0)`;
    
    requestAnimationFrame(animate);
}

// 애니메이션 루프 시작
animate();