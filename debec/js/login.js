$('.loginBtn').click(function(){
    $('.login-wrapper').slideToggle(100).css('display','flex');
})

$('.login-closeBtn').click(function(){
    $('.login-wrapper').hide();
})