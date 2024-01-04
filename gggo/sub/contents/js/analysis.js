// 종합분석 => 교과(등급) 차트 #chart1
var options = {
    series: [{
        name: '최고등급',
        type: 'column',
        color: '#10cd98',
        data: [3.5, 4, 4, 3.8, 4.2, 2.8]
    }, {
        name: '최근등급',
        type: 'line',
        color: '#858ef5',
        data: [6.3, 6.5, 6, 6, 7, 6]
    }],
    chart: {
        height: 350,
        type: 'line',
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
    stroke: {
        width: [0, 3]
    },
    grid: {
        borderColor: '#e7e7e7',
        row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
        },
    },
    dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
    },
    labels: ['주요교과', '국어', '수학', '영어', '사회', '과학'],
    xaxis: {
        type: 'text'
    },
    yaxis: {
        min: 1,
        max: 9,
        tickAmount: 8,
        decimalsInFloat: true,
        reversed: true,
        showForNullSeries: true,
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
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

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();



// 종합분석 => 수능(등급) 차트 #chart2
var options = {
    series: [{
        name: '최고등급',
        type: 'column',
        color: '#10cd98',
        data: [3.1, 5, 4.8, 4.5, 5, 3]
    }, {
        name: '최근등급',
        type: 'line',
        color: '#858ef5',
        data: [6.5, 6.8, 6, 6, 7, 6]
    }],
    chart: {
        height: 350,
        type: 'line',
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
    stroke: {
        width: [0, 3]
    },
    grid: {
        borderColor: '#e7e7e7',
        row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
        },
    },
    dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
    },
    labels: ['국수영탐', '국어', '수학', '영어', '탐구1', '탐구2'],
    xaxis: {
        type: 'text'
    },
    yaxis: {
        min: 1,
        max: 9,
        tickAmount: 8,
        decimalsInFloat: true,
        reversed: true,
        showForNullSeries: true,
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
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

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();



// 교과상세분석 => 수능(등급) 차트 #chart3
var options = {
    series: [
        {
            name: "전교과",
            data: [5, 6, 4.7, 4.5, 5, 3.9]
        },
        {
            name: "주요",
            data: [6, 7, 5, 3.5, 4.8, 3]
        },
        {
            name: "국어",
            data: [3, 4, 5, 2, 5, 3],
        },
        {
            name: "수학",
            data: [5, 4, 6, 8, 6.4, 3]
        },
        {
            name: "영어",
            data: [5, 2, 3, 4.5, 5, 3.9]
        },
        {
            name: "사회",
            data: [4, 4, 5.3, 4.5, 5.8, 3.3]
        },
        {
            name: "과학",
            data: [5, 5, 5, 6, 2, 3.9]
        }
    ],
    chart: {
        height: 450,
        type: 'line',
        dropShadow: {
            enabled: false,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
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
            enabled: false,
        },
    },
    colors: ['#10cd98', '#858ef5', '#e95b54', '#fbce4a', '#309fdb', '#854e9b', '#a68b74'],
    dataLabels: {
        enabled: true,
    },
    stroke: {
        curve: 'smooth',
        width: [2, 2, 2, 2, 2, 2, 2]
    },
    title: {
        text: '　',
        align: 'left'
    },
    grid: {
        borderColor: '#e7e7e7',
        row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
        },
    },
    markers: {
        size: 1
    },
    xaxis: {
        categories: ['1-1학기', '1-2학기', '2-1학기', '2-2학기', '3-1학기', '3-2학기'],
    },
    yaxis: {
        min: 1,
        max: 9,
        tickAmount: 8,
        decimalsInFloat: true,
        reversed: true,
        showForNullSeries: true,
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
    }
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();



// 수능상세분석 => 수능(등급) 차트 #chart4
var options = {
    series: [
        {
            name: "국수탐",
            data: [30, 40, 48, 42, 52, 50, 48, 51, 55, 52]
        },
        {
            name: "국어",
            data: [32, 40, 45, 34, 42, 35, 33, 42, 50, 46]
        },
        {
            name: "수학",
            data: [51, 42, 60, 46, 50, 35, 45, 40, 50, 46]
        },
        {
            name: "영어",
            data: [51, 25, 36, 40, 43, 40, 38, 42, 48, 42]
        },
        {
            name: "탐구",
            data: [41, 43, 50, 44, 50, 43, 40, 38, 42, 46]
        },
    ],
    chart: {
        height: 450,
        type: 'line',
        dropShadow: {
            enabled: false,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
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
            enabled: false,
        },
    },
    colors: ['#858ef5', '#e95b54', '#fbce4a', '#309fdb', '#10cd98'],
    dataLabels: {
        enabled: true,
    },
    stroke: {
        curve: 'smooth',
        width: [2, 2, 2, 2, 2]
    },
    title: {
        text: '　',
        align: 'left'
    },
    grid: {
        borderColor: '#e7e7e7',
        row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
        },
    },
    markers: {
        size: 1
    },
    xaxis: {
        categories: ['1-3월', '1-6월', '1-9월', '2-3월', '2-6월', '2-9월', '3-3월', '3-6월', '3-9월', '수능'],
    },
    yaxis: {
        min: 0,
        max: 100,
        tickAmount: 10,
        decimalsInFloat: false,
        reversed: false,
        showForNullSeries: true,
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
    }
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();



// 백분위 ↔ 등급 토글
$('.az3-bc-toggleBtn').click(function () {
    $('.az3-morelist').toggleClass('show');
});

$(window).scroll(function () {
    $('.az3-morelist').removeClass('show');
})