const timeCount = 999
let timing = timeCount
let root = document.documentElement
let interval = null

root.style.setProperty('--count-animate', timeCount);
numberText.innerText = 999

interval = setInterval(() => {
    timing--
    numberText.innerText = timing

    if (timing < 1) {
        clearInterval(interval)
        hide()
    }
}, 1000)

function hide() {
    numberText.style.display = 'none'
    // tfw.style.display = 'block'
    tfw.style.opacity = '1'
}




$('.tBtn-0').click(function () {
    $('.a6-t0').fadeOut();
})
$('.tBtn-1').click(function () {
    $('.a6-t1').hide();
    $('.a6-t2').show();
})
$('.tBtn-2').click(function () {
    $('.a6-t2').hide();
    $('.a6-t3').show();
})
$('.tBtn-3').click(function () {
    $('.a6-t3').hide();
    $('.a6-t4').show();
})
$('.tBtn-4').click(function () {
    $('.a6-t4').hide();
    $('.a6-t5').show();
})
$('.tBtn-5').click(function () {
    $('.a6-t5').hide();
    $('.a6-t1').show();
})




var audio = document.getElementById("music");
var audio2 = document.getElementById("music2");

$(function () {
    $('.play').click(function () {
        audio.play();
        isPlaying = true;
    });

    $('.play2').click(function () {
        audio2.play();
        isPlaying = true;
    });
});