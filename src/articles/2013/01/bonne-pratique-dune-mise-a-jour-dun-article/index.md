---
date: 2013-01-04

title: Bonne pratique d'une mise à jour d'un article
categories:
- Internet
- Programmation
tags:
- Accessibilité
- Blog
- css
- html5
- ins
- Mise à jour
- Update
---
Lorsqu'on fait une mise à jour d'un article sur un blog, on a pour habitude de rajouter "(Màj)" dans le titre puis la modification dans le corps précédé d'un titre du genre "Mise à jour du 4 janvier 2012".

Récemment, j'ai mis à jour <a title="Afficher les fichiers cachés dans le Finder (mise à jour)" href="https://www.alienlebarge.ch/2012/12/26/afficher-les-fichiers-caches-dans-le-finder/">un de mes anciens articles</a> et je me suis intéressé à la manière de le faire correctement en respectant les conventions et en utilisant les outils <a title="https://www.w3.org/TR/2012/CR-html5-20121217/" href="https://www.w3.org/TR/2012/CR-html5-20121217/">HTML5</a>. <!--more-->
<h2>L'abréviation Màj</h2>
Ceci est une petite parenthèse pour blogueurs francophones.

Souvent, les titres d'articles mis à jour comportent la mention "Màj" dépourvue de balise <code>&lt;abbr&gt;</code>. Pour satisfaire le niveau AAA des règles <a title="https://www.w3.org/Translations/WCAG20-fr/" href="https://www.w3.org/Translations/WCAG20-fr/"><abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0</a>, il est nécessaire d'<a title="https://www.w3.org/Translations/WCAG20-fr/#meaning" href="https://www.w3.org/Translations/WCAG20-fr/#meaning">identifier les abréviations</a> comme suit :
<pre><code>&lt;h2&gt;Mon titre (&lt;abbr title="Mise à jour"&gt;Màj&lt;/abbr&gt;)&lt;/h2&gt;
</code></pre>
<h2><code>&lt;ins&gt;</code> : la balise d'insertion</h2>
La balise <a title="https://www.w3.org/TR/2012/CR-html5-20121217/edits.html#the-ins-element" href="https://www.w3.org/TR/2012/CR-html5-20121217/edits.html#the-ins-element"><code>&lt;ins&gt;</code></a> permet de définir du texte inséré dans un document.
<h3><code>datetime</code></h3>
Au moyen de l'attribut <a title="https://www.w3.org/TR/2012/CR-html5-20121217/edits.html#attr-mod-datetime" href="https://www.w3.org/TR/2012/CR-html5-20121217/edits.html#attr-mod-datetime"><code>datetime</code></a>, il est possible de spécifier la date de l'insertion.
<pre><code>&lt;ins datetime="2012-01-04"&gt;Vestibulum vitae neque risus, et volutpat augue. Praesent tempus posuere cursus.&lt;/ins&gt;

</code><code>datetime</code> doit être <a title="https://www.w3.org/TR/2012/CR-html5-20121217/infrastructure.html#valid-date-string-with-optional-time" href="https://www.w3.org/TR/2012/CR-html5-20121217/infrastructure.html#valid-date-string-with-optional-time">une chaine de caractère représentant une date valide et une heure optionnelle</a>.</pre>
<h3><code>cite</code></h3>
Si la mise à jour intervient suite par exemple à un article d'un magasine web, il est possible d'utiliser l'attribut <a title="https://www.w3.org/TR/2012/CR-html5-20121217/edits.html#attr-mod-cite" href="https://www.w3.org/TR/2012/CR-html5-20121217/edits.html#attr-mod-cite"><code>cite</code></a> afin de référer l'insertion à l'article en question.
<pre><code>&lt;ins cite="https://www.domaine.com/article.html"&gt;Vestibulum vitae neque risus, et volutpat augue. Praesent tempus posuere cursus.&lt;/ins&gt;

</code><code>cite</code> doit être <a title="https://www.w3.org/TR/2012/CR-html5-20121217/infrastructure.html#valid-url-potentially-surrounded-by-spaces" href="https://www.w3.org/TR/2012/CR-html5-20121217/infrastructure.html#valid-url-potentially-surrounded-by-spaces">un lien valid</a>.</pre>
<h3>Une mise à jour correcte avec la balise <code>&lt;ins&gt;</code> et ses attributs</h3>
Voici une structure très basique d'un article :
<pre><code>&lt;article&gt;</code>
<code>	&lt;header&gt;</code>
<code>		&lt;h2&gt;Lorem ipsum&lt;/h2&gt;</code>
<code>	&lt;/header&gt;</code>
<code>	&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, massa in hendrerit vulputate, nibh nisi tincidunt libero, ac luctus sem diam eget elit.&lt;/p&gt;</code>
<code>&lt;/article&gt;
</code></pre>
Si on utilise les outils cités précédemment, voici un balisage correct pour une mise à jour de contenu :
<pre><code>&lt;article&gt;</code>
<code>	&lt;header&gt;</code>
<code>		&lt;h2&gt;Lorem ipsum &lt;ins datetime="2012-01-04"&gt;(updated)&lt;/ins&gt;&lt;/h2&gt;</code>
<code>	&lt;/header&gt;</code>
<code>	&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis, massa in hendrerit vulputate, nibh nisi tincidunt libero, ac luctus sem diam eget elit. &lt;ins datetime="2012-01-04" cite="https://www.domaine.com/article.html"&gt;Vestibulum vitae neque risus, et volutpat augue. Praesent tempus posuere cursus.&lt;/ins&gt;&lt;/p&gt;</code>
<code>&lt;/article&gt;
</code></pre>
<h2>Les styles</h2>
Il est bon d'utiliser un style CSS afin de faciliter l'identification des insertions. Ainsi on pourra faire plus facilement le lien entre le texte "Mise à jour" inséré dans le titre et celui se trouvant dans le corps de l'article.

Un exemple de CSS :
<pre><code>ins {</code>
<code>	background: #FFC;</code>
<code>	text-decoration: none;</code>
<code>}</code></pre>
