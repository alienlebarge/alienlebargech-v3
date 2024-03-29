---
date: 2010-12-17

title: Liens canoniques et Typo3
categories:
- Typo3
tags:
- Canonical
- Canonique
- Indexation
- Liens
- Référencement
- Snippet
- Typo3
- TypoScript
---
<img class="alignnone size-full wp-image-2650" title="£Contenu dupliqué" src="https://dlgjp9x71cipk.cloudfront.net/2010/12/duplicate-content.jpg" alt="" width="500" height="375" />

Les pages accessibles par deux URLs différents commencent à poser certains problèmes de référencement. En effet, une page qui est accessible par deux URLs (ou plus) sera indexée deux fois (ou plus) par les moteurs de recherche.

Pour palier à ce problème, les principaux moteurs de recherche ont proposé d'introduire la balise ci-dessous :
<pre>&lt;link rel="canonical" href="URL" /&gt;</pre>
<!--more-->

Le principe est de permettre au webmaster d'indiquer pour chaque page de son site quelle est l'URL canonique, c'est-à-dire l'URL officielle de la page.
Le site WebRankInfo propose <a title="Article sur les lien canoniques sur le site WebRankInfo" href="https://www.webrankinfo.com/dossiers/techniques/url-canonique">un article à ce sujet</a>.
<h3>Et dans Typo3 ?</h3>
L'extension <a title="L'extension Realurl sur le site Typo3.org" href="https://typo3.org/extensions/repository/view/realurl/current/">realurl</a> sur Typo3 permet de transformer  des URLs techniques de type <em>www.monsite.com/index.php?id=100</em> en URL accessibles ("human readable") de type <em>www.monsite.com/macategorie/mapage</em>.

Une fois realurl installé, toute la navigation doit se faire avec des URLs accessibles. Mais voilà, il peut arriver qu'un URL technique traine par ci par là. De ce fait, si une page peut être visitée via un URL accessible et un URL technique, elle sera indexée deux fois.

Pour palier à ce problème, voici comment créer la balise  en Typoscript :

```shell
# Canonical Link

page.headerData.50 = COA
page.headerData.50 {
    10 = TEXT
    10 {
        typolink {
            parameter.data = TSFE:id
            returnLast = url
        }
        wrap = &lt;link rel=&quot;canonical&quot; href=&quot;{$lib.constants.baseUrl}|&quot; / &gt;
    }
}
```

A noté que ce code doit être adapté. Il ne prend pas en compte les variables des extensions qui seraient dans l'URL.
