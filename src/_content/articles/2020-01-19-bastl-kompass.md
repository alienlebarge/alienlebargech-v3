---
title: Bastl Kompas
summary: A really easy DIY eurorack kit and a great module to trigger drums
date: 2020-01-19 14:25:44
tags:
 - music
 - modular
 - kompas
---

A few days ago, [I built the Kompas module](https://alienlebarge.ch/photos/2020/01/ate9u.html). This is my feedback.

## Why this module

I was looking for some trigger generator for the [Squid Salmple](https://busycircuits.com/alm022/). I already own the [Grids](https://mutable-instruments.net/modules/grids/) which I love. But it has "only" three triggers and the Squid has 8 channels !

In most of my patches, the Grids trigger the first three channels of the Squid Sample. Previously, I used the [Varigate 8+](https://malekkoheavyindustry.com/product/varigate-8/) to trigger the rest of the channels. It was not a really easy solution in live situation: Turning a knob is more efficient than programming patterns live.
Now, the [Kompas](https://bastl-instruments.com/eurorack/modules/kompas) trigger channels four, five and six and at the turn of a knob, I can change the trigger pattern.

## The build

I have not built a lot of modules. The first I built was the [Radio Music](https://musicthing.co.uk/pages/radio.html) and then two [4ms Passive Mult](http://4mscompany.com/p.php?p=962).

It was time for a new build. So I ordered a Kompas kit on [Thonk](https://www.thonk.co.uk/).

The Kompas was a really easy build. There are no difficulties. You even get some welding wire which was much better than mine. The build took me approximately two hours.

### Problems
The only issues I have encountered are the following:

#### Problem 1: Check the resistors !
The first one was my fault. I haven't well measured the resistors and switched the 10k and 1M ones. I managed to get out of it and correct the problem. It was the first time that I had to desolder resistors. I have succeeded and for a total beginner’s point of view, I was quite proud.

#### Problem 2: Assembly guide wasn't clear enough
When soldering the 10K and 100K resistors on the bottom parts, the assembly guide is not very clear which one goes where. I had to look at the [schematics](https://github.com/stziopa/kompas/tree/master/Schematics) to figure out what was the right position for the 10K and 100K. Here they are:
- R1: 100K
- R4: 100K
- R5: 100K
- R6: 100K
- R13: 100K
- R16: 100K
- R18: 10k
- R20: 10K
- R22: 10K

#### Problem 3: Missing parts
The male headers were missing, so I have to order some. (And wait two days until I get them. It was looong.)

Other than that, everything went very well. It's an easy build. Well done Bastl !

## Musically

The Kompas doesn't generate so well crafted patterns like Grids. It's more random which is what I was looking for.
Each channel as a different pattern generator algorithm:
- Longitude: Pseudo-Euclidean probability
- Altitude: Probability in between Longitude and Altitude
- Latitude: All pseudo-random probability

Each time you turn a channel's knobs or feed some CV, the corresponding pattern is generated.

## Final thought

Kompas is a great module and a easy build. After playing with it for some hours, it really feeds my needs.
