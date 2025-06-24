Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    }
})

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
    subtitle: {
        text: 'Sumber: BPS dari PT KAI Commuter Jabodetabek (Hingga April 2025)',
        style: {
            color: "#1b1b1b",
            font: 'normal 12px "Source Code Pro", sans-serif',
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
        categories: [2021, 2022, 2023, 2024, 2025],
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
        pointFormat: '{point.y} orang',
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
            // [109252000, '#f97432'],
            // [328154000, '#8d0073'],
            // [290891000, '#ba0046'],
            // [217965000, '#0000ff'],
            // [126740000, '#8d0073'],
            [126740000, '#8d0073'],
            [217965000, '#0000ff'],
            [290891000, '#ba0046'],
            [328154000, '#ff0000'],
            [109252000, '#0000ff']

        ],
        color: {
            linearGradient: {
                x1: 0,
                x2: 0,
                x3: 1,
                x4: 0,
                x5: 0,
                y1: 1,
                y2: 0,
                y3: 1,
                y4: 0,
                y5: 1,

            },
            stops: [
                [0, '#0000ff'],
                [1, '#ff0000'],
                [2, '#0000ff'],
                [3, '#ff0000'],
                [4, '#b50000'],
            ]
        }
    }]
});
