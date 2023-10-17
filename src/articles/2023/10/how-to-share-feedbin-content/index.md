---
date: 2023-10-16T20:25:36.405+02:00
updated: 2023-10-17T09:14:23.321+02:00
title: How to share Feedbin content with Omnivore
category:
  - app
  - read-later
  - rss
visibility: public
syndication:
  - https://social.lol/@alienlebarge/111246098104035947
---

I am currently testing [Omnivore](https://omnivore.app/){rel="external"} as a read-it-later service. [Feedbin](https://feedbin.com/){rel="external"} is my RSS reader, and I was looking for a way to export content from Feedbin to Omnivore. Unfortunately, there is no direct integration. However, after a bit of reverse engineering, here's how to do it:
In the "Share & Save" settings of Feedbin, add a custom service and use the values below:

Label
:   Omnivore

URL
:   `https://omnivore.app/api/save?url=${url}`
