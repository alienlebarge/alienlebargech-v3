---
date: 2012-12-26
title: Afficher les fichiers cachés dans le Finder (mise à jour)
categories:
- Programmation
tags:
- Cache
- Fichiers
- Finder
- Mac
- OSX
---
Afin d'éditer les fichiers <code>.htaccess</code> et autres <code>.gitconfig</code>, il est toujours utile de les afficher dans le Finder.
Voici la marche à suivre :
<ol>
	<li>Ouvrir le <em>Terminal</em></li>
	<li>Taper la commande <code>defaults write com.apple.Finder AppleShowAllFiles true</code></li>
	<li>Redémarrer le <em>Finder</em> (en appuyant sur <em>alt</em>, faire un clique droite sur l'icone du <em>Finder</em> et séléctionner <em>Relancer</em>)</li>
</ol>
Pour cacher ne pas afficher les fichiers cachés, c'est idem sauf la commande qui est <code>defaults write com.apple.Finder AppleShowAllFiles false</code>

<ins datetime="2012-01-04">Si comme moi, vous utilisez l'application <a title="L'application Alfred" href="https://www.alfredapp.com/">Alfred</a>, voici <a title="Hidden file extension" href="https://matthojo.co.uk/alfred-hide-show-hidden-file-extentions/">une extension</a> fort pratique qui fait le même travail.</ins>
