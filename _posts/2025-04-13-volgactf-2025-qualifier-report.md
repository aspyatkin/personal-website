---
layout: post
title: 'VolgaCTF 2025 Qualifier: report'
permalink: /volgactf-2025-qualifier-report/
date: 2025-04-13 17:00:00 +0200
author: aptkn
meta: CTF, VolgaCTF, 2025, Qualifier
comments: false
read_time: true
image: /assets/volgactf-2025-qualifier/img/cover.jpg
---

On the weekend, [VolgaCTF.org](https://ctftime.org/team/27094){:target="_blank"} team held its annual qualifier event, namely [VolgaCTF 2025 Qualifier](https://ctftime.org/event/2676){:target="_blank"}.

The report elaborates on some key metrics that were collected during the competition this year. The data is compared against [VolgaCTF 2024 Qualifier](https://ctftime.org/event/2200).

<script src="/assets/volgactf-2025-qualifier/js/Chart.bundle.min.js"></script>
<script src="/assets/volgactf-2025-qualifier/js/part.js"></script>

## Key metrics

- [Sign up](#sign-up)
- [Number of teams](#number-of-teams)
- [Team sign in activity](#team-sign-in-activity)
- [Task submit attempts distribution](#task-submit-attempts-distribution)
- [Task hit distribution](#task-hit-distribution)
- [Task review distribution](#task-review-distribution)
- [Team/country distribution](#teamcountry-distribution)

## Tasks
- [Baby-Welcome](#baby-welcome)
- [sbsbx](#sbsbx)
- [Warez](#warez)
- [Sneaky](#sneaky)
- [Charge of Darkness](#charge-of-darkness)
- [Ponsense](#ponsense)
- [Ponality](#ponality)
- [Field Rules](#field-rules)
- [Gaussian Curve](#gaussian-curve)
- [SQL injection task](#sl-injection-task)
- [Breaking Bad](#breaking-bad)
- [nasOS](#nasos)
- [Broke Bloke](#broke-bloke)
- [Broke Bloke Revenge](#broke-bloke-revenge)
- [Cursed Notes](#cursed-notes)
- [Сockfighting](#cockfighting)
- [Utils](#utils)
- [Cloud](#cloud)
- [Feedback](#feedback)

### Sign up
Sign up was made available on March 3rd and teams could register up to the end of the competition. Unsurprisingly, the maximum number of teams (85) joined the event on the first day of the contest, March 29th.

<canvas id="chart_signup" width="400" height="300"></canvas>
<br>

### Number of teams
This year saw a contunious decline in the number of teams playing:

| Number of teams | VolgaCTF 2025 Qualifier | VolgaCTF 2024 Qualifier | Change |
| --------------- | ------------------- | ------------------- | ------ |
| Total | 457 | 807 | <span class="trend-down">-350</span> |
| Qualified | 380 | 678 | <span class="trend-down">-298</span> |
| Disqualified | 0 | 0 | &ndash; |
| Signed in during the competition | 344 | 569 | <span class="trend-down">-225</span> |
| Submitted at least one flag | 177 | 302 | <span class="trend-down">-125</span> |
| Solved at least one task | 125 | 257 | <span class="trend-down">-132</span> |
| Reviewed at least one task | 66 | 144 | <span class="trend-down">-78</span> |
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

| # | Country | Number of teams (2025) | Number of teams (2024) | Change |
| - | ------- | ---------------------- | -----------------------| ------ |
| 1 | Russia | 274 | 281 | <span class="trend-down">-7</span> |
| 2 | Vietnam | 15 | 22 | <span class="trend-down">-7</span> |
| 3 | Mongolia | 12 | 18 | <span class="trend-down">-6</span> |
| 4 | India | 7 | 60 | <span class="trend-down">-53</span> |
| 5 | China | 7 | 25 | <span class="trend-down">-18</span> |
| 6 | International | 7 | 24 | <span class="trend-down">-17</span> |
| 7 | Belarus | 5 | 6 | <span class="trend-down">-1</span> |
| 8 | France | 4 | 8 | <span class="trend-down">-4</span> |
| 9 | Republic of Korea  | 3 | 18 | <span class="trend-down">-15</span> |
| 10 | Pakistan | 3 | 4 | <span class="trend-down">-1</span> |
| 11 | Kyrgyzstan | 3 | 1 | <span class="trend-up">+2</span> |
| 12 | Kazakhstan | 3 | 16 | <span class="trend-down">-13</span> |
| 13 | Japan | 3 | 11 | <span class="trend-down">-8</span> |
| 14 | Antarctica | 3 | 1 | <span class="trend-up">+2</span> |
| 15 | United States | 2 | 16 | <span class="trend-down">-14</span> |
| 16 | United Kingdom | 2 | 3 | <span class="trend-down">-1</span> |
| 17 | Netherlands | 2 | 0 | <span class="trend-up">+2</span> |
| 18 | Hong Kong | 2 | 7 | <span class="trend-down">-5</span> |
| 19 | Uzbekistan | 1 | 1 | &ndash; |
| 20 | Uruguay | 1 | 0 | <span class="trend-up">+1</span> |
| 21 | Turkey | 1 | 2 | <span class="trend-down">-1</span> |
| 22 | Tanzania | 1 | 0 | <span class="trend-up">+1</span> |
| 23 | Peru | 1 | 2 | <span class="trend-down">-1</span> |
| 24 | Nigeria | 1 | 0 | <span class="trend-up">+1</span> |
| 25 | Niger | 1 | 0 | <span class="trend-up">+1</span> |
| 26 | Nepal | 1 | 2 | <span class="trend-down">-1</span> |
| 27 | Morocco | 1 | 10 | <span class="trend-down">-9</span> |
| 28 | Mauritius | 1 | 0 | <span class="trend-up">+1</span> |
| 29 | Kiribati | 1 | 0 | <span class="trend-up">+1</span> |
| 30 | Italy | 1 | 4 | <span class="trend-down">-3</span> |
| 31 | Iran | 1 | 3 | <span class="trend-down">-2</span> |
| 32 | Indonesia | 1 | 8 | <span class="trend-down">-7</span> |
| 33 | Iceland | 1 | 0 | <span class="trend-up">+1</span> |
| 34 | Hashemite Kingdom of Jordan | 1 | 4 | <span class="trend-down">-3</span> |
| 35 | Greece | 1 | 5 | <span class="trend-down">-4</span> |
| 36 | Egypt | 1 | 5 | <span class="trend-down">-4</span> |
| 37 | Christmas Island | 1 | 0 | <span class="trend-up">+1</span> |
| 38 | Bangladesh | 1 | 9 | <span class="trend-down">-8</span> |
| 39 | Australia | 1 | 2 | <span class="trend-down">-1</span> |
| 40 | Armenia | 1 | 1 | &ndash; |
| 41 | Albania | 1 | 1 | &ndash; |
{:.mbtablestyle}

### Baby-Welcome

| Metric | Value |
| ------ | ----- |
| Value | 331 |
| Categories | pwn |
| Opened | Mar 29 at 12:00 UTC |
| Flags submitted | 73<br><small>first on Mar 29 at 12:00 UTC</small><br><small>last on Mar 30 at 11:49 UTC</small> |
| Solved | by 16 teams<br><small>first on Mar 29 at 13:01 UTC by [bi0s](https://ctftime.org/team/662){:target="_blank"}</small><br><small>last on Mar 30 at 10:39 UTC </small> |
| Rated | <span class="review-good">5.0</span> <small>(based on 3 reviews)</small> |
{:.mbtablestyle}

### sbsbx

| Metric | Value |
| ------ | ----- |
| Value | 316 |
| Categories | pwn |
| Opened | Mar 29 at 12:00 UTC |
| Flags submitted | 34<br><small>first on Mar 29 at 12:14 UTC</small><br><small>last on Mar 30 at 11:09 UTC</small> |
| Solved | by 19 teams<br><small>first on Mar 29 at 13:34 UTC by [bi0s](https://ctftime.org/team/662){:target="_blank"}</small><br><small>last on Mar 30 at 11:09 UTC</small> |
| Rated | <span class="review-good">4.4</span> <small>(based on 5 reviews)</small> |
{:.mbtablestyle}

### Warez

| Metric | Value |
| ------ | ----- |
| Value | 500 |
| Categories | reverse |
| Opened | Mar 29 at 12:00 UTC |
| Flags submitted | 8<br><small>first on Mar 29 at 15:22 UTC</small><br><small>last on Mar 29 at 22:01 UTC</small> |
| Solved | by 1 team<br><small>first on Mar 29 at 21:13 UTC by [Drovosec](https://ctftime.org/team/210132){:target="_blank"}</small><br><small>last on Mar 29 at 21:13 UTC</small> |
| Rated | n/a |
{:.mbtablestyle}

### Sneaky

| Metric | Value |
| ------ | ----- |
| Value | 474 |
| Categories | reverse |
| Opened | Mar 29 at 12:00 UTC |
| Flags submitted | 37<br><small>first on Mar 29 at 12:17 UTC </small><br><small>last on Mar 30 at 10:16 UTC</small> |
| Solved | by 2 teams<br><small>first on Mar 29 at 18:49 UTC by [cR4.sh](https://ctftime.org/team/224675){:target="_blank"}</small><br><small>last on Mar 30 at 08:47 UTC</small> |
| Rated | n/a |
{:.mbtablestyle}

### Charge of Darkness

| Metric | Value |
| ------ | ----- |
| Value | 500 |
| Categories | reverse |
| Opened | Mar 29 at 12:00 UTC |
| Flags submitted | 40<br><small>first on Mar 29 at 12:31 UTC</small><br><small>last on Mar 30 at 09:09 UTC</small> |
| Solved | by 0 teams |
| Rated | n/a |
{:.mbtablestyle}

### Ponsense

| Metric | Value |
| ------ | ----- |
| Value | 437 |
| Categories | pwn |
| Opened | Mar 29 at 12:10 UTC |
| Flags submitted | 7<br><small>first on Mar 29 at 12:42 UTC</small><br><small>last on Mar 30 at 11:25 UTC</small> |
| Solved | by 4 teams<br><small>first on Mar 29 at 17:24 UTC by [bi0s](https://ctftime.org/team/662){:target="_blank"}</small><br><small>last on Mar 30 at 11:25 UTC</small> |
| Rated | n/a |
{:.mbtablestyle}

### Ponality

| Metric | Value |
| ------ | ----- |
| Value | 437 |
| Categories | pwn |
| Opened | Mar 29 at 12:10 UTC |
| Flags submitted | 12<br><small>first on Mar 29 at 13:26 UTC</small><br><small>last on Mar 30 at 01:49 UTC</small> |
| Solved | by 4 teams<br><small>first on Mar 29 at 19:09 UTC by [bi0s](https://ctftime.org/team/662){:target="_blank"}</small><br><small>last on Mar 30 at 01:49 UTC</small> |
| Rated | n/a |
{:.mbtablestyle}

### Field Rules

| Metric | Value |
| ------ | ----- |
| Value | 186 |
| Categories | crypto |
| Opened | Mar 29 at 12:10 UTC |
| Flags submitted | 740<br><small>first on Mar 29 at 12:15 UTC</small><br><small>last on Mar 30 at 11:44 UTC</small> |
| Solved | by 76 teams<br><small>first on Mar 29 at 12:24 UTC by [Drovosec](https://ctftime.org/team/210132){:target="_blank"}</small><br><small>last on Mar 30 at 11:34 UTC</small> |
| Rated | <span class="review-good">4.0</span> <small>(based on 26 reviews)</small> |
{:.mbtablestyle}

### Gaussian Curve

| Metric | Value |
| ------ | ----- |
| Value | 349 |
| Categories | crypto |
| Opened | Mar 29 at 12:10 UTC |
| Flags submitted | 157<br><small>first on Mar 29 at 12:25 UTC</small><br><small>last on Mar 30 at 10:33 UTC</small> |
| Solved | by 13 teams<br><small>first on Mar 29 at 13:14 UTC by [The Balamoshkas](https://ctftime.org/team/157017){:target="_blank"}</small><br><small>last on Mar 30 at 10:33 UTC</small> |
| Rated | <span class="review-good">5.0</span> <small>(based on 5 reviews)</small> |
{:.mbtablestyle}

### SQL injection task

| Metric | Value |
| ------ | ----- |
| Value | 371 |
| Categories | web |
| Opened | Mar 29 at 13:10 UTC |
| Flags submitted | 150<br><small>first on Mar 29 at 13:19 UTC</small><br><small>last on Mar 30 at 11:57 UTC</small> |
| Solved | by 10 teams<br><small>first on Mar 29 at 16:40 UTC by [The Balamoshkas](https://ctftime.org/team/157017){:target="_blank"}</small><br><small>last on Mar 30 at 11:26 UTC</small> |
| Rated | <span class="review-good">4.3</span> <small>(based on 7 reviews)</small> |
{:.mbtablestyle}

### Breaking Bad

| Metric | Value |
| ------ | ----- |
| Value | 454 |
| Categories | pwn |
| Opened | Mar 29 at 13:35 UTC |
| Flags submitted | 15<br><small>first on Mar 29 at 13:36 UTC</small><br><small>last on Mar 30 at 00:45 UTC</small> |
| Solved | by 3 teams<br><small>first on Mar 29 at 21:23 UTC by [L0stAx3s](https://ctftime.org/team/354995){:target="_blank"}</small><br><small>last on Mar 30 at 00:45 UTC</small> |
| Rated | <span class="review-good">5.0</span> <small>(based on 2 reviews)</small> |
{:.mbtablestyle}

### nasOS

| Metric | Value |
| ------ | ----- |
| Value | 182 |
| Categories | web |
| Opened | Mar 29 at 14:10 UTC |
| Flags submitted | 260<br><small>first on Mar 29 at 14:12 UTC</small><br><small>last on Mar 30 at 11:59 UTC</small> |
| Solved | by 79 teams<br><small>first on Mar 29 at 14:29 UTC by [N1gh7m4reFu3L](https://ctftime.org/team/232664){:target="_blank"}</small><br><small>last on Mar 30 at 11:04 UTC</small> |
| Rated | <span class="review-good">4.4</span> <small>(based on 24 reviews)</small> |
{:.mbtablestyle}

### Broke Bloke

| Metric | Value |
| ------ | ----- |
| Value | 215 |
| Categories | crypto |
| Opened | Mar 29 at 14:12 UTC |
| Flags submitted | 96<br><small>first on Mar 29 at 14:16 UTC</small><br><small>last on Mar 30 at 11:49 UTC</small> |
| Solved | by 56 teams<br><small>first on Mar 29 at 14:16 UTC by [The Balamoshkas](https://ctftime.org/team/157017){:target="_blank"}</small><br><small>last on Mar 30 at 10:32 UTC</small> |
| Rated | <span class="review-normal">3.3</span> <small>(based on 22 reviews)</small> |
{:.mbtablestyle}

### Broke Bloke Revenge

| Metric | Value |
| ------ | ----- |
| Value | 437 |
| Categories | crypto |
| Opened | Mar 29 at 17:05 UTC |
| Flags submitted | 36<br><small>first on Mar 29 at 18:10 UTC</small><br><small>last on Mar 30 at 10:26 UTC</small> |
| Solved | by 4 teams<br><small>first on Mar 29 at 18:17 UTC by [The Balamoshkas](https://ctftime.org/team/157017){:target="_blank"}</small><br><small>last on Mar 30 at 00:10 UTC</small> |
| Rated | <span class="review-good">5.0</span> <small>(based on 3 reviews)</small> |
{:.mbtablestyle}

### Cursed Notes

| Metric | Value |
| ------ | ----- |
| Value | 454 |
| Categories | web |
| Opened | Mar 29 at 17:05 UTC |
| Flags submitted | 7<br><small>first on Mar 29 at 19:41 UTC</small><br><small>last on Mar 30 at 11:13 UTC</small> |
| Solved | by 3 teams<br><small>first on Mar 30 at 00:04 UTC by [C4T BuT S4D](https://ctftime.org/team/83435){:target="_blank"}</small><br><small>last on Mar 30 at 11:13 UTC</small> |
| Rated | <span class="review-good">5.0</span> <small>(based on 2 reviews)</small> |
{:.mbtablestyle}

### Сockfighting

| Metric | Value |
| ------ | ----- |
| Value | 363 |
| Categories | crypto |
| Opened | Mar 29 at 17:50 UTC |
| Flags submitted | 28<br><small>first on Mar 29 at 18:22 UTC</small><br><small>last on Mar 30 at 11:39 UTC</small> |
| Solved | by 11 teams<br><small>first on Mar 29 at 19:53 UTC by [BinaryBears](https://ctftime.org/team/36281){:target="_blank"}</small><br><small>last on Mar 30 at 10:32 UTC</small> |
| Rated | <span class="review-good">4.3</span> <small>(based on 4 reviews)</small> |
{:.mbtablestyle}

### Utils

| Metric | Value |
| ------ | ----- |
| Value | 343 |
| Categories | web |
| Opened | Mar 29 at 21:19 UTC |
| Flags submitted | 35<br><small>first on Mar 29 at 21:23 UTC</small><br><small>last on Mar 30 at 10:34 UTC</small> |
| Solved | by 14 teams<br><small>first on Mar 29 at 22:33 UTC by [L0stAx3s](https://ctftime.org/team/354995){:target="_blank"}</small><br><small>last on Mar 30 at 10:34 UTC</small> |
| Rated | <span class="review-bad">2.4</span> <small>(based on 5 reviews)</small> |
{:.mbtablestyle}

### Cloud

| Metric | Value |
| ------ | ----- |
| Value | 379 |
| Categories | web |
| Opened | Mar 30 at 00:07 UTC |
| Flags submitted | 16<br><small>first on Mar 30 at 01:29 UTC</small><br><small>last on Mar 30 at 11:51 UTC</small> |
| Solved | by 9 teams<br><small>first on Mar 30 at 01:29 UTC by [C4T BuT S4D](https://ctftime.org/team/83435){:target="_blank"}</small><br><small>last on Mar 30 at 11:51 UTC</small> |
| Rated | <span class="review-good">5.0</span> <small>(based on 5 reviews)</small> |
{:.mbtablestyle}

### Feedback

| Metric | Value |
| ------ | ----- |
| Value | 10 |
| Categories | misc |
| Opened | Mar 30 at 10:40 UTC |
| Flags submitted | 72<br><small>first on Mar 30 at 10:43 UTC</small><br><small>last on Mar 30 at 11:59 UTC</small> |
| Solved | by 66 teams<br><small>first on Mar 30 at 10:43 UTC by [AreD@Yush?](https://ctftime.org/team/){:target="_blank"}</small><br><small>last on Mar 30 at 11:59 UTC</small> |
| Rated | <span class="review-good">4.6</span> <small>(based on 14 reviews)</small> |
{:.mbtablestyle}

**P.S.** Thanks for participating and see you next year!
