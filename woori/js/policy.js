for (let i = 1; i <= 2; i++) {
    $('.fpBtn'+ i).click(function () {
    $('.pp-wrapper' + i).fadeIn().css('display','flex');
    $('.policy-popup textarea').scrollTop(0);
})
}

$('.pp-closeBtn').click(function () {
    $('.pp-wrapper').fadeOut();
})

