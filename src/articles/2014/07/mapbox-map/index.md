---

title:  "Mapbox map API"
description: How to build maps with Mapbox API and Jekyll
date:   2014-07-31 13:10:35
image:  https://api.tiles.mapbox.com/v4/alienlebarge.io3heb5m/pin-m-m(6.52,46.68),pin-m-m(6.52,46.67),pin-m-m(6.52,46.66),pin-m-m(6.52,46.65),pin-m-m(6.52,46.64),pin-m-m(6.53,46.67),pin-m-m(6.54,46.66),pin-m-m(6.55,46.67),pin-m-m(6.56,46.68),pin-m-m(6.56,46.67),pin-m-m(6.56,46.66),pin-m-m(6.56,46.65),pin-m-m(6.56,46.64),pin-m-a(6.58,46.66),pin-m-a(6.58,46.65),pin-m-a(6.58,46.64),pin-m-a(6.59,46.67),pin-m-a(6.59,46.65),pin-m-a(6.60,46.68),pin-m-a(6.60,46.65),pin-m-a(6.61,46.67),pin-m-a(6.61,46.65),pin-m-a(6.62,46.66),pin-m-a(6.62,46.65),pin-m-a(6.62,46.64),pin-m-p(6.64,46.68),pin-m-p(6.64,46.67),pin-m-p(6.64,46.66),pin-m-p(6.64,46.65),pin-m-p(6.64,46.64),pin-m-p(6.65,46.68),pin-m-p(6.65,46.66),pin-m-p(6.66,46.68),pin-m-p(6.66,46.66),pin-m-p(6.67,46.68),pin-m-p(6.67,46.66),pin-m-p(6.68,46.67)/6.6,46.66,11/800x800.png?access_token=pk.eyJ1IjoiYWxpZW5sZWJhcmdlIiwiYSI6Ik1hN3ZxVjgifQ.S2hbxqNnn7kU7HRnd6jYVg
tags:   jekyll, map, mapbox
coordinates: 6.6,46.66
zoom: 11
markers:
- coordinates: 6.52,46.68
  label: m
- coordinates: 6.52,46.67
  label: m
- coordinates: 6.52,46.66
  label: m
- coordinates: 6.52,46.65
  label: m
- coordinates: 6.52,46.64
  label: m
- coordinates: 6.53,46.67
  label: m
- coordinates: 6.54,46.66
  label: m
- coordinates: 6.55,46.67
  label: m
- coordinates: 6.56,46.68
  label: m
- coordinates: 6.56,46.67
  label: m
- coordinates: 6.56,46.66
  label: m
- coordinates: 6.56,46.65
  label: m
- coordinates: 6.56,46.64
  label: m
- coordinates: 6.58,46.66
  label: a
- coordinates: 6.58,46.65
  label: a
- coordinates: 6.58,46.64
  label: a
- coordinates: 6.59,46.67
  label: a
- coordinates: 6.59,46.65
  label: a
- coordinates: 6.60,46.68
  label: a
- coordinates: 6.60,46.65
  label: a
- coordinates: 6.61,46.67
  label: a
- coordinates: 6.61,46.65
  label: a
- coordinates: 6.62,46.66
  label: a
- coordinates: 6.62,46.65
  label: a
- coordinates: 6.62,46.64
  label: a
- coordinates: 6.64,46.68
  label: p
- coordinates: 6.64,46.67
  label: p
- coordinates: 6.64,46.66
  label: p
- coordinates: 6.64,46.65
  label: p
- coordinates: 6.64,46.64
  label: p
- coordinates: 6.65,46.68
  label: p
- coordinates: 6.65,46.66
  label: p
- coordinates: 6.66,46.68
  label: p
- coordinates: 6.66,46.66
  label: p
- coordinates: 6.67,46.68
  label: p
- coordinates: 6.67,46.66
  label: p
- coordinates: 6.68,46.67
  label: p
---

