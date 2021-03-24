---
layout: post
title: 'VolgaCTF 2020 Qualifier: key metrics, part 1'
permalink: /volgactf-2020-qualifier-key-metrics-part-1/
date: 2021-03-24 20:00:00 +0400
author: aspyatkin
meta: CTF, VolgaCTF, 2020, Qualifier
comments: false
read_time: true
image: /assets/volgactf-2020-qualifier/img/cover.jpg
---

March 2020 was marked with lockdowns all over the globe. Nonetheless [VolgaCTF.org](https://ctftime.org/team/27094){:target="_blank"} team held [VolgaCTF 2020 Qualifier](https://ctftime.org/event/933){:target="_blank"} event, which started on March 27th and lasted 48 hours. That was the ninth qualifier event in the history of [VolgaCTF](https://ctftime.org/ctf/52) and now we would like to share some key metrics that were collected during the competition this year. The data is compared against [VolgaCTF 2019 Qualifier](/volgactf-2019-qualifier-key-metrics-part-1/).

<script src="/assets/volgactf-2020-qualifier/js/Chart.bundle.min.js"></script>
<script src="/assets/volgactf-2020-qualifier/js/part-1.js"></script>

## Sign up
Sign up was available from February 29th till the end of the competition. The all-time record was established on the first day of the contest, namely on March 27th - 458 teams!

<canvas id="chart_signup" width="400" height="300"></canvas>
<br>

## Number of teams
For the fourth year in a row more than 1000 teams signed up for the competition. A growing trend is evident, although the figures can be also attributed to the pandemic situation in the most countries at the time of the contest, which forced people to [#stayhome](https://twitter.com/search?q=%23stayhome).

| Number of teams | VolgaCTF 2019 Qualifier | VolgaCTF 2020 Qualifier | Change |
| --------------- | ------------------- | ------------------- | ------ |
| Total | 1311 | 1433 | <span class="trend-up">+122</span> |
| Qualified | 1097 | 1250 | <span class="trend-up">+153</span> |
| Disqualified | 0 | 0 | &ndash; |
| Signed in during the competition | 1068 | 1238 | <span class="trend-up">+170</span> |
| Submitted at least one flag | 625 | 621 | <span class="trend-down">-4</span> |
| Solved at least one task | 414 | 504 | <span class="trend-up">+90</span> |
| Reviewed at least one task | 256 | 322 | <span class="trend-up">+66</span> |
{:.mbtablestyle}

<br>

## Team sign in activity
The competition lasted 48 hours and participants seemed to be active, especially in the first hours. The chart below shows how many different teams logged in during the contest.

<canvas id="chart_signin" width="400" height="300"></canvas>
<br>

## Task submit attempts distribution
621 teams were active and tried to submit flags. The next chart shows the number of teams who submitted flags to the given number of tasks (at least).

<canvas id="chart_submit_distribution" width="400" height="300"></canvas>
<br>

## Task hit distribution
504 teams solved at least one task, and one 1 performed exceptionally well with 21 solved tasks (out of 22 available). The results in-between are presented in the chart below.

<canvas id="chart_hit_distribution" width="400" height="300"></canvas>
<br>

## Task review distribution
We have also collected valuable reviews, which help us better design tasks for the upcoming competitions. Thanks a lot!

<canvas id="chart_review_distribution" width="400" height="300"></canvas>
<br>

## Team/country distribution
VolgaCTF is becoming undoubtedly even more international. The most represented countries are shown in the chart below:

<canvas id="chart_countries" width="300" height="300"></canvas>
<br>

And here is a comparison table:

| # | Country | Number of teams (2019) | Number of teams (2020) | Change |
| - | ------- | ---------------------- | -----------------------| ------ |
| 1 | Russia | 272 | 170 | <span class="trend-down">-102</span> |
| 2 | India | 83 | 149 | <span class="trend-up">+66</span> |
| 3 | United States | 102 | 113 | <span class="trend-up">+11</span> |
| 4 | China | 77 | 80 | <span class="trend-up">+3</span> |
| 5 | Republic of Korea | 72 | 60 | <span class="trend-down">-12</span> |
| 6 | Japan | 41 | 53 | <span class="trend-up">+12</span> |
| 7 | Germany | 24 | 40 | <span class="trend-up">+16</span> |
| 8 | France | 32 | 38 | <span class="trend-up">+6</span> |
| 9 | Vietnam | 33 | 36 | <span class="trend-up">+3</span> |
| 10 | International | 21 | 31 | <span class="trend-up">+10</span> |
| 11 | Indonesia | 28 | 24 | <span class="trend-down">-4</span> |
| 12 | Italy | 16 | 23 | <span class="trend-up">+7</span> |
| 13 | Tunisia | 7 | 18 | <span class="trend-up">+11</span> |
| 14 | Taiwan | 15 | 18 | <span class="trend-up">+3</span> |
| 15 | Iran | 8| 17 | <span class="trend-up">+9</span> |
| 16 | Poland | 11 | 16 | <span class="trend-up">+5</span> |
| 17 | United Kingdom | 12 | 15 | <span class="trend-up">+3</span> |
| 18 | Morocco | 4 | 15 | <span class="trend-up">+11</span> |
| 19 | Canada | 7 | 15 | <span class="trend-up">+8</span> |
| 20 | Sweden | 9 | 14 | <span class="trend-up">+5</span> |
| 21 | Brazil | 11 | 14 | <span class="trend-up">+3</span> |
| 22 | Belgium | 1 | 14 | <span class="trend-up">+13</span> |
| 23 | Egypt | 2| 13 | <span class="trend-up">+11</span> |
| 24 | Israel | 14 | 12 | <span class="trend-down">-2</span> |
| 25 | Austria | 7| 12 | <span class="trend-up">+5</span> |
| 26 | Turkey | 13 | 11 | <span class="trend-down">-2</span> |
| 27 | Switzerland | 12 | 11 | <span class="trend-down">-1</span> |
| 28 | Spain | 9 | 11 | <span class="trend-up">+2</span> |
| 29 | Netherlands | 11 | 11 | &ndash; |
| 30 | Norway | 2 | 10 | <span class="trend-up">+8</span> |
| 31 | Romania | 6 | 9 | <span class="trend-up">+3</span> |
| 32 | Portugal | 7 | 9 | <span class="trend-up">+2</span> |
| 33 | Mexico | 8| 9 | <span class="trend-up">+1</span> |
| 34 | Australia | 8 | 9 | <span class="trend-up">+1</span> |
| 35 | Singapore | 14 | 8 | <span class="trend-down">-6</span> |
| 36 | Hong Kong | 4 | 8 | <span class="trend-up">+4</span> |
| 37 | Ukraine | 8 | 7 | <span class="trend-down">-1</span> |
| 38 | Denmark | 4 | 7 | <span class="trend-up">+3</span> |
| 39 | Mongolia | 9 | 6 | <span class="trend-down">-3</span> |
| 40 | Argentina | 1 | 6 | <span class="trend-up">+5</span> |
| 41 | Algeria | 4 | 6 | <span class="trend-up">+2</span> |
| 42 | Kazakhstan | 3 | 5 | <span class="trend-up">+2</span> |
| 43 | Thailand | 4 | 4 | &ndash; |
| 44 | Saudi Arabia | 4 | 4 | &ndash; |
| 45 | Malaysia | 0 | 4 | <span class="trend-up">+4</span> |
| 46 | Kenya | 2 | 4 | <span class="trend-up">+2</span> |
| 47 | Hungary | 1 | 4 | <span class="trend-up">+3</span> |
| 48 | Greece | 0 | 4 | <span class="trend-up">+4</span> |
| 49 | Chile | 2 | 4 | <span class="trend-up">+2</span> |
| 50 | Serbia | 1 | 3 | <span class="trend-up">+2</span> |
| 51 | Pakistan | 1 | 3 | <span class="trend-up">+2</span> |
| 52 | Finland | 0| 3 | <span class="trend-up">+3</span> |
| 53 | Fiji | 0 | 3 | <span class="trend-up">+3</span> |
| 54 | Czechia | 6 | 3 | <span class="trend-down">-3</span> |
| 55 | Antarctica | 2 | 3 | <span class="trend-up">+1</span> |
| 56 | Slovakia | 1 | 2 | <span class="trend-up">+1</span> |
| 57 | Myanmar (Burma) | 1 | 2 | <span class="trend-up">+1</span> |
| 58 | Macao | 0| 2 | <span class="trend-up">+2</span> |
| 59 | Faroe Islands | 0 | 2 | <span class="trend-up">+2</span> |
| 60 | Ethiopia | 0 | 2 | <span class="trend-up">+2</span> |
| 61 | Estonia | 1 | 2 | <span class="trend-up">+1</span> |
| 62 | Croatia | 2 | 2 | &ndash; |
| 63 | Bulgaria | 0 | 2 | <span class="trend-up">+2</span> |
| 64 | Azerbaijan | 1 | 2 | <span class="trend-up">+1</span> |
| 65 | Vatican City | 2 | 1 | <span class="trend-down">-1</span> |
| 66 | Tuvalu | 0 | 1 | <span class="trend-up">+1</span> |
| 67 | Syria | 0 | 1 | <span class="trend-up">+1</span> |
| 68 | South Georgia and the South Sandwich Islands | 0 | 1 | <span class="trend-up">+1</span> |
| 69 | Slovenia | 1 | 1 | &ndash; |
| 70 | Sierra Leone | 0 | 1 | <span class="trend-up">+1</span> |
| 71 | Qatar | 0 | 1 | <span class="trend-up">+1</span> |
| 72 | Philippines | 3 | 1 | <span class="trend-down">-2</span> |
| 73 | Panama | 1 | 1 | &ndash; |
| 74 | Palau | 0| 1 | <span class="trend-up">+1</span> |
| 75 | Niue | 1 | 1 | &ndash; |
| 76 | Nigeria | 1 | 1 | &ndash; |
| 77 | New Zealand | 1 | 1 | &ndash; |
| 78 | Libya | 0| 1 | <span class="trend-up">+1</span> |
| 79 | Lebanon | 0| 1 | <span class="trend-up">+1</span> |
| 80 | Laos | 0 | 1 | <span class="trend-up">+1</span> |
| 81 | Jamaica | 0 | 1 | <span class="trend-up">+1</span> |
| 82 | Ireland | 1 | 1 | &ndash; |
| 83 | Iraq | 0 | 1 | <span class="trend-up">+1</span> |
| 84 | Iceland | 1 | 1 | &ndash; |
| 85 | Hashemite Kingdom of Jordan | 1 | 1 | &ndash; |
| 86 | Guyana | 0 | 1 | <span class="trend-up">+1</span> |
| 87 | Guadeloupe | 0| 1 | <span class="trend-up">+1</span> |
| 88 | Ghana | 0 | 1 | <span class="trend-up">+1</span> |
| 89 | Cyprus | 2 | 1 | <span class="trend-down">-1</span> |
| 90 | Cuba | 0 | 1 | <span class="trend-up">+1</span> |
| 91 | Cocos (Keeling) Islands | 0 | 1 | <span class="trend-up">+1</span> |
| 92 | Cameroon | 0 | 1 | <span class="trend-up">+1</span> |
| 93 | Belarus | 1 | 1 | &ndash; |
| 94 | Bangladesh | 0 | 1 | <span class="trend-up">+1</span> |
| 95 | Bahrain | 0 | 1 | <span class="trend-up">+1</span> |
| 96 | Aruba | 0 | 1 | <span class="trend-up">+1</span> |
| 97 | Albania | 0| 1 | <span class="trend-up">+1</span> |
{:.mbtablestyle}

The country data above was collected from teams' profiles. During the sign up, a country field was automatically filled in according to GeoIP data provided by [MaxMind](http://www.maxmind.com), yet a team was still able to change it.

**P.P.S.** Further posts will focus on task metrics. Stay safe and tuned!
