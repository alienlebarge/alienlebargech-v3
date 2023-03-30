---
date: 2009-08-11
title: Modifier le contenu de la balise <code>title</code> dans Typo3
categories:
- Programmation
- Typo3
tags:
- code
- Setup
- Titre
- Typo3
- TypoScript
---
Et ouais, voici le premier article concernant Typo3.

Il s'agit d'une astuce toute simple. De temps à autre on désire paramétrer le contenu des balises de titre de la page.

<!--more-->

Il suffit d'entrer le Typoscript suivant dans le Setup de votre gabarit de base.

[java]
config.noPageTitle = 2
page.headerData {
		5 = TEXT
		# on wrap (|) le contenu de filed
		5.wrap = <title>Mon site : blabla : |</title>
		# field contient le sous-titre ou si vide le titre
		5.field = subtitle // title
}
[/java]
