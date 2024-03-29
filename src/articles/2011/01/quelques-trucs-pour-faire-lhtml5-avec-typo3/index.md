---
date: 2011-01-05

title: Quelques trucs pour faire l'HTML5 avec Typo3
categories:
- Typo3
tags:
- html5
- JavaScript
- Typo3
- TypoScript
---
<img class="alignnone size-medium wp-image-2694" title="structure du html5" src="https://dlgjp9x71cipk.cloudfront.net/2011/01/structure-html5-500x250.gif" alt="" width="500" height="250" />

Je mets actuellement un site sur pied. Par soucis de découverte et d'apprentissage, j'ai opté pour le HTML5. Voici quelques trucs (et autre) que j'ai dû mettre en place pour ce faire :

<!--more-->
<ol>
	<li>Lire <a title="Page de présentation du livre" href="https://books.alistapart.com/products/html5-for-web-designers">HTML5 for Webdesigners</a></li>
	<li>Faire un template en respectant la norme et utilisant les nouvelles balises (&lt;nav&gt;, &lt;header&gt;, etc.)</li>
	<li>Modifier le doctype dans le setup du gabarit de base.

```shell
config.doctype = html_5
config.xmlprologue = none
```

</li>
	<li>Utiliser le JavaScript <a id="project_summary_link" href="https://code.google.com/p/html5shiv/">HTML5 IE enabling script</a> pour toutes les versions de IE inferieur à la 9 (merci IE).
Il suffit d'ajouter le code suivant dans le setup du gabarit de base

```html
# if MS Internet Explorer
[browser = msie] AND [version &lt; 9]
page.headerData = CARRAY
    page.headerData {
        10 = TEXT
        10.value (
            &lt;!--[if lt IE 9]&gt;
            &lt;script src=&quot;https://html5shiv.googlecode.com/svn/trunk/html5.js&quot;&gt;&lt;/script&gt;
            &lt;![endif]--&gt;
        )
    }
[end]
```

</li>
	<li>etc...</li>
</ol>
Si vous avez d'autre trucs ou configuration, n'hésitez pas à les partager ;)
