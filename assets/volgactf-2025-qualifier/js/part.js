function onDOMReady () {
    var ctx1 = document.getElementById('chart_signup');
    var chartSignup = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: [
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
                'Mar 30'
            ],
            datasets: [{
                label: 'Number of teams signed up',
                data: [
                    16,
                    9,
                    18,
                    19,
                    1,
                    4,
                    3,
                    3,
                    1,
                    0,
                    2,
                    3,
                    4,
                    4,
                    5,
                    10,
                    10,
                    5,
                    11,
                    6,
                    6,
                    18,
                    21,
                    27,
                    16,
                    56,
                    85,
                    17
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
                '3/29 12:00-12:59 UTC',
                '3/29 13:00-13:59 UTC',
                '3/29 14:00-14:59 UTC',
                '3/29 15:00-15:59 UTC',
                '3/29 16:00-16:59 UTC',
                '3/29 17:00-17:59 UTC',
                '3/29 18:00-18:59 UTC',
                '3/29 19:00-19:59 UTC',
                '3/29 20:00-20:59 UTC',
                '3/29 21:00-21:59 UTC',
                '3/29 22:00-22:59 UTC',
                '3/29 23:00-23:59 UTC',
                '3/30 00:00-00:59 UTC',
                '3/30 01:00-01:59 UTC',
                '3/30 02:00-02:59 UTC',
                '3/30 03:00-03:59 UTC',
                '3/30 04:00-04:59 UTC',
                '3/30 05:00-05:59 UTC',
                '3/30 06:00-06:59 UTC',
                '3/30 07:00-07:59 UTC',
                '3/30 08:00-08:59 UTC',
                '3/30 09:00-09:59 UTC',
                '3/30 10:00-10:59 UTC',
                '3/30 11:00-11:59 UTC'
            ],
            datasets: [{
                label: 'Number of teams signed in',
                data: [
                    167,
                    109,
                    83,
                    72,
                    67,
                    59,
                    47,
                    36,
                    38,
                    33,
                    15,
                    15,
                    10,
                    13,
                    12,
                    22,
                    31,
                    27,
                    39,
                    61,
                    55,
                    48,
                    55,
                    39
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
            ],
            datasets: [{
                label: 'Number of teams who attempted to submit an answer to N or more tasks',
                data: [
                    177,
                    123,
                    83,
                    63,
                    48,
                    36,
                    28,
                    19,
                    11,
                    9,
                    7,
                    6,
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
                '12+',
                '13+',
                '14+',
            ],
            datasets: [{
                label: 'Number of teams who solved N or more tasks',
                data: [
                    125,
                    78,
                    52,
                    35,
                    24,
                    20,
                    14,
                    12,
                    9,
                    6,
                    5,
                    5,
                    4,
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
            ],
            datasets: [{
                label: 'Number of teams who reviewed N or more tasks',
                data: [
                    66,
                    32,
                    14,
                    5,
                    4,
                    3,
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
                'Vietnam',
                'Mongolia',
                'India',
                'China',
                'International',
                'Belarus',
                'France',
                'Republic of Korea',
                'Pakistan',
                'Kyrgyzstan',
                'Kazakhstan',
                'Japan',
                'Antarctica',
                'United States',
                'United Kingdom',
                'Netherlands',
                'Hong Kong',
                'Other',
            ],
            datasets: [{
                label: 'Number of teams by country',
                data: [
                    274,
                    15,
                    12,
                    7,
                    7,
                    7,
                    5,
                    4,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    2,
                    2,
                    2,
                    2,
                    23,
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
                    "#808000",
                    "#ffd8b1",
                    "#000075"
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
