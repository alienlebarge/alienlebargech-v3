---
date: 2012-02-10
title: Changer le niveau de titre des éléments de contenu
categories:
- Internet
- Programmation
- Typo3
tags:
- Heading
- Mapping
- TemplaVoilà
- Typo3
- TypoScript
---
Dernièrement j'ai eu le cas d'un mapping TemplaVoilà avec <a href="https://www.typo3.org">Typo3</a> dans lequel il fallait que les éléments de contenu aient des titres de niveau deux et de niveau trois dans la colonne latérale.<!--more-->

<a href="https://dlgjp9x71cipk.cloudfront.net/2012/02/templavoila_mapping_header.png"><img class="alignright size-medium wp-image-5495" title="Mapping Templavoilà" src="https://dlgjp9x71cipk.cloudfront.net/2012/02/templavoila_mapping_header-250x177.png" alt="" width="250" height="177" /></a>Il s'agissait d'un site classique en trois colonnes :
<ul>
	<li>1ère colonne : menu est navigation</li>
	<li>2ème colonne : information principale</li>
	<li>3ème colonne : information secondaire (<em>&lt;aside&gt;</em>)</li>
</ul>
Les éléments de la colonne principale devaient avoir des titre de niveau deux (<em>&lt;h2&gt;</em>) et ceux de la colonne de latérale de niveau 3 (<em>&lt;h3&gt;</em>).

Lors du mapping TemplaVoilà, il suffit d'ajouter le typoscript suivant sur votre élément dans la structure de donnée (data structure).

[code highlight="1,2"]

5 = LOAD_REGISTER
5.defaultHeaderType = 3
10= RECORDS
10.source.current=1
10.tables = tt_content
10.wrap = &lt;!--TYPO3SEARCH_begin--&gt; | &lt;!--TYPO3SEARCH_end--&gt;
15 = RESTORE_REGISTER

[/code]

A la ligne deux, on définit le niveau du titre.

Voilà pour le petit truc ;)
