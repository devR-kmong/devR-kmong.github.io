new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       0,
    mobile:       true,
    live:         true
}).init();



$(window).on('scroll', function () {
    $('.article').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('.remoteBtn').removeClass('actives');
            $('.remoteBtn[href=#' + id + ']').addClass('actives');
        }
    });
});



$(function () {
    $('.remoteBtn, .logo').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



if (window.innerWidth > 1600) {
    document.write(
        '<script src="js/box_scroll.js"><\/script>'
    )

    $(function () {
        $('.flBtn').bind("mouseover", function () {
            $(this).addClass('on');
        })
        $('.flBtn').bind("mouseleave", function () {
            $(this).removeClass('on');
        })
    })
    
}
else {
    document.clear(
        '<script src="js/box_scroll.js"><\/script>'
    )
}



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
        "확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
    window.location = 'microsoft-edge:' + window.location.href;
}


$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});


$('#personalPopup').click(function () {
    $('.pp-wrapper').fadeIn().css('display','flex');
    $('.policy-popup textarea').scrollTop(0);
});

$('.pp-closeBtn').click(function () {
    $('.pp-wrapper').fadeOut();
});

$('.f-personal-text').click(function () {
    if ($('#cb').is(':checked')) {
        $('.f-personal').addClass('f-personal-no');
        $('.f-personal-text p').html('개인정보처리방침에 동의해주세요.');
        $('.gform .submitBtn').attr('disabled', true);
    } else {
        $('.f-personal').removeClass('f-personal-no');
        $('.f-personal-text p').html('개인정보수집 및 이용에 동의합니다.');
        $('.gform .submitBtn').attr('disabled', false);
    }
});



$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.pp-wrapper').fadeOut();
        }
    }
);



if (window.innerWidth > 1600) {
    $('.floating').on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    })
}  