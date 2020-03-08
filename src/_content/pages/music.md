---
title: Music
summary: This is a summary
permalink: /music/index.html
hidden: true
templateEngineOverride: md,njk
---

This is a test

<h2>Latest jams</h2>
{% import 'list-items.njk' as list %}
{{ list.listItems(collections.jam) }}

<ul>
{%- for post in collections.jam -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>
