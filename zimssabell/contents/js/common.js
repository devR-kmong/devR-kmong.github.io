new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       200,
    mobile:       true,
    live:         true
}).init();



function clip() {
    var url = '';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    $('.url-popup-wrapper').fadeIn(120).css('display','flex');
}

$('.url-popup-wrapper').click(function () {
    $(this).fadeOut(120);
})



$(function () {
    $(".floating").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 100) {
                $('.floating').fadeIn(100).css('display', 'flex');
            } else {
                $('.floating').fadeOut(100);
            }
        });
    });
});



$(function () {
    $('.toptop, .gnb ul li a').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



$('.url-popup-wrapper').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
})



$('.menuBtns').click(function () {
    $(this).toggleClass('change')
});

$('.gnb ul li a').click(function () {
    $('#check').prop('checked', false)
    $('.menuBtns').removeClass('change')
});

$(document).scroll(function (e) {
    if (!$(e.target).hasClass('f-select')) {
        $('#check').prop('checked', false)
        $('.menuBtns').removeClass('change')
    }
})


var frame = document.getElementById("Iframe");
frame.onload = function () {
    frame.style.height =
        frame.contentWindow.document.body.scrollHeight + 'px';
    frame.style.width =
        frame.contentWindow.document.body.scrollWidth + 'px';
}



$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}


function shareMessage() {
    Kakao.Share.sendScrap({
        requestUrl: 'http://zimssa-bell.com/',
    });
}