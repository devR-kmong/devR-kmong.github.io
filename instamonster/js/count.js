$({ val: 1000 }).animate({ val: 14638 }, {
    duration: 1500,
    step: function () {
        var num = numberWithCommas(Math.floor(this.val));
        $(".count_num").text(num);
    },
    complete: function () {
        var num = numberWithCommas(Math.floor(this.val));
        $(".count_num").text(num);
    }
});

$({ val: 0 }).animate({ val: 4739 }, {
    duration: 1500,
    step: function () {
        var num = numberWithCommas(Math.floor(this.val));
        $(".count_num2").text(num);
    },
    complete: function () {
        var num = numberWithCommas(Math.floor(this.val));
        $(".count_num2").text(num);
    }
});

$({ val: 0 }).animate({ val: 7461 }, {
    duration: 1500,
    step: function () {
        var num = numberWithCommas(Math.floor(this.val));
        $(".count_num3").text(num);
    },
    complete: function () {
        var num = numberWithCommas(Math.floor(this.val));
        $(".count_num3").text(num);
    }
});

$({ val: 1000 }).animate({ val: 25437 }, {
    duration: 1500,
    step: function () {
        var num = numberWithCommas(Math.floor(this.val));
        $(".count_num4").text(num);
    },
    complete: function () {
        var num = numberWithCommas(Math.floor(this.val));
        $(".count_num4").text(num);
    }
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}