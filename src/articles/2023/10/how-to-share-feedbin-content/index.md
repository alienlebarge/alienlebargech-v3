---
date: 2023-10-16T20:25:36.405+02:00
updated: 2023-10-16T20:36:01.463+02:00
title: How to share Feedbin content with Omnivore
visibility: public
syndication:
  - https://social.lol/@alienlebarge/111246098104035947
---

I am currently testing [Omnivore](https://omnivore.app/) as a read-it-later service. [Feedbin](https://feedbin.com/) is my RSS reader, and I was looking for a way to export content from Feedbin to Omnivore. Unfortunately, there is no direct integration. However, after a bit of reverse engineering, here's how to do it:
In the "Share & Save" settings of Feedbin, add a custom service and use the values below:

Label
:   Omnivore

URL
:   `https://omnivore.app/api/save?url=${url}`
