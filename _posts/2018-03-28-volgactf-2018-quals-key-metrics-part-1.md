---
layout: post
title: 'VolgaCTF 2018 Quals: key metrics, part 1'
permalink: /volgactf-2018-quals-key-metrics-part-1/
date: 2018-03-28 02:00:00 +0400
author: aspyatkin
meta: CTF, VolgaCTF, Quals
comments: true
read_time: true
image: /assets/volgactf-2018-quals/img/cover.jpg
---

On the weekend [VolgaCTF.org](https://ctftime.org/team/27094){:target="_blank"} team launched an annual competition series by holding a [VolgaCTF 2018 Quals](https://ctftime.org/event/539){:target="_blank"} event. The contest started on March 23rd at 15:00 UTC and lasted 48 hours. It went quite smoothly and we would like to share some key metrics that were collected during the event.

<script src="/assets/volgactf-2018-quals/js/Chart.bundle.min.js"></script>
<script src="/assets/volgactf-2018-quals/js/part-1.js"></script>

Wherever possible, the data will be compared against [Volga CTF 2017 Quals](/volgactf-2017-quals-key-metrics/), which was held almost a year ago, so as to give a reader a perception of a growing interest in information security as a whole, and in particular in CTF competitions amongst people all over the world.

## Sign up
Sign up was made available almost a month before the competition start. Some participants decided to register in advance, while the all-time record was established on the first day of the competition, March 23rd.

<canvas id="chart_signup" width="400" height="300"></canvas>
<br>

## Number of teams
Beyond our wildest dreams, more than 1000 teams signed up for the competition for the second year in a row. Not only they registered, but the majority also logged in during the competition and tried to submit answers to one or more tasks.

| Number of teams | VolgaCTF 2017 Quals | VolgaCTF 2018 Quals | Change |
| --------------- | ------------------- | ------------------- | ------ |
| Total | 1115 | 1243 | <span class="trend-up">+128</span> |
| Qualified | 1024 | 1097 | <span class="trend-up">+73</span> |
| Disqualified | 0 | 0 | &ndash; |
| Signed in during the competition | 961 | 1045 | <span class="trend-up">+84</span> |
| Submitted at least one flag | 708 | 602 | <span class="trend-down">-106</span> |
| Solved at least one task | 677 | 411 | <span class="trend-down">-266</span> |
| Reviewed at least one task | 363 | 207 | <span class="trend-down">-156</span> |
{:.mbtablestyle}

Fortunately, no team was disqualified. Although, we have spotted a hilarious moment in our logs:

![And extract from logs](/assets/volgactf-2018-quals/img/logs-extract.png)

One might notice that the number of teams who managed to solve at least one task has decreased. Well, due to the absence of "Quiz" task this year (whether you liked the competition or not, any sort of answer will do), this hardly comes as a surprise.
<br>

## Team sign in activity
The competition lasted 48 hours and participants seemed to be fairly active. The chart below shows how many different teams logged in during the contest.

<canvas id="chart_signin" width="400" height="300"></canvas>
<br>

## Task submit attempts distribution
602 teams tried to submit flags. 203 tried their luck submitting flags to a single task, and only 3 tried to submit flags to 18 tasks. Look at the chart below.

<canvas id="chart_submit_distribution" width="400" height="300"></canvas>
<br>

## Task hit distribution
411 teams succeeded in solving tasks. 171 solved only one task, and 2 performed exceptionally well with 16 and 17 solved tasks accordingly.

<canvas id="chart_hit_distribution" width="400" height="300"></canvas>
<br>

## Task review distribution
Reviews provide task authors with valuable feedback. Teams were able to submit reviews to the tasks they solved. 121 teams wrote only one review, and 1 team made as many as 13 reviews. Well done!

<canvas id="chart_review_distribution" width="400" height="300"></canvas>
<br>

## Team/country distribution
Needless to say that VolgaCTF is truly international. Teams from all continents take part in the competition! The most represented countries are shown in the chart below:

<canvas id="chart_countries" width="300" height="300"></canvas>
<br>

And here is a comparison table:

| # | Country | Number of teams (2017) | Number of teams (2018) | Change |
| - | ------- | ---------------------- | ---------------------- | ------ |
| 1 | Russia | 195 | 197 | <span class="trend-up">+2</span> |
| 2 | United States | 81 | 121 | <span class="trend-up">+40</span> |
| 3 | India | 44 | 88 | <span class="trend-up">+44</span> |
| 4 | Republic of Korea | 48 | 68 | <span class="trend-up">+20</span> |
| 5 | France | 29 | 44 | <span class="trend-up">+15</span> |
| 6 | Japan | 51 | 39 | <span class="trend-down">-12</span> |
| 7 | Vietnam | 39 | 36 | <span class="trend-down">-3</span> |
| 8 | Indonesia | 21 | 36 | <span class="trend-up">+15</span> |
| 9 | China | 23 | 32 | <span class="trend-up">+9</span> |
| 10 | Germany | 22 | 29 | <span class="trend-up">+7</span> |
| 11 | Australia | 12 | 25 | <span class="trend-up">+13</span> |
| 12 | Taiwan | 11 | 22 | <span class="trend-up">+11</span> |
| 13 | Canada | 6 | 22 | <span class="trend-up">+16</span> |
| 14 | United Kingdom | 10 | 21 | <span class="trend-up">+11</span> |
| 15 | Poland | 13 | 18 | <span class="trend-up">+5</span> |
| 16 | International | 195 | 18 | <span class="trend-down">-177</span> |
| 17 | Israel | 6 | 17 | <span class="trend-up">+11</span> |
| 18 | Brazil | 17 | 15 | <span class="trend-down">-2</span> |
| 19 | Turkey | 6 | 14 | <span class="trend-up">+8</span> |
| 20 | Spain | 14 | 14 | &ndash; |
| 21 | Italy | 12 | 13 | <span class="trend-up">+1</span> |
| 22 | Algeria | 5 | 13 | <span class="trend-up">+8</span> |
| 23 | Belgium | 4 | 11 | <span class="trend-up">+7</span> |
| 24 | Singapore | 3 | 9 | <span class="trend-up">+6</span> |
| 25 | Netherlands | 7 | 8 | <span class="trend-up">+1</span> |
| 26 | Egypt | 4 | 8 | <span class="trend-up">+4</span> |
| 27 | Austria | 5 | 8 | <span class="trend-up">+3</span> |
| 28 | Morocco | 3 | 7 | <span class="trend-up">+4</span> |
| 29 | Hong Kong | 0 | 7 | <span class="trend-up">+7</span> |
| 30 | Denmark | 3 | 7 | <span class="trend-up">+4</span> |
| 31 | Czechia | 0 | 7 | <span class="trend-up">+7</span> |
| 32 | Ukraine | 12 | 6 | <span class="trend-down">-6</span> |
| 33 | Saudi Arabia | 0 | 6 | <span class="trend-up">+6</span> |
| 34 | Iran | 7 | 6 | <span class="trend-down">-1</span> |
| 35 | Tunisia | 3 | 5 | <span class="trend-up">+2</span> |
| 36 | Switzerland | 2 | 5 | <span class="trend-up">+3</span> |
| 37 | Portugal | 2 | 5 | <span class="trend-up">+3</span> |
| 38 | Mongolia | 25 | 5 | <span class="trend-down">-20</span> |
| 39 | Argentina | 4 | 5 | <span class="trend-up">+1</span> |
| 40 | Romania | 3 | 4 | <span class="trend-up">+1</span> |
| 41 | Mexico | 0 | 4 | <span class="trend-up">+4</span> |
| 42 | Kazakhstan | 2 | 4 | <span class="trend-up">+2</span> |
| 43 | Colombia | 1 | 4 | <span class="trend-up">+3</span> |
| 44 | Belarus | 4 | 4 | &ndash; |
| 45 | Greece | 3 | 3 | &ndash; |
| 46 | Finland | 2 | 3 | <span class="trend-up">+1</span> |
| 47 | Åland | 0 | 2 | <span class="trend-up">+2</span> |
| 48 | Uzbekistan | 0 | 2 | <span class="trend-up">+2</span> |
| 49 | United Arab Emirates | 1 | 2 | <span class="trend-up">+1</span> |
| 50 | Togo | 0 | 2 | <span class="trend-up">+2</span> |
| 51 | Sweden | 7 | 2 | <span class="trend-down">-5</span> |
| 52 | South Africa | 0 | 2 | <span class="trend-up">+2</span> |
| 53 | Malaysia | 1 | 2 | <span class="trend-up">+1</span> |
| 54 | Fiji | 0 | 2 | <span class="trend-up">+2</span> |
| 55 | Ecuador | 0 | 2 | <span class="trend-up">+2</span> |
| 56 | Cambodia | 0 | 2 | <span class="trend-up">+2</span> |
| 57 | Bulgaria | 2 | 2 | &ndash; |
| 58 | Antarctica | 0 | 2 | <span class="trend-up">+2</span> |
| 59 | Vatican City | 0 | 1 | <span class="trend-up">+1</span> |
| 60 | U.S. Virgin Islands | 0 | 1 | <span class="trend-up">+1</span> |
| 61 | Turks and Caicos Islands | 0 | 1 | <span class="trend-up">+1</span> |
| 62 | Thailand | 4 | 1 | <span class="trend-down">-3</span> |
| 63 | Sudan | 0 | 1 | <span class="trend-up">+1</span> |
| 64 | Slovakia | 0 | 1 | <span class="trend-up">+1</span> |
| 65 | Republic of Moldova | 1 | 1 | &ndash; |
| 66 | Republic of Lithuania | 0 | 1 | <span class="trend-up">+1</span> |
| 67 | Philippines | 4 | 1 | <span class="trend-down">-3</span> |
| 68 | Peru | 0 | 1 | <span class="trend-up">+1</span> |
| 69 | Palestine | 2 | 1 | <span class="trend-down">-1</span> |
| 70 | Norway | 5 | 1 | <span class="trend-down">-4</span> |
| 71 | North Korea | 4 | 1 | <span class="trend-down">-3</span> |
| 72 | Monaco | 0 | 1 | <span class="trend-up">+1</span> |
| 73 | Martinique | 0 | 1 | <span class="trend-up">+1</span> |
| 74 | Kenya | 0 | 1 | <span class="trend-up">+1</span> |
| 75 | Ivory Coast | 0| 1 | <span class="trend-up">+1</span> |
| 76 | Iraq | 0 | 1 | <span class="trend-up">+1</span> |
| 77 | Iceland | 0 | 1 | <span class="trend-up">+1</span> |
| 78 | Hungary | 0 | 1 | <span class="trend-up">+1</span> |
| 79 | Hashemite Kingdom of Jordan | 0 | 1 | <span class="trend-up">+1</span> |
| 80 | Gibraltar | 0 | 1 | <span class="trend-up">+1</span> |
| 81 | Georgia | 0 | 1 | <span class="trend-up">+1</span> |
| 82 | Estonia | 1 | 1 | &ndash; |
| 83 | Equatorial Guinea | 0 | 1 | <span class="trend-up">+1</span> |
| 84 | Cyprus | 0 | 1 | <span class="trend-up">+1</span> |
| 85 | Croatia | 0 | 1 | <span class="trend-up">+1</span> |
| 86 | Bangladesh | 1 | 1 | &ndash; |
| 87 | Azerbaijan | 2 | 1 | <span class="trend-down">-1</span> |
| 88 | Antigua and Barbuda | 0 | 1 | <span class="trend-up">+1</span> |
{:.mbtablestyle}

The country data above was collected from teams' profiles. During the sign up, a country field was automatically filled in according to GeoIP data provided by [MaxMind](http://www.maxmind.com), yet a team was still able to change it.

Note that the country data might not be pretty accurate - for instance, it is really hard to believe that there is a team from Antarctica. However, who knows...

**P.S.** Further posts will focus on task metrics. Stay tuned!
