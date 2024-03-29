---
date: 2010-07-25
title: Typo3 chez Infomaniak
categories:
- Internet
- Typo3
tags:
- Configuration
- Hébérgement
- Infomaniak
- Typo3
---
Actuellement en train de développer un site Typo3 chez Infomaniak, je me rend compte qu'il y a quelques spécialités à prendre en compte. Les lister pourrait être une bonne chose afin d'éviter de de devoir effectuer plusieurs fois les mêmes recherches (et si en plus ça peut être utile à d'autre). Alors voici sur quoi je suis tombé.

<!--more-->(Bien entendu, cet article est destiné à évoluer 8) )
<h2>ImageMagik</h2>
La gestion et traitement des images est un grand atout de Typo3. Celui-ci utilise par défaut ImageMagik. Malheureusement <a title="FAQ qui explique pourquoi ImageMagik n'est pas disponible" href="https://www.infomaniak.ch/support/faq/faq_home.php?&amp;faq=322">non disponible</a>, il faudra se tourner vers la libraire GD 2.
Pour ce faire, il vous suffit d'installer l'extension <a title="L'extension sur le site Typo3.org" href="https://typo3.org/extensions/repository/view/jb_gd_resize/current/">JD_GB_Resize</a>.

<em>Je n'ai pas encore testé les images transparentes. A ce qu'il parait, il y a quelques problèmes à ce niveau. Dès que j'ai effectuer quelques essais, je vous en parle.</em>
<h2>Curl</h2>
Afin de pouvoir télécharger les extension directement depuis le gestionnaire Typo3, il faut activer le mode Curl dans "<em>Installation</em>". Afin que Typo3 puisse communiquer avec des sites tierce, dans "<em>All Configuration</em>", il faut modifier la variable <code>curlUse</code> comme suit :
<pre>[SYS][curlUse] = 1</pre>
