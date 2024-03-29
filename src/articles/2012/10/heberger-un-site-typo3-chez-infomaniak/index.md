---
date: 2012-10-17

title: Héberger un site TYPO3 chez Infomaniak
categories:
- Non classé
- Typo3
tags:
- Hébérgement
- Infomaniak
- Typo3
---
Depuis maintenant plus d’une année, je gère un site <a title="TYPO3" href="https://www.typo3.org">TYPO3</a> hébérgé chez <a title="Infomaniak" href="https://www.infomaniak.ch">Infomaniak</a>. Il est temps de faire un petit retour sur expérience. <!--more-->

Je suis depuis quelques années au comité d’un mouvement juniors de football de ma région. Etant dans le monde de l’informatique, c’est à moi qu’est revenu la tâche de mettre sur pied un site internet. J’ai donc opté pour TYPO3 pour plusieurs raisons :
<ul>
	<li>Je travaille avec TYPO3 tous les jours</li>
	<li>Le nombre de profils d’utilisateurs Backend</li>
	<li>Possibilité de déveloper des extensions très complètes</li>
</ul>
Une fois le site en place, il a fallu l’hébérger quelque part.
<h2>Pourquoi Infomaniak ?</h2>
Les genevois sont les leaders de l’hébérgement en Suisse romande (Suisse ?). Etant déjà client chez eux, j’étais content de leures préstations (et le suis toujours). <a title="Offre d'hébérgement d'infomaniak" href="https://hebergement.dev10.dev.infomaniak.ch/commander/commander.php?&amp;language=french">Infomaniak mentionne TYPO3</a> parmis les CMS que l’on peut installer chez eux. De plus, je voulais que les données soit hébergées en Suisse.
<h2>Les problèmes ?</h2>
Mais voilà après quelques mois d’utilisation, l’hébérgement mutualisé proposé par Infomaniak commence à montrer ses limites.
<h3>ImageMagick</h3>
<a title="ImageMagick" href="https://www.imagemagick.org">ImageMagick</a> n’est pas installé et n’est pas installable. Il vous faudra utiliser l’extension <a title="Extension JB GD Resize" href="https://typo3.org/extensions/repository/view/jb_gd_resize">JB GD Resize</a> afin de manipuler les images via <a title="GD library" href="https://www.libgd.org/">GDlib</a>.
<h3>Memory limit</h3>
La limite de mémoire est fixée à <a title="Politique vis à vis de la mémoire et du temps d'exécution des scripts" href="https://hosting.infomaniak.ch/support/faq/faq_home.php?language=english&amp;faq=357?language=english">128 MB</a>. Ce n’est pas idéal mais ça passe. Votre site est un peu lent mais fonctionne.
Toutefois, on préférerait une limite à 256 MB comme le <a title="Recommandation système pour TYPO3" href="https://typo3.org/about/typo3-the-cms/system-requirements/">recommande TYPO3</a>.
<h3>Max execution time</h3>
Le temps d’éxécution des scripts est de <a title="Politique vis à vis de la mémoire et du temps d'exécution des scripts" href="https://hosting.infomaniak.ch/support/faq/faq_home.php?language=english&amp;faq=357?language=english">10 secondes</a>. Dans mon cas, je n’arrive pas à récupérer les mises à jour d’extension du TER. Pour ce faire, il est possible de monter la limite à 5 minutes mais uniquement dix fois par année.

Cela pose un autre problème. Il est impossible d’utiliser <a title="Extension TYPO3 Quixplorer" href="https://typo3.org/extensions/repository/view/t3quixplorer">Quixplorer</a> sur des dossiers volumineux à cause de cette limite.
<h3>Exec()</h3>
La commande <code>exec()</code> (comme <code>passthru()</code>, <code>set_timelimit()</code>, <code>popen()</code>, <code>exec()</code>, <code>shell_exec()</code>, <code>system()</code> et <code>proc_open()</code>) est désactivée. Cela empêche l’utilisation du <em>scheduler</em>.

On sait que TYPO3 peut générer beaucoup de fichiers temporaires comme par exemple lors de la minification des CSS et JavaScript. Il vous sera donc impossible de mettre en place une tâche afin de supprimer ces fichiers afin d’éviter que votre place disque diminue comme neige au soleil
<h2>Conclusion</h2>
Je vous déconseille d’opter pour Infomaniak afin d’hébérger un site TYPO3. Il vous faudra vous tourner vers d’autres hébérgeurs spécialisés dans ce CMS.

Je tiens à souligner que je ne dénigre pas Infomaniak. Il s’agit d’un excelent hébérgeur. Cependant, leur offre d’hébérgement mutualisé n’est pas adapté à TYPO3.
