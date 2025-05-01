---
layout: post
title: 'VolgaCTF 2022 Qualifier: report'
permalink: /volgactf-2022-qualifier-report/
date: 2022-05-16 10:00:00 +0200
author: aptkn
meta: CTF, VolgaCTF, 2022, Qualifier
comments: false
read_time: true
image: /assets/volgactf-2022-qualifier/img/cover.jpg
---

On May 14-15th, [VolgaCTF.org](https://ctftime.org/team/27094){:target="_blank"} team held its annual qualifier event, namely [VolgaCTF 2022 Qualifier](https://ctftime.org/event/1551){:target="_blank"}.

The report reveals some key metrics that were collected during the competition this year. As usual, the data is compared against the previous year event, that is [VolgaCTF 2021 Qualifier](https://ctftime.org/event/1229).

<script src="/assets/volgactf-2022-qualifier/js/Chart.bundle.min.js"></script>
<script src="/assets/volgactf-2022-qualifier/js/part.js"></script>

## Key metrics

- [Sign up](#sign-up)
- [Number of teams](#number-of-teams)
- [Team sign in activity](#team-sign-in-activity)
- [Task submit attempts distribution](#task-submit-attempts-distribution)
- [Task hit distribution](#task-hit-distribution)
- [Task review distribution](#task-review-distribution)
- [Team/country distribution](#teamcountry-distribution)

## Tasks
- [Login Page](#login-page)
- [Poem](#poem)
- [Future](#future)
- [Pixelated](#pixelated)
- [Power](#power)
- [My Profile](#my-profile)
- [YANT](#yant)
- [Find the flag](#find-the-flag)
- [Mafia](#mafia)
- [EasierThanItLooks](#easierthanitlooks)
- [Communicating Exponents](#communicating-exponents)
- [2FA](#2fa)
- [Habybeap](#habybeap)
- [Hell men's HTTPS](#hell-mens-https)
- [Login Page 2](#login-page-2)
- [Distinguisher](#distinguisher)
- [Armutism](#armutism)
- [Crackme](#crackme)
- [BasedUEFI](#baseduefi)
- [Battletoads](#battletoads)
- [Feedback](#feedback)

### Sign up
Sign up was made available on March 2nd and teams could register up to the end of the competition. The most number of teams (85) joined the event on the first day of the contest, May 14th.

<canvas id="chart_signup" width="400" height="300"></canvas>
<br>

### Number of teams
This year saw an sharp decrease in the number of teams playing:

| Number of teams | VolgaCTF 2022 Qualifier | VolgaCTF 2021 Qualifier | Change |
| --------------- | ------------------- | ------------------- | ------ |
| Total | 481 | 765 | <span class="trend-down">-284</span> |
| Qualified | 404 | 631 | <span class="trend-down">-227</span> |
| Disqualified | 0 | 0 | &ndash; |
| Signed in during the competition | 307 | 588 | <span class="trend-down">-281</span> |
| Submitted at least one flag | 195 | 285 | <span class="trend-down">-90</span> |
| Solved at least one task | 176 | 231 | <span class="trend-down">-55</span> |
| Reviewed at least one task | 85 | 130 | <span class="trend-down">-45</span> |
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

| # | Country | Number of teams (2022) | Number of teams (2021) | Change |
| - | ------- | ---------------------- | -----------------------| ------ |
| 1 | Russia | 178 | 162 | <span class="trend-up">+16</span> |
| 2 | China | 31 | 39 | <span class="trend-down">-8</span> |
| 3 | India | 25 | 51 | <span class="trend-down">-26</span> |
| 4 | United States | 17 | 22 | <span class="trend-down">-5</span> |
| 5 | International | 16 | 36 | <span class="trend-down">-20</span> |
| 6 | Vietnam | 14 | 26 | <span class="trend-down">-12</span> |
| 7 | Japan | 12 | 23 | <span class="trend-down">-11</span> |
| 8 | Bangladesh | 9 | 3 | <span class="trend-up">+6</span> |
| 9 | Republic of Korea | 7 | 32 | <span class="trend-down">-25</span> |
| 10 | Singapore | 6 | 6 | &ndash; |
| 11 | Turkey | 5 | 2 | <span class="trend-up">+3</span> |
| 12 | Thailand | 4 | 2 | <span class="trend-up">+2</span> |
| 13 | Taiwan | 4 | 11 | <span class="trend-down">-7</span> |
| 14 | Morocco | 4 | 3 | <span class="trend-up">+1</span> |
| 15 | Kazakhstan | 4 | 1 | <span class="trend-up">+3</span> |
| 16 | Hong Kong | 4 | 3 | <span class="trend-up">+1</span> |
| 17 | France | 4 | 20 | <span class="trend-down">-16</span> |
| 18 | United Kingdom | 3 | 11 | <span class="trend-down">-8</span> |
| 19 | Switzerland | 3 | 5 | <span class="trend-down">-2</span> |
| 20 | Spain | 3 | 5 | <span class="trend-down">-2</span> |
| 21 | Saudi Arabia | 3 | 2 | <span class="trend-up">+1</span> |
| 22 | Poland | 3 | 9 | <span class="trend-down">-6</span> |
| 23 | Italy | 3 | 16 | <span class="trend-down">-13</span> |
| 24 | Indonesia | 3 | 9 | <span class="trend-down">-6</span> |
| 25 | Germany | 3 | 10 | <span class="trend-down">-7</span> |
| 26 | Belarus | 3 | 1 | <span class="trend-up">+2</span> |
| 27 | Australia | 3 | 5 | <span class="trend-down">-2</span> |
| 28 | Tunisia | 2 | 5 | <span class="trend-down">-3</span> |
| 29 | Netherlands | 2 | 5 | <span class="trend-down">-3</span> |
| 30 | Iran | 2 | 3 | <span class="trend-down">-1</span> |
| 31 | Hashemite Kingdom of Jordan | 2 | 1 | <span class="trend-down">-1</span> |
| 32 | Egypt | 2 | 4 | <span class="trend-down">-2</span> |
| 33 | Brazil | 2 | 7 | <span class="trend-down">-5</span> |
| 34 | Algeria | 2 | 3 | <span class="trend-down">-1</span> |
| 35 | Ukraine | 1 | 11 | <span class="trend-down">-10</span> |
| 36 | Uganda | 1 | 0 | <span class="trend-up">+1</span> |
| 37 | Turkmenistan | 1 | 0 | <span class="trend-up">+1</span> |
| 38 | Sierra Leone | 1 | 0 | <span class="trend-up">+1</span> |
| 39 | Palestine | 1 | 0 | <span class="trend-up">+1</span> |
| 40 | Pakistan | 1 | 0 | <span class="trend-up">+1</span> |
| 41 | Mexico | 1 | 2 | <span class="trend-down">-1</span> |
| 42 | Hungary | 1 | 2 | <span class="trend-down">-1</span> |
| 43 | Greece | 1 | 3 | <span class="trend-down">-2</span> |
| 44 | Canada | 1 | 2 | <span class="trend-down">-1</span> |
| 45 | Cameroon | 1 | 1 | &ndash; |
| 46 | Botswana | 1 | 0 | <span class="trend-up">+1</span> |
| 47 | Austria | 1 | 6 | <span class="trend-down">-5</span> |
| 48 | Armenia | 1 | 1 | &ndash; |
| 49 | Argentina | 1 | 3 | <span class="trend-down">-2</span> |
| 50 | Albania | 1 | 0 | <span class="trend-up">+1</span> |
{:.mbtablestyle}

### Login Page

| Metric | Value |
| ------ | ----- |
| Value | 170 |
| Categories | web |
| Opened | May 14 at 15:00 UTC  |
| Flags submitted | 174<br><small>first on May 14 at 15:02 UTC</small><br><small>last on May 15 at 14:50 UTC</small> |
| Solved | by 89 teams<br><small>first on May 14 at 15:15 UTC by [89cr3w](https://ctftime.org/team/165821){:target="_blank"}</small><br><small>last on May 15 at 14:50 UTC</small> |
| Rated | <span class="review-good">3.7</span> <small>(based on 30 reviews)</small> |
{:.mbtablestyle}

### Poem

| Metric | Value |
| ------ | ----- |
| Value | 252 |
| Categories | crypto |
| Opened | May 14 at 15:00 UTC |
| Flags submitted | 398<br><small>first on May 14 at 15:02 UTC</small><br><small>last on May 15 at 15:00 UTC</small> |
| Solved | by 38 teams<br><small>first on May 14 at 15:39 UTC by [Zorro.PAS](https://ctftime.org/team/6502){:target="_blank"}</small><br><small>last on May 15 at 14:52 UTC</small> |
| Rated | <span class="review-good">3.7</span> <small>(based on 13 reviews)</small> |
{:.mbtablestyle}

### Future

| Metric | Value |
| ------ | ----- |
| Value | 356 |
| Categories | reverse |
| Opened | May 14 at 15:00 UTC |
| Flags submitted | 59<br><small>first on May 14 at 15:38 UTC</small><br><small>last on May 15 at 14:43 UTC</small> |
| Solved | by 12 teams<br><small>first on May 14 at 15:57 UTC by [Zorro.PAS](https://ctftime.org/team/6502){:target="_blank"}</small><br><small>last on May 15 at 14:43 UTC</small> |
| Rated | <span class="review-normal">3.0</span> <small>(based on 2 reviews)</small> |
{:.mbtablestyle}

### Pixelated

| Metric | Value |
| ------ | ----- |
| Value | 200 |
| Categories | misc |
| Opened | May 14 at 15:00 UTC |
| Flags submitted | 581<br><small>first on May 14 at 15:04 UTC</small><br><small>last on May 15 at 15:00 UTC</small> |
| Solved | by 2 teams<br><small>first on May 14 at 21:24 UTC by [Zorro.PAS](https://ctftime.org/team/6502){:target="_blank"}</small><br><small>last on May 15 at 15:00 UTC</small> |
| Rated | <span class="review-good">5.0</span> <small>(based on 1 review)</small> |
{:.mbtablestyle}

### Power

| Metric | Value |
| ------ | ----- |
| Value | 284 |
| Categories | pwn |
| Opened | May 14 at 15:25 UTC |
| Flags submitted | 29<br><small>first on May 14 at 15:38 UTC</small><br><small>last on May 15 at 14:46 UTC</small> |
| Solved | by 27 teams<br><small>first on May 14 at 15:38 UTC by [Master Slackers Lazily Ctfing](https://ctftime.org/team/186780){:target="_blank"}</small><br><small>last on May 15 at 14:46 UTC</small> |
| Rated | <span class="review-good">4.5</span> <small>(based on 8 reviews)</small> |
{:.mbtablestyle}

### My Profile

| Metric | Value |
| ------ | ----- |
| Value | 363 |
| Categories | web |
| Opened | May 14 at 15:45 UTC |
| Flags submitted | 39<br><small>first on May 14 at 15:54 UTC</small><br><small>last on May 15 at 13:32 UTC</small> |
| Solved | by 11 teams<br><small>first on May 14 at 17:45 UTC by [SFT0](https://ctftime.org/team/32139){:target="_blank"}</small><br><small>last on May 15 at 13:32 UTC</small> |
| Rated | <span class="review-good">3.5</span> <small>(based on 4 reviews)</small> |
{:.mbtablestyle}

### YANT

| Metric | Value |
| ------ | ----- |
| Value | 379 |
| Categories | web |
| Opened | May 14 at 15:45 UTC |
| Flags submitted | 30<br><small>first on May 14 at 16:50 UTC</small><br><small>last on May 15 at 12:41 UTC</small> |
| Solved | by 9 teams<br><small>first on May 14 at 19:45 UTC by [Bulba Hackers](https://ctftime.org/team/105724){:target="_blank"}</small><br><small>last on May 15 at 12:41 UTC</small> |
| Rated | <span class="review-good">5.0</span> <small>(based on 1 review)</small> |
{:.mbtablestyle}

### Find the flag

| Metric | Value |
| ------ | ----- |
| Value | 100 |
| Categories | misc |
| Opened | May 14 at 16:15 UTC |
| Flags submitted | 440<br><small>first on May 14 at 16:17 UTC</small><br><small>last on May 15 at 14:25 UTC</small> |
| Solved | by 140 teams<br><small>first on May 14 at 16:21 UTC by [Bulba Hackers](https://ctftime.org/team/105724){:target="_blank"}</small><br><small>last on May 15 at 14:25 UTC</small> |
| Rated | <span class="review-good">3.7</span> <small>(based on 44 reviews)</small> |
{:.mbtablestyle}

### Mafia

| Metric | Value |
| ------ | ----- |
| Value | 399 |
| Categories | pwn |
| Opened | May 14 at 16:30 UTC |
| Flags submitted | 9<br><small>first on May 14 at 19:02 UTC</small><br><small>last on May 15 at 13:53 UTC</small> |
| Solved | by 7 teams<br><small>first on May 14 at 20:38 UTC by [burner_herz0g](https://ctftime.org/team/63292){:target="_blank"}</small><br><small>last on May 15 at 13:53 UTC</small> |
| Rated | <span class="review-good">5.0</span> <small>(based on 2 reviews)</small> |
{:.mbtablestyle}

### EasierThanItLooks

| Metric | Value |
| ------ | ----- |
| Value | 389 |
| Categories | reverse |
| Opened | May 14 at 16:44 UTC |
| Flags submitted | 50<br><small>first on May 14 at 16:55 UTC</small><br><small>last on May 15 at 13:46 UTC</small> |
| Solved | by 8 teams<br><small>first on May 14 at 22:35 UTC by [PASECA](https://ctftime.org/team/70335){:target="_blank"}</small><br><small>last on May 15 at 13:46 UTC</small> |
| Rated | <span class="review-good">3.7</span> <small>(based on 6 reviews)</small> |
{:.mbtablestyle}

### Communicating Exponents

| Metric | Value |
| ------ | ----- |
| Value | 260 |
| Categories | crypto |
| Opened | May 14 at 16:45 UTC |
| Flags submitted | 54<br><small>first on May 14 at 16:55 UTC</small><br><small>last on May 15 at 14:19 UTC</small> |
| Solved | by 35 teams<br><small>first on May 14 at 16:55 UTC by [SeaTeaFrogs](https://ctftime.org/team/180435){:target="_blank"}</small><br><small>last on May 15 at 14:19 UTC</small> |
| Rated | <span class="review-good">3.7</span> <small>(based on 13 reviews)</small> |
{:.mbtablestyle}

### 2FA

| Metric | Value |
| ------ | ----- |
| Value | 198 |
| Categories | web |
| Opened | May 14 at 17:00 UTC |
| Flags submitted | 71<br><small>first on May 14 at 17:19 UTC</small><br><small>last on May 15 at 14:44 UTC</small> |
| Solved | by 67 teams<br><small>first on May 14 at 17:19 UTC by [doublepentest](https://ctftime.org/team/157017){:target="_blank"}</small><br><small>last on May 15 at 14:44 UTC</small> |
| Rated | <span class="review-good">4.6</span> <small>(based on 21 reviews)</small> |
{:.mbtablestyle}

### Habybeap

| Metric | Value |
| ------ | ----- |
| Value | 331 |
| Categories | pwn |
| Opened | May 14 at 17:15 UTC |
| Flags submitted | 17<br><small>first on May 14 at 17:57 UTC</small><br><small>last on May 15 at 13:36 UTC</small> |
| Solved | by 16 teams<br><small>first on May 14 at 17:57 UTC by [r3kapig](https://ctftime.org/team/58979){:target="_blank"}</small><br><small>last on May 15 at 13:36 UTC</small> |
| Rated | <span class="review-good">4.3</span> <small>(based on 4 reviews)</small> |
{:.mbtablestyle}

### Hell men's HTTPS

| Metric | Value |
| ------ | ----- |
| Value | 379 |
| Categories | crypto |
| Opened | May 14 at 17:30 UTC |
| Flags submitted | 18<br><small>first on May 14 at 18:41 UTC</small><br><small>last on May 15 at 13:47 UTC</small> |
| Solved | by 9 teams<br><small>first on May 14 at 19:06 UTC by [FaKappa](https://ctftime.org/team/142772){:target="_blank"}</small><br><small>last on May 15 at 13:40 UTC</small> |
| Rated | <span class="review-normal">3.0</span> <small>(based on 2 reviews)</small> |
{:.mbtablestyle}

### Login Page 2

| Metric | Value |
| ------ | ----- |
| Value | 331 |
| Categories | web |
| Opened | May 14 at 17:37 UTC |
| Flags submitted | 37<br><small>first on May 14 at 18:13 UTC</small><br><small>last on May 15 at 13:52 UTC</small> |
| Solved | by 16 teams<br><small>first on May 14 at 18:36 UTC by [Bushwhackers](https://ctftime.org/team/586){:target="_blank"}</small><br><small>last on May 15 at 13:52 UTC</small> |
| Rated | <span class="review-normal">3.0</span> <small>(based on 4 reviews)</small> |
{:.mbtablestyle}

### Distinguisher

| Metric | Value |
| ------ | ----- |
| Value | 389 |
| Categories | crypto |
| Opened | May 14 at 17:45 UTC |
| Flags submitted | 15<br><small>first on May 14 at 19:01 UTC</small><br><small>last on May 15 at 13:55 UTC</small> |
| Solved | by 8 teams<br><small>first on May 14 at 20:36 UTC by [Master Slackers Lazily Ctfing](https://ctftime.org/team/186780){:target="_blank"}</small><br><small>last on May 15 at 13:55 UTC</small> |
| Rated | <span class="review-good">4.3</span> <small>(based on 3 reviews)</small> |
{:.mbtablestyle}

### Armutism

| Metric | Value |
| ------ | ----- |
| Value | 500 |
| Categories | pwn |
| Opened | May 14 at 18:00 UTC |
| Flags submitted | 2<br><small>first on May 14 at 19:02 UTC</small><br><small>last on May 14 at 22:05 UTC</small> |
| Solved | by 1 team<br><small>on May 14 at 22:05 UTC by [Shellphish](https://ctftime.org/team/285){:target="_blank"}</small> |
| Rated | n/a |
{:.mbtablestyle}

### Crackme

| Metric | Value |
| ------ | ----- |
| Value | 500 |
| Categories | reverse |
| Opened | May 14 at 18:30 UTC |
| Flags submitted | 3<br><small>first on May 14 at 19:02 UTC</small><br><small>last on May 15 at 13:45 UTC</small> |
| Solved | by 1 team<br><small>on May 15 at 12:47 UTC by [VTeam](https://ctftime.org/team/27301){:target="_blank"}</small> |
| Rated | n/a |
{:.mbtablestyle}

### BasedUEFI

| Metric | Value |
| ------ | ----- |
| Value | 454 |
| Categories | reverse |
| Opened | May 14 at 19:30 UTC |
| Flags submitted | 6<br><small>first on May 14 at 22:31 UTC</small><br><small>last on May 15 at 14:40 UTC</small> |
| Solved | by 3 teams<br><small>first on May 15 at 00:38 UTC by [VTeam](https://ctftime.org/team/27301){:target="_blank"}</small><br><small>last on May 15 at 14:40 UTC</small> |
| Rated | <span class="review-good">5.0</span> <small>(based on 1 review)</small> |
{:.mbtablestyle}

### Battletoads

| Metric | Value |
| ------ | ----- |
| Value | 100 |
| Categories | stego |
| Opened | May 14 at 21:17 UTC |
| Flags submitted | 110<br><small>first on May 14 at 21:47 UTC</small><br><small>last on May 15 at 15:00 UTC</small> |
| Solved | by 14 teams<br><small>first on May 14 at 21:49 UTC by [TCET](https://ctftime.org/team/186798){:target="_blank"}</small><br><small>last on May 15 at 12:04 UTC</small> |
| Rated | <span class="review-good">4.7</span> <small>(based on 6 reviews)</small> |
{:.mbtablestyle}

### Feedback

| Metric | Value |
| ------ | ----- |
| Value | 10 |
| Categories | misc |
| Opened | May 15 at 11:30 UTC |
| Flags submitted | 93<br><small>first on May 15 at 11:31 UTC</small><br><small>last on May 15 at 15:00 UTC</small> |
| Solved | by 77 teams<br><small>first on May 15 at 11:31 UTC by [cr4ck/y0ur/s3cr3t](https://ctftime.org/team/155262){:target="_blank"}</small><br><small>last on May 15 at 15:00 UTC</small> |
| Rated | <span class="review-good">4.7</span> <small>(based on 19 reviews)</small> |
{:.mbtablestyle}

**P.S.** Thanks for participating and see you next year!
