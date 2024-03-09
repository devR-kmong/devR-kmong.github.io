var delta = 100;
var timer = null

$(window).on('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(resizeDone, delta);
});

function resizeDone() {
    document.location.reload();
}

window.addEventListener('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(resizeDone, delta);
}, false);