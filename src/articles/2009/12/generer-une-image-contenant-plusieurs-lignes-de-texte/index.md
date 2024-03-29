---
date: 2009-12-29

title: Générer une image contenant plusieurs lignes de texte
categories:
- Internet
- Programmation
- Typo3
tags:
- Gifbuilder
- Ressource
- Snippet
- Split
- Texte
- Typo3
- TypoScript
---
<img class="alignnone size-medium wp-image-1470" title="Champ résumé dans les propriétées de la page" src="https://dlgjp9x71cipk.cloudfront.net/2009/12/gifbuilder_typo3-500x281.jpg" alt="" width="500" height="281" />

Un petit truc pour mes amis "typoteurs". Typo3 permet de créer du texte sous forme d'image. Mais voilà, l'objet Gifbuilder qui permet cela ne gère pas le multi ligne automatiquement.
Voici comment y parvenir ...

<!--more-->

Disons qu'on veut créer une en-tête de page sous forme d'image. Dans cette image, il nous faut trois lignes à disposition pour y écrire du texte.

Pour ce faire, nous allons utiliser le champ "résumé" (abstract) des propriétés de la page. Si rien n'est définie dans ce champ, les pages parentes vont être remontées jusqu'à trouver une valeur à utiliser (slide).

Pour pouvoir utiliser le champ "résumé", il faut ajouter "abstract" à  la variable <em>$TYPO3_CONF_VARS['FE']['addRootLineFields']</em> dans l'install tool (typo3conf/localconf.php)

Bien entendu pour que cela fonctionne, il faut mapper notre en-tête dans le gabarit TamplaVoilà. Celui-ci doit être de type "TypoScript Object Path" ou un objet TypoScript si vous préférez. Nous allons l'appeler <em>lib.header.title</em>.

Une fois que c'est fait, voici la configuration TypoScript que doit se trouver dans le gabarit du site.

```shell
#####################################################################

# [Header Title Image]

#

# Le texte affiché correspond à  ce qui se trouve dans le champ

# abstract de la page

#

# Les lignes sont séparées par des tubes (|)

# ex : ligne1 | ligne2 | ligne3

#

# La troisième ligne est ajustée en-bas du GIF. La deuxième est au-dessus et

# la première encore au-dessus

lib.header.title = IMAGE
lib.header.title.file = GIFBUILDER
lib.header.title.file {

# dim de l'image
XY = 329,150
# couleur de fond de l'image
backColor = #ffffff

# Première ligne
10 = TEXT
10 {
  #Les titres sont éditables jusqu'au niveau -10 du site
  text.data = fullRootLine:10, abstract, slide
  #char de retour à la ligne
  text.listNum.splitChar=|
  #première partie du contenu du champ &quot;résumé&quot; (jusqu'au premier tube)
  text.listNum = 0

# couleur de la police

  fontColor = #333333

# le texte est aligné à droite du gif

  align = right
  #espacement entre les mots
  wordSpacing = 2
  #taille de la police
  fontSize = 28
  #police (il faut un format TTF)
  fontFile = fileadmin/templates/library/fonts/maPolice.ttf
  #positionnement du texte par rapport au bord droite (vu que aligné à droite et au haut)
  offset = -10,75
  #nicetext activé
  nicetext = 1
}

# Pour les deux ligne suivantes, on écrase que les configs qu'on veut modifier

# Deuxième ligne
20 &gt; .10
# deuxième partie du contenu du champ &quot;résumé&quot; (entre le premier tube et le deuxième)
20.text.listNum = 1
# positionnement
20.offset = -10,105

# Troisième ligne
30 &gt; .10
# deuxième partie du contenu du champ &quot;résumé&quot; (après le deuxième tube)
30.text.listNum = 2
# positionnement
30.offset = -10,135 }

# Sur la homepage je veux une image par défaut

# 1 est l'id de ma rootpage

[treeLevel=0] &amp;&amp; [PIDinRootline = 1] lib.header.title &gt;
  lib.header.title = IMAGE
  lib.header.title {
    file = fileadmin/templates/library/image/header.title.png
    altText = Image d'en-tête du site
  }
[GLOBAL]
```

Bien entendu, on peux utiliser plus de trois lignes. Il suffit d'adapter ce script.
