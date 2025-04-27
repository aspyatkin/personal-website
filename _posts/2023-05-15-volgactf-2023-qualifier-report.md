---
layout: post
title: 'VolgaCTF 2023 Qualifier: report'
permalink: /volgactf-2023-qualifier-report/
date: 2023-05-15 10:00:00 +0200
author: aptkn
meta: CTF, VolgaCTF, 2023, Qualifier
comments: false
read_time: true
image: /assets/volgactf-2023-qualifier/img/cover.jpg
---

On May 13-14th, [VolgaCTF.org](https://ctftime.org/team/27094){:target="_blank"} team held its annual qualifier event, namely [VolgaCTF 2023 Qualifier](https://ctftime.org/event/1847){:target="_blank"}.

The report sheds light on some key metrics that were collected during the competition this year. As always, the data is compared against the previous year event, that is [VolgaCTF 2022 Qualifier](https://ctftime.org/event/1551).

<script src="/assets/volgactf-2023-qualifier/js/Chart.bundle.min.js"></script>
<script src="/assets/volgactf-2023-qualifier/js/part.js"></script>

## Key metrics

- [Sign up](#sign-up)
- [Number of teams](#number-of-teams)
- [Team sign in activity](#team-sign-in-activity)
- [Task submit attempts distribution](#task-submit-attempts-distribution)
- [Task hit distribution](#task-hit-distribution)
- [Task review distribution](#task-review-distribution)
- [Team/country distribution](#teamcountry-distribution)

## Tasks
- [Recurrent](#recurrent)
- [Letters](#letters)
- [SysVM](#sysvm)
- [Find the flag2](#find-the-flag2)
- [1337](#1337)
- [TruCrypt](#trucrypt)
- [Muk-jji-ppa](#muk-jji-ppa)
- [PHP](#php)
- [SPlin](#splin)
- [Classic](#classic)
- [DOOM2](#doom2)
- [Groovy](#groovy)
- [Accelerated](#accelerated)
- [ponGO](#pongo)
- [PwnExam](#pwnexam)
- [Feedback](#feedback)

### Sign up
Sign up was made available on April 14th and teams could register up to the end of the competition. The most number of teams (103), unsurprisingly, joined the event on the first day of the contest, May 13th.

<canvas id="chart_signup" width="400" height="300"></canvas>
<br>

### Number of teams
This year saw an slight decrease in the number of teams playing:

| Number of teams | VolgaCTF 2023 Qualifier | VolgaCTF 2022 Qualifier | Change |
| --------------- | ------------------- | ------------------- | ------ |
| Total | 426 | 481 | <span class="trend-down">-55</span> |
| Qualified | 346 | 404 | <span class="trend-down">-58</span> |
| Disqualified | 0 | 0 | &ndash; |
| Signed in during the competition | 343 | 307 | <span class="trend-up">+36</span> |
| Submitted at least one flag | 181 | 195 | <span class="trend-down">-14</span> |
| Solved at least one task | 140 | 176 | <span class="trend-down">-36</span> |
| Reviewed at least one task | 88 | 85 | <span class="trend-up">+3</span> |
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

| # | Country | Number of teams (2023) | Number of teams (2022) | Change |
| - | ------- | ---------------------- | -----------------------| ------ |
| 1 | Russia | 151 | 178 | <span class="trend-down">-27</span> |
| 2 | India | 21 | 25 | <span class="trend-down">-4</span> |
| 3 | International | 18 | 16 | <span class="trend-up">+2</span> |
| 4 | Vietnam | 15 | 14 | <span class="trend-up">+1</span> |
| 5 | Japan | 14 | 12 | <span class="trend-up">+2</span> |
| 6 | United States | 12 | 17 | <span class="trend-down">-5</span> |
| 7 | Republic of Korea | 9 | 7 | <span class="trend-up">+2</span> |
| 8 | China | 9 | 31 | <span class="trend-down">-22</span> |
| 9 | Mongolia | 8 | 0 | <span class="trend-up">+8</span> |
| 10 | France | 6 | 4 | <span class="trend-up">+2</span> |
| 11 | Bangladesh | 6 | 9 | <span class="trend-down">-3</span> |
| 12 | Iran | 5 | 2 | <span class="trend-up">+3</span> |
| 13 | Indonesia | 5 | 3 | <span class="trend-up">+2</span> |
| 14 | Tanzania | 4 | 0 | <span class="trend-up">+4</span> |
| 15 | Hong Kong | 4 | 4 | &ndash; |
| 16 | United Kingdom | 3 | 3 | &ndash; |
| 17 | Singapore | 3 | 6 | <span class="trend-down">-3</span> |
| 18 | Poland | 3 | 3 | &ndash; |
| 19 | Italy | 3 | 3 | &ndash; |
| 20 | Hashemite Kingdom of Jordan | 3 | 2 | <span class="trend-up">+1</span> |
| 21 | Greece | 3 | 1 | <span class="trend-up">+2</span> |
| 22 | Germany | 3 | 3 | &ndash; |
| 23 | Ukraine | 2 | 1 | <span class="trend-up">+1</span> |
| 24 | Thailand | 2 | 4 | <span class="trend-down">-2</span> |
| 25 | Spain | 2 | 3 | <span class="trend-down">-1</span> |
| 26 | Morocco | 2 | 4 | <span class="trend-down">-2</span> |
| 27 | Malaysia | 2 | 0 | <span class="trend-up">+2</span> |
| 28 | Kazakhstan | 2 | 4 | <span class="trend-down">-2</span> |
| 29 | Australia | 2 | 3 | <span class="trend-down">-1</span> |
| 30 | Algeria | 2 | 2 | &ndash; |
| 31 | Uzbekistan | 1 | 0 | <span class="trend-up">+1</span> |
| 32 | Turkey | 1 | 5 | <span class="trend-down">-4</span> |
| 33 | Tunisia | 1 | 2 | <span class="trend-down">-1</span> |
| 34 | Taiwan | 1 | 4 | <span class="trend-down">-3</span> |
| 35 | Syria | 1 | 0 | <span class="trend-up">+1</span> |
| 36 | Somalia | 1 | 0 | <span class="trend-up">+1</span> |
| 37 | Serbia | 1 | 0 | <span class="trend-up">+1</span> |
| 38 | Saudi Arabia | 1 | 3 | <span class="trend-down">-2</span> |
| 39 | Mexico | 1 | 1 | &ndash; |
| 40 | Marshall Islands | 1 | 0 | <span class="trend-up">+1</span> |
| 41 | Lesotho | 1 | 0 | <span class="trend-up">+1</span> |
| 42 | Ivory Coast | 1 | 0 | <span class="trend-up">+1</span> |
| 43 | Israel | 1 | 0 | <span class="trend-up">+1</span> |
| 44 | Hungary | 1 | 1 | &ndash; |
| 45 | Egypt | 1 | 2 | <span class="trend-down">-1</span> |
| 46 | Dominica | 1 | 0 | <span class="trend-up">+1</span> |
| 47 | Cyprus | 1 | 0 | <span class="trend-up">+1</span> |
| 48 | Costa Rica | 1 | 0 | <span class="trend-up">+1</span> |
| 49 | Canada | 1 | 1 | &ndash; |
| 50 | Belarus | 1 | 3 | <span class="trend-down">-2</span> |
| 51 | Armenia | 1 | 1 | &ndash; |
| 52 | Albania | 1 | 1 | &ndash; |
{:.mbtablestyle}

### Recurrent

| Metric | Value |
| ------ | ----- |
| Value | 213 |
| Categories | crypto |
| Opened | May 13 at 15:00 UTC |
| Flags submitted | 216<br><small>first on May 13 at 15:06 UTC</small><br><small>last on May 14 at 14:59 UTC</small> |
| Solved | by 57 teams<br><small>first on May 13 at 15:07 UTC by [dtl](https://ctftime.org/team/157017){:target="_blank"}</small><br><small>last on May 14 at 14:51 UTC</small> |
| Rated | <span class="review-good">4.5</span> <small>(based on 23 reviews)</small> |
{:.mbtablestyle}

### Letters

| Metric | Value |
| ------ | ----- |
| Value | 50 |
| Categories | stego |
| Opened | May 13 at 15:00 UTC |
| Flags submitted | 280<br><small>first on May 13 at 15:02 UTC</small><br><small>last on May 14 at 14:58 UTC</small> |
| Solved | by 27 teams<br><small>first on May 13 at 16:40 UTC by [Dizzy spell](https://ctftime.org/team/150841){:target="_blank"}</small><br><small>last on May 14 at 14:15 UTC</small> |
| Rated | <span class="review-good">3.6</span> <small>(based on 14 reviews)</small> |
{:.mbtablestyle}

### SysVM

| Metric | Value |
| ------ | ----- |
| Value | 454 |
| Categories | reverse |
| Opened | May 13 at 15:00 UTC |
| Flags submitted | 26<br><small>first on May 13 at 15:45 UTC</small><br><small>last on May 14 at 11:29 UTC</small> |
| Solved | by 3 teams<br><small>first on May 14 at 00:14 UTC by [C4T BuT S4D](https://ctftime.org/team/83435){:target="_blank"}</small><br><small>last on May 14 at 11:29 UTC</small> |
| Rated | <span class="review-good">5.0</span> <small>(based on 3 reviews)</small> |
{:.mbtablestyle}

### Find the flag2

| Metric | Value |
| ------ | ----- |
| Value | 172 |
| Categories | web |
| Opened | May 13 at 15:00 UTC |
| Flags submitted | 616<br><small>first on May 13 at 15:02 UTC</small><br><small>last on May 14 at 14:37 UTC</small> |
| Solved | by 87 teams<br><small>first on May 13 at 15:08 UTC by [gwf](https://ctftime.org/team/65609){:target="_blank"}</small><br><small>last on May 14 at 14:08 UTC</small> |
| Rated | <span class="review-good">4.1</span> <small>(based on 39 reviews)</small> |
{:.mbtablestyle}

### 1337

| Metric | Value |
| ------ | ----- |
| Value | 281 |
| Categories | web |
| Opened | May 13 at 16:00 UTC |
| Flags submitted | 37<br><small>first on May 13 at 16:07 UTC</small><br><small>last on May 14 at 13:59 UTC</small> |
| Solved | by 28 teams<br><small>first on May 13 at 16:39 UTC by [Red Cadets](https://ctftime.org/team/59617){:target="_blank"}</small><br><small>last on May 14 at 13:59 UTC</small> |
| Rated | <span class="review-good">4.0</span> <small>(based on 16 reviews)</small> |
{:.mbtablestyle}

### TruCrypt

| Metric | Value |
| ------ | ----- |
| Value | 410 |
| Categories | crypto |
| Opened | May 13 at 17:00 UTC |
| Flags submitted | 18<br><small>first on May 13 at 17:20 UTC</small><br><small>last on May 14 at 14:33 UTC</small> |
| Solved | by 6 teams<br><small>first on May 14 at 00:13 UTC by [FaKappa](https://ctftime.org/team/142772){:target="_blank"}</small><br><small>last on May 14 at 14:33 UTC</small> |
| Rated | <span class="review-good">4.0</span> <small>(based on 2 reviews)</small> |
{:.mbtablestyle}

### Muk-jji-ppa

| Metric | Value |
| ------ | ----- |
| Value | 228 |
| Categories | misc |
| Opened | May 13 at 17:30 UTC |
| Flags submitted | 69<br><small>first on May 13 at 17:36 UTC</small><br><small>last on May 14 at 14:48 UTC</small> |
| Solved | by 49 teams<br><small>first on May 13 at 17:54 UTC by [Dizzy spell](https://ctftime.org/team/150841){:target="_blank"}</small><br><small>last on May 14 at 14:48 UTC</small> |
| Rated | <span class="review-good">4.4</span> <small>(based on 27 reviews)</small> |
{:.mbtablestyle}

### PHP

| Metric | Value |
| ------ | ----- |
| Value | 194 |
| Categories | web |
| Opened | May 13 at 18:30 UTC |
| Flags submitted | 113<br><small>first on May 13 at 18:43 UTC</small><br><small>last on May 14 at 14:50 UTC</small> |
| Solved | by 70 teams<br><small>first on May 13 at 18:58 UTC by [Dizzy spell](https://ctftime.org/team/150841){:target="_blank"}</small><br><small>last on May 14 at 14:50 UTC</small> |
| Rated | <span class="review-good">4.6</span> <small>(based on 34 reviews)</small> |
{:.mbtablestyle}

### SPlin

| Metric | Value |
| ------ | ----- |
| Value | 500 |
| Categories | crypto |
| Opened | May 13 at 18:30 UTC |
| Flags submitted | 10<br><small>first on May 13 at 18:45 UTC</small><br><small>last on May 14 at 12:54 UTC</small> |
| Solved | by 0 teams |
| Rated | n/a |
{:.mbtablestyle}

### Classic

| Metric | Value |
| ------ | ----- |
| Value | 250 |
| Categories | stego |
| Opened | May 13 at 19:00 UTC |
| Flags submitted | 129<br><small>first on May 13 at 19:05 UTC</small><br><small>last on May 14 at 14:43 UTC</small> |
| Solved | by 1 teams<br><small>on May 14 at 00:26 UTC by [dtl](https://ctftime.org/team/157017){:target="_blank"}</small> |
| Rated | <span class="review-good">4.0</span> <small>(based on 1 review)</small> |
{:.mbtablestyle}

### DOOM2

| Metric | Value |
| ------ | ----- |
| Value | 221 |
| Categories | misc |
| Opened | May 13 at 20:00 UTC |
| Flags submitted | 165<br><small>first on May 13 at 20:11 UTC</small><br><small>last on May 14 at 14:41 UTC</small> |
| Solved | by 53 teams<br><small>first on May 13 at 20:13 UTC by [Karasique](https://ctftime.org/team/77786){:target="_blank"}</small><br><small>last on May 14 at 14:41 UTC</small> |
| Rated | <span class="review-good">4.5</span> <small>(based on 19 reviews)</small> |
{:.mbtablestyle}

### Groovy

| Metric | Value |
| ------ | ----- |
| Value | 199 |
| Categories | stego |
| Opened | May 13 at 20:30 UTC |
| Flags submitted | 46<br><small>first on May 13 at 20:43 UTC</small><br><small>last on May 14 at 14:45 UTC</small> |
| Solved | by 7 teams<br><small>first on May 14 at 05:53 UTC by [CySoc](https://ctftime.org/team/222216){:target="_blank"}</small><br><small>last on May 14 at 14:18 UTC</small> |
| Rated | <span class="review-good">4.8</span> <small>(based on 4 reviews)</small> |
{:.mbtablestyle}

### Accelerated

| Metric | Value |
| ------ | ----- |
| Value | 500 |
| Categories | reverse |
| Opened | May 13 at 21:00 UTC |
| Flags submitted | 1<br><small>on May 14 at 12:56 UTC</small> |
| Solved | by 0 teams |
| Rated | n/a |
{:.mbtablestyle}

### ponGO

| Metric | Value |
| ------ | ----- |
| Value | 326 |
| Categories | pwn |
| Opened | May 13 at 21:30 UTC |
| Flags submitted | 18<br><small>first on May 13 at 23:31 UTC</small><br><small>last on May 14 at 14:49 UTC</small> |
| Solved | by 17 teams<br><small>first on May 14 at 02:28 UTC by [dtl](https://ctftime.org/team/157017){:target="_blank"}</small><br><small>last on May 14 at 14:49 UTC</small> |
| Rated | <span class="review-good">4.8</span> <small>(based on 10 reviews)</small> |
{:.mbtablestyle}

### PwnExam

| Metric | Value |
| ------ | ----- |
| Value | 500 |
| Categories | pwn |
| Opened | May 14 at 06:30 UTC |
| Flags submitted | 2<br><small>first on May 14 at 12:47 UTC</small><br><small>last on May 14 at 12:56 UTC</small> |
| Solved | by 1 teams<br><small>on May 14 at 12:47 UTC by [r4kapig](https://ctftime.org/team/58979){:target="_blank"}</small> |
| Rated | <span class="review-normal">3.0</span> <small>(based on 1 review)</small> |
{:.mbtablestyle}

### Feedback

| Metric | Value |
| ------ | ----- |
| Value | 10 |
| Categories | misc |
| Opened | May 14 at 12:00 UTC |
| Flags submitted | 137<br><small>first on May 14 at 12:00 UTC</small><br><small>last on May 14 at 14:55 UTC</small> |
| Solved | by 84 teams<br><small>first on May 14 at 12:00 UTC by [Team Mazala](https://ctftime.org/team/65326){:target="_blank"}</small><br><small>last on May 14 at 14:55 UTC</small> |
| Rated | <span class="review-good">4.7</span> <small>(based on 23 reviews)</small> |
{:.mbtablestyle}

**P.S.** Thanks for participating and see you next year!
