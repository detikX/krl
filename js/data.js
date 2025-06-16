Highcharts.chart('container', {
    chart: {
        // type: 'column',
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: '24px'
    },
    title: {
        text: 'Info Penumpang KRL',
        style: {
            color: "#1b1b1b",
            font: 'bold 18px "Source Code Pro", sans-serif',
            // lineHeight: '2rem'
        }
    },
    credits: {
        enabled: false //buat highcharts com
    },
    legend: {
        itemStyle: {
            font: 'bold .8rem Quicksand',
            color: '#1b1b1b'
        },


    },
    accessibility: {
        point: {
            valueDescriptionFormat:
                '{xDescription}{separator}{value} million(s)'
        }
    },

    xAxis: {
        title: {
            text: 'Tahun',
            style: {
                // color: "#fafafa",
                font: 'normal 14px "Source Code Pro", sans-serif',
                // lineHeight: '2rem'
                color: "#1b1b1b",
                // fontWeight: 'bold',
                textOutline: false
            }
        },
        categories: [2022, 2023, 2024],
        labels: {
            // text: null,
            // formatter: function () {
            //     // var a = this.y.toString().replace('.', ',');
            //     // return a + '%';
            // },
            style: {
                // color: "#fafafa",
                font: 'bold 14px "Source Code Pro", sans-serif',
                // lineHeight: '2rem'
                color: "#1b1b1b",
                // fontWeight: 'bold',
                textOutline: false
            }
        },
    },

    yAxis: {
        type: 'logarithmic',
        title: {
            text: 'Jumlah Penumpang (Juta)',
            style: {
                // color: "#fafafa",
                font: 'normal 14px "Source Code Pro", sans-serif',
                // lineHeight: '2rem'
                color: "#1b1b1b",
                // fontWeight: 'bold',
                textOutline: false
            }
        },
        labels: {
            style: {
                // color: "#fafafa",
                font: 'bold 14px "Source Code Pro", sans-serif',
                // lineHeight: '2rem'
                color: "#1b1b1b",
                // fontWeight: 'bold',
                textOutline: false
            }
        }
    },

    tooltip: {
        headerFormat: '<b>{series.name}</b><br />',
        pointFormat: '{point.y} Juta orang',
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Source Code Pro',
            fontSize: '1rem'
        }
    },

    series: [{
        name: 'Penumpang KRL',
        keys: ['y', 'color'],
        data: [
            [295, '#0000ff'],
            [338, '#8d0073'],
            [360, '#ba0046'],

        ],
        color: {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 1,
                y2: 0
            },
            stops: [
                [0, '#0000ff'],
                [1, '#ff0000']
            ]
        }
    }]
});
