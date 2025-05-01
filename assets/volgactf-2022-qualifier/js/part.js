function onDOMReady () {
    var ctx1 = document.getElementById('chart_signup');
    var chartSignup = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: [
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
                'Apr 1',
                'Apr 2',
                'Apr 3',
                'Apr 4',
                'Apr 5',
                'Apr 6',
                'Apr 7',
                'Apr 8',
                'Apr 9',
                'Apr 10',
                'Apr 11',
                'Apr 12',
                'Apr 13',
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
                'May 15',
            ],
            datasets: [{
                label: 'Number of teams signed up',
                data: [
                    8,
                    1,
                    4,
                    2,
                    2,
                    8,
                    1,
                    9,
                    3,
                    11,
                    6,
                    16,
                    13,
                    8,
                    3,
                    5,
                    3,
                    5,
                    3,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    3,
                    0,
                    1,
                    0,
                    2,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    2,
                    1,
                    1,
                    0,
                    0,
                    1,
                    2,
                    5,
                    0,
                    1,
                    2,
                    0,
                    3,
                    5,
                    1,
                    4,
                    1,
                    7,
                    7,
                    7,
                    3,
                    4,
                    6,
                    6,
                    4,
                    2,
                    10,
                    7,
                    17,
                    17,
                    30,
                    85,
                    41,
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
                '5/14 15:00-15:59 UTC',
                '5/14 16:00-16:59 UTC',
                '5/14 17:00-17:59 UTC',
                '5/14 18:00-18:59 UTC',
                '5/14 19:00-19:59 UTC',
                '5/14 20:00-20:59 UTC',
                '5/14 21:00-21:59 UTC',
                '5/14 22:00-22:59 UTC',
                '5/14 23:00-23:59 UTC',
                '5/15 00:00-00:59 UTC',
                '5/15 01:00-01:59 UTC',
                '5/15 02:00-02:59 UTC',
                '5/15 03:00-03:59 UTC',
                '5/15 04:00-04:59 UTC',
                '5/15 05:00-05:59 UTC',
                '5/15 06:00-06:59 UTC',
                '5/15 07:00-07:59 UTC',
                '5/15 08:00-08:59 UTC',
                '5/15 09:00-09:59 UTC',
                '5/15 10:00-10:59 UTC',
                '5/15 11:00-11:59 UTC',
                '5/15 12:00-12:59 UTC',
                '5/15 13:00-13:59 UTC',
                '5/15 14:00-14:59 UTC',
            ],
            datasets: [{
                label: 'Number of teams signed in',
                data: [
                    129,
                    68,
                    66,
                    56,
                    37,
                    32,
                    29,
                    25,
                    17,
                    18,
                    27,
                    24,
                    25,
                    35,
                    33,
                    34,
                    41,
                    38,
                    43,
                    42,
                    31,
                    28,
                    39,
                    25,
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
                    195,
                    140,
                    97,
                    76,
                    58,
                    46,
                    33,
                    26,
                    22,
                    19,
                    17,
                    10,
                    6,
                    4,
                    3,
                    2,
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
                '15+',
                '16+'
            ],
            datasets: [{
                label: 'Number of teams who solved N or more tasks',
                data: [
                    176,
                    117,
                    73,
                    56,
                    42,
                    26,
                    21,
                    19,
                    16,
                    14,
                    13,
                    7,
                    3,
                    2,
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
            ],
            datasets: [{
                label: 'Number of teams who reviewed N or more tasks',
                data: [
                    85,
                    43,
                    19,
                    16,
                    8,
                    7,
                    5,
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
                'China',
                'India',
                'United States',
                'International',
                'Vietnam',
                'Japan',
                'Bangladesh',
                'Republic of Korea',
                'Singapore',
                'Turkey',
                'Thailand',
                'Taiwan',
                'Morocco',
                'Kazakhstan',
                'Other',
            ],
            datasets: [{
                label: 'Number of teams by country',
                data: [
                    178,
                    31,
                    25,
                    17,
                    16,
                    14,
                    12,
                    9,
                    7,
                    6,
                    5,
                    4,
                    4,
                    4,
                    4,
                    68,
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
