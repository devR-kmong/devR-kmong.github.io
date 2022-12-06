$(document).ready(function () {
    var Offset = $('nav').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('header').addClass('Fixed');
        }
        else {
            $('header').removeClass('Fixed');
        }
    });
});


$(window).resize(function () {
    if ($(window).width() > 1600) {
        $(document).ready(function () {
            var Offset = $('nav').offset();
            $(window).scroll(function () {
                if ($(document).scrollTop() > Offset.top) {
                    $('header').addClass('Fixed');
                }
                else {
                    $('header').removeClass('Fixed');
                }
            });
        });
    }
    else {
        $(document).ready(function () {
            var Offset = $('nav').offset();
            $(window).scroll(function () {
                if ($(document).scrollTop() > Offset.top) {
                    $('header').removeClass('Fixed');
                }
            });
        });
    }
});


////////////////////////////////////////////////////////////////////


$(document).ready(function () {
    var Offset = $('nav').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.logo-w').addClass('active');
        }
        else {
            $('.logo-w').removeClass('active');
        }
    });
});


////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    var Offset = $('nav').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.logo').removeClass('active');
        }
        else {
            $('.logo').addClass('active');
        }
    });
});

////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    var Offset = $('nav').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('nav ul li').addClass('Fixed2');
        }
        else {
            $('nav ul li').removeClass('Fixed2');
        }
    });
});

////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    var Offset = $('nav').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('.navBtn').addClass('Fixed3');
        }
        else {
            $('.navBtn').removeClass('Fixed3');
        }
    });
});

////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $(window).scroll(function(){
       
        var here = $(".article3").offset().top;
        var height = $(document).scrollTop();

          if(here == height){
            $('header').addClass('Fixed4');
          }
          else {
            $('header').removeClass('Fixed4');
          }
    })
})

////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $(window).scroll(function(){
       
        var here = $(".article3").offset().top;
        var height = $(document).scrollTop();

          if(here == height){
            $('nav ul li').removeClass('Fixed2');
          }
    })
})

////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $(window).scroll(function(){
       
        var here = $(".article3").offset().top;
        var height = $(document).scrollTop();

          if(here == height){
            $('.logo').addClass('active');
            $('.logo-w').removeClass('active');
          }   
    })
})



////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $(window).scroll(function(){
       
        var here = $(".article4").offset().top;
        var height = $(document).scrollTop();

          if(here == height){
            $('header').addClass('Fixed5');
          }
          else {
            $('header').removeClass('Fixed5');
          }
    })
})



////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $(window).scroll(function(){
       
        var here = $(".article7").offset().top;
        var height = $(document).scrollTop();

          if(here == height){
            $('header').addClass('Fixed6');
          }
          else {
            $('header').removeClass('Fixed6');
          }
    })
})



////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $(window).scroll(function(){
       
        var here = $(".article7").offset().top;
        var height = $(document).scrollTop();

          if(here == height){
            $('nav ul li').removeClass('Fixed2');
          }
    })
})


////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $(window).scroll(function(){
       
        var here = $(".article7").offset().top;
        var height = $(document).scrollTop();

          if(here == height){
            $('.logo').addClass('active');
            $('.logo-w').removeClass('active');
          }   
    })
})




