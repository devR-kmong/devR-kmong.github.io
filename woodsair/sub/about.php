<?php
include_once('../common.php');

$g5['title'] = "회사소개";

add_stylesheet('<link rel="stylesheet" href="'.G5_URL.'/sub/css/sub-promotion.css">', 0);
add_stylesheet('<link rel="stylesheet" href="'.G5_URL.'/sub/css/about.css">', 1);

include_once(G5_PATH.'/head.php');
?>


<section class="article sub-promotion s-about">
    <div class="sub-promotion-wrapper">
        <div class="sub-p-text">
            <h1>
                <?php echo $g5['title'] ?>
            </h1>
            <p>
                About Us
            </p>
        </div>
    </div>
</section>

<section class="article">
    <div class="article-wrapper">
        1
    </div>
</section>


<?php
include_once(G5_PATH.'/tail.php');
?>