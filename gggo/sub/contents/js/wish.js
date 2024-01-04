// chart
var options = {
    series: [{
        data: [4, 4, 2, 5]
    }],
    chart: {
        type: 'bar',
        height: 237,
        toolbar: {
            show: false,
            offsetX: -10,
            offsetY: -10,
            tools: {
                download: true,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: true,
            }
        },
        animations: {
            enabled: true,
        },
    },
    plotOptions: {
        bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: true,
            dataLabels: {
                position: 'bottom'
            },
        }
    },
    colors: ['#00b050', '#ffbf00', '#ff9933', '#ff0000'],
    dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
            colors: ['#fff'],
            fontSize: '16px',
            fontFamily: 'Pretendard'
        },
        formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + "(" + val + ")"
        },
        offsetX: 10,
        dropShadow: {
            enabled: false
        }
    },
    stroke: {
        width: 0,
        colors: ['#fff']
    },
    xaxis: {
        categories: ['안정', '적정', '소신', '불안'],
        labels: {
            show: false
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    legend: {
        show: false
    },
    tooltip: {
        enabled: false
    },
    states: {
        hover: {
            filter: {
                    type: 'none'
                }
        },
        active: {
            filter: {
                    type: 'none'
                }
        }
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();



// 비교 checkbox
$(function () {
    $("input[name='cp-cb']").click(function () {
        var sum = 0;

        $("input[name='cp-cb']").each(function (i) {
            if($("input[name='cp-cb']").eq(i).is(":checked")) {
                sum++;
            }
        })

        if (sum == 2) {
            var ewcpp = $('.ew-compare-popup');
            
            ewcpp.show().css('display', 'flex');

            $('.cp-closeBtn').click(function () {
                ewcpp.hide();
            })
        }

        if (sum < 3) {} else {
            $(this).attr("checked" , false);
            alert('비교 대상 하나를 선택 해제하신 후 다시 시도하세요.');
        }
    })
})



// 하트 click event
function toggleAct(heart) {
    heart.classList.toggle('push');
}