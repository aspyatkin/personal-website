---
layout: post
title: 'VolgaCTF 2024 Qualifier: report'
permalink: /volgactf-2024-qualifier-report/
date: 2024-04-01 10:00:00 +0200
author: aptkn
meta: CTF, VolgaCTF, 2024, Qualifier
comments: false
read_time: true
image: /assets/volgactf-2024-qualifier/img/cover.jpg
---

On March 30-31th, [VolgaCTF.org](https://ctftime.org/team/27094){:target="_blank"} team held its annual qualifier event, namely [VolgaCTF 2024 Qualifier](https://ctftime.org/event/2200){:target="_blank"}.

The report elaborates on some key metrics that were collected during the competition this year. The data is compared against [VolgaCTF 2023 Qualifier](https://ctftime.org/event/1847).

<script src="/assets/volgactf-2024-qualifier/js/Chart.bundle.min.js"></script>
<script src="/assets/volgactf-2024-qualifier/js/part.js"></script>

## Key metrics

- [Sign up](#sign-up)
- [Number of teams](#number-of-teams)
- [Team sign in activity](#team-sign-in-activity)
- [Task submit attempts distribution](#task-submit-attempts-distribution)
- [Task hit distribution](#task-hit-distribution)
- [Task review distribution](#task-review-distribution)
- [Team/country distribution](#teamcountry-distribution)

## Tasks
- [Warm of Pon](#warm-of-pon)
- [PQ](#pq)
- [Make a Difference](#make-a-difference)
- [find_the_flag3](#find_the_flag3)
- [Tales](#tales)
- [cuCRACKME](#cucrackme)
- [QR](#qr)
- [Reanimation](#reanimation)
- [Zeliard Tales](#zeliard-tales)
- [Greasepaint](#greasepaint)
- [Ponatural Selection](#ponatural-selection)
- [Single R](#single-r)
- [Rusted Nail](#rusted-nail)
- [Tridea](#tridea)
- [Feedback](#feedback)

### Sign up
Sign up was made available on February 14th and teams could register up to the end of the competition. The most number of teams (181), as expected, joined the event on the first day of the contest, March 30th.

<canvas id="chart_signup" width="400" height="300"></canvas>
<br>

### Number of teams
This year saw an increase in the number of teams playing:

| Number of teams | VolgaCTF 2024 Qualifier | VolgaCTF 2023 Qualifier | Change |
| --------------- | ------------------- | ------------------- | ------ |
| Total | 807 | 426 | <span class="trend-up">+381</span> |
| Qualified | 678 | 346 | <span class="trend-up">+332</span> |
| Disqualified | 0 | 0 | &ndash; |
| Signed in during the competition | 569 | 343 | <span class="trend-up">+226</span> |
| Submitted at least one flag | 302 | 181 | <span class="trend-up">+121</span> |
| Solved at least one task | 257 | 140 | <span class="trend-up">+117</span> |
| Reviewed at least one task | 144 | 88 | <span class="trend-up">+56</span> |
{:.mbtablestyle}

<br>

## Team sign in activity
The chart below shows how many different teams signed in during the competition.

<canvas id="chart_signin" width="400" height="300"></canvas>
<br>

## Task submit attempts distribution
The chart shows the number of teams who submitted flags to the given number of tasks (at least).

<canvas id="chart_submit_distribution" width="400" height="300"></canvas>
<br>

## Task hit distribution
The chart shows the number of teams who solved the given number of tasks (at least).

<canvas id="chart_hit_distribution" width="400" height="300"></canvas>
<br>

## Task review distribution
A team can write a review to the task they solved. The chart below shows the number of teams who reviewed the given number of tasks (at least). 

<canvas id="chart_review_distribution" width="400" height="300"></canvas>
<br>

## Team/country distribution
Traditionally, VolgaCTF is played in all areas of the world. The most represented countries are shown in the diagram:

<canvas id="chart_countries" width="300" height="300"></canvas>
<br>

And here is a comparison table:

| # | Country | Number of teams (2024) | Number of teams (2023) | Change |
| - | ------- | ---------------------- | -----------------------| ------ |
| 1 | Russia | 281 | 151 | <span class="trend-up">+130</span> |
| 2 | India | 60 | 21 | <span class="trend-up">+39</span> |
| 3 | China | 25 | 9 | <span class="trend-up">+16</span> |
| 4 | International | 24 | 18 | <span class="trend-up">+6</span> |
| 5 | Vietnam | 22 | 15 | <span class="trend-up">+7</span> |
| 6 | Republic of Korea | 18 | 9 | <span class="trend-up">+9</span> |
| 7 | Mongolia | 18 | 8 | <span class="trend-up">+10</span> |
| 8 | United States | 16 | 12 | <span class="trend-up">+4</span> |
| 9 | Kazakhstan | 16 | 2 | <span class="trend-up">+14</span> |
| 10 | Japan | 11 | 14 | <span class="trend-down">-3</span> |
| 11 | Morocco | 10 | 2 | <span class="trend-up">+8</span> |
| 12 | Algeria | 10 | 2 | <span class="trend-up">+8</span> |
| 13 | Bangladesh | 9 | 6 | <span class="trend-up">+3</span> |
| 14 | Indonesia | 8 | 5 | <span class="trend-up">+3</span> |
| 15 | France | 8 | 6 | <span class="trend-up">+2</span> |
| 16 | Saudi Arabia | 7 | 1 | <span class="trend-up">+6</span> |
| 17 | Philippines | 7 | 1 | <span class="trend-up">+6</span> |
| 18 | Malaysia | 7 | 2 | <span class="trend-up">+5</span> |
| 19 | Hong Kong | 7 | 4 | <span class="trend-up">+3</span> |
| 20 | Canada | 6 | 1 | <span class="trend-up">+5</span> |
| 21 | Belarus | 6 | 1 | <span class="trend-up">+5</span> |
| 22 | Greece | 5 | 3 | <span class="trend-up">+2</span> |
| 23 | Germany | 5 | 3 | <span class="trend-up">+2</span> |
| 24 | Egypt | 5 | 1 | <span class="trend-up">+4</span> |
| 25 | Singapore | 4 | 3 | <span class="trend-up">+1</span> |
| 26 | Pakistan | 4 | 0 | <span class="trend-up">+4</span> |
| 27 | Italy | 4 | 3 | <span class="trend-up">+1</span> |
| 28 | Hashemite Kingdom of Jordan | 4 | 3 | <span class="trend-up">+1</span> |
| 29 | Brazil | 4 | 0 | <span class="trend-up">+4</span> |
| 30 | United Kingdom | 3 | 3 | &ndash; |
| 31 | United Arab Emirates | 3 | 0 | <span class="trend-up">+3</span> |
| 32 | Thailand | 3 | 2 | <span class="trend-up">+1</span> |
| 33 | Taiwan | 3 | 1 | <span class="trend-up">+2</span> |
| 34 | Spain | 3 | 2 | <span class="trend-up">+1</span> |
| 35 | Kuwait | 3 | 0 | <span class="trend-up">+3</span> |
| 36 | Iran | 3 | 5 | <span class="trend-down">-2</span> |
| 37 | Turkey | 2 | 1 | <span class="trend-up">+1</span> |
| 38 | Serbia | 2 | 1 | <span class="trend-up">+1</span> |
| 39 | Peru | 2 | 0 | <span class="trend-up">+2</span> |
| 40 | Norway | 2 | 0 | <span class="trend-up">+2</span> |
| 41 | Nepal | 2 | 0 | <span class="trend-up">+2</span> |
| 42 | Australia | 2 | 2 | &ndash; |
| 43 | Afghanistan | 2 | 0 | <span class="trend-up">+2</span> |
| 44 | Venezuela | 1 | 0 | <span class="trend-up">+1</span> |
| 45 | Uzbekistan | 1 | 1 | &ndash; |
| 46 | Ukraine | 1 | 0 | <span class="trend-up">+1</span> |
| 47 | Tunisia | 1 | 1 | &ndash; |
| 48 | Togo | 1 | 0 | <span class="trend-up">+1</span> |
| 49 | Sweden | 1 | 0 | <span class="trend-up">+1</span> |
| 50 | South Africa | 1 | 0 | <span class="trend-up">+1</span> |
| 51 | Saint-Barthélemy | 1 | 0 | <span class="trend-up">+1</span> |
| 52 | Rwanda | 1 | 0 | <span class="trend-up">+1</span> |
| 53 | Romania | 1 | 0 | <span class="trend-up">+1</span> |
| 54 | Qatar | 1 | 0 | <span class="trend-up">+1</span> |
| 55 | Poland | 1 | 3 | <span class="trend-down">-2</span> |
| 56 | New Zealand | 1 | 0 | <span class="trend-up">+1</span> |
| 57 | Myanmar (Burma) | 1 | 0 | <span class="trend-up">+1</span> |
| 58 | Luxembourg | 1 | 0 | <span class="trend-up">+1</span> |
| 59 | Kyrgyzstan | 1 | 0 | <span class="trend-up">+1</span> |
| 60 | Israel | 1 | 1 | &ndash; |
| 61 | Hungary | 1 | 1 | &ndash; |
| 62 | Honduras | 1 | 0 | <span class="trend-up">+1</span> |
| 63 | Finland | 1 | 0 | <span class="trend-up">+1</span> |
| 64 | Ethiopia | 1 | 0 | <span class="trend-up">+1</span> |
| 65 | Cyprus | 1 | 1 | &ndash; |
| 66 | Costa Rica | 1 | 1 | &ndash; |
| 67 | Colombia | 1 | 1 | &ndash; |
| 68 | Bolivia | 1 | 0 | <span class="trend-up">+1</span> |
| 69 | Benin | 1 | 0 | <span class="trend-up">+1</span> |
| 70 | Belgium | 1 | 0 | <span class="trend-up">+1</span> |
| 71 | Azerbaijan | 1 | 0 | <span class="trend-up">+1</span> |
| 72 | Armenia | 1 | 1 | &ndash; |
| 73 | Argentina | 1 | 0 | <span class="trend-up">+1</span> |
| 74 | Antarctica | 1 | 0 | <span class="trend-up">+1</span> |
| 75 | Albania | 1 | 1 | &ndash; |
{:.mbtablestyle}

### Warm of Pon

| Metric | Value |
| ------ | ----- |
| Value | 284 |
| Categories | pwn |
| Opened | Mar 30 at 15:00 UTC |
| Flags submitted | 52<br><small>first on Mar 30 at 15:04 UTC</small><br><small>last on Mar 31 at 14:46 UTC</small> |
| Solved | by 27 teams<br><small>first on Mar 30 at 15:44 UTC by [po_beda](https://ctftime.org/team/222977){:target="_blank"}</small><br><small>last on Mar 31 at 14:46 UTC</small> |
| Rated | <span class="review-normal">3.4</span> <small>(based on 13 reviews)</small> |
{:.mbtablestyle}

### PQ

| Metric | Value |
| ------ | ----- |
| Value | 91 |
| Categories | crypto |
| Opened | Mar 30 at 15:00 UTC |
| Flags submitted | 462<br><small>first on Mar 30 at 15:04 UTC</small><br><small>last on Mar 31 at 14:53 UTC</small> |
| Solved | by 198 teams<br><small>first on Mar 30 at 15:04 UTC by [bi0s](https://ctftime.org/team/662){:target="_blank"}</small><br><small>last on Mar 31 at 13:44 UTC</small> |
| Rated | <span class="review-good">4.2</span> <small>(based on 83 reviews)</small> |
{:.mbtablestyle}

### Make a Difference

| Metric | Value |
| ------ | ----- |
| Value | 50 |
| Categories | stego |
| Opened | Mar 30 at 15:00 UTC |
| Flags submitted | 402<br><small>first on Mar 30 at 15:05 UTC</small><br><small>last on Mar 31 at 14:31 UTC</small> |
| Solved | by 65 teams<br><small>first on Mar 30 at 15:19 UTC by [N0N@me13](https://ctftime.org/team/209571){:target="_blank"}</small><br><small>last on Mar 31 at 14:31 UTC</small> |
| Rated | <span class="review-normal">2.7</span> <small>(based on 21 reviews)</small> |
{:.mbtablestyle}

### find_the_flag3

| Metric | Value |
| ------ | ----- |
| Value | 153 |
| Categories | web |
| Opened | Mar 30 at 16:00 UTC |
| Flags submitted | 412<br><small>first on Mar 30 at 16:03 UTC</small><br><small>last on Mar 31 at 14:53 UTC</small> |
| Solved | by 106 teams<br><small>first on Mar 30 at 16:12 UTC by [Drovosec](https://ctftime.org/team/210132){:target="_blank"}</small><br><small>last on Mar 31 at 14:53 UTC</small> |
| Rated | <span class="review-normal">3.0</span> <small>(based on 45 reviews)</small> |
{:.mbtablestyle}

### Tales

| Metric | Value |
| ------ | ----- |
| Value | 200 |
| Categories | stego |
| Opened | Mar 30 at 16:30 UTC |
| Flags submitted | 414<br><small>first on Mar 30 at 16:32 UTC</small><br><small>last on Mar 31 at 14:59 UTC</small> |
| Solved | by 0 teams |
| Rated | n/a |
{:.mbtablestyle}

### cuCRACKME

| Metric | Value |
| ------ | ----- |
| Value | 500 |
| Categories | reverse |
| Opened | Mar 30 at 17:00 UTC |
| Flags submitted | 18<br><small>first on Mar 30 at 17:08 UTC</small><br><small>last on Mar 31 at 13:14 UTC</small> |
| Solved | by 0 teams |
| Rated | n/a |
{:.mbtablestyle}

### QR

| Metric | Value |
| ------ | ----- |
| Value | 194 |
| Categories | crypto |
| Opened | Mar 30 at 17:30 UTC |
| Flags submitted | 101<br><small>first on Mar 30 at 17:39 UTC</small><br><small>last on Mar 31 at 14:57 UTC</small> |
| Solved | by 70 teams<br><small>first on Mar 30 at 18:02 UTC by [smiley-from-telega](https://ctftime.org/team/170324){:target="_blank"}</small><br><small>last on Mar 31 at 14:57 UTC</small> |
| Rated | <span class="review-good">3.6</span> <small>(based on 22 reviews)</small> |
{:.mbtablestyle}

### Reanimation

| Metric | Value |
| ------ | ----- |
| Value | 321 |
| Categories | forensics |
| Opened | Mar 30 at 18:00 UTC |
| Flags submitted | 192<br><small>first on Mar 30 at 18:09 UTC</small><br><small>last on Mar 31 at 14:56 UTC</small> |
| Solved | by 18 teams<br><small>first on Mar 30 at 20:06 UTC by [D@T@C0RrUpT10#](https://ctftime.org/team/273499){:target="_blank"}</small><br><small>last on Mar 31 at 14:52 UTC</small> |
| Rated | <span class="review-good">3.7</span> <small>(based on 11 reviews)</small> |
{:.mbtablestyle}

### Zeliard Tales

| Metric | Value |
| ------ | ----- |
| Value | 50 |
| Categories | misc |
| Opened | Mar 30 at 18:30 UTC |
| Flags submitted | 2731<br><small>first on Mar 30 at 18:48 UTC</small><br><small>last on Mar 31 at 14:58 UTC</small> |
| Solved | by 26 teams<br><small>first on Mar 30 at 19:02 UTC by [dtl](https://ctftime.org/team/157017){:target="_blank"}</small><br><small>last on Mar 31 at 14:51 UTC</small> |
| Rated | <span class="review-bad">1.4</span> <small>(based on 17 reviews)</small> |
{:.mbtablestyle}

### Greasepaint

| Metric | Value |
| ------ | ----- |
| Value | 500 |
| Categories | forensics |
| Opened | Mar 30 at 19:00 UTC |
| Flags submitted | 111<br><small>first on Mar 30 at 19:41 UTC</small><br><small>last on Mar 31 at 14:59 UTC</small> |
| Solved | by 1 team<br><small>on Mar 30 at 23:57 UTC by [kks](https://ctftime.org/team/32621){:target="_blank"}</small> |
| Rated | n/a |
{:.mbtablestyle}

### Ponatural Selection

| Metric | Value |
| ------ | ----- |
| Value | 437 |
| Categories | pwn |
| Opened | Mar 30 at 19:30 UTC |
| Flags submitted | 26<br><small>first on Mar 30 at 21:49 UTC</small><br><small>last on Mar 31 at 14:58 UTC</small> |
| Solved | by 4 teams<br><small>first on Mar 31 at 01:47 UTC by [bi0s](https://ctftime.org/team/662){:target="_blank"}</small><br><small>last on Mar 31 at 14:45 UTC</small> |
| Rated | <span class="review-good">5.0</span> <small>(based on 1 review)</small> |
{:.mbtablestyle}

### Single R

| Metric | Value |
| ------ | ----- |
| Value | 228 |
| Categories | crypto |
| Opened | Mar 30 at 20:00 UTC |
| Flags submitted | 88<br><small>first on Mar 30 at 20:24 UTC</small><br><small>last on Mar 31 at 14:24 UTC</small> |
| Solved | by 49 teams<br><small>first on Mar 30 at 20:24 UTC by [CyberHero](https://ctftime.org/team/130070){:target="_blank"}</small><br><small>last on Mar 31 at 14:24 UTC</small> |
| Rated | <span class="review-good">4.3</span> <small>(based on 16 reviews)</small> |
{:.mbtablestyle}

### Rusted Nail

| Metric | Value |
| ------ | ----- |
| Value | 219 |
| Categories | misc |
| Opened | Mar 30 at 21:55 UTC |
| Flags submitted | 79<br><small>first on Mar 30 at 22:26 UTC</small><br><small>last on Mar 31 at 14:49 UTC</small> |
| Solved | by 54 teams<br><small>first on Mar 30 at 22:26 UTC by [ICE](https://ctftime.org/team/77120){:target="_blank"}</small><br><small>last on Mar 31 at 14:49 UTC</small> |
| Rated | <span class="review-good">4.5</span> <small>(based on 15 reviews)</small> |
{:.mbtablestyle}

### Tridea

| Metric | Value |
| ------ | ----- |
| Value | 500 |
| Categories | reverse, crypto |
| Opened | Mar 30 at 22:08 UTC |
| Flags submitted | 6<br><small>first on Mar 31 at 11:25 UTC</small><br><small>last on Mar 31 at 12:57 UTC</small> |
| Solved | by 0 teams |
| Rated | n/a |
{:.mbtablestyle}

### Feedback

| Metric | Value |
| ------ | ----- |
| Value | 10 |
| Categories | misc |
| Opened | Mar 31 at 12:00 UTC |
| Flags submitted | 168<br><small>first on Mar 31 at 12:00 UTC</small><br><small>last on Mar 31 at 14:58 UTC</small> |
| Solved | by 144 teams<br><small>first on Mar 31 at 12:00 UTC by [Mazala](https://ctftime.org/team/65326){:target="_blank"}</small><br><small>last on Mar 31 at 14:58 UTC</small> |
| Rated | <span class="review-good">4.2</span> <small>(based on 43 reviews)</small> |
{:.mbtablestyle}

**P.S.** Thanks for participating and see you next year!
