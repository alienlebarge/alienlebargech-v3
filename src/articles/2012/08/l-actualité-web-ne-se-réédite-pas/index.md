---
date: 2012-08-03
title: L'actualité web ne se réédite pas
categories:
- Non classé
tags: []
status: draft
---
La réédition de news ou articles déjà parrues n'est pas une bonne pratique sur le web. <!--more-->
<h2>Les clients RSS mettent les articles en cache !</h2>
La modification d'articles déjà publié posent certains problèmes avec les client RSS.
Si nous prenons l'exemple de <a title="Google Reader" href="https://www.google.com/reader">Google Reader</a> (qui est certainement un des plus utilisé), il mets tout le contenu des flux RSS en cache.

C'est ce qui explique pourquoi si générer des flux RSS de dix articles, Google Reader affichera tout de même des articles antérieur au dixième plus récent.

Il est à noter qu'il n'est pas possible de mettre à jour ce cache (il existe cependant une technique pour les blogs hébergés sur la plateforme blogger). On peut imaginer que Google ne souhaite donner la possibilité de rafraîchir son cache sans quoi il perdrait tous les articles n'étant pas présent dans la dernière version du flux RSS.

On comprend donc pourquoi il n'est pas bon de modifier un article déjà publié. À la première publication de votre article, celui-ci va être enregistrer dans le cache de Google Reader. Ce qui veut dire que si une correction du contenu est faites après-coup, celle-ci n’apparaîtra pas.

Mais il y a pire. Certain rédacteur modifie la date de publication d'anciens articles afin que ceux-ci se retrouvent en haut de liste. Google Reader reconnaîtra cet article comme un nouvel article. Ce qui fait qu'il apparaîtra deux fois. Ce qui n'est pas du tout souhaitable.

Je n'ai pas poussé mes recherches à d'autres clients mais on peut imaginer sans trop de difficulté que la problématique est la même.

&nbsp;
