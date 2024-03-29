---
date: 2012-12-21

title: Compiler des fichiers LESS dans Sublime Text 2
categories:
- Informatique
- Programmation
tags:
- css
- Déve
- Less
- LessCSS
- Sublime Text
- Windows
- XP
---
<em>Avant toute chose, cet article s'adresse aux personnes travaillant avec <a href="https://www.sublimetext.com/2">Sublime Text 2</a> sous Windows XP.</em>
Plutôt que d'utiliser un programme de compilation comme <a href="https://winless.org/">WinLess</a> afin de compiler les fichier <a href="https://lesscss.org/"><code>LESS</code></a> en CSS. Voici une technique afin de le faire directement dans <a href="https://www.sublimetext.com/2">Sublime Text 2</a>. Cela vous fera certainement gagner du temps pendant le dévelopement.
<ol>
	<li>Dans <a href="https://www.sublimetext.com/2">Sublime Text 2</a>, installer le plugin <strong><a href="https://github.com/timdouglas/sublime-less2css">less2css</a></strong> via <a href="https://wbond.net/sublime_packages/package_control">Package Control/</a>.</li>
	<li>Cloner le dépôt <a href="https://github.com/duncansmart/less.js-windows">less.js-windows</a>.

Pour ma part, je l'ai cloner sous <code>c:\workspace\less.js-windows</code>.</li>
	<li>Ajouter dans votre <code>PATH</code> le lien vers le dépôt.
<ol>
	<li>Cliquer sur le menu <em>Démarrer</em>.</li>
	<li>Cliquer droit sur le <em>Poste de travail</em>.</li>
	<li>Aller dans l'onglet <em>Avancé</em>.</li>
	<li>Cliquer sur <em>Variables d'environnement</em>.</li>
	<li>Dans la liste des <em>Variables système</em>, séléctionner <em>Path</em>.</li>
	<li><em>Modifier</em> la variable.</li>
	<li>Aller à la fin de la <em>valeur de la variable</em> ajouter un <code>;</code> et entrer le chemin du dépôt <a href="https://github.com/duncansmart/less.js-windows">less.js-windows</a> que vous avez cloner précédement.</li>
</ol>
</li>
	<li>Redémarrer <a href="https://www.sublimetext.com/2">Sublime Text 2</a>.</li>
</ol>
A chaque fois que vous souvrez un fichier avec l'extension <code>.less</code>, celui-ci sera compilé en fichier <code>.css</code>.

Cette technique est très pratique pour le dévellopement. Cependant, pour des environnements de production, je conseil de passer par des outils comme <a href="https://incident57.com/codekit/">Code Kit</a> qui lui permet de compiler les <code>.css</code> sur une seule ligne. Pour l'instant la technique ci-dessus crée des fichiers de ce type :

```css
#header {
  color: red;
}
#header a {
  font-weight: bold;
  text-decoration: none;
}
#header a:hover {
  color: #000;
  text-decoration: underline;
}
/* Operations */
#header {
  color: #333333;
  border-left: 1px;
  border-right: 2px;
}
```
