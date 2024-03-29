---
date: 2010-12-29

title: Créer un index en Typoscript
categories:
- Typo3
tags:
- code
- Index
- Menu
- Snippet
- Typo3
- TypoScript
---
<img class="alignnone size-medium wp-image-2672" title="index" src="https://dlgjp9x71cipk.cloudfront.net/2010/12/index-500x373.jpg" alt="" width="500" height="373" />

Avec la fin de l'année qui approche, voici une petit exemple pour créer un index sur une page.
<blockquote>Sur une page, l'index liste les différents éléments de contenu qui la compose et renvoie vers ceux-ci.</blockquote>
<!--more-->

Il faudra bien entendu mapper ce code à l'endroit où vous voulez qu'il figure sur votre page.

```shell
#####################################################################

# [summary]

lib.summary = COA
lib.summary {
    30 = TEXT
    30 &lt; styles.content.get
    30 {
        stdWrap.wrap = &lt;ul&gt;|&lt;/ul&gt;
        select.andWhere = sectionIndex!=0
        select.pidInList.override.field = pages
        renderObj = TEXT
        renderObj {
            noBlur = 1
            fieldRequired = header
            trim=1
            field = header
            htmlSpecialChars = 1
            wrap = &lt;li&gt;|&lt;/li&gt;
            typolink.parameter.field = pid
            typolink.section.field = uid
            typolink.ATagParams = style=&quot;color: #000000; text-decoration: none;&quot;
        }
        stdWrap.if.isTrue.numRows {
            table = tt_content
            select {
                where = sectionIndex!=0
                andWhere = colPos =0
                andWhere = hidden =0
                pidInList = this
                pidInList.override.field = pages
            }
        }
    }
}
```

voilà voilà
