---
layout: post
title: 'VolgaCTF 2018 Quals: key metrics, part 2'
permalink: /volgactf-2018-quals-key-metrics-part-2/
date: 2018-04-08 20:00:00 +0400
author: aspyatkin
meta: CTF, VolgaCTF, Quals
comments: true
read_time: true
image: /assets/volgactf-2018-quals/img/cover2.jpg
---

In this post we would like to share some task statistics collected during the [event](https://ctftime.org/event/539).

<script src="/assets/volgactf-2018-quals/js/Chart.bundle.min.js"></script>

## Contents

- [CrackMe](#crackme)
- [Master](#master)
- [Old Government Site](#old-government-site)
- [Nonsense](#nonsense)
- [The Colors - Listen!](#the-colors---listen)
- [You Shall Not Pass](#you-shall-not-pass)
- [Guestbook](#guestbook)
- [Ping2](#ping2)
- [Ping](#ping)
- [Lights](#lights)
- [SEOkings](#seokings)
- [Black&White](#blackwhite)
- [Forbidden](#forbidden)
- [Forgotten Task](#forgotten-task)
- [Golden Antelope](#golden-antelope)
- [Corp monitoring](#corp-monitoring)
- [Lazy Admin](#lazy-admin)
- [Button Spy](#button-spy)
- [XOR Trick](#xor-trick)
- [Shop quest](#shop-quest)

### CrackMe

| Metric | Value |
| ------ | ----- |
| Value | 100 |
| Categories | reverse |
| Opened | Mar 23 at 15:00 UTC |
| Flags submitted for this task | 308 |
| First flag submitted | Mar 23 at 15:00 UTC |
| Last flag submitted | Mar 25 at 14:08 UTC |
| Teams solved this task | 83 |
| First solved | [SiBears](https://ctftime.org/team/557){:target="_blank"}<br>Mar 23 at 16:46 UTC |
| Last solved | Mar 25 at 14:08 UTC |
| Reviews | 24 |
| Average rating | 3.96 |
{:.mbtablestyle}

<canvas id="chart1" width="400" height="300"></canvas>

<script>
var ctx1 = document.getElementById('chart1');
var chart1 = new Chart(ctx1, {
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [38,33,12,6,19,14,6,10,4,5,10,1,9,1,6,17,2,5,11,4,3,4,8,3,6,3,2,5,2,2,14,3,1,1,2,1,1,1,0,2,1,0,1,4,5,8,6,6],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [0,1,2,1,4,7,2,1,1,2,2,1,5,0,3,4,0,1,3,3,3,0,5,3,3,0,2,0,2,0,2,2,1,1,1,0,1,1,0,1,1,0,0,1,2,3,4,1],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### Master

| Metric | Value |
| ------ | ----- |
| Value | 100 |
| Categories | forensics |
| Opened | Mar 23 at 15:01 UTC |
| Flags submitted for this task | 485 |
| First flag submitted | Mar 23 at 15:02 UTC |
| Last flag submitted | Mar 25 at 14:43 UTC |
| Teams solved this task | 271 |
| First solved | [VoidHack](https://ctftime.org/team/21137){:target="_blank"}<br>Mar 23 at 15:08 UTC |
| Last solved | Mar 25 at 14:43 UTC |
| Reviews | 99 |
| Average rating | 3.94 |
{:.mbtablestyle}

<canvas id="chart2" width="400" height="300"></canvas>

<script>
var ctx2 = document.getElementById('chart2');
var chart2 = new Chart(ctx2, {
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [46,60,63,34,26,15,17,17,6,1,2,12,7,5,7,12,9,13,4,9,9,6,5,6,8,14,7,5,9,7,9,4,3,0,1,2,2,1,1,1,2,1,4,3,2,1,5,2],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [21,36,26,18,12,10,15,12,5,1,0,3,5,3,3,7,6,6,2,5,4,2,5,4,8,1,7,4,2,5,4,3,3,0,1,2,2,1,1,1,2,1,1,3,2,1,3,2],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### Old Government Site

| Metric | Value |
| ------ | ----- |
| Value | 150 |
| Categories | web |
| Opened | Mar 23 at 15:20 UTC |
| Flags submitted for this task | 280 |
| First flag submitted | Mar 23 at 15:32 UTC |
| Last flag submitted | Mar 25 at 14:58 UTC |
| Teams solved this task | 116 |
| First solved | [Bushwhackers](https://ctftime.org/team/586){:target="_blank"}<br>Mar 23 at 15:46 UTC |
| Last solved | Mar 25 at 14:58 UTC |
| Reviews | 39 |
| Average rating | 4.33 |
{:.mbtablestyle}

<canvas id="chart3" width="400" height="300"></canvas>

<script>
var ctx3 = document.getElementById('chart3');
var chart3 = new Chart(ctx3, {
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [9,34,15,14,18,11,13,6,10,9,7,2,5,3,1,2,9,23,6,1,7,8,7,4,1,5,2,1,0,2,4,1,3,0,0,3,1,1,0,2,2,1,1,7,2,4,7,6],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [1,5,7,3,9,3,7,3,4,3,1,1,1,2,1,0,4,2,3,0,5,2,4,3,1,3,2,1,0,2,2,1,1,0,0,1,1,1,0,2,1,1,1,6,2,4,4,5],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### Nonsense

| Metric | Value |
| ------ | ----- |
| Value | 200 |
| Categories | crypto |
| Opened | Mar 23 at 16:15 UTC |
| Flags submitted for this task | 516 |
| First flag submitted | Mar 23 at 16:24 UTC |
| Last flag submitted | Mar 25 at 14:56 UTC |
| Teams solved this task | 91 |
| First solved | [InfoSecIITR](https://ctftime.org/team/16691){:target="_blank"}<br>Mar 23 at 17:03 UTC |
| Last solved | Mar 25 at 13:14 UTC |
| Reviews | 41 |
| Average rating | 4.59 |
{:.mbtablestyle}

<canvas id="chart4" width="400" height="300"></canvas>

<script>
var ctx4 = document.getElementById('chart4');
var chart4 = new Chart(ctx4, {
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [0,42,13,22,24,17,28,21,13,2,8,16,0,4,7,4,1,16,28,13,34,18,40,22,15,7,3,3,4,9,9,1,1,5,16,5,0,1,1,0,6,0,7,10,7,0,7,6],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [0,0,9,3,7,4,5,4,1,2,2,3,0,2,2,0,0,0,4,5,2,1,2,1,5,3,2,2,3,1,2,0,1,0,1,1,0,1,1,0,1,0,2,2,2,0,2,0],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### The Colors - Listen!

| Metric | Value |
| ------ | ----- |
| Value | 200 |
| Categories | stego |
| Opened | Mar 23 at 17:03 UTC |
| Flags submitted for this task | 349 |
| First flag submitted | Mar 23 at 17:14 UTC |
| Last flag submitted | Mar 25 at 13:29 UTC |
| Teams solved this task | 68 |
| First solved | [Lights Out](https://ctftime.org/team/7931){:target="_blank"}<br>Mar 23 at 17:46 UTC |
| Last solved | Mar 25 at 13:29 UTC |
| Reviews | 23 |
| Average rating | 4.09 |
{:.mbtablestyle}

<canvas id="chart5" width="400" height="300"></canvas>

<script>
var ctx5 = document.getElementById('chart5');
var chart5 = new Chart(ctx5, {
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [0,0,6,25,12,11,19,9,7,4,3,0,7,1,4,17,4,14,21,6,44,6,33,18,3,3,1,20,5,15,5,0,2,1,0,2,0,1,1,0,0,0,7,5,2,3,2,0],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [0,0,1,5,4,2,2,3,3,3,1,0,2,1,0,1,0,1,1,0,4,0,4,2,2,1,1,2,3,2,3,0,1,1,0,1,0,0,0,0,0,0,4,2,0,3,2,0],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### You Shall Not Pass

| Metric | Value |
| ------ | ----- |
| Value | 200 |
| Categories | reverse |
| Opened | Mar 23 at 18:00 UTC |
| Flags submitted for this task | 164 |
| First flag submitted | Mar 23 at 18:02 UTC |
| Last flag submitted | Mar 25 at 14:59 UTC |
| Teams solved this task | 44 |
| First solved | [TokyoWesterns](https://ctftime.org/team/12599){:target="_blank"}<br>Mar 23 at 18:51 UTC |
| Last solved | Mar 25 at 14:41 UTC |
| Reviews | 11 |
| Average rating | 2.73 |
{:.mbtablestyle}

<canvas id="chart6" width="400" height="300"></canvas>

<script>
var ctx6 = document.getElementById('chart6');
var chart6 = new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: [
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [17,34,3,5,11,4,2,3,4,2,0,1,1,4,6,7,1,1,2,5,1,6,6,1,2,1,1,3,1,4,7,0,2,1,1,1,0,0,1,0,2,1,2,4,3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [1,2,2,1,2,0,1,0,2,0,0,1,0,1,1,1,0,1,1,5,1,0,2,1,1,1,0,1,1,0,2,0,1,1,0,1,0,0,0,0,1,1,2,4,1],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### Guestbook

| Metric | Value |
| ------ | ----- |
| Value | 200 |
| Categories | web |
| Opened | Mar 23 at 19:25 UTC |
| Flags submitted for this task | 1702 |
| First flag submitted | Mar 23 at 19:29 UTC |
| Last flag submitted | Mar 25 at 14:39 UTC |
| Teams solved this task | 21 |
| First solved | [Bushwhackers](https://ctftime.org/team/586){:target="_blank"}<br>Mar 23 at 20:21 UTC |
| Last solved | Mar 25 at 14:26 UTC |
| Reviews | 6 |
| Average rating | 4.67 |
{:.mbtablestyle}

<canvas id="chart7" width="400" height="300"></canvas>

<script>
var ctx7 = document.getElementById('chart7');
var chart7 = new Chart(ctx7, {
    type: 'bar',
    data: {
        labels: [
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [171,109,69,104,67,72,76,25,49,35,8,50,138,65,48,45,41,44,67,33,55,11,33,24,17,31,23,13,7,34,7,1,16,4,0,10,24,3,14,5,18,14,9,13],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [0,1,0,0,0,3,0,0,1,0,0,0,1,0,1,2,0,2,0,0,0,0,0,0,0,1,0,2,0,0,0,0,0,1,0,0,0,0,0,3,0,1,1,1],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### Ping2

| Metric | Value |
| ------ | ----- |
| Value | 10 |
| Categories | pwn |
| Opened | Mar 23 at 20:21 UTC |
| Flags submitted for this task | 551 |
| First flag submitted | Mar 23 at 20:24 UTC |
| Last flag submitted | Mar 25 at 14:37 UTC |
| Teams solved this task | 322 |
| First solved | [SUSlo.PAS](https://ctftime.org/team/6502){:target="_blank"}<br>Mar 23 at 20:24 UTC |
| Last solved | Mar 25 at 14:37 UTC |
| Reviews | 93 |
| Average rating | 3.87 |
{:.mbtablestyle}

<canvas id="chart8" width="400" height="300"></canvas>

<script>
var ctx8 = document.getElementById('chart8');
var chart8 = new Chart(ctx8, {
    type: 'bar',
    data: {
        labels: [
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [50,53,32,20,25,21,12,24,15,9,22,14,22,22,17,17,10,21,13,10,12,11,7,17,9,8,5,2,0,3,3,7,4,2,4,1,4,4,1,3,3,9,3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [44,37,21,11,12,14,12,14,6,4,12,9,11,5,9,15,3,11,5,8,8,6,3,4,3,5,1,0,0,1,1,3,1,1,3,1,1,2,1,3,3,6,2],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### Ping

| Metric | Value |
| ------ | ----- |
| Value | 10 |
| Categories | joy |
| Opened | Mar 23 at 21:55 UTC |
| Flags submitted for this task | 790 |
| First flag submitted | Mar 23 at 21:55 UTC |
| Last flag submitted | Mar 25 at 14:59 UTC |
| Teams solved this task | 10 |
| First solved | [ENUSEC](https://ctftime.org/team/32706){:target="_blank"}<br>Mar 23 at 22:14 UTC |
| Last solved | Mar 24 at 22:22 UTC |
| Reviews | 5 |
| Average rating | 4.00 |
{:.mbtablestyle}

<canvas id="chart9" width="400" height="300"></canvas>

<script>
var ctx9 = document.getElementById('chart9');
var chart9 = new Chart(ctx9, {
    type: 'bar',
    data: {
        labels: [
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [12,83,28,22,32,12,17,14,9,21,24,25,28,49,39,45,45,15,26,28,50,19,20,15,16,5,0,2,0,1,3,0,0,1,7,13,20,7,6,9,9,13],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,2,1,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### Lights

| Metric | Value |
| ------ | ----- |
| Value | 100 |
| Categories | reverse |
| Opened | Mar 23 at 22:45 UTC |
| Flags submitted for this task | 481 |
| First flag submitted | Mar 23 at 22:50 UTC |
| Last flag submitted | Mar 25 at 14:33 UTC |
| Teams solved this task | 74 |
| First solved | [5unKn0wn](https://ctftime.org/team/18649){:target="_blank"}<br>Mar 23 at 23:15 UTC |
| Last solved | Mar 25 at 14:33 UTC |
| Reviews | 29 |
| Average rating | 3.62 |
{:.mbtablestyle}

<canvas id="chart10" width="400" height="300"></canvas>

<script>
var ctx10 = document.getElementById('chart10');
var chart10 = new Chart(ctx10, {
    type: 'bar',
    data: {
        labels: [
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [2,34,37,19,28,5,7,3,7,4,8,24,4,23,10,6,26,30,38,4,14,10,7,1,8,1,9,2,1,6,5,8,17,10,16,5,17,3,7,13,2],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [0,6,6,4,2,1,3,1,2,0,3,4,0,2,2,2,5,4,2,0,3,2,1,0,1,1,1,1,0,0,0,2,1,0,1,0,1,1,1,6,2],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### SEOkings

| Metric | Value |
| ------ | ----- |
| Value | 300 |
| Categories | web |
| Opened | Mar 23 at 23:45 UTC |
| Flags submitted for this task | 69 |
| First flag submitted | Mar 23 at 23:53 UTC |
| Last flag submitted | Mar 25 at 14:57 UTC |
| Teams solved this task | 34 |
| First solved | [zippy](https://ctftime.org/team/35782){:target="_blank"}<br>Mar 24 at 01:08 UTC |
| Last solved | Mar 25 at 14:57 UTC |
| Reviews | 12 |
| Average rating | 4.33 |
{:.mbtablestyle}

<canvas id="chart11" width="400" height="300"></canvas>

<script>
var ctx11 = document.getElementById('chart11');
var chart11 = new Chart(ctx11, {
    type: 'bar',
    data: {
        labels: [
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [1,1,6,3,4,3,0,2,1,2,2,3,1,1,1,2,0,3,1,3,2,2,2,0,0,3,1,1,0,1,0,1,2,2,0,2,1,0,4,5],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [0,0,2,1,1,2,0,1,0,0,0,2,1,0,0,2,0,1,1,2,0,1,2,0,0,2,1,0,0,1,0,1,1,2,0,1,0,0,2,4],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### Black&White

| Metric | Value |
| ------ | ----- |
| Value | 250 |
| Categories | stego |
| Opened | Mar 24 at 03:46 UTC |
| Flags submitted for this task | 31 |
| First flag submitted | Mar 24 at 06:10 UTC |
| Last flag submitted | Mar 25 at 14:58 UTC |
| Teams solved this task | 8 |
| First solved | [SUSlo.PAS](https://ctftime.org/team/6502){:target="_blank"}<br>Mar 24 at 17:22 UTC |
| Last solved | Mar 25 at 14:46 UTC |
| Reviews | 3 |
| Average rating | 4.67 |
{:.mbtablestyle}

<canvas id="chart12" width="400" height="300"></canvas>

<script>
var ctx12 = document.getElementById('chart12');
var chart12 = new Chart(ctx12, {
    type: 'bar',
    data: {
        labels: [
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [0,0,0,2,1,3,3,1,1,1,0,0,0,3,2,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,7],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,6],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### Forbidden

| Metric | Value |
| ------ | ----- |
| Value | 300 |
| Categories | crypto |
| Opened | Mar 24 at 03:48 UTC |
| Flags submitted for this task | 381 |
| First flag submitted | Mar 24 at 04:09 UTC |
| Last flag submitted | Mar 25 at 14:58 UTC |
| Teams solved this task | 48 |
| First solved | [RPISEC](https://ctftime.org/team/572){:target="_blank"}<br>Mar 24 at 05:12 UTC |
| Last solved | Mar 25 at 14:58 UTC |
| Reviews | 21 |
| Average rating | 4.14 |
{:.mbtablestyle}

<canvas id="chart13" width="400" height="300"></canvas>

<script>
var ctx13 = document.getElementById('chart13');
var chart13 = new Chart(ctx13, {
    type: 'bar',
    data: {
        labels: [
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [0,13,6,1,13,25,44,41,13,10,24,15,16,10,17,18,41,6,3,2,13,1,0,3,0,0,0,22,0,8,4,7,0,0,1,4],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [0,0,2,0,0,0,4,3,2,1,2,2,2,4,2,2,4,3,1,1,2,1,0,0,0,0,0,1,0,2,2,2,0,0,1,2],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### Forgotten Task

| Metric | Value |
| ------ | ----- |
| Value | 350 |
| Categories | web |
| Opened | Mar 24 at 06:30 UTC |
| Flags submitted for this task | 112 |
| First flag submitted | Mar 24 at 06:31 UTC |
| Last flag submitted | Mar 25 at 14:25 UTC |
| Teams solved this task | 3 |
| First solved | [Corrupted Reflection](https://ctftime.org/team/20904){:target="_blank"}<br>Mar 24 at 20:11 UTC |
| Last solved | Mar 24 at 23:09 UTC |
| Reviews | 1 |
| Average rating | 5.00 |
{:.mbtablestyle}

<canvas id="chart14" width="400" height="300"></canvas>

<script>
var ctx14 = document.getElementById('chart14');
var chart14 = new Chart(ctx14, {
    type: 'bar',
    data: {
        labels: [
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [1,6,2,3,4,0,2,0,1,0,1,3,1,2,3,0,1,3,14,9,8,8,0,2,1,2,7,7,8,3,3,4,3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### Golden Antelope

| Metric | Value |
| ------ | ----- |
| Value | 350 |
| Categories | crypto |
| Opened | Mar 24 at 08:12 UTC |
| Flags submitted for this task | 58 |
| First flag submitted | Mar 24 at 08:19 UTC |
| Last flag submitted | Mar 25 at 13:52 UTC |
| Teams solved this task | 23 |
| First solved | [Bushwhackers](https://ctftime.org/team/586){:target="_blank"}<br>Mar 24 at 18:19 UTC |
| Last solved | Mar 25 at 13:52 UTC |
| Reviews | 7 |
| Average rating | 4.57 |
{:.mbtablestyle}

<canvas id="chart15" width="400" height="300"></canvas>

<script>
var ctx15 = document.getElementById('chart15');
var chart15 = new Chart(ctx15, {
    type: 'bar',
    data: {
        labels: [
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [4,1,1,0,2,1,0,3,7,1,4,5,2,1,8,0,3,3,2,1,1,1,1,2,0,2,0,1,0,1,0],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [0,0,0,0,0,0,0,0,0,0,3,0,1,1,3,0,2,3,1,1,1,1,1,2,0,1,0,1,0,1,0],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### Corp monitoring

| Metric | Value |
| ------ | ----- |
| Value | 200 |
| Categories | web |
| Opened | Mar 24 at 10:45 UTC |
| Flags submitted for this task | 33 |
| First flag submitted | Mar 24 at 11:32 UTC |
| Last flag submitted | Mar 25 at 13:59 UTC |
| Teams solved this task | 5 |
| First solved | [Corrupted Reflection](https://ctftime.org/team/20904){:target="_blank"}<br>Mar 24 at 11:32 UTC |
| Last solved | Mar 25 at 13:59 UTC |
| Reviews | 1 |
| Average rating | 5.00 |
{:.mbtablestyle}

<canvas id="chart16" width="400" height="300"></canvas>

<script>
var ctx16 = document.getElementById('chart16');
var chart16 = new Chart(ctx16, {
    type: 'bar',
    data: {
        labels: [
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [0,1,2,4,1,7,3,1,2,0,3,0,0,0,1,0,2,0,0,0,0,0,0,0,0,4,0,2,0],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### Lazy Admin

| Metric | Value |
| ------ | ----- |
| Value | 150 |
| Categories | web |
| Opened | Mar 24 at 19:15 UTC |
| Flags submitted for this task | 226 |
| First flag submitted | Mar 24 at 19:18 UTC |
| Last flag submitted | Mar 25 at 14:59 UTC |
| Teams solved this task | 19 |
| First solved | [Bushwhackers](https://ctftime.org/team/586){:target="_blank"}<br>Mar 24 at 19:42 UTC |
| Last solved | Mar 25 at 14:45 UTC |
| Reviews | 6 |
| Average rating | 3.33 |
{:.mbtablestyle}

<canvas id="chart17" width="400" height="300"></canvas>

<script>
var ctx17 = document.getElementById('chart17');
var chart17 = new Chart(ctx17, {
    type: 'bar',
    data: {
        labels: [
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [49,37,26,7,5,5,16,4,1,1,6,17,1,10,5,4,7,5,4,16],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [1,2,2,2,2,2,1,0,0,0,0,0,0,2,1,1,0,1,1,1],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### Button Spy

| Metric | Value |
| ------ | ----- |
| Value | 250 |
| Categories | reverse |
| Opened | Mar 24 at 21:15 UTC |
| Flags submitted for this task | 248 |
| First flag submitted | Mar 24 at 21:19 UTC |
| Last flag submitted | Mar 25 at 13:03 UTC |
| Teams solved this task | 21 |
| First solved | [Bushwhackers](https://ctftime.org/team/586){:target="_blank"}<br>Mar 24 at 22:27 UTC |
| Last solved | Mar 25 at 13:03 UTC |
| Reviews | 8 |
| Average rating | 4.25 |
{:.mbtablestyle}

<canvas id="chart18" width="400" height="300"></canvas>

<script>
var ctx18 = document.getElementById('chart18');
var chart18 = new Chart(ctx18, {
    type: 'bar',
    data: {
        labels: [
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [6,1,60,1,25,17,37,4,0,9,51,1,5,5,2,23,1,0],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [0,1,2,1,2,1,0,1,0,2,2,0,1,1,2,4,1,0],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### XOR Trick

| Metric | Value |
| ------ | ----- |
| Value | 350 |
| Categories | pwn |
| Opened | Mar 25 at 06:39 UTC |
| Flags submitted for this task | 10 |
| First flag submitted | Mar 25 at 09:47 UTC |
| Last flag submitted | Mar 25 at 14:46 UTC |
| Teams solved this task | 6 |
| First solved | [RPISEC](https://ctftime.org/team/572){:target="_blank"}<br>Mar 25 at 10:26 UTC |
| Last solved | Mar 25 at 14:46 UTC |
| Reviews | 1 |
| Average rating | 5.00 |
{:.mbtablestyle}

<canvas id="chart19" width="400" height="300"></canvas>

<script>
var ctx19 = document.getElementById('chart19');
var chart19 = new Chart(ctx19, {
    type: 'bar',
    data: {
        labels: [
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
        datasets: [
            {
                label: 'Hit attempts',
                data: [0,0,0,2,2,0,0,0,6],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [0,0,0,0,2,0,0,0,4],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>


### Shop quest

| Metric | Value |
| ------ | ----- |
| Value | 500 |
| Categories | web |
| Opened | Mar 25 at 08:00 UTC |
| Flags submitted for this task | 8 |
| First flag submitted | Mar 25 at 08:48 UTC |
| Last flag submitted | Mar 25 at 13:40 UTC |
| Teams solved this task | 0 |
| First solved | &ndash; |
| Last solved | &ndash; |
| Reviews | 0 |
| Average rating | &ndash; |
{:.mbtablestyle}

<canvas id="chart20" width="400" height="300"></canvas>

<script>
var ctx20 = document.getElementById('chart20');
var chart20 = new Chart(ctx20, {
    type: 'bar',
    data: {
        labels: [
            '3/25 08:00-08:59 UTC',
            '3/25 09:00-09:59 UTC',
            '3/25 10:00-10:59 UTC',
            '3/25 11:00-11:59 UTC',
            '3/25 12:00-12:59 UTC',
            '3/25 13:00-13:59 UTC',
            '3/25 14:00-14:59 UTC'
        ],
        datasets: [
            {
                label: 'Hit attempts',
                data: [1,0,0,2,0,5,0],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Hits',
                data: [0,0,0,0,0,0,0],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
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
</script>
<br>
