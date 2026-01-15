$(document).on("keyup", ".phoneNumber", function () {
    $(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});


$(function () {
    $('.form').click(function () {
        $('.popup-form-wrapper').fadeIn(100).css('display', 'flex');
        $('body').addClass('on');
    });

    $('.popup-form-closeBtn').click(function () {
        $('.popup-form-wrapper').fadeOut(100);
        $('body').removeClass('on');
    })
});

if (window.innerWidth > 991) {
    $(document).mouseup(function (e) {
        var formPopup = $('.popup-form-wrapper');
        if (formPopup.has(e.target).length === 0) {
            formPopup.fadeOut(100);
            $('body').removeClass('on');
        }
    });
}

$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('.popup-form-wrapper').fadeOut(100);
            $('body').removeClass('on');
        }
    }
);