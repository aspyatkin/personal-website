function onDOMReady () {
    var ctx1 = document.getElementById('chart_signup');
    var chartSignup = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: [
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
                'Mar 31'
            ],
            datasets: [{
                label: 'Number of teams signed up',
                data: [
                    27,
                    6,
                    7,
                    11,
                    14,
                    9,
                    8,
                    4,
                    5,
                    2,
                    5,
                    6,
                    7,
                    3,
                    6,
                    3,
                    7,
                    6,
                    10,
                    8,
                    12,
                    13,
                    16,
                    17,
                    64,
                    78,
                    72,
                    128,
                    365,
                    148,
                    30
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
                '3/30 11:00-11:59 UTC',
                '3/30 12:00-12:59 UTC',
                '3/30 13:00-13:59 UTC',
                '3/30 14:00-14:59 UTC',
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
                '3/31 14:00-14:59 UTC'
            ],
            datasets: [{
                label: 'Number of teams signed in',
                data: [
                    332,
                    230,
                    197,
                    173,
                    147,
                    134,
                    112,
                    69,
                    78,
                    79,
                    90,
                    76,
                    76,
                    79,
                    92,
                    90,
                    119,
                    125,
                    129,
                    122,
                    95,
                    104,
                    115,
                    110,
                    113,
                    110,
                    96,
                    80,
                    59,
                    69,
                    39,
                    37,
                    32,
                    47,
                    35,
                    46,
                    35,
                    43,
                    45,
                    60,
                    67,
                    57,
                    72,
                    61,
                    71,
                    63,
                    76,
                    84
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
                18,
                19,
                20
            ],
            datasets: [{
                label: 'Number of teams who attempted to submit an answer to a certain number of tasks',
                data: [
                    210,
                    107,
                    58,
                    52,
                    42,
                    27,
                    30,
                    22,
                    15,
                    14,
                    12,
                    11,
                    5,
                    4,
                    3,
                    4,
                    2,
                    5,
                    2
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
                17,
                18,
                19,
                20
            ],
            datasets: [{
                label: 'Number of teams who solved a certain number of tasks',
                data: [
                    142,
                    59,
                    42,
                    36,
                    33,
                    20,
                    18,
                    15,
                    10,
                    10,
                    5,
                    4,
                    3,
                    3,
                    4,
                    3,
                    1,
                    4,
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
                10,
                11
            ],
            datasets: [{
                label: 'Number of teams who reviewed a certain number of tasks',
                data: [
                    115,
                    53,
                    34,
                    17,
                    13,
                    12,
                    6,
                    0,
                    2,
                    2,
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
                'China',
                'Republic of Korea',
                'Japan',
                'Vietnam',
                'France',
                'Indonesia',
                'Germany',
                'Italy',
                'Taiwan',
                'Singapore',
                'Israel',
                'International',
                'Other',
            ],
            datasets: [{
                label: 'Number of teams who reviewed a certain number of tasks',
                data: [
                    272,
                    102,
                    83,
                    77,
                    72,
                    41,
                    33,
                    32,
                    28,
                    24,
                    16,
                    15,
                    14,
                    14,
                    21,
                    253
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
