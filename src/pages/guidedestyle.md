---
title: Guide de style
summary: Un aperçu des styles typographiques et de mise en page disponibles pour les pages de contenu
permalink: /guide-de-style/index.html
hidden: true
---

[[toc]]

## Utilitaires

Utilitaires qui peuvent être utilisés sur n'importe quel élément afin de modifier le style.

<p class="u-lede">Le lede est la section introductive d'un article de presse destinée à inciter le lecteur à lire l'article complet.</p>
<p class="u-body">Le texte principal ou corps de texte est le texte formant le contenu principal d'un livre, magazine, page web ou tout autre ouvrage imprimé ou numérique.</p>
<p class="u-caption">Une légende est un titre, une brève explication ou description accompagnant une illustration ou une photographie.</p>
<p class="u-reference">La référence est une relation entre des objets dans laquelle un objet désigne, ou agit comme un moyen de se connecter à, un autre objet.</p>

---

## Couleurs

Les couleurs alternent entre clair et sombre selon le schéma de couleurs.

<ul class="o-cluster">
    <li class="o-box">Clair</li>
    <li class="o-box o-box--invert">Sombre</li>
</ul>

---

## Prose

Les exemples suivants présentent le style que vous aurez dans le cadre de l'objet `o-prose`.

## Titre de deuxième niveau

Les titres principaux de la page sont des éléments `h1`, donc les titres suivants dans ce cadre devraient commencer par `h2`, dont un exemple apparaît directement au-dessus. Plus d'un peut être utilisé par page. Envisagez d'utiliser un `h2` à moins que vous n'ayez besoin d'un titre de moindre importance, ou comme sous-titre d'un élément `h2` existant.

### Titre de troisième niveau

Le titre ci-dessus est un élément `h3`, qui peut être utilisé pour tout type de titre de niveau de page qui se situe en dessous du titre `h2` dans une hiérarchie de document.

#### Titre de quatrième niveau

Le titre ci-dessus est un élément `h4`, qui peut être utilisé pour tout type de titre de niveau de page qui se situe en dessous du titre `h3` dans une hiérarchie de document.

### Règle horizontale

L'élément `hr` représente une rupture thématique au niveau du paragraphe, par exemple un changement de scène dans une histoire, ou une transition vers un autre sujet dans une section d'un livre de référence. L'extrait suivant de <cite>Pandora's Star</cite> de Peter F. Hamilton montre deux paragraphes qui précèdent un changement de scène et le paragraphe qui le suit :

Dudley avait quatre-vingt-douze ans, dans sa deuxième vie, et approchait rapidement du moment de se régénérer à nouveau. Bien que son corps ait l'âge physique d'un homme de cinquante ans standard, la perspective d'une longue campagne dégradante au sein du monde universitaire était une chose qu'il redoutait. Pour une civilisation soi-disant avancée, le Commonwealth Intersolaire pouvait parfois être terriblement arriéré, sans parler de cruel.

*Peut-être que ça ne sera pas si mal*, se dit-il. Le mensonge était suffisamment réconfortant pour le faire passer le reste de la nuit de travail.

---

La Carlton AllLander ramena Dudley chez lui juste après l'aube. Comme l'astronome, le véhicule était vieux et usé, mais parfaitement capable de faire son travail. Il avait un moteur diesel bon marché, assez commun sur un monde semi-frontière comme Gralmond, bien que son réseau de conduite soit un processeur photoneural moderne. Avec sa suspension haute et ses pneus à crampons profonds, il pouvait parcourir la piste de terre jusqu'à l'observatoire par tous les temps et toutes les saisons, y compris la neige d'un mètre de profondeur des hivers de Gralmond.

### Texte préformaté

L'élément `pre` représente un bloc de texte préformaté, dans lequel la structure est représentée par des conventions typographiques plutôt que par des éléments. De tels exemples sont un e-mail (avec des paragraphes indiqués par des lignes blanches, des listes indiquées par des lignes préfixées par une puce), des fragments de code informatique (avec une structure indiquée selon les conventions de ce langage) ou l'affichage d'art ASCII. Voici un exemple montrant les caractères imprimables de l'ASCII :

