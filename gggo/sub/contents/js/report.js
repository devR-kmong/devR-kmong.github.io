// 상단 탭메뉴
$(function () {
    $('.sub-tabBtn').click(function () {
        id = $($(this).data('target')).selector;
        $('.tab-contents').hide();
        $('#' + id).show().css('display','flex');

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});

$(function () {
    for (let i = 0; i < $('.sub-tabBtn').length; i++) {
        $('.sub-tabBtn').eq(i).click(function () {
            $('.sub-tabBtn').removeClass('on');
            $(this).addClass('on');
        })
    }
})



// 3개년입시결과 그래프 클릭 시
$('.er-6').click(function () {
    $('.er-7').addClass('off');
    $('.er-8').removeClass('off');
})



// 전공정보 고정 메뉴바
$(window).on('scroll', function () {
    $('.tc-section').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('.tc-sidemenu a').removeClass('on');
            $('.tc-sidemenu a[href=#' + id + ']').addClass('on');
        }
    });
});

$(function () {
    $('.tc-sideBtn').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



// 추천도서 상세정보 클릭 시
$('.er-10').click(function () {
    $('.er-11').removeClass('off');
})



// 시스템소프트웨어개발자 클릭 시
$('.er-15').click(function () {
    $('.tc-s-popup-wrapper').show().css('display', 'flex');
})

$('.tc-closeBtn').click(function () {
    $('.tc-s-popup-wrapper').hide();
})