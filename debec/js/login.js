$('.login-wrapper').hide();

$('.loginBtn').click(function(){
    $('.login-wrapper').slideToggle(70);
})

$('.login-closeBtn').click(function(){
    $('.login-wrapper').slideUp(70);
})