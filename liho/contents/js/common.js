AOS.init({
    once: true
})



$(window).resize(function () {
    var width_size = window.innerWidth;

    if (width_size == 1920) {
        document.location.reload();
    } else if (width_size == 2560) {
        document.location.reload();
    }
})



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}