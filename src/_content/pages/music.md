---
title: Music
summary: alienlebarge creating bleeps and bloops that make you dance
permalink: /music/index.html
hidden: true
templateEngineOverride: md,njk
---

I'm djing and producing under the name of alienlebarge.

In the begining of 2019, I started to build an eurorack modular synth. The goal of this rack is to let me create electronic music live.

<h2>Latest jams</h2>
{% import 'list-items.njk' as list %}
{{ list.listItems(collections.jam) }}
