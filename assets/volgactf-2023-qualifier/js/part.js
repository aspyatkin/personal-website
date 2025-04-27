function onDOMReady () {
    var ctx1 = document.getElementById('chart_signup');
    var chartSignup = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: [
                'Apr 14',
                'Apr 15',
                'Apr 16',
                'Apr 17',
                'Apr 18',
                'Apr 19',
                'Apr 20',
                'Apr 21',
                'Apr 22',
                'Apr 23',
                'Apr 24',
                'Apr 25',
                'Apr 26',
                'Apr 27',
                'Apr 28',
                'Apr 29',
                'Apr 30',
                'May 1',
                'May 2',
                'May 3',
                'May 4',
                'May 5',
                'May 6',
                'May 7',
                'May 8',
                'May 9',
                'May 10',
                'May 11',
                'May 12',
                'May 13',
                'May 14',
            ],
            datasets: [{
                label: 'Number of teams signed up',
                data: [
                    0,
                    0,
                    0,
                    4,
                    10,
                    5,
                    4,
                    6,
                    4,
                    1,
                    3,
                    5,
                    2,
                    5,
                    7,
                    3,
                    2,
                    2,
                    3,
                    2,
                    5,
                    3,
                    8,
                    6,
                    12,
                    15,
                    24,
                    21,
                    41,
                    103,
                    40,
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
                '5/13 15:00-15:59 UTC',
                '5/13 16:00-16:59 UTC',
                '5/13 17:00-17:59 UTC',
                '5/13 18:00-18:59 UTC',
                '5/13 19:00-19:59 UTC',
                '5/13 20:00-20:59 UTC',
                '5/13 21:00-21:59 UTC',
                '5/13 22:00-22:59 UTC',
                '5/13 23:00-23:59 UTC',
                '5/14 00:00-00:59 UTC',
                '5/14 01:00-01:59 UTC',
                '5/14 02:00-02:59 UTC',
                '5/14 03:00-03:59 UTC',
                '5/14 04:00-04:59 UTC',
                '5/14 05:00-05:59 UTC',
                '5/14 06:00-06:59 UTC',
                '5/14 07:00-07:59 UTC',
                '5/14 08:00-08:59 UTC',
                '5/14 09:00-09:59 UTC',
                '5/14 10:00-10:59 UTC',
                '5/14 11:00-11:59 UTC',
                '5/14 12:00-12:59 UTC',
                '5/14 13:00-13:59 UTC',
                '5/14 14:00-14:59 UTC',
            ],
            datasets: [{
                label: 'Number of teams signed in',
                data: [
                    139,
                    88,
                    68,
                    64,
                    51,
                    38,
                    40,
                    27,
                    19,
                    25,
                    25,
                    19,
                    24,
                    36,
                    35,
                    52,
                    51,
                    54,
                    39,
                    57,
                    44,
                    52,
                    42,
                    42,
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
            ],
            datasets: [{
                label: 'Number of teams who attempted to submit an answer to N or more tasks',
                data: [
                    181,
                    136,
                    102,
                    82,
                    53,
                    42,
                    36,
                    27,
                    19,
                    12,
                    5,
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
            ],
            datasets: [{
                label: 'Number of teams who solved N or more tasks',
                data: [
                    140,
                    94,
                    67,
                    51,
                    39,
                    31,
                    26,
                    18,
                    13,
                    8,
                    2,
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
                    88,
                    55,
                    30,
                    19,
                    11,
                    6,
                    3,
                    2,
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
                'International',
                'Vietnam',
                'Japan',
                'United States',
                'Republic of Korea',
                'China',
                'Mongolia',                
                'France',
                'Bangladesh',
                'Iran',
                'Indonesia',
                'Tanzania',
                'Hong Kong',
                'Other',
            ],
            datasets: [{
                label: 'Number of teams by country',
                data: [
                    151,
                    21,
                    18,
                    15,
                    14,
                    12,
                    9,
                    9,
                    8,
                    6,
                    6,
                    5,
                    5,
                    4,
                    4,
                    59,
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
