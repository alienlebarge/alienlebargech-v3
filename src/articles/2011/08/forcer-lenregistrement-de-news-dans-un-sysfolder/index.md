---
date: 2011-08-03
title: Forcer l'enregistrement de news dans un sysfolder
categories:
- Typo3
tags:
- TSconfig
- tt_news
- Typo3
---
J'ai récemment découvert cette petite astuce bien pratique pour tt_news dans Typo3.

<!--more-->

Admettons que vous avez des contributeurs qui publient des news. Ces news sont enregistrées dans un sysfolder spécifique.
Vous ne souhaitez pas que vos contributeurs enregistre les news dans n'importe quelle page de votre arborescence. Et bien, vous pouvez forcer l'enregistrement des nouveau enregistrement de news dans un PID spécifique.

Pour ce faire, il suffit d'ajouter ce code dans le TSconfig de vos page.

```shell

# New tt_news records will be save in this page

mod.web_txttnewsM1 {
    list {
        pidForNewArticles = 4
    }
}
```

Il vous suffit de remplacer le "4" par l'id de votre sysfolder.

J'espère que cela aura pu vous être utile.
