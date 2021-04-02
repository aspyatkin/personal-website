function onDOMReady () {
    var ctx1 = document.getElementById('chart_signup');
    var chartSignup = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: [
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
                'Mar 28'
            ],
            datasets: [{
                label: 'Number of teams signed up',
                data: [
                    17,
                    7,
                    11,
                    4,
                    10,
                    16,
                    28,
                    37,
                    56,
                    39,
                    55,
                    113,
                    194,
                    44,
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
                '3/27 14:00-14:59 UTC',
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
                '3/28 13:00-13:59 UTC'
            ],
            datasets: [{
                label: 'Number of teams signed in',
                data: [
                    267,
                    153,
                    115,
                    106,
                    98,
                    77,
                    65,
                    58,
                    43,
                    38,
                    34,
                    40,
                    49,
                    51,
                    43,
                    56,
                    75,
                    65,
                    82,
                    76,
                    67,
                    65,
                    48,
                    48,
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
            ],
            datasets: [{
                label: 'Number of teams who attempted to submit an answer to N or more tasks',
                data: [
                    285,
                    196,
                    144,
                    108,
                    89,
                    73,
                    56,
                    47,
                    38,
                    35,
                    26,
                    19,
                    14,
                    10,
                    6,
                    3
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
                '16+'
            ],
            datasets: [{
                label: 'Number of teams who solved N or more tasks',
                data: [
                    231,
                    156,
                    110,
                    88,
                    69,
                    58,
                    44,
                    37,
                    32,
                    27,
                    19,
                    15,
                    10,
                    10,
                    5,
                    2
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
                '8+'
            ],
            datasets: [{
                label: 'Number of teams who reviewed N or more tasks',
                data: [
                    130,
                    64,
                    31,
                    18,
                    10,
                    8,
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
                'China',
                'International',
                'Republic of Korea',
                'Vietnam',
                'Japan',
                'United States',
                'France',
                'Italy',
                'United Kingdom',
                'Ukraine',
                'Taiwan',
                'Germany',
                'Poland',
                'Other',
            ],
            datasets: [{
                label: 'Number of teams by country',
                data: [
                    162,
                    51,
                    39,
                    36,
                    32,
                    26,
                    23,
                    22,
                    20,
                    16,
                    11,
                    11,
                    11,
                    10,
                    9,
                    152
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
