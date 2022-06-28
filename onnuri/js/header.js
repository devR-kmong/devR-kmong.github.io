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
            $('nav ul li a').addClass('Fixed2');
        }
        else {
            $('nav ul li a').removeClass('Fixed2');
        }
    });
});


////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $(window).scroll(function(){
       
        var here = $(".a2-bg1").offset().top;
        var height = $(document).scrollTop();

          if(here == height){
            $('header').addClass('A2-trans1');
          }
          else {
            $('header').removeClass('A2-trans1');
          }
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
       
        var here = $(".a2-bg2").offset().top;
        var height = $(document).scrollTop();

          if(here == height){
            $('header').addClass('A2-trans2');
          }
          else {
            $('header').removeClass('A2-trans2');
          }
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
       
        var here = $(".a2-bg3").offset().top;
        var height = $(document).scrollTop();

          if(here == height){
            $('header').addClass('A2-trans3');
          }
          else {
            $('header').removeClass('A2-trans3');
          }
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
       
        var here = $(".a2-bg4").offset().top;
        var height = $(document).scrollTop();

          if(here == height){
            $('header').addClass('A2-trans4');
          }
          else {
            $('header').removeClass('A2-trans4');
          }
    })
})


////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $(window).scroll(function(){
       
        var here = $(".article4").offset().top;
        var height = $(document).scrollTop();

          if(here == height){
            $('header').addClass('Fixed1');
          }
          else {
            $('header').removeClass('Fixed1');
          }
    })
})


////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $(window).scroll(function(){
       
        var here = $(".article6").offset().top;
        var height = $(document).scrollTop();

          if(here == height){
            $('header').addClass('Fixed3');
          }
          else {
            $('header').removeClass('Fixed3');
          }
    })
})

////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $(window).scroll(function(){
       
        var here = $(".article6").offset().top;
        var height = $(document).scrollTop();

          if(here == height){
            $('nav ul li a').addClass('Fixed4');
          }
          else {
            $('nav ul li a').removeClass('Fixed4');
          }
    })
})

////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    $(window).scroll(function(){
       
        var here = $(".article6").offset().top;
        var height = $(document).scrollTop();

          if(here == height){
            $('.logo').addClass('active');
            $('.logo-w').removeClass('active');
          }   
    })
})







