---
layout: post
title: 'VolgaCTF 2021 Qualifier: report'
permalink: /volgactf-2021-qualifier-report/
date: 2021-04-02 11:00:00 +0400
author: aptkn
meta: CTF, VolgaCTF, 2021, Qualifier
comments: false
read_time: true
image: /assets/volgactf-2021-qualifier/img/cover.jpg
---

On the weekend [VolgaCTF.org](https://ctftime.org/team/27094){:target="_blank"} team held its tenth qualifier event, namely [VolgaCTF 2021 Qualifier](https://ctftime.org/event/1229){:target="_blank"}. Significant changes were brought about this year:
- The event duration was reduced from 48 to 24 hours. Managing a 2-day competition is too hard for such a tiny team.
- Static scoring gave way to dynamic one (in accordance with [CTF Design Guidelines](https://docs.google.com/document/d/1QBhColOjT8vVeyQxM1qNE-pczqeNSJiWOEiZQF2SSh8/preview#heading=h.a4shnv3exmz){:target="_blank"}).
- Sign in/up with [CTFtime.org](https://ctftime.org/for-organizers/oauth/){:target="_blank"} was implemented.

Now we would like to share some key metrics that were collected during the competition this year. The data is compared against [VolgaCTF 2020 Qualifier](/volgactf-2020-qualifier-key-metrics-part-1/).

<script src="/assets/volgactf-2021-qualifier/js/Chart.bundle.min.js"></script>
<script src="/assets/volgactf-2021-qualifier/js/part.js"></script>

## Key metrics

- [Sign up](#sign-up)
- [Number of teams](#number-of-teams)
- [Team sign in activity](#team-sign-in-activity)
- [Task submit attempts distribution](#task-submit-attempts-distribution)
- [Task hit distribution](#task-hit-distribution)
- [Task review distribution](#task-review-distribution)
- [Team/country distribution](#teamcountry-distribution)

## Tasks
- [Static Site](#static-site)
- [Online Wallet (Part 1)](#online-wallet-part-1)
- [Online Wallet (Part 2)](#online-wallet-part-2)
- [QR Codebook](#qr-codebook)
- [Knock-Knock](#knock-knock)
- [Carry](#carry)
- [Chosen Ones](#chosen-ones)
- [Unicorn Networks](#unicorn-networks)
- [flask-admin](#flask-admin)
- [Snake](#snake)
- [JWT](#jwt)
- [JWS](#jws)
- [Inception](#inception)
- [penny wise](#penny-wise)
- [Streams](#streams)
- [Feedback](#feedback)

### Sign up
Sign up was made available on March 15th and teams could register up to the end of the competition. Unsurprisingly, the maximum number of teams (194) joined the event on the first day of the contest, March 27th.

<canvas id="chart_signup" width="400" height="300"></canvas>
<br>

### Number of teams
This year saw a sharp decline in the number of teams playing. This can be explained with the following factors:
- Sign in/up with CTFtime.org account encouraged the participants to join the event on behalf of a team rather than as an individual.
- Another CTF events being held at the same time, e.g. [UMassCTF 2021](https://ctftime.org/event/1282){:target="_blank"}.

| Number of teams | VolgaCTF 2020 Qualifier | VolgaCTF 2021 Qualifier | Change |
| --------------- | ------------------- | ------------------- | ------ |
| Total | 1433 | 765 | <span class="trend-down">-668</span> |
| Qualified | 1250 | 631 | <span class="trend-down">-619</span> |
| Disqualified | 0 | 0 | &ndash; |
| Signed in during the competition | 1238 | 588 | <span class="trend-down">-650</span> |
| Submitted at least one flag | 621 | 285 | <span class="trend-down">-336</span> |
| Solved at least one task | 504 | 231 | <span class="trend-down">-273</span> |
| Reviewed at least one task | 322 | 130 | <span class="trend-down">-192</span> |
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

| # | Country | Number of teams (2020) | Number of teams (2021) | Change |
| - | ------- | ---------------------- | -----------------------| ------ |
| 1 | Russia | 170 | 162 | <span class="trend-down">-8</span> |
| 2 | India | 149 | 51 | <span class="trend-down">-98</span> |
| 3 | China | 80 | 39 | <span class="trend-down">-41</span> |
| 4 | International | 31 | 36 | <span class="trend-up">+5</span> |
| 5 | Republic of Korea | 60 | 32 | <span class="trend-down">-28</span> |
| 6 | Vietnam | 36 | 26 | <span class="trend-down">-10</span> |
| 7 | Japan | 53 | 23 | <span class="trend-down">-30</span> |
| 8 | United States | 113 | 22 | <span class="trend-down">-91</span> |
| 9 | France | 38 | 20 | <span class="trend-down">-18</span> |
| 10 | Italy | 23 | 16 | <span class="trend-down">-7</span> |
| 11 | United Kingdom | 15 | 11 | <span class="trend-down">-4</span> |
| 12 | Ukraine | 7 | 11 | <span class="trend-up">+4</span> |
| 13 | Taiwan | 18 | 11 | <span class="trend-down">-7</span> |
| 14 | Germany | 40 | 10 | <span class="trend-down">-30</span> |
| 15 | Poland | 16 | 9 | <span class="trend-down">-7</span> |
| 16 | Indonesia | 24 | 9 | <span class="trend-down">-15</span> |
| 17 | Israel | 12 | 7 | <span class="trend-down">-5</span> |
| 18 | Brazil | 14 | 7 | <span class="trend-down">-7</span> |
| 19 | Singapore | 8 | 6 | <span class="trend-down">-2</span> |
| 20 | Portugal | 9 | 6 | <span class="trend-down">-3</span> |
| 21 | Malaysia | 4 | 6 | <span class="trend-up">+2</span> |
| 22 | Austria | 12 | 6 | <span class="trend-down">-6</span> |
| 23 | Tunisia | 18 | 5 | <span class="trend-down">-13</span> |
| 24 | Switzerland | 11 | 5 | <span class="trend-down">-6</span> |
| 25 | Spain | 11 | 5 | <span class="trend-down">-6</span> |
| 26 | Netherlands | 11 | 5 | <span class="trend-down">-6</span> |
| 27 | Belgium | 14 | 5 | <span class="trend-down">-9</span> |
| 28 | Australia | 9 | 5 | <span class="trend-down">-4</span> |
| 29 | Egypt | 13 | 4 | <span class="trend-down">-9</span> |
| 30 | Sweden | 14 | 3 | <span class="trend-down">-11</span> |
| 31 | Morocco | 15 | 3 | <span class="trend-down">-12</span> |
| 32 | Iran | 17 | 3 | <span class="trend-down">-14</span> |
| 33 | Hong Kong | 8 | 3 | <span class="trend-down">-5</span> |
| 34 | Greece | 4 | 3 | <span class="trend-down">-1</span> |
| 35 | Bangladesh | 1 | 3 | <span class="trend-up">+2</span> |
| 36 | Argentina | 6 | 3 | <span class="trend-down">-3</span> |
| 37 | Algeria | 6 | 3 | <span class="trend-down">-3</span> |
| 38 | Turkey | 11 | 2 | <span class="trend-down">-9</span> |
| 39 | Thailand | 4 | 2 | <span class="trend-down">-2</span> |
| 40 | Saudi Arabia | 4 | 2 | <span class="trend-down">-2</span> |
| 41 | Romania | 9 | 2 | <span class="trend-down">-7</span> |
| 42 | Philippines | 1 | 2 | <span class="trend-up">+1</span> |
| 43 | Mexico | 9 | 2 | <span class="trend-down">-7</span> |
| 44 | Hungary | 4 | 2 | <span class="trend-down">-2</span> |
| 45 | Denmark | 7 | 2 | <span class="trend-down">-5</span> |
| 46 | Canada | 15 | 2 | <span class="trend-down">-13</span> |
| 47 | Antarctica | 3 | 2 | <span class="trend-down">-1</span> |
| 48 | Uzbekistan | 0 | 1 | <span class="trend-up">+1</span> |
| 49 | U.S. Minor Outlying Islands | 0 | 1 | <span class="trend-up">+1</span> |
| 50 | Republic of Lithuania | 0 | 1 | <span class="trend-up">+1</span> |
| 51 | Qatar | 1 | 1 | &ndash; |
| 52 | Puerto Rico | 0 | 1 | <span class="trend-up">+1</span> |
| 53 | Norway | 10 | 1 | <span class="trend-down">-9</span> |
| 54 | Nigeria | 1 | 1 | &ndash; |
| 55 | Nepal | 0 | 1 | <span class="trend-up">+1</span> |
| 56 | Kazakhstan | 5 | 1 | <span class="trend-down">-4</span> |
| 57 | Ireland | 1 | 1 | &ndash; |
| 58 | Iceland | 1 | 1 | &ndash; |
| 59 | Hashemite Kingdom of Jordan | 1 | 1 | &ndash; |
| 60 | Georgia | 0 | 1 | <span class="trend-up">+1</span> |
| 61 | Finland | 3 | 1 | <span class="trend-down">-2</span> |
| 62 | Fiji | 3 | 1 | <span class="trend-down">-2</span> |
| 63 | Ethiopia | 2 | 1 | <span class="trend-down">-1</span> |
| 64 | Ecuador | 0 | 1 | <span class="trend-up">+1</span> |
| 65 | Djibouti | 0 | 1 | <span class="trend-up">+1</span> |
| 66 | Czechia | 3 | 1 | <span class="trend-down">-2</span> |
| 67 | Croatia | 2 | 1 | <span class="trend-down">-1</span> |
| 68 | Colombia | 0 | 1 | <span class="trend-up">+1</span> |
| 69 | Cameroon | 1 | 1 | &ndash; |
| 70 | Bulgaria | 2 | 1 | <span class="trend-down">-1</span> |
| 71 | Benin | 0 | 1 | <span class="trend-up">+1</span> |
| 72 | Belarus | 1 | 1 | &ndash; |
| 73 | Armenia | 0 | 1 | <span class="trend-up">+1</span> |
| 74 | Afghanistan | 0 | 1 | <span class="trend-up">+1</span> |
{:.mbtablestyle}

### Static Site

| Metric | Value |
| ------ | ----- |
| Value | 252 |
| Categories | Web |
| Opened | Mar 27 at 14:02 UTC |
| Flags submitted | 84<br><small>first on Mar 27 at 14:03 UTC</small><br><small>last on Mar 28 at 13:06 UTC</small> |
| Solved | by 38 teams<br><small>first on Mar 27 at 15:14 UTC by [Bushwhackers](https://ctftime.org/team/586){:target="_blank"}</small><br><small>last on Mar 28 at 13:06 UTC</small> |
| Rated | <span class="review-good">4.15</span> <small>(based on 13 reviews)</small> |
{:.mbtablestyle}

### Online Wallet (Part 1)

| Metric | Value |
| ------ | ----- |
| Value | 129 |
| Categories | Web |
| Opened | Mar 27 at 14:02 UTC |
| Flags submissions | 224<br><small>first on Mar 27 at 14:06 UTC</small><br><small>last on Mar 28 at 13:28 UTC</small> |
| Solved | by 135 teams<br><small>first on Mar 27 at 14:15 UTC by [ret2school](https://ctftime.org/team/111931){:target="_blank"}</small><br><small>last on Mar 28 at 13:13 UTC</small> |
| Rated | <span class="review-normal">3.97</span> <small>(based on 39 reviews)</small> |
{:.mbtablestyle}

### Online Wallet (Part 2)

| Metric | Value |
| ------ | ----- |
| Value | 343 |
| Categories | Web |
| Opened | Mar 27 at 14:03 UTC |
| Flags submissions | 35<br><small>first on Mar 27 at 14:12 UTC</small><br><small>last on Mar 28 at 13:28 UTC<small> |
| Solved | by 14 teams<br><small>first on Mar 27 at 17:36 UTC by [xof5566~](https://ctftime.org/team/144112){:target="_blank"}</small><br><small>last on Mar 28 at 13:28 UTC</small> |
| Rated | <span class="review-good">5.00</span> <small>(based on 4 reviews)</small> |
{:.mbtablestyle}

### QR Codebook

| Metric | Value |
| ------ | ----- |
| Value | 196 |
| Categories | Crypto |
| Opened | Mar 27 at 14:04 UTC |
| Flags submissions | 148<br><small>first on Mar 27 at 14:05 UTC</small><br><small>last on Mar 28 at 13:54 UTC<small> |
| Solved | by 68 teams<br><small>first on Mar 27 at 15:00 UTC by [More Smoked Leet Chicken](https://ctftime.org/team/1005){:target="_blank"}</small><br><small>last on Mar 28 at 13:54 UTC</small> |
| Rated | <span class="review-good">4.16</span> <small>(based on 19 reviews)</small> |
{:.mbtablestyle}

### Knock-Knock

| Metric | Value |
| ------ | ----- |
| Value | 172 |
| Categories | Crypto |
| Opened | Mar 27 at 14:14 UTC |
| Flags submissions | 839<br><small>first on Mar 27 at 14:46 UTC</small><br><small>last on Mar 28 at 13:59 UTC<small> |
| Solved | by 87 teams<br><small>first on Mar 27 at 14:51 UTC by [SUSlo.PAS](https://ctftime.org/team/6502){:target="_blank"}</small><br><small>last on Mar 28 at 13:59 UTC</small> |
| Rated | <span class="review-normal">3.96</span> <small>(based on 26 reviews)</small> |
{:.mbtablestyle}

### Carry

| Metric | Value |
| ------ | ----- |
| Value | 234 |
| Categories | Crypto |
| Opened | Mar 27 at 14:14 UTC |
| Flags submissions | 50<br><small>first on Mar 27 at 15:24 UTC</small><br><small>last on Mar 28 at 13:56 UTC<small> |
| Solved | by 46 teams<br><small>first on Mar 27 at 15:24 UTC by [Super Guesser](https://ctftime.org/team/130817){:target="_blank"}</small><br><small>last on Mar 28 at 13:56 UTC</small> |
| Rated | <span class="review-normal">3.67</span> <small>(based on 15 reviews)</small> |
{:.mbtablestyle}

### Chosen Ones

| Metric | Value |
| ------ | ----- |
| Value | 266 |
| Categories | Stegastics |
| Opened | Mar 27 at 14:14 UTC |
| Flags submissions | 102<br><small>first on Mar 27 at 14:40 UTC</small><br><small>last on Mar 28 at 13:48 UTC<small> |
| Solved | by 33 teams<br><small>first on Mar 27 at 14:47 UTC by [More Smoked Leet Chicken](https://ctftime.org/team/1005){:target="_blank"}</small><br><small>last on Mar 28 at 13:48 UTC</small> |
| Rated | <span class="review-good">4.08</span> <small>(based on 13 reviews)</small> |
{:.mbtablestyle}

### Unicorn Networks

| Metric | Value |
| ------ | ----- |
| Value | 230 |
| Categories | Web |
| Opened | Mar 27 at 14:14 UTC |
| Flags submissions | 88<br><small>first on Mar 27 at 15:12 UTC</small><br><small>last on Mar 28 at 13:21 UTC<small> |
| Solved | by 48 teams<br><small>first on Mar 27 at 15:24 UTC by [WeAreScientists](https://ctftime.org/team/2010){:target="_blank"}</small><br><small>last on Mar 28 at 13:21 UTC</small> |
| Rated | <span class="review-good">4.19</span> <small>(based on 16 reviews)</small> |
{:.mbtablestyle}

### flask-admin

| Metric | Value |
| ------ | ----- |
| Value | 179 |
| Categories | Web |
| Opened | Mar 27 at 14:14 UTC |
| Flags submissions | 155<br><small>first on Mar 27 at 14:44 UTC</small><br><small>last on Mar 28 at 13:53 UTC<small> |
| Solved | by 81 teams<br><small>first on Mar 27 at 15:47 UTC by [vubar](https://ctftime.org/team/1353){:target="_blank"}</small><br><small>last on Mar 28 at 13:53 UTC</small> |
| Rated | <span class="review-normal">3.83</span> <small>(based on 23 reviews)</small> |
{:.mbtablestyle}

### Snake

| Metric | Value |
| ------ | ----- |
| Value | 331 |
| Categories | Reverse |
| Opened | Mar 27 at 14:14 UTC |
| Flags submissions | 298<br><small>first on Mar 27 at 14:16 UTC</small><br><small>last on Mar 28 at 13:50 UTC<small> |
| Solved | by 16 teams<br><small>first on Mar 27 at 17:50 UTC by [WreckTheLine](https://ctftime.org/team/57908){:target="_blank"}</small><br><small>last on Mar 28 at 13:50 UTC</small> |
| Rated | <span class="review-normal">3.80</span> <small>(based on 5 reviews)</small> |
{:.mbtablestyle}

### JWT

| Metric | Value |
| ------ | ----- |
| Value | 132 |
| Categories | Web |
| Opened | Mar 27 at 14:14 UTC |
| Flags submissions | 301<br><small>first on Mar 27 at 14:22 UTC</small><br><small>last on Mar 28 at 13:55 UTC<small> |
| Solved | by 131 teams<br><small>first on Mar 27 at 14:33 UTC by [MailRu](https://ctftime.org/team/32525){:target="_blank"}</small><br><small>last on Mar 28 at 13:55 UTC</small> |
| Rated | <span class="review-good">4.41</span> <small>(based on 39 reviews)</small> |
{:.mbtablestyle}

### JWS

| Metric | Value |
| ------ | ----- |
| Value | 356 |
| Categories | Web |
| Opened | Mar 27 at 14:14 UTC |
| Flags submissions | 28<br><small>first on Mar 27 at 14:35 UTC</small><br><small>last on Mar 28 at 13:43 UTC<small> |
| Solved | by 12 teams<br><small>first on Mar 27 at 21:33 UTC by [The Flat Network Society](https://ctftime.org/team/87434){:target="_blank"}</small><br><small>last on Mar 28 at 13:43 UTC</small> |
| Rated | <span class="review-bad">1.33</span> <small>(based on 6 reviews)</small> |
{:.mbtablestyle}

### Inception

| Metric | Value |
| ------ | ----- |
| Value | 454 |
| Categories | Stegastics |
| Opened | Mar 27 at 23:07 UTC |
| Flags submissions | 38<br><small>first on Mar 27 at 23:16 UTC</small><br><small>last on Mar 28 at 13:56 UTC<small> |
| Solved | by 3 teams<br><small>first on Mar 28 at 07:25 UTC by [Maple Bacon](https://ctftime.org/team/73723){:target="_blank"}</small><br><small>last on Mar 28 at 11:18 UTC</small> |
| Rated | &ndash; |
{:.mbtablestyle}

### penny wise

| Metric | Value |
| ------ | ----- |
| Value | 232 |
| Categories | Exploits |
| Opened | Mar 27 at 23:13 UTC |
| Flags submissions | 49<br><small>first on Mar 28 at 00:17 UTC</small><br><small>last on Mar 28 at 13:42 UTC<small> |
| Solved | by 47 teams<br><small>first on Mar 28 at 00:17 UTC by [the3000](https://ctftime.org/team/110885){:target="_blank"}</small><br><small>last on Mar 28 at 13:42 UTC</small> |
| Rated | <span class="review-normal">3.32</span> <small>(based on 19 reviews)</small> |
{:.mbtablestyle}

### Streams

| Metric | Value |
| ------ | ----- |
| Value | 295 |
| Categories | Stegastics |
| Opened | Mar 27 at 23:26 UTC |
| Flags submissions | 48<br><small>first on Mar 28 at 00:13 UTC</small><br><small>last on Mar 28 at 13:59 UTC<small> |
| Solved | by 24 teams<br><small>first on Mar 28 at 00:19 UTC by [More Smoked Leet Chicken](https://ctftime.org/team/1005){:target="_blank"}</small><br><small>last on Mar 28 at 13:59 UTC</small> |
| Rated | <span class="review-bad">2.00</span> <small>(based on 4 reviews)</small> |
{:.mbtablestyle}

### Feedback

| Metric | Value |
| ------ | ----- |
| Value | 1 |
| Categories | Feedback |
| Opened | Mar 28 at 08:00 UTC |
| Flags submissions | 414<br><small>first on Mar 28 at 08:01 UTC</small><br><small>last on Mar 28 at 13:58 UTC<small> |
| Solved | by 130 teams<br><small>first on Mar 28 at 08:01 UTC by [bi0s](https://ctftime.org/team/662){:target="_blank"}</small><br><small>last on Mar 28 at 13:58 UTC</small> |
| Rated | <span class="review-good">4.36</span> <small>(based on 25 reviews)</small> |
{:.mbtablestyle}

**P.S.** Thanks for participating and see you next year!
