function onDOMReady () {
    var ctx1 = document.getElementById('chart_signup');
    var chartSignup = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: [
                'Feb 14',
                'Feb 15',
                'Feb 16',
                'Feb 17',
                'Feb 18',
                'Feb 19',
                'Feb 20',
                'Feb 21',
                'Feb 22',
                'Feb 23',
                'Feb 24',
                'Feb 25',
                'Feb 26',
                'Feb 27',
                'Feb 28',
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
                'Mar 29',
                'Mar 30',
                'Mar 31',
            ],
            datasets: [{
                label: 'Number of teams signed up',
                data: [
                    3,
                    1,
                    0,
                    0,
                    1,
                    0,
                    1,
                    1,
                    0,
                    2,
                    0,
                    0,
                    1,
                    0,
                    1,
                    3,
                    8,
                    18,
                    12,
                    12,
                    7,
                    6,
                    3,
                    3,
                    6,
                    2,
                    3,
                    6,
                    6,
                    6,
                    4,
                    3,
                    1,
                    4,
                    6,
                    9,
                    8,
                    10,
                    7,
                    14,
                    37,
                    41,
                    56,
                    34,
                    98,
                    181,
                    53,
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
                '3/30 15:00-15:59 UTC',
                '3/30 16:00-16:59 UTC',
                '3/30 17:00-17:59 UTC',
                '3/30 18:00-18:59 UTC',
                '3/30 19:00-19:59 UTC',
                '3/30 20:00-20:59 UTC',
                '3/30 21:00-21:59 UTC',
                '3/30 22:00-22:59 UTC',
                '3/30 23:00-23:59 UTC',
                '3/31 00:00-00:59 UTC',
                '3/31 01:00-01:59 UTC',
                '3/31 02:00-02:59 UTC',
                '3/31 03:00-03:59 UTC',
                '3/31 04:00-04:59 UTC',
                '3/31 05:00-05:59 UTC',
                '3/31 06:00-06:59 UTC',
                '3/31 07:00-07:59 UTC',
                '3/31 08:00-08:59 UTC',
                '3/31 09:00-09:59 UTC',
                '3/31 10:00-10:59 UTC',
                '3/31 11:00-11:59 UTC',
                '3/31 12:00-12:59 UTC',
                '3/31 13:00-13:59 UTC',
                '3/31 14:00-14:59 UTC',
            ],
            datasets: [{
                label: 'Number of teams signed in',
                data: [
                    246,
                    130,
                    119,
                    99,
                    81,
                    67,
                    58,
                    42,
                    32,
                    37,
                    31,
                    41,
                    46,
                    37,
                    73,
                    84,
                    90,
                    83,
                    79,
                    87,
                    79,
                    68,
                    76,
                    59,
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
            ],
            datasets: [{
                label: 'Number of teams who attempted to submit an answer to N or more tasks',
                data: [
                    302,
                    199,
                    144,
                    100,
                    75,
                    57,
                    46,
                    40,
                    32,
                    18,
                    10,
                    5,
                    2,
                    1,
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
    var chartHitDistribution = new Chart(ctx4, {
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
            ],
            datasets: [{
                label: 'Number of teams who solved N or more tasks',
                data: [
                    257,
                    155,
                    108,
                    72,
                    54,
                    42,
                    31,
                    20,
                    14,
                    8,
                    1,
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
    var chartReviewDistribution = new Chart(ctx5, {
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
            ],
            datasets: [{
                label: 'Number of teams who reviewed N or more tasks',
                data: [
                    144,
                    63,
                    34,
                    19,
                    12,
                    6,
                    4,
                    3,
                    1,
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
    var chartCountryDistribution = new Chart(ctx6, {
        type: 'pie',
        data: {
            labels: [
                'Russia',
                'India',
                'China',
                'International',
                'Vietnam',
                'Republic of Korea',
                'Mongolia',                
                'United States',
                'Kazakhstan',
                'Japan',
                'Morocco',
                'Algeria',
                'Bangladesh',
                'Indonesia',
                'France',
                'Other',
            ],
            datasets: [{
                label: 'Number of teams by country',
                data: [
                    281,
                    60,
                    25,
                    24,
                    22,
                    18,
                    18,
                    16,
                    16,
                    11,
                    10,
                    10,
                    9,
                    8,
                    8,
                    142,
                ],
                backgroundColor: [
                    "#e6194b",
                    "#3cb44b",
                    "#ffe119",
                    "#4363d8",
                    "#f58231",
                    "#911eb4",
                    "#46f0f0",
                    "#f032e6",
                    "#bcf60c",
                    "#fabebe",
                    "#008080",
                    "#e6beff",
                    "#9a6324",
                    "#fffac8",
                    "#800000",
                    "#aaffc3",
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