```bash
  ! " # $ % & ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; < = > ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
` a b c d e f g h i j k l m n o
p q r s t u v w x y z { | } ~
```

### Citations en bloc

L'élément `blockquote` représente une section qui est citée d'une autre source.

> 1996 était une époque différente. Le “Wannabe” des Spice Girl était dans les discmans anti-choc partout, et la connexion réseau la plus courante était les modems 56k. Il est donc logique que les développeurs originaux aient eu un budget de performance plus petit avec lequel travailler, et le site est beaucoup plus léger. D'accord - alors combien de temps a-t-il fallu pour charger le site original de Space Jam à l'époque ?

Si vous souhaitez ajouter une citation, encadrez-la dans une balise `<figure>` :

> La vie est trop courte pour ne pas s'amuser ; nous ne sommes ici que pour un court laps de temps comparé au soleil et à la lune et tout ça.
> — Coolio

### Liste ordonnée

L'élément `ol` désigne une liste ordonnée, et divers schémas de numérotation sont disponibles via le CSS (y compris 1,2,3... a,b,c... i,ii,iii... et ainsi de suite). Chaque élément nécessite une balise `<li>` et `</li>` environnante, pour désigner des éléments individuels dans la liste (comme vous l'avez peut-être deviné, `li` signifie élément de liste).

  1. Ceci est une liste ordonnée.
  2. Ceci est le deuxième élément, qui contient une sous-liste
     1. Ceci est la sous-liste, qui est également ordonnée.
     2. Elle a deux éléments.
  3. Ceci est le dernier élément de cette liste.

### Liste non ordonnée

L'élément `ul` désigne une liste non ordonnée (c'est-à-dire une liste d'éléments lâches qui ne nécessitent pas de numérotation, ou une liste à puces). Encore une fois, chaque élément nécessite une balise `<li>` et `</li>` environnante, pour désigner des éléments individuels. Voici une liste exemple montrant les parties constituantes des îles britanniques :

* Royaume-Uni de Grande-Bretagne et d'Irlande du Nord :
  * Angleterre
  * Écosse
  * Pays de Galles
  * Irlande du Nord
* République d'Irlande
* Île de Man
* Îles Anglo-Normandes :
  * Bailliage de Guernesey
  * Bailliage de Jersey

Parfois, nous pouvons vouloir que chaque élément de liste contienne des éléments de bloc, typiquement un paragraphe ou deux :

* Les îles britanniques sont un archipel composé des deux grandes îles de Grande-Bretagne et d'Irlande, et de nombreuses petites îles environnantes.

* La Grande-Bretagne est la plus grande île de l'archipel. L'Irlande est la deuxième plus grande île de l'archipel et se trouve directement à l'ouest de la Grande-Bretagne.

* La liste complète des îles des îles britanniques comprend plus de 1 000 îles, dont 51 ont une superficie supérieure à 20 km<sup>2</sup>.

### Liste de définitions

L'élément `dl` est destiné à un autre type de liste appelé liste de définitions. Au lieu d'éléments de liste, le contenu d'un `dl` se compose de paires `dt` (terme de définition) et `dd` (description de définition). Bien qu'elle puisse être appelée "liste de définitions", `dl` peut s'appliquer à d'autres scénarios où une relation parent/enfant est applicable. Par exemple, elle peut être utilisée pour marquer des dialogues, chaque `dt` nommant un locuteur, et chaque `dd` contenant ses paroles.

Ceci est un terme.
: Voici la définition de ce terme, qui vivent tous deux dans un `dl`.

Voici un autre terme.
: Et il obtient aussi une définition, qui est cette ligne.

### Figures

![logo d'alienlebarge](https://res.cloudinary.com/alienlebarge/image/fetch/https://alienlebarge.ch/assets/images/app.png "logo d'alienlebarge")

## Sémantique au niveau du texte

Il existe un certain nombre d'éléments HTML en ligne que vous pouvez utiliser n'importe où dans d'autres éléments.

### Liens et ancres

L'élément `a` est utilisé pour hyperlier du texte, que ce soit vers une autre page, un fragment nommé sur la page actuelle ou tout autre emplacement sur le web. Exemple :

[Aller à la page d'accueil](/) ou [retourner en haut de cette page](./#top).

### Accentuation marquée

L'élément `em` est utilisé pour indiquer du texte avec une accentuation marquée, c'est-à-dire quelque chose que vous prononceriez différemment. Lorsque l'italique est requis pour une différenciation stylistique, l'élément `i` peut être préférable. Exemple :

Vous devez absolument *essayer* le negitoro maki !

### Importance forte

L'élément `strong` est utilisé pour indiquer du texte avec une importance forte. Lorsque le gras est utilisé pour une différenciation stylistique, l'élément `b` peut être préférable. Exemple :

**Ne** mettez pas de clous dans la prise électrique.

### Petits caractères

L'élément `small` est utilisé pour représenter des avertissements, des réserves, des restrictions légales ou des droits d'auteur (communément appelés 'petits caractères'). Il peut également être utilisé pour des attributions ou pour satisfaire aux exigences de licence. Exemple :

<small>Copyright © 1922-2011 Acme Corporation. Tous droits réservés.</small>

### Barré

L'élément `s` est utilisé pour représenter du contenu qui n'est plus exact ou pertinent. Lors de l'indication d'éditions de documents, c'est-à-dire en marquant une portion de texte comme ayant été supprimée d'un document, utilisez l'élément `del` à la place. Exemple :

<s>Prix de vente recommandé : 3,99 £ par bouteille</s>
**Maintenant en vente pour seulement 2,99 £ par bouteille !**

### Citations

L'élément `cite` est utilisé pour représenter le titre d'une œuvre (par exemple un livre, un essai, un poème, une chanson, un film, une émission de télévision, une sculpture, une peinture, une comédie musicale, une exposition, etc.). Cela peut être une œuvre qui est citée ou référencée en détail (c'est-à-dire une citation), ou cela peut simplement être une œuvre qui est mentionnée en passant. Exemple :

<cite>Déclaration universelle des droits de l'homme</cite>, Nations Unies, décembre 1948. Adoptée par la résolution 217 A (III) de l'Assemblée générale.

### Citations en ligne

L'élément `q` est utilisé pour citer du texte en ligne. Exemple montrant des citations imbriquées :

John a dit, <q>J'ai vu Lucy au déjeuner, elle m'a dit <q>Mary veut que tu achètes de la glace en rentrant</q>. Je pense que je vais en prendre chez Ben and Jerry's, sur Gloucester Road.</q>

### Définition

L'élément `dfn` est utilisé pour mettre en évidence la première utilisation d'un terme. L'attribut `title` peut être utilisé pour décrire le terme. Exemple :

La mère <dfn title="Chien">canine</dfn> de Bob et le père <dfn title="Cheval">équine</dfn> de Bob l'ont assis et lui ont expliqué soigneusement qu'il était un organisme <dfn title="Une mutation qui combine deux ou plusieurs ensembles de chromosomes de différentes espèces">allopolyploïde</dfn>.

### Abréviation

L'élément `abbr` est utilisé pour tout texte abrégé, qu'il s'agisse d'un acronyme, d'un sigle ou autre. Tout texte dans l'attribut `title` apparaîtra lorsque la souris de l'utilisateur survolera l'abréviation. Exemples d'abréviations :

BBC, HTML et Staffs.

### Temps

L'élément `time` est utilisé pour représenter soit une heure sur une horloge de 24 heures, soit une date précise dans le calendrier grégorien proleptique, éventuellement avec une heure et un décalage de fuseau horaire. Exemple :

La reine Elizabeth II a été proclamée souveraine de chacun des royaumes du Commonwealth le <time datetime="1952-02-6">6</time> et le <time datetime="1952-02-7">7 février 1952</time>, après la mort de son père, le roi George VI.

### Code

L'élément `code` est utilisé pour représenter des fragments de code informatique. Utile pour les sites orientés technologie, pas tellement utile autrement. Exemple :

Lorsque vous appelez la méthode `activate()` sur l'objet `robotSnowman`, les yeux brillent.

Les exemples suivants montrent l'élément `code` utilisé conjointement avec l'élément `pre` (avec la coloration syntaxique applicable appliquée automatiquement) :

```js
console.log('Hello World!');
```

```css
/* Ceci est un commentaire */
.myClass {
    color: hsla(60, 100%, 80%, .75);
}
```

### Variable

L'élément `var` est utilisé pour désigner une variable dans une expression mathématique ou un contexte de programmation, mais peut également être utilisé pour indiquer un espace réservé où le contenu doit être remplacé par votre propre valeur. Exemple :

S'il y a <var>n</var> tuyaux menant à l'usine de crème glacée, alors je m'attends à ce qu'il y ait au *moins* <var>n</var> saveurs de crème glacée disponibles à l'achat !

### Exemple de sortie

L'élément `samp` est utilisé pour représenter (exemple) la sortie d'un programme ou d'un système informatique. Utile pour les sites orientés technologie, pas tellement utile autrement. Exemple :

L'ordinateur a dit <samp>Trop de fromage dans le bac deux</samp> mais je ne savais pas ce que cela signifiait.

### Entrée au clavier

L'élément `kbd` est utilisé pour désigner une saisie utilisateur (typiquement via un clavier, bien qu'il puisse également être utilisé pour représenter d'autres méthodes de saisie, telles que les commandes vocales). Exemple :

Pour prendre une capture d'écran sur votre Mac, appuyez sur <kbd>⌘ Cmd</kbd> + <kbd>⌘ Shift</kbd> + <kbd>3</kbd>.

### Texte en exposant et indice

L'élément `sup` représente un exposant et l'élément `sub` représente un indice. Ces éléments doivent être utilisés uniquement pour marquer des conventions typographiques avec des significations spécifiques, et non pour une présentation typographique. À titre indicatif, n'utilisez ces éléments que si leur absence changerait le sens du contenu. Exemple :

La coordonnée du <var>i</var>ème point est (<var>x<sub><var>i</var></sub></var>, <var>y<sub><var>i</var></sub></var>). Par exemple, le 10ème point a pour coordonnée (<var>x<sub>10</sub></var>, <var>y<sub>10</sub></var>).

f(<var>x</var>, <var>n</var>) = log<sub>4</sub><var>x</var><sup><var>n</var></sup>

### Italique

L'élément `i` est utilisé pour du texte dans une voix ou humeur différente, ou autrement décalé par rapport à la prose normale. Les exemples incluent des désignations taxonomiques, des termes techniques, des phrases idiomatiques d'une autre langue, le nom d'un navire ou d'autres portions de texte dont la présentation typographique est typiquement en italique. Exemple :

Il y a un certain *je ne sais quoi*{lang="fr"} dans l'air.

### Gras

L'élément `b` est utilisé pour du texte stylistiquement décalé par rapport à la prose normale sans transmettre une importance supplémentaire, comme des mots clés dans un résumé de document, des noms de produits dans une critique, ou d'autres portions de texte dont la présentation typographique est typiquement en gras. Exemple :

Vous entrez dans une petite pièce. Votre <b>épée</b> brille plus fort. Un <b>rat</b> se faufile près du mur du coin.

### Texte marqué ou surligné

L'élément `mark` est utilisé pour représenter une portion de texte marquée ou surlignée à des fins de référence. Lorsqu'il est utilisé dans une citation, il indique un surlignage non présent à l'origine mais ajouté pour attirer l'attention du lecteur sur cette partie du texte. Lorsqu'il est utilisé dans la prose principale d'un document, il indique une partie du document qui a été surlignée en raison de sa pertinence pour l'activité actuelle de l'utilisateur. Exemple :

J'ai aussi quelques <mark>chatons</mark> qui me rendent visite ces jours-ci. Ils sont vraiment mignons. Je pense qu'ils aiment mon jardin ! Peut-être devrais-je adopter un <mark>chaton</mark>.

## Éditions

L'élément `del` est utilisé pour représenter du texte supprimé ou rétracté qui doit encore rester sur la page pour une raison quelconque. Pendant ce temps, son homologue, l'élément `ins`, est utilisé pour représenter du texte inséré. Les deux `del` et `ins` ont un attribut `datetime` qui vous permet d'inclure un horodatage directement dans l'élément. Exemple de texte inséré et utilisation :

Elle a acheté <del datetime ="2005-05-30T13:00:00">deux</del> <ins datetime="2005-05-30T13:00:00">cinq</ins> paires de chaussures.

## Données tabulaires

Les tableaux doivent être utilisés pour afficher des données tabulaires. Les éléments `thead`, `tfoot` et `tbody` vous permettent de regrouper des lignes au sein de chaque tableau.

Si vous utilisez ces éléments, vous devez utiliser chaque élément. Ils doivent apparaître dans cet ordre : `thead`, `tfoot` et `tbody`, afin que les navigateurs puissent rendre le pied avant de recevoir toutes les données. Vous devez utiliser ces balises à l'intérieur de l'élément table.

| Le Meilleur Eggnog | Pour 12  | Pour 24 |
|--------------------|----------|---------|
| Lait               | 1 litre  | 2 litres|
| Bâtons de cannelle | 1        | 2       |
| Gousse de vanille, fendue | 1  | 2       |
| Clous de girofle   | 5        | 10      |
| Macis              | 10       | 20      |
| Jaunes d'œufs      | 12       | 24      |
| Tasses de sucre    | 1 1/2 tasses | 3 tasses |
| Rhum ambré         | 1 1/2 tasses | 3 tasses |
| Cognac             | 1 1/2 tasses | 3 tasses |
| Vanille            | 1 c. à soupe | 2 c. à soupe |
| Crème légère       | 1 litre  | 2 litres|

## Éléments interactifs

### Détails et résumés

L'élément `details` crée un widget de divulgation dans lequel les informations ne sont visibles que lorsque le widget est basculé en état "ouvert". Un résumé ou une étiquette peut être fourni en utilisant l'élément `<summary>`.

<details>
    <summary>Détails</summary>
    Quelque chose de suffisamment petit pour échapper à une attention décontractée.
</details>

## Formulaire

### Saisie

<form class="o-stack c-form">
  <p class="c-form__field">
    <label class="c-form__label" for="name">Votre nom</label>
    <input class="c-form__input" id="name" type="text" name="name" autocomplete="name" required aria-required="true">
  </p>
</form>

### Case à cocher

<form>
<div class="c-checkbox">
    <input class="c-checkbox__input" type="checkbox" id="form-checkbox-exemple-1" />
    <label class="c-checkbox__label" for="form-checkbox-exemple-1">Cliquez-moi</label>
</div>
<div class="c-checkbox">
    <input class="c-checkbox__input" type="checkbox" id="form-checkbox-exemple-2" checked />
    <label class="c-checkbox__label" for="form-checkbox-exemple-2">Coché</label>
</div>
<div class="c-checkbox">
    <input class="c-checkbox__input" type="checkbox" id="form-checkbox-exemple-3" disabled />
    <label class="c-checkbox__label" for="form-checkbox-exemple-3">Désactivé</label>
</div>
</form>

### Bouton

<form class="o-stack">
  <button class="c-button" type="submit">Envoyer</button>
</form>

### Intégrer

```html
[<cite>Windowlicker</cite> par Aphex Twin](https://open.spotify.com/intl-fr/track/409z4jUHpq7eIkg3N3FzZh?si=de002ef3fec949d0)
```

```html
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/409z4jUHpq7eIkg3N3FzZh?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
```

https://open.spotify.com/track/7x3pzBo6cpFVMy6g1pO5vE?si=qK1jnfsmRAyGtw__UZQ0vw

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7x3pzBo6cpFVMy6g1pO5vE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>


*[ASCII]: Code Standard Américain pour l'Échange d'Informations
*[HTML]: Langage de Balises HyperTextes
*[BBC]: British Broadcasting Corporation
*[Staffs.]: Staffordshire
