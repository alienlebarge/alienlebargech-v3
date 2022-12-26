---
title: Hi, I’m Cédric
permalink: /index.html
type: homepage
templateEngineOverride: md,njk
---

Hi, I’m Cédric a swiss front end engineer based in Lausanne with a love for electronic music and hiking

## Articles

{% set latest_articles = collections.article | reverse %}
<ul>
{%- for item in latest_articles.slice(0,5) -%}
    <li>{{- item.data.title }} <time class="dt-published"
                                      datetime="{{ item.data.date | date }}"><span>{{- item.data.date | date("DD MMM YYYY") -}}</span></time> <a href="{{- item.url | url -}}">
                                         Read 
                                      </a>
    </li>
{%- endfor -%}
</ul>

[Read more articles](/articles)

## Notes

{% set latest_notes = collections.note | reverse %}

<ul>
{%- for item in latest_notes.slice(0,5) -%}
    <li>{{- item.templateContent | safe -}}
        <time class="dt-published"
              datetime="{{ item.data.date | date }}">{{ item.data.date | date("DD MMM YYYY") }}</time><a href="{{ item.url | url }}">Read more -&gt;</a>
    </li>
{%- endfor -%}
</ul>

[Read more notes](/notes)

## Photos

{% set latest_photos = collections.photo | reverse %}
{%- import 'image.njk' as image -%}

<ul>
{%- for item in latest_photos.slice(0,5) -%}
    <li>{{ image.image(item.data.photo[0].url, item.data.photo[0].alt, settings=srcsets.grid, appUrl=app.url, styleModifier="c-scale-hover__item") }}
        <time class="dt-published"
              datetime="{{ item.data.date | date }}">{{ item.data.date | date("DD MMM YYYY") }}</time><a href="{{ item.url | url }}">Read more -&gt;</a>
    </li>
{%- endfor -%}
</ul>
