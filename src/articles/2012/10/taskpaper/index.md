---
date: 2012-10-11

title: TaskPaper
categories:
- Logiciel
tags:
- GTD
- Logiciel
---
De la gestion de tâche simple et sans prise de tête.

Depuis longtemps j’utilise <a title="Omnifocus" href="https://www.omnigroup.com/products/omnifocus">Omnifocus</a> pour la gestion de mes tâches quotidiennes. Dernièrement, j’ai redécouvert <a title="TaskPaper" href="https://www.hogbaysoftware.com/products/TaskPaper">Taskpaper</a>, un logiciel que je possédais déjà depuis quelques années, mais sur lequel je ne m’étais jamais penché. <!--more-->
<h2 id="labdcontrele.txt">La BD contre le .txt</h2>
<a title="TaskPaper" href="https://www.hogbaysoftware.com/products/TaskPaper">Taskpaper</a> comme <a title="Omnifocus" href="https://www.omnigroup.com/products/omnifocus">Omnifocus</a> permet de gérer des tâches. Mais là où Omnifucus enregistre ses informations dans une base de données propriétaire <a title="TaskPaper" href="https://www.hogbaysoftware.com/products/TaskPaper">Taskpaper</a> lui se base sur de simples fichiers texte.

Ce dernier utilise une syntaxe particulière qui lui permet de déterminer ce qui est un projet, une tâche ou une note.
Voici un exemple de syntaxe:
<pre>Mon projet:
 - Tâche 1
 - Tâche 2
 Ceci est une note</pre>
Les projets se terminent par <code>:</code>, les tâches commencent par un <code>-</code>, le texte simple est considéré comme une note.
<h2 id="lesmotscls">Les mots clés</h2>
Il est possible d’utiliser des tags (mots-clés). Pour se faire, il suffit d’utiliser l’arobase <code>@montag</code>. Vous pouvez créer tous les tags que vous voulez.

Il est possible de mettre en place un système de <a title="Getting Thins Done" href="https://fr.wikipedia.org/wiki/Getting_Things_Done">GTD</a>. Il suffit d’utiliser des tags pour les contextes et d’autres pour les délais comme <code>due(2012-12-24)</code>
<h2 id="lestcheseffectues">Les tâches effectuées</h2>
Sur l’application iOS, indiquer qu’une tâche est effectuée se fait au moyen d’un simple glisser du doigt sur la tâche.
C’est un simple bouton qui permet cette action dans l'application Mac OSX.

<a title="TaskPaper" href="https://www.hogbaysoftware.com/products/TaskPaper">TaskPaper</a> ajoutera simplement un tag <code>@done</code> (ou <code>@done(2012-10-12)</code> si vous voulez que la date de réalisation soit spécifiée) à la tâche.

La tâche sera biffée dans <a title="TaskPaper" href="https://www.hogbaysoftware.com/products/TaskPaper">TaskPaper</a>.
<h2 id="larchivage">L’archivage</h2>
Une fonction de <a title="TaskPaper" href="https://www.hogbaysoftware.com/products/TaskPaper">TaskPaper</a> permet d’archiver les tâches effectuées. Celle-ci créé simplement une projet <code>Archive</code> dans lequel les tâches sont déplacées.
<h2 id="lasynchro">La synchro</h2>
TaskPaper existe en version iOS et Mac OSX. Il est possible de synchroniser votre iPhone avec votre Mac. Pour ce faire, le logiciel utilise <a title="Dropbox" href="https://www.dropbox.com">Dropbox</a>.
<h2 id="etlesavantages">Et les avantages ?</h2>
<h3 id="disponiblepartout">Disponible partout</h3>
<a title="TaskPaper" href="https://www.hogbaysoftware.com/products/TaskPaper">TaskPaper</a> se base sur des fichiers textes et est synchronisé via <a title="Dropbox" href="https://www.dropbox.com">Dropbox</a>. Cela signifie que j’ai accès depuis n’importe où à mes listes de tâche. Il suffit d’avoir un accès à <a title="Dropbox" href="https://www.dropbox.com">Dropbox</a> et un simple éditeur de texte.
<h3 id="lesstyles">Les styles</h3>
Il est possible pour l’application Mac OSX de définir son propre style d’affichage. Il est ainsi possible d’appliquer une coloration sur les tâches comportant certains tags. Par exemple afficher en rouge les tâches en retard <code>@overdue</code>.

Voici <a title="Exemples de thème" href="https://www.hogbaysoftware.com/wiki/TaskPaperThemes">quelques exemples de thèmes</a>. Si aucun ne vous convient, vous pouvez créer le vôtre.
<h3 id="lesscripts">Les scripts</h3>
Via des <em>Apple Script</em> il vous est possible de parser votre fichier texte est d’y effectuer des modifications.

Par exemple, j’utilise les tags du type <code>due(2012-12-24)</code> afin de spécifier l’échéance d’une tâche. Grâce à un script, je parse le fichier texte. Le script ajoute les tags <code>@overdue</code>, <code>@soon</code>, etc. en fonction si l’échéance de la tâche est dépassée, dans les trois prochains jours, etc.

Il m’est alors possible de filtrer l’affichage en fonction de ces nouveaux tags. De plus je peux appliquer une colorisation particulière aux tâches en retard.
<h3 id="cestsimplenonoise">C’est simple, no noise</h3>
L’utilisation est extrêmement simple. Il n’y a pas des options partout. On reste donc foclaisé sur les tâches à effectuer et non sur leur gestion.
<h2 id="conclusion">Conclusion</h2>
Cela fait maintenant 2 semaines que j’utilise TaskPaper. Je me suis retenu d’écrire un article dans la première heure d’utilisation. Mais après cette période, je suis très satisfait de ce système.

Je dois avouer que de pouvoir accéder à ma liste de tâches depuis mon ordinateur du travail est un énorme plus.

Si vous testez ce programme, n’hésitez pas à laisser vos commentaires.
