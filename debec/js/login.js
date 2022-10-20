$('.loginBtn').click(function(){
    $('.login-wrapper').slideToggle(70).css('display','flex');
})

$('.login-closeBtn').click(function(){
    $('.login-wrapper').slideUp(70).css('display','none');
})