---
title: Bastl Kompas
summary: A really easy DIY eurorack kit and a great module to trigger drums
date: 2020-01-19 14:25:44
tags:
 - music
 - modular
 - kompas
category:
- patreon
---

A few days ago, [I built the Kompas module](https://alienlebarge.ch/photos/2020/01/ate9u.html). This is my feedback.

## Why this module

I own the [Squid Salmple](https://busycircuits.com/alm022/) and love it. It's a great sampler on which you can trigger eight samples simultanously. I was looking for a solution to easily create patterns for it in a live situation.

### Past patch configuration

#### Channels 1 to 3

Until now, I was using [Grids](https://mutable-instruments.net/modules/grids/) to trigger the first three channels of the Squid. They usually are  kicks, snares and hats. Grids is great because, you only need to turn a knob to change your patterns.

Channel one was triggered by the Varigate 8+ too using a mult. It helps to get a "four on the floor" kick for a more technoïde rythme.

#### Channels 4 to 8

The rest of the channels were triggered by a [Varigate 8+](https://malekkoheavyindustry.com/product/varigate-8/). 
This solution was not ideal in a live situation. It's pretty hard to create new pattern on the fly using Varigate's sliders.

### Actual patch configuration

#### Channel 1 to 3

Nothing has changed.

#### Channel 4 to 8

Now, I trigger channel four, five and six withe the Kompas. It works almost the same way as the Grids: With the turn of a knob, I can change the pattern for the corresponding channel.

Channel seven and eight can be triggered by anything else.

## The build

I have not built a lot of modules. The first I built was the [Radio Music](https://musicthing.co.uk/pages/radio.html) and then two [4ms Passive Mult](http://4mscompany.com/p.php?p=962).

It was time for a new build. So I ordered a Kompas kit on [Thonk](https://www.thonk.co.uk/).

The Kompas was a really easy build. There are no difficulties. You even get some welding wire which was much better than mine. The build took me approximately two hours.

Great job Bastl !

### Problems

I am listing the problems to help you where I was stuck or so that you do not make the same mistakes as me.

The only issues I have encountered are the following:

#### Problem 1: Check the resistors !

The first one was my fault. I haven't well measured the resistors and switched the 10<abbr title="kilohms">K</abbr> and 1<abbr title="Megohms">M</abbr> ones. I managed to get out of it and correct the problem. It was the first time that I had to desolder resistors. I have succeeded and for a total beginner’s point of view, I was quite proud.

#### Problem 2: Assembly guide wasn't clear enough

When soldering the 10<abbr title="kilohms">K</abbr> and 100<abbr title="kilohms">K</abbr> resistors on the bottom parts, the assembly guide is not very clear which one goes where. I had to look at the [schematics](https://github.com/stziopa/kompas/tree/master/Schematics) to figure out what was the right position for the 10<abbr title="kilohms">K</abbr> and 100<abbr title="kilohms">K</abbr>.

Here are the right positions:

- R1: 100<abbr title="kilohms">K</abbr>
- R4: 100<abbr title="kilohms">K</abbr>
- R5: 100<abbr title="kilohms">K</abbr>
- R6: 100<abbr title="kilohms">K</abbr>
- R13: 100<abbr title="kilohms">K</abbr>
- R16: 100<abbr title="kilohms">K</abbr>
- R18: 10<abbr title="kilohms">K</abbr>
- R20: 10<abbr title="kilohms">K</abbr>
- R22: 10<abbr title="kilohms">K</abbr>

#### Problem 3: Missing parts

The male headers were missing, so I have to order some. (And wait two days until I get them. It was looong.)
Check you have all the parts before starting the build.

## Musically

The Kompas doesn't generate so well crafted patterns like Grids. It's more random.
For secondary rythmics stuff, this is exactly what I was looking for.

Each channel as a different pattern generator algorithm:

- Longitude: Pseudo-Euclidean probability
- Altitude: Probability in between Longitude and Altitude
- Latitude: All pseudo-random probability

Each time you turn a channel's knobs or feed some CV, the corresponding pattern is generated.

## Final thought

Kompas is a great module and a easy build. After playing with it for some hours, it really feeds my needs.

And, **I have a lot of fun** !
