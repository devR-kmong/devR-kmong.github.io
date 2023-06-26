$(function(){
    $('#main').fullpage({
		menu: '#gnb',
		lockAnchors: false,
		anchors: ['main', 'about', 'education', 'publications', 'experience', 'awards', 'career', 'skills', 'contact'],
		navigation: true,
		navigationPosition: 'left',
		showActiveTooltip: true,
        sectionsColor: ['#36d9ec', '#eee', '#f2f2f2', '#0f141a', '#081623', '#0b0f15', '#0c1117', '#fff', '#0053a3'],
		responsiveWidth: 1051,
		afterResponsive: function(isResponsive){
			
		},
    });
});



$(function () {
	$(document).mousemove(function (e) {
		var mouseX = e.pageX;
		var mouseY = e.pageY;

		$('.cursor').css({
			left: mouseX + "px",
			top: mouseY + "px"
		})
	})
})



if (window.innerWidth > 1050) {
    VanillaTilt.init(document.querySelectorAll('.a7-box'), {
        max: 10,
        speed: 1000,
        glare: true,
        "max-glare": 0.3,
    });
}



var swiper = new Swiper(".mySwiper", {
	grabCursor: true,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});



var typed3 = new Typed('#typed', {
	strings: ['Lee HanJin', 'AI Engineer', 'M.S Student'],
	typeSpeed: 70,
	backSpeed: 40,
	smartBackspace: true,
	loop: true
});



$('.toggleBtn').click(function () {
	$('#gnb').toggleClass('show');
	$('#gnb li a').toggleClass('pl');
	$('.tm-closeBtn').fadeToggle(0);
	$('.overlay').toggleClass('on');
})

$('#gnb li a, .overlay').click(function () {
	$('#gnb').removeClass('show');
	$('#gnb li a').removeClass('pl');
	$('.tm-closeBtn').fadeOut(0);
	$('.overlay').removeClass('on');
});

if (window.innerWidth < 851) {
	$('#gnb').click(function () {
		$(this).removeClass('show');
		$('.tm-closeBtn').fadeOut(0);
		$('.overlay').removeClass('on');
	})
	
	$('#gnb li a').click(function () {
		$('#gnb').removeClass('show');
		$('.tm-closeBtn').fadeOut(0);
		$('.overlay').removeClass('on');
	})
}


$(document).on(
    'keydown',
    function (event) {
        if (event.key == "Escape") {
            $('#gnb').removeClass('show');
			$('#gnb li a').removeClass('pl');
			$('.tm-closeBtn').fadeOut(0);
			$('.overlay').removeClass('on');
		}
    }
);



$(window).resize(function () {
	var width_size = window.innerWidth;

	if (width_size == 850) {
		document.location.reload();
	}
	
	if (width_size == 1920) {
		document.location.reload();
	}

	if (width_size == 2560) {
		document.location.reload();
	}
})



$('#gnb, .overlay').on('scroll touchmove mousewheel', function (event) {
	event.preventDefault();
	event.stopPropagation();
	return false;
})



$(document).on("keyup", ".phoneNumber", function () {
	$(this).val($(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3").replace("--", "-"));
});



if (navigator.userAgent.indexOf("Trident") > 0) {
	alert("이 사이트에 대한 Internet Explorer 지원이 종료되었습니다. " +
		"확인 버튼을 누르면 Edge 브라우저로 이동합니다.")
	window.location = 'microsoft-edge:' + window.location.href;
}