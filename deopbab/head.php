<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

run_event('pre_head');

if(defined('G5_THEME_PATH')) {
    require_once(G5_THEME_PATH.'/head.php');
    return;
}

if (G5_IS_MOBILE) {
    include_once(G5_MOBILE_PATH.'/head.php');
    return;
}

include_once(G5_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
include_once(G5_LIB_PATH.'/poll.lib.php');
include_once(G5_LIB_PATH.'/visit.lib.php');
include_once(G5_LIB_PATH.'/connect.lib.php');
include_once(G5_LIB_PATH.'/popular.lib.php');
?>

<div id="hd">
    <h1 id="hd_h1"><?php echo $g5['title'] ?></h1>
    <div id="skip_to_container"><a href="#container">본문 바로가기</a></div>

    <?php
    if(defined('_INDEX_')) { // index에서만 실행
        include G5_BBS_PATH.'/newwin.inc.php'; // 팝업레이어
    }
    ?>

    <div id="myTnb">
    	<div class="tnbInner">
			
		</div>
    </div>
    
</div>

<div class="header">
    <div class="gnb">
        <a href="#1" class="logo-w"><img src="<?php echo G5_URL?>/contents/images/logo-w.png"></a>
        <a href="#1" class="logo active"><img src="<?php echo G5_URL?>/contents/images/logo.png"></a>
        <input type="checkbox" id="check">
        <label for="check">
            <div class="menuBtns" onclick="myFunction(this)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </label>
        <ul class="mobile-menu">
            <li class="menu-item"><a href="#2">회사소개</a></li>
            <li class="menu-item"><a href="#3">서비스안내</a></li>
            <li class="menu-item"><a href="#4">포트폴리오</a></li>
            <li class="menu-item"><a href="#5">온라인문의</a></li>
            <li class="menu-item"><a href="#6">고객센터</a></li>
        </ul>
        <ul class="pc-menu">
            <li class="menu-item"><a href="#2">회사소개</a></li>
            <li class="menu-item"><a href="#3">서비스안내</a></li>
            <li class="menu-item"><a href="#4">포트폴리오</a></li>
            <li class="menu-item"><a href="#5">온라인문의</a></li>
            <li class="menu-item"><a href="#6">고객센터</a></li>
        </ul>
        <div class="overlay"></div>
    </div>
</div>


<script src="https://code.jquery.com/jquery-latest.js"></script>
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
    AOS.init({
        once: true
    })
</script>

<script src="<?php echo G5_URL?>/contents/js/jquery.scrollTo.min.js"></script>
<script>
    $(function () {
        $('.logo, .logo-w, .gnb ul li a, .p-text a, .logo-f, .f-menu-item a, .floating a').click(function (e) {
            $.scrollTo(this.hash || 0, 500);
            e.preventDefault();
        });
    });
</script>

<script>
    $(window).on('scroll', function () {
        $('section').each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 500) {
                var id = $(this).attr('id');
                $('.gnb ul li a').removeClass('actives');
                $('.gnb ul li a[href=#' + id + ']').addClass('actives');
            }
        });
    });
</script>

<script src="<?php echo G5_URL?>/contents/js/header.fixed.js"></script>

<script>
    function myFunction(x) {
        x.classList.toggle("change");
    }
</script>

<script>
    $('.mobile-menu li a').click(function () {
        $('#check').prop('checked', false)
        $('.menuBtns').removeClass('change')
    })

    $('.overlay').click(function () {
        $('#check').prop('checked', false)
        $('.menuBtns').removeClass('change')
    })
</script>

<script>
    if (window.navigator.userAgent.match(/MSIE|Internet Explorer|Trident/i)) {
        // IE!!
        window.location = 'https://support.microsoft.com/ko-kr/office/%ec%97%b0%ea%b2%b0%ed%95%98%eb%a0%a4%eb%8a%94-%ec%9b%b9-%ec%82%ac%ec%9d%b4%ed%8a%b8%ea%b0%80-internet-explorer%ec%97%90%ec%84%9c-%ec%9e%91%eb%8f%99%ed%95%98%ec%a7%80-%ec%95%8a%ec%8a%b5%eb%8b%88%eb%8b%a4-8f5fc675-cd47-414c-9535-12821ddfc554?ui=ko-kr&rs=ko-kr&ad=kr';
    }
</script>

<hr>

<div id="wrapper">
    <div id="container_wr">

    <div id="container">

        