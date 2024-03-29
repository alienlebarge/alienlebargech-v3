---

title:       "How to build an Overcast OSX app (using Fluid and Keyboard Maestro)"
description: "Overcast has no OSX app. Here's how to build one"
date:        2016-08-18 07:21:04
tags:
 - overcast
 - app
 - podcast
---

[Overcast](https://overcast.fm/) is my favourite podcast app. Thanks to [Marco Arment](https://marco.org/) for building such a great app.
I use the app everytime I commute by car.

The sad news is that Overcast has no OSX app.

> Will you make a web/Mac/other app?
>
> There’s a very basic web app today, and a Mac app might happen someday. I have no plans for other platforms — they’re just not for me.
> — [Overcast FAQ](https://web.archive.org/web/20161219202759/https://overcast.fm/skeptics_faq)

As you can read Overcast provides a web app to listen to your podcast online. But there is two problems with the fact it live in your browser:

1. Sometime you close your browser and Overcast is gone.
2. There's no hotkeys to play/pause easily.

## 1. Turn Overcast webservice into an app

The first point is fixed by turning Overcast web service into an app with [Fluid](https://fluidapp.com/).

## 2. Create your own hotkeys

The second missing feature can be resolved by using [Keyboard Maestro](https://www.keyboardmaestro.com) to provide some hotkeys for Overcast.

Simply create a macro triggered by the hot key of your choice. That macros have to execute an AppleScript to simulate a click on the different buttons.

Here's the one to play/pause the podcast:

    tell application "Overcast"
        do JavaScript "document.getElementById('playpausebutton').click()"
    end tell

How to go back:

    tell application "Overcast"
        do JavaScript "document.getElementById('seekbackbutton').click()"
    end tell

And to go forward:

    tell application "Overcast"
        do JavaScript "document.getElementById('seekforwardbutton').click()"
    end tell

## Download it

I have set a litlle Github repository where [you can download those macros](https://github.com/alienlebarge/km-overcast). Feel free to contribute.

## Support Overcast

Overcast is a great app. Please [support it](https://marco.org/2015/10/09/overcast2).