Maps are cool and I love them. Since I'm rebuilding this blog, I wanted to add some of them in the design. As I love trekking, I was thinking it was a fine idea to add them on posts where I talk about trekking and things like that.
[Katy DeCorah](https://twitter.com/katydecorah) was already doing that on [her blog](https://katydecorah.com). [Her work](https://web.archive.org/web/20141006200907/http://katydecorah.com:80/code/2014/07/26/static-mapbox-for-jekyll/) was a great inspiration.

I will show you how I build this for this blog based on [Jekyll](https://jekyllrb.com/).

Mapbox provide an API to build [static maps](https://www.mapbox.com/developers/api/static/). This is what I use to add the maps as background image in the header. I use static maps because they are only used as design elements. They don't need to be zoomable, etc.

## Building a map

### The request

This is the request for a map:

    https://api.tiles.mapbox.com/v4/{mapid}/{lon},{lat},{z}/{width}x{height}.{format}?access_token=<your access token>

### What do we need ?

Here are the things we need:

* `mapid`
* `lon`
* `lat`
* `width`
* `height`
* `format`
* `access_token`

#### Things that don't change

The `mapid` and the `access_token` will always be the same. So I put them in the `_config.yml` config file. If they change, I just need to update them in one file.

    mapbox_token: ...
    mapbox_mapid: ...

`height` and `width` are hardcoded in the request. It would be nice to put them too in the config file. But I'm looking to add some media queries. So at this time, I keep them here.

The `format` will be `.png` because PNG is cool. It is hardcoded too.

#### Specific value

The only value that will change from a post to an other are the coordinates where to center the map and the zoom factor.

We will add them in the Front Matter of the post like this:

    coordinates: 6.407948,46.718826
    zoom: 13

### Build the request

We have to build the request for the background image.

    https://api.tiles.mapbox.com/v4/{{ site.mapbox_mapid }}/{% for coordinate in page.coordinates limit:1 %}{{ coordinate }}{% endfor %},{% if page.zoom %}{{ page.zoom }}{% else %}15{% endif %}/800x800.png?access_token={{ site.mapbox_token }})

As you can see, the `page.zoom` isn't required. If there is no `zoom`value in the Front Mater, it will be set to `15`.

### The result

And here is the result:

    https://api.tiles.mapbox.com/v4/alienlebarge.io3heb5m/6.407948,46.718826,15/800x800.png?access_token=pk.eyJ1IjoiYWxpZW5sZWJhcmdlIiwiYSI6Ik1hN3ZxVjgifQ.S2hbxqNnn7kU7HRnd6jYVg

<figure>
  <img src="https://api.tiles.mapbox.com/v4/alienlebarge.io3heb5m/6.407948,46.718826,15/800x800.png?access_token=pk.eyJ1IjoiYWxpZW5sZWJhcmdlIiwiYSI6Ik1hN3ZxVjgifQ.S2hbxqNnn7kU7HRnd6jYVg" alt="Map of the Saut du Day">
  <figcaption>
    The map generated by the request
  </figcaption>
</figure>

## We want markers !

Maps are cool but if we can add  marker, it's even cooler. And yeah (!), [we can do that with Mapbox](https://www.mapbox.com/developers/api/static/#markers)

We have to add the markers in the request juste after the `mapid`.

  https://api.tiles.mapbox.com/v4/{mapid}/{markers}/{lon},{lat},{z}/{width}x{height}.{format}?access_token=<your access token>

### Markers parameters

The [`{markers}`](https://www.mapbox.com/developers/api/static/#markers) have to be formatted like that:

    {name}-{label}+{color}({lon},{lat})

As everything are is specific for each post/map, we will add this in the Front Matter of the post.

    markers:
    - coordinates: 6.407948,46.718826
      name: pin-m
      label: water
    - coordinates: 6.400716,46.717375
      name: pin-m
      label: rail
    - coordinates: 6.400437,46.716507
      label: parking
    - coordinates: 6.395974,46.722333

### Build it

Here is the liquid template code for the markers:

    {% raw %}
    {% for marker in page.markers %}
      {% if marker.name %}
        {{ marker.name }}
      {% else %}
        pin-m
      {% endif %}
      {% if marker.label %}
        -{{ marker.label }}
      {% endif %}
      (
        {% for coordinate in marker.coordinates limit:1 %}
          {{ coordinate }}
        {% endfor %}
      )
      {% if forloop.last %}
      {% else %}
        ,
      {% endif %}
    {% endfor %}
    {% endraw %}

As you can see, `name` and `label` are not required.

So now, let's put everything together.

    https://api.tiles.mapbox.com/v4/{{ site.mapbox_mapid }}/{% for marker in page.markers %}{% if marker.name %}{{ marker.name }}{% else %}pin-m{% endif %}{% if marker.label %}-{{marker.label}}{% endif %}({% for coordinate in marker.coordinates limit:1 %}{{ coordinate }}{% endfor %}){% if forloop.last %}{% else %},{% endif %}{% endfor %}/{% for coordinate in page.coordinates limit:1 %}{{ coordinate }}{% endfor %},{% if page.zoom %}{{ page.zoom }}{% else %}15{% endif %}/800x800.png?access_token={{ site.mapbox_token }}

<figure>
  <img src="https://api.tiles.mapbox.com/v4/alienlebarge.io3heb5m/pin-m-water(6.407948,46.718826),pin-m-rail(6.400716,46.717375),pin-m-parking(6.400437,46.716507),pin-m(6.395974,46.722333)/6.407948,46.718826,15/800x800.png?access_token=pk.eyJ1IjoiYWxpZW5sZWJhcmdlIiwiYSI6Ik1hN3ZxVjgifQ.S2hbxqNnn7kU7HRnd6jYVg" alt="Map of the Saut du Day with markers">
  <figcaption>
    The map with some markers
  </figcaption>
</figure>

## Let the fun begin

I hope you will have as much fun as me.

<figure>
  <img src="https://api.tiles.mapbox.com/v4/alienlebarge.io3heb5m/pin-m-m(6.52,46.68),pin-m-m(6.52,46.67),pin-m-m(6.52,46.66),pin-m-m(6.52,46.65),pin-m-m(6.52,46.64),pin-m-m(6.53,46.67),pin-m-m(6.54,46.66),pin-m-m(6.55,46.67),pin-m-m(6.56,46.68),pin-m-m(6.56,46.67),pin-m-m(6.56,46.66),pin-m-m(6.56,46.65),pin-m-m(6.56,46.64),pin-m-a(6.58,46.66),pin-m-a(6.58,46.65),pin-m-a(6.58,46.64),pin-m-a(6.59,46.67),pin-m-a(6.59,46.65),pin-m-a(6.60,46.68),pin-m-a(6.60,46.65),pin-m-a(6.61,46.67),pin-m-a(6.61,46.65),pin-m-a(6.62,46.66),pin-m-a(6.62,46.65),pin-m-a(6.62,46.64),pin-m-p(6.64,46.68),pin-m-p(6.64,46.67),pin-m-p(6.64,46.66),pin-m-p(6.64,46.65),pin-m-p(6.64,46.64),pin-m-p(6.65,46.68),pin-m-p(6.65,46.66),pin-m-p(6.66,46.68),pin-m-p(6.66,46.66),pin-m-p(6.67,46.68),pin-m-p(6.67,46.66),pin-m-p(6.68,46.67)/6.6,46.66,11/800x800.png?access_token=pk.eyJ1IjoiYWxpZW5sZWJhcmdlIiwiYSI6Ik1hN3ZxVjgifQ.S2hbxqNnn7kU7HRnd6jYVg" alt="" />
  <figcaption>
    Map with some fun marker placement
  </figcaption>
</figure>

## Layout

This is how I place those maps in the design.

<p data-height="268" data-theme-id="7142" data-slug-hash="yvxco" data-default-tab="result" class='codepen'>See the Pen <a href='https://codepen.io/alienlebarge/pen/yvxco/'>Full height image header</a> by Cédric Aellen (<a href='https://codepen.io/alienlebarge'>@alienlebarge</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>
