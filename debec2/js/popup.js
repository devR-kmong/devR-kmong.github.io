var DEBEC = {}

$(function () {

	DEBEC.openPopup = openPopup;//팝업 열기
	DEBEC.closePopup = closePopup;//팝업 닫기
	DEBEC.popupUtil = {};//팝업 관련 자원 저장

	/*$(selector).on(event, childSelector, function);*/
	$('body').on('click', '.pop-open', function (e) {
		openPopID = $(this).attr('href');
		openPopup(openPopID);
		e.preventDefault();
	});


	$('body').on('click', '.pop-close a, button.btn--primary', function () {
		if ($(this).hasClass('btn--primary') && $(this).hasClass('js-btnNext')) {
		} else {
			closePopID = $(this).closest('.pop-wrap').attr('id');
			closePopup('#' + closePopID);
		}
	});

/* 팝업 가운데 정렬 */
/*===================================================*/
	popupCenter();

	$(window).resize(function() {
		popupCenter();
	});
	function popupCenter() {
		var width = $('.pop-container').width();
		var height = $('.pop-container').height();

		$('.pop-container').css({'left':($(window).width()-width)/2, 'top': ($(window).height()-height)/2});
	}
/*===================================================*/

	function closePopup(popId, remove) {
		if (popId) {
			var target = $(popId).length > 0 ? popId : '#' + popId,
				targetPop = $(target);
			
			if (remove) {
				targetPop.remove();
			} else {
				targetPop.hide();
			}
		}
	}


	function openPopup(popId) {
		if (popId) {
			var target = $(popId).length > 0 ? popId : '#' + popId;
			var targetAlert = $(target);
			
			targetAlert.addClass('open').show();
		}
	}

});


