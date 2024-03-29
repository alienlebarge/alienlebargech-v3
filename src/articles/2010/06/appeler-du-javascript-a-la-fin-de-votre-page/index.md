---
date: 2010-06-17
title: Appeler du JavaScript à la fin de votre page
categories:
- Typo3
tags:
- html
- JavaScript
- Pied de page
- Programmation
- Snippet
- Typo3
- TypoScript
- web
---
<img src="https://dlgjp9x71cipk.cloudfront.net/2010/06/alienlebarge-·-utility-futility1-500x367.png" alt="" title="ySlow" width="500" height="367" class="alignnone size-medium wp-image-1674" />
<p>Lorsque vous passez votre site dans YSlow, celui-ci vous dit de placer vos JavaScript à la fin de vos page.</p>
<p>Par défaut, Typo3 les insère dans les balises <head>. C'est à dire en haut de page.</head></p>
<!--more-->
<p>Voici un exemple comment procéder avec le JavaScript de GoogleAnalytics :</p>

```shell
######################

# [Google Analytics]

lib.all.googleAnalytics = TEXT
lib.all.googleAnalytics {
	wrap (
		&lt;!-- Google Analytics --&gt;
		&lt;script type=&quot;text/javascript&quot;&gt;
		var gaJsHost = ((&quot;https:&quot; == document.location.protocol) ? &quot;https://ssl.&quot; : &quot;https://www.&quot;);
		document.write(unescape(&quot;%3Cscript src='&quot; + gaJsHost + &quot;google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E&quot;));
		&lt;/script&gt;
		&lt;script type=&quot;text/javascript&quot;&gt;
		try{
		var pageTracker = _gat._getTracker(&quot;|&quot;);
		pageTracker._trackPageview();
		} catch(err) {}
		&lt;/script&gt;
		&lt;!-- Google Analytics end --&gt;
	)

	value = {$lib.constants.divers.googleAnalyticsUA}
}

page.20 &lt; lib.all.googleAnalytics

# Google Analytics n'est pas activé en valid en intégration

[globalString = ENV:HTTP_HOST=valid.monsite.ch, ENV:HTTP_HOST=integration.monsite.ch]
	lib.vd09.all.googleAnalytics &gt;
	page.20 &gt;
[GLOBAL]
```

<p>Comme vous le voyez dans les dernière ligne, je n'active pas le script dans mes environnements de validation et d'intégration</p>
<p>A noter avec Typo3 4.3, il est possible d'utiliser la focntion suivante :</p>
[code]
page.includeJSFooter.file1 = file.js
[/code]
