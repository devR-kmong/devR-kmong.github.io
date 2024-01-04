// #chart1
var options = {
    series: [
        {
            name: "우리반",
            data: [5, 6, 4.7, 4.5, 5, 3.9, 5]
        },
        {
            name: "학년",
            data: [6, 7, 5, 3.5, 4.8, 3, 4]
        },
    ],
    chart: {
        height: 350,
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
    colors: ['#10cd98', '#858ef5'],
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
        categories: ['국어', '수학', '영어', '사회', '과학', '주요', '전교과'],
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

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();




// #chart2
var options = {
    series: [
        {
            name: "우리반",
            data: [20, 33, 48, 42, 52]
        },
        {
            name: "학년",
            data: [32, 40, 45, 34, 42]
        },
    ],
    chart: {
        height: 350,
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
    colors: ['#10cd98', '#858ef5'],
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
        categories: ['국어', '수학', '영어', '탐구', '국수영탐'],
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

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();