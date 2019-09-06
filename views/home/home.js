function getJsonOne() {
    var title = {
        text: 'demo'
    };
    var subtitle = {
        text: 'demo'
    };
    var xAxis = {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
    };
    var yAxis = {
        title: {
            text: 'Temperature (\xB0C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    };

    var tooltip = {
        valueSuffix: '\xB0C'
    }

    var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    };

    var series = [{
        name: 'Tokyo',
        color: '#49beb7',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
            26.5, 23.3, 18.3, 13.9, 9.6
        ]
    }, {
        name: 'New York',
        color: '#facf5a',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,
            24.1, 20.1, 14.1, 8.6, 2.5
        ]
    }, {
        name: 'London',
        color: '#ff5959',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0,
            16.6, 14.2, 10.3, 6.6, 4.8
        ]
    }];

    var json = {};

    json.title = title;
    json.subtitle = subtitle;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.tooltip = tooltip;
    json.legend = legend;
    json.series = series;
    return json;
}

function getJsonTwo() {
    var chart = {
        type: 'bar'
    };
    var title = {
        text: 'demo'
    };
    var subtitle = {
        text: 'demo'
    };
    var xAxis = {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
            text: null
        }
    };
    var yAxis = {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    };
    var tooltip = {
        valueSuffix: ' millions'
    };
    var plotOptions = {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    };
    var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    };
    var credits = {
        enabled: false
    };

    var series = [{
        name: 'Year 1800',
        color: '#ffc15e',
        data: [107, 31, 635, 203, 2]
    }, {
        name: 'Year 1900',
        color: '#8158fc',
        data: [133, 156, 947, 408, 6]
    }, {
        name: 'Year 2008',
        color: '#34314f',
        data: [973, 914, 4054, 732, 34]
    }];

    var json = {};
    json.chart = chart;
    json.title = title;
    json.subtitle = subtitle;
    json.tooltip = tooltip;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.series = series;
    json.plotOptions = plotOptions;
    json.legend = legend;
    json.credits = credits;
    return json;
}