---
layout: post
title: 'VolgaCTF 2019 Qualifier: key metrics, part 1'
permalink: /volgactf-2019-qualifier-key-metrics-part-1/
date: 2019-04-21 19:00:00 +0400
author: aspyatkin
meta: CTF, VolgaCTF, 2019, Qualifier
comments: false
read_time: true
image: /assets/volgactf-2019-qualifier/img/cover.jpg
---

March 2019 definitely appeared to be a **CTF month** for [VolgaCTF.org](https://ctftime.org/team/27094){:target="_blank"} team. On March 29th at 15:00 UTC we started [VolgaCTF 2019 Qualifier](https://ctftime.org/event/713){:target="_blank"} event, which lasted 48 hours. That was the eighth qualifier event in the history of [VolgaCTF](https://ctftime.org/ctf/52) and now we would like to share some key metrics that were collected during the competition this year.

<script src="/assets/volgactf-2019-qualifier/js/Chart.bundle.min.js"></script>
<script src="/assets/volgactf-2019-qualifier/js/part-1.js"></script>

Wherever possible, the data will be compared against [Volga CTF 2018 Quals](/volgactf-2018-quals-key-metrics-part-1/), which was held almost a year ago, so as to give a reader a perception of a growing interest in information security as a whole, and in particular in CTF competitions amongst people all over the world.

## Sign up
Sign up opened on March 1st and was available thoughout the whole competition. It hardly comes as a surprise that the all-time record was established on the first day of the competition, March 29th - 365 teams!

<canvas id="chart_signup" width="400" height="300"></canvas>
<br>

## Number of teams
For the third year in a row more than 1000 teams signed up for our competition. Not only did they register, but the majority also logged in during the competition and tried to submit answers to one or more tasks. We rejoice at the numbers that keep growing each year.

| Number of teams | VolgaCTF 2018 Quals | VolgaCTF 2019 Qualifier | Change |
| --------------- | ------------------- | ------------------- | ------ |
| Total | 1243 | 1311 | <span class="trend-up">+68</span> |
| Qualified | 1097 | 1097 | &ndash; |
| Disqualified | 0 | 0 | &ndash; |
| Signed in during the competition | 1045 | 1068 | <span class="trend-up">+23</span> |
| Submitted at least one flag | 602 | 625 | <span class="trend-up">+23</span> |
| Solved at least one task | 411 | 414 | <span class="trend-up">+3</span> |
| Reviewed at least one task | 207 | 256 | <span class="trend-up">+49</span> |
{:.mbtablestyle}

<br>

## Team sign in activity
The competition lasted 48 hours and participants seemed to be fairly active. The chart below shows how many different teams logged in during the contest.

<canvas id="chart_signin" width="400" height="300"></canvas>
<br>

## Task submit attempts distribution
625 teams tried to submit flags. 210 tried their luck submitting flags to a single task, and only 2 tried to submit flags to 20 tasks. Look at the chart below.

<canvas id="chart_submit_distribution" width="400" height="300"></canvas>
<br>

## Task hit distribution
414 teams succeeded in solving tasks. 142 solved only one task, and 2 performed exceptionally well with 20 solved tasks.

<canvas id="chart_hit_distribution" width="400" height="300"></canvas>
<br>

## Task review distribution
Reviews provide task authors with valuable feedback. Teams were able to submit reviews to the tasks they solved. 115 teams wrote only one review, and 2 teams made as many as 11 reviews. Well done!

<canvas id="chart_review_distribution" width="400" height="300"></canvas>
<br>

## Team/country distribution
Needless to say that VolgaCTF is truly international. Teams from all continents take part in the competition! The most represented countries are shown in the chart below:

<canvas id="chart_countries" width="300" height="300"></canvas>
<br>

And here is a comparison table:

| # | Country | Number of teams (2018) | Number of teams (2019) | Change |
| - | ------- | ---------------------- | -----------------------| ------ |
| 1 | Russia | 197 | 272 | <span class="trend-up">+75</span> |
| 2 | United States | 121 | 102 | <span class="trend-down">-19</span> |
| 3 | India | 88 | 83 | <span class="trend-down">-5</span> |
| 4 | China | 32 | 77 | <span class="trend-up">+45</span> |
| 5 | Republic of Korea | 68 | 72 | <span class="trend-up">+4</span> |
| 6 | Japan | 39 | 41 | <span class="trend-up">+2</span> |
| 7 | Vietnam | 36 | 33 | <span class="trend-down">-3</span> |
| 8 | France | 44 | 32 | <span class="trend-down">-12</span> |
| 9 | Indonesia | 36 | 28 | <span class="trend-down">-8</span> |
| 10 | Germany | 29 | 24 | <span class="trend-down">-5</span> |
| 11 | International | 18 | 21 | <span class="trend-up">+3</span> |
| 12 | Italy | 13 | 16 | <span class="trend-up">+3</span> |
| 13 | Taiwan | 22 | 15 | <span class="trend-down">-7</span> |
| 14 | Singapore | 9 | 14 | <span class="trend-up">+5</span> |
| 15 | Israel | 17 | 14 | <span class="trend-down">-3</span> |
| 16 | Turkey | 14 | 13 | <span class="trend-down">-1</span> |
| 17 | United Kingdom | 21 | 12 | <span class="trend-down">-9</span> |
| 18 | Switzerland | 5 | 12 | <span class="trend-up">+7</span> |
| 19 | Poland | 18 | 11 | <span class="trend-down">-7</span> |
| 20 | Netherlands | 8 | 11 | <span class="trend-up">+3</span> |
| 21 | Brazil | 15 | 11 | <span class="trend-down">-4</span> |
| 22 | Sweden | 2 | 9 | <span class="trend-up">+7</span> |
| 23 | Spain | 14 | 9 | <span class="trend-down">-5</span> |
| 24 | Mongolia | 5 | 9 | <span class="trend-up">+4</span> |
| 25 | Ukraine | 6 | 8 | <span class="trend-up">+2</span> |
| 26 | Mexico | 4 | 8 | <span class="trend-up">+4</span> |
| 27 | Iran | 6 | 8 | <span class="trend-up">+2</span> |
| 28 | Australia | 25 | 8 | <span class="trend-down">-17</span> |
| 29 | Tunisia | 5 | 7 | <span class="trend-up">+2</span> |
| 30 | Portugal | 5 | 7 | <span class="trend-up">+2</span> |
| 31 | Canada | 22 | 7 | <span class="trend-down">-15</span> |
| 32 | Austria | 8 | 7 | <span class="trend-down">-1</span> |
| 33 | Romania | 4 | 6 | <span class="trend-up">+2</span> |
| 34 | Czechia | 7 | 6 | <span class="trend-down">-1</span> |
| 35 | Thailand | 1 | 4 | <span class="trend-up">+3</span> |
| 36 | Saudi Arabia | 6 | 4 | <span class="trend-down">-2</span> |
| 37 | Morocco | 7 | 4 | <span class="trend-down">-3</span> |
| 38 | Hong Kong | 7 | 4 | <span class="trend-down">-3</span> |
| 39 | Denmark | 7 | 4 | <span class="trend-down">-3</span> |
| 40 | Colombia | 4 | 4 | &ndash; |
| 41 | Algeria | 13 | 4 | <span class="trend-down">-9</span> |
| 42 | Philippines | 1 | 3 | <span class="trend-up">+2</span> |
| 43 | Kazakhstan | 4 | 3 | <span class="trend-down">-1</span> |
| 44 | Vatican City | 1 | 2 | <span class="trend-up">+1</span> |
| 45 | Norway | 1 | 2 | <span class="trend-up">+1</span> |
| 46 | Maldives | 0 | 2 | <span class="trend-up">+2</span> |
| 47 | Kenya | 1 | 2 | <span class="trend-up">+1</span> |
| 48 | Egypt | 8 | 2 | <span class="trend-down">-6</span> |
| 49 | Cyprus | 1 | 2 | <span class="trend-up">+1</span> |
| 50 | Croatia | 1 | 2 | <span class="trend-up">+1</span> |
| 51 | Chile | 0 | 2 | <span class="trend-up">+2</span> |
| 52 | Antarctica | 2 | 2 | &ndash; |
| 53 | Zimbabwe | 0 | 1 | <span class="trend-up">+1</span> |
| 54 | Uzbekistan | 2 | 1 | <span class="trend-down">-1</span> |
| 55 | United Arab Emirates | 2 | 1 | <span class="trend-down">-1</span> |
| 56 | São Tomé and Príncipe | 0 | 1 | <span class="trend-up">+1</span> |
| 57 | Svalbard and Jan Mayen | 0 | 1 | <span class="trend-up">+1</span> |
| 58 | Sri Lanka | 0 | 1 | <span class="trend-up">+1</span> |
| 59 | Slovenia | 0 | 1 | <span class="trend-up">+1</span> |
| 60 | Slovakia | 1 | 1 | &ndash; |
| 61 | Serbia | 0 | 1 | <span class="trend-up">+1</span> |
| 62 | Republic of Lithuania | 1 | 1 | &ndash; |
| 63 | Panama | 0 | 1 | <span class="trend-up">+1</span> |
| 64 | Pakistan | 0 | 1 | <span class="trend-up">+1</span> |
| 65 | Niue | 0 | 1 | <span class="trend-up">+1</span> |
| 66 | Nigeria | 0 | 1 | <span class="trend-up">+1</span> |
| 67 | New Zealand | 0 | 1 | <span class="trend-up">+1</span> |
| 68 | Nepal | 0 | 1 | <span class="trend-up">+1</span> |
| 69 | Myanmar (Burma) | 0 | 1 | <span class="trend-up">+1</span> |
| 70 | Ireland | 0 | 1 | <span class="trend-up">+1</span> |
| 71 | Iceland | 1 | 1 | &ndash; |
| 72 | Hungary | 1 | 1 | &ndash; |
| 73 | Hashemite Kingdom of Jordan | 1 | 1 | &ndash; |
| 74 | Haiti | 0 | 1 | <span class="trend-up">+1</span> |
| 75 | Guatemala | 0 | 1 | <span class="trend-up">+1</span> |
| 76 | Estonia | 1 | 1 | &ndash; |
| 77 | Ecuador | 2 | 1 | <span class="trend-down">-1</span> |
| 78 | Djibouti | 0 | 1 | <span class="trend-up">+1</span> |
| 79 | Central African Republic | 0 | 1 | <span class="trend-up">+1</span> |
| 80 | Brunei | 0 | 1 | <span class="trend-up">+1</span> |
| 81 | Belgium | 11 | 1 | <span class="trend-down">-10</span> |
| 82 | Belarus | 4 | 1 | <span class="trend-down">-3</span> |
| 83 | Azerbaijan | 1 | 1 | &ndash; |
| 84 | Argentina | 5 | 1 | <span class="trend-down">-4</span> |
{:.mbtablestyle}

The country data above was collected from teams' profiles. During the sign up, a country field was automatically filled in according to GeoIP data provided by [MaxMind](http://www.maxmind.com), yet a team was still able to change it.

**P.S.** Funny, we still have two teams apparently playing from Antarctica :)

**P.P.S.** Further posts will focus on task metrics. Stay tuned!
