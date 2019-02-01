---
title: Problème de MIDI entre la MD et la TM-1
categories:
- Musique
tags:
- Elektron
- Machinedrum
- MD
- MIDI
- Musique
- TM-1
- Turbomidi
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  tweetbackscheck: '1234600913'
  shorturls: a:7:{s:9:"permalink";s:78:"https://www.alienlebarge.ch/2008/11/09/probleme-de-midi-entre-la-md-et-la-tm-1/";s:7:"tinyurl";s:25:"https://tinyurl.com/dj3rcq";s:4:"isgd";s:17:"https://is.gd/ijWi";s:5:"bitly";s:20:"https://bit.ly/1KO5WC";s:5:"snipr";s:22:"https://snipr.com/b9t71";s:5:"snurl";s:22:"https://snurl.com/b9t71";s:7:"snipurl";s:24:"https://snipurl.com/b9t71";}
  twittercomments: a:0:{}
  tweetcount: '0'
  tmac_last_id: '256454045349335040'
---
<img src="https://farm3.static.flickr.com/2258/2121076338_44962f2957.jpg" alt="Elektron Sps-1 #03" />
<em><a title="photo sharing" href="https://www.flickr.com/photos/ezcrope/2121076338/">Elektron Sps-1 #03</a></em>

Cela faisait un petit moment que je n'arrivais plus à transférer de « samples » depuis mon ordinateur sur ma <a href="https://elektron.se/products/?sPage=overview&amp;sProd=ES_SPS1MK2.uw">machinedrum</a> via ma <a href="https://elektron.se/products/?sPage=overview&amp;sProd=EA_TM.TM-1">turbomidi</a>.

Je viens de trouver la source du problème. Comme cela si quelqu’un peine également, cela peut lui servir.

<!--more-->

Cela faisait quelque temps que lorsque je lançais des transferts MIDI et qui n’arrivait jusqu’à ma boîte à rythmes. Au début, je pensais que les câbles étaient en cause. Mais après avoir bûché les forums, je me suis rendu compte qu’il s’agissait juste d’un réglage dans C6, le programme fourni par Elektron. 

Par défaut, le « délai » est réglé à 40. En le passant à 2, le transfert passe comme une lettre à la poste.

voici voilà ...

<span style="color: #0000ee; text-decoration: underline;"><img class="alignnone size-medium wp-image-748" title="midi-preferences" src="https://dlgjp9x71cipk.cloudfront.net/2008/11/midi-preferences-500x474.png" alt="" width="500" height="474" /></span>
