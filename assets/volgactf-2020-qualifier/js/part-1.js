function onDOMReady () {
    var ctx1 = document.getElementById('chart_signup');
    var chartSignup = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: [
                'Feb 29',
                'Mar 1',
                'Mar 2',
                'Mar 3',
                'Mar 4',
                'Mar 5',
                'Mar 6',
                'Mar 7',
                'Mar 8',
                'Mar 9',
                'Mar 10',
                'Mar 11',
                'Mar 12',
                'Mar 13',
                'Mar 14',
                'Mar 15',
                'Mar 16',
                'Mar 17',
                'Mar 18',
                'Mar 19',
                'Mar 20',
                'Mar 21',
                'Mar 22',
                'Mar 23',
                'Mar 24',
                'Mar 25',
                'Mar 26',
                'Mar 27',
                'Mar 28',
                'Mar 29'
            ],
            datasets: [{
                label: 'Number of teams signed up',
                data: [
                    2,
                    5,
                    16,
                    10,
                    5,
                    3,
                    1,
                    1,
                    0,
                    4,
                    3,
                    2,
                    4,
                    2,
                    3,
                    1,
                    8,
                    7,
                    4,
                    5,
                    7,
                    11,
                    24,
                    64,
                    82,
                    99,
                    150,
                    458,
                    217,
                    52
                ],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var ctx2 = document.getElementById('chart_signin');
    var chartSignin = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: [
                '3/27 15:00-15:59 UTC',
                '3/27 16:00-16:59 UTC',
                '3/27 17:00-17:59 UTC',
                '3/27 18:00-18:59 UTC',
                '3/27 19:00-19:59 UTC',
                '3/27 20:00-20:59 UTC',
                '3/27 21:00-21:59 UTC',
                '3/27 22:00-22:59 UTC',
                '3/27 23:00-23:59 UTC',
                '3/28 00:00-00:59 UTC',
                '3/28 01:00-01:59 UTC',
                '3/28 02:00-02:59 UTC',
                '3/28 03:00-03:59 UTC',
                '3/28 04:00-04:59 UTC',
                '3/28 05:00-05:59 UTC',
                '3/28 06:00-06:59 UTC',
                '3/28 07:00-07:59 UTC',
                '3/28 08:00-08:59 UTC',
                '3/28 09:00-09:59 UTC',
                '3/28 10:00-10:59 UTC',
                '3/28 11:00-11:59 UTC',
                '3/28 12:00-12:59 UTC',
                '3/28 13:00-13:59 UTC',
                '3/28 14:00-14:59 UTC',
                '3/28 15:00-15:59 UTC',
                '3/28 16:00-16:59 UTC',
                '3/28 17:00-17:59 UTC',
                '3/28 18:00-18:59 UTC',
                '3/28 19:00-19:59 UTC',
                '3/28 20:00-20:59 UTC',
                '3/28 21:00-21:59 UTC',
                '3/28 22:00-22:59 UTC',
                '3/28 23:00-23:59 UTC',
                '3/29 00:00-00:59 UTC',
                '3/29 01:00-01:59 UTC',
                '3/29 02:00-02:59 UTC',
                '3/29 03:00-03:59 UTC',
                '3/29 04:00-04:59 UTC',
                '3/29 05:00-05:59 UTC',
                '3/29 06:00-06:59 UTC',
                '3/29 07:00-07:59 UTC',
                '3/29 08:00-08:59 UTC',
                '3/29 09:00-09:59 UTC',
                '3/29 10:00-10:59 UTC',
                '3/29 11:00-11:59 UTC',
                '3/29 12:00-12:59 UTC',
                '3/29 13:00-13:59 UTC',
                '3/29 14:00-14:59 UTC'
            ],
            datasets: [{
                label: 'Number of teams signed in',
                data: [
                    433,
                    274,
                    227,
                    183,
                    155,
                    138,
                    117,
                    91,
                    92,
                    72,
                    91,
                    87,
                    81,
                    97,
                    95,
                    109,
                    116,
                    106,
                    136,
                    124,
                    120,
                    113,
                    133,
                    145,
                    119,
                    92,
                    93,
                    79,
                    80,
                    70,
                    71,
                    59,
                    46,
                    54,
                    48,
                    40,
                    43,
                    52,
                    51,
                    53,
                    62,
                    67,
                    83,
                    80,
                    91,
                    76,
                    87,
                    82
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var ctx3 = document.getElementById('chart_submit_distribution');
    var chartSubmitDistribution = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: [
                '1+',
                '2+',
                '3+',
                '4+',
                '5+',
                '6+',
                '7+',
                '8+',
                '9+',
                '10+',
                '11+',
                '12+',
                '13+',
                '14+',
                '15+',
                '16+',
                '17+',
                '18+',
                '19+',
                '20+',
                '21+',
                '22+'
            ],
            datasets: [{
                label: 'Number of teams who attempted to submit an answer to N or more tasks',
                data: [
                    621,
                    442,
                    313,
                    246,
                    196,
                    153,
                    124,
                    95,
                    77,
                    58,
                    49,
                    43,
                    37,
                    29,
                    26,
                    20,
                    15,
                    9,
                    6,
                    3,
                    2,
                    1
                ],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return `Number of teams who attempted to submit an answer to ${tooltipItem.index + 1} or more tasks : ${tooltipItem.yLabel}`;
                    }
                }
            }
        }
    });

    var ctx4 = document.getElementById('chart_hit_distribution');
    var chartSubmitDistribution = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: [
                '1+',
                '2+',
                '3+',
                '4+',
                '5+',
                '6+',
                '7+',
                '8+',
                '9+',
                '10+',
                '11+',
                '12+',
                '13+',
                '14+',
                '15+',
                '16+',
                '17+',
                '18+',
                '19+',
                '20+',
                '21+'
            ],
            datasets: [{
                label: 'Number of teams who solved N or more tasks',
                data: [
                    504,
                    353,
                    249,
                    181,
                    139,
                    109,
                    81,
                    59,
                    44,
                    36,
                    31,
                    29,
                    24,
                    18,
                    15,
                    11,
                    9,
                    6,
                    2,
                    2,
                    1
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return `Number of teams who solved ${tooltipItem.index + 1} or more tasks : ${tooltipItem.yLabel}`;
                    }
                }
            }
        }
    });

    var ctx5 = document.getElementById('chart_review_distribution');
    var chartSubmitDistribution = new Chart(ctx5, {
        type: 'bar',
        data: {
            labels: [
                '1+',
                '2+',
                '3+',
                '4+',
                '5+',
                '6+',
                '7+',
                '8+',
                '9+',
                '10+',
                '11+',
                '12+',
                '13+'
            ],
            datasets: [{
                label: 'Number of teams who reviewed N or more tasks',
                data: [
                    322,
                    185,
                    106,
                    58,
                    39,
                    23,
                    16,
                    10,
                    8,
                    5,
                    3,
                    3,
                    2
                ],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return `Number of teams who reviewed ${tooltipItem.index + 1} or more tasks : ${tooltipItem.yLabel}`;
                    }
                }
            }
        }
    });

    var ctx6 = document.getElementById('chart_countries');
    var chartSubmitDistribution = new Chart(ctx6, {
        type: 'pie',
        data: {
            labels: [
                'Russia',
                'India',
                'United States',
                'China',
                'Republic of Korea',
                'Japan',
                'Germany',
                'France',
                'Vietnam',
                'International',
                'Indonesia',
                'Italy',
                'Tunisia',
                'Taiwan',
                'Iran',
                'Other',
            ],
            datasets: [{
                label: 'Number of teams by country',
                data: [
                    170,
                    149,
                    113,
                    80,
                    60,
                    53,
                    40,
                    38,
                    36,
                    31,
                    24,
                    23,
                    18,
                    18,
                    17,
                    380
                ],
                backgroundColor: [
                    '#e6194b',
                    '#3cb44b',
                    '#ffe119',
                    '#0082c8',
                    '#f58231',
                    '#911eb4',
                    '#46f0f0',
                    '#f032e6',
                    '#d2f53c',
                    '#fabebe',
                    '#008080',
                    '#e6beff',
                    '#aa6e28',
                    '#fffac8',
                    '#800000',
                    '#808080'
                ]
            }]
        }
    });
}

if (document.readyState !== 'loading') {
    onDOMReady()
} else {
    document.addEventListener('DOMContentLoaded', onDOMReady)
}
