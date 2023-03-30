---
date: 2012-06-06
title: Le chargement du paresseux
categories:
- Internet
- Programmation
tags:
- Chargement
- design
- Image
- jQuery
- Lazy
- Paresseux
- Plugin
- Responsive
- web
---
Un nouvelle technique fait son apparition dans le <a title="Définition du Responsive design sur wikipedia" href="https://fr.wikipedia.org/wiki/Responsive_Web_Design"><span lang="en">responsive design</span></a>. <!--more-->

Je n'ai pas trouvé de traduction française. Nommons cette technique le "chargement paresseux" de l'anglais "lazy load".

Avec l'avènement du mobile, de plus en plus de personnes navigue au moyen de leur téléphone portable. Tout le monde n'ayant pas un abonnement avec les données illimitées et le réseau n'étant pas optimal partout, il est dans la pratique de transférer le minimum de donnée entre le serveur et votre téléphone.

Le chargement paresseux (si quelqu'un a une meilleure idée de nom, je suis preneur) consiste à charger uniquement les images qui se trouvent dans le <em>viewport</em>.  Entendez par là, les images qui sont visibles à l'écran. Cela permet de limiter grandement le transfert de donnée pour les longues pages comportant beaucoup d'images.

<a title="Site de Mike Tuupola" href="https://www.appelsiini.net/">Mike Tuupola</a> propose <a title="Plugin Lazy Load" href="https://www.appelsiini.net/projects/lazyload">un plugin jQuery</a> afin d'appliquer cette technique. <a title="Exemple de chargement avec fade in" href="https://www.appelsiini.net/projects/lazyload/enabled_fadein.html">La version avec <span lang="en">fade in</span></a> me plaît particulièrement.

Je ne peux que vous conseiller de mettre en place ce type de chargement si votre site web est destiné à un publique mobile.
