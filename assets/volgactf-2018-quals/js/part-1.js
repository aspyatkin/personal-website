function onDOMReady () {
    var ctx1 = document.getElementById('chart_signup');
    var chartSignup = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: [
                'Feb 26',
                'Feb 27',
                'Feb 28',
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
                'Mar 25'
            ],
            datasets: [{
                label: 'Number of teams signed up',
                data: [
                    27,
                    11,
                    7,
                    9,
                    7,
                    8,
                    6,
                    9,
                    7,
                    5,
                    9,
                    4,
                    2,
                    5,
                    8,
                    8,
                    6,
                    3,
                    8,
                    11,
                    26,
                    65,
                    69,
                    79,
                    131,
                    368,
                    165,
                    34
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
                '3/23 15:00-15:59 UTC',
                '3/23 16:00-16:59 UTC',
                '3/23 17:00-17:59 UTC',
                '3/23 18:00-18:59 UTC',
                '3/23 19:00-19:59 UTC',
                '3/23 20:00-20:59 UTC',
                '3/23 21:00-21:59 UTC',
                '3/23 22:00-22:59 UTC',
                '3/23 23:00-23:59 UTC',
                '3/24 00:00-00:59 UTC',
                '3/24 01:00-01:59 UTC',
                '3/24 02:00-02:59 UTC',
                '3/24 03:00-03:59 UTC',
                '3/24 04:00-04:59 UTC',
                '3/24 05:00-05:59 UTC',
                '3/24 06:00-06:59 UTC',
                '3/24 07:00-07:59 UTC',
                '3/24 08:00-08:59 UTC',
                '3/24 09:00-09:59 UTC',
                '3/24 10:00-10:59 UTC',
                '3/24 11:00-11:59 UTC',
                '3/24 12:00-12:59 UTC',
                '3/24 13:00-13:59 UTC',
                '3/24 14:00-14:59 UTC',
                '3/24 15:00-15:59 UTC',
                '3/24 16:00-16:59 UTC',
                '3/24 17:00-17:59 UTC',
                '3/24 18:00-18:59 UTC',
                '3/24 19:00-19:59 UTC',
                '3/24 20:00-20:59 UTC',
                '3/24 21:00-21:59 UTC',
                '3/24 22:00-22:59 UTC',
                '3/24 23:00-23:59 UTC',
                '3/25 00:00-00:59 UTC',
                '3/25 01:00-01:59 UTC',
                '3/25 02:00-02:59 UTC',
                '3/25 03:00-03:59 UTC',
                '3/25 04:00-04:59 UTC',
                '3/25 05:00-05:59 UTC',
                '3/25 06:00-06:59 UTC',
                '3/25 07:00-07:59 UTC',
                '3/25 08:00-08:59 UTC',
                '3/25 09:00-09:59 UTC',
                '3/25 10:00-10:59 UTC',
                '3/25 11:00-11:59 UTC',
                '3/25 12:00-12:59 UTC',
                '3/25 13:00-13:59 UTC',
                '3/25 14:00-14:59 UTC'
            ],
            datasets: [{
                label: 'Number of teams signed in',
                data: [
                    317,
                    206,
                    171,
                    144,
                    148,
                    124,
                    120,
                    80,
                    89,
                    72,
                    78,
                    75,
                    62,
                    74,
                    91,
                    99,
                    114,
                    118,
                    120,
                    126,
                    122,
                    119,
                    109,
                    101,
                    100,
                    91,
                    90,
                    83,
                    94,
                    68,
                    54,
                    43,
                    41,
                    40,
                    28,
                    37,
                    46,
                    41,
                    47,
                    51,
                    58,
                    90,
                    67,
                    73,
                    85,
                    76,
                    73,
                    81
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
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18
            ],
            datasets: [{
                label: 'Number of teams who attempted to submit an answer to an exact number of tasks',
                data: [
                    203,
                    117,
                    59,
                    48,
                    32,
                    25,
                    21,
                    19,
                    16,
                    16,
                    11,
                    6,
                    5,
                    5,
                    8,
                    5,
                    3,
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
            }
        }
    });

    var ctx4 = document.getElementById('chart_hit_distribution');
    var chartSubmitDistribution = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17
            ],
            datasets: [{
                label: 'Number of teams who solved an exact number of tasks',
                data: [
                    171,
                    84,
                    52,
                    19,
                    17,
                    13,
                    12,
                    13,
                    9,
                    5,
                    2,
                    4,
                    3,
                    3,
                    2,
                    1,
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
            }
        }
    });

    var ctx5 = document.getElementById('chart_review_distribution');
    var chartSubmitDistribution = new Chart(ctx5, {
        type: 'bar',
        data: {
            labels: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                13
            ],
            datasets: [{
                label: 'Number of teams who reviewed an exact number of tasks',
                data: [
                    121,
                    34,
                    22,
                    7,
                    10,
                    5,
                    4,
                    1,
                    2,
                    1
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
            }
        }
    });

    var ctx6 = document.getElementById('chart_countries');
    var chartSubmitDistribution = new Chart(ctx6, {
        type: 'pie',
        data: {
            labels: [
                'Russia',
                'United States',
                'India',
                'Republic of Korea',
                'France',
                'Japan',
                'Vietnam',
                'Indonesia',
                'China',
                'Germany',
                'Australia',
                'Taiwan',
                'Canada',
                'United Kingdom',
                'Poland',
                'Other countries'
            ],
            datasets: [{
                label: 'Number of teams who reviewed an exact number of tasks',
                data: [
                    197,
                    121,
                    88,
                    68,
                    44,
                    39,
                    36,
                    36,
                    32,
                    29,
                    25,
                    22,
                    22,
                    21,
                    18,
                    299
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
