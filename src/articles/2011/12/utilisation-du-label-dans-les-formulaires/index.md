---
date: 2011-12-28

title: Utilisation du label dans les formulaires
categories:
- Internet
tags:
- form
- html
- html5
- label
- Standard
- Usabilité
- ux
---
Ce matin dans le train, je lisais "<a title="Mobil First sur a book apart" href="https://www.abookapart.com/products/mobile-first">Mobile First</a>" de Luke Wroblewski. Il y fait un bref étude de cas sur l'utilisation de la balise <a title="Description de l'élément label en HTML5" href="https://www.w3.org/TR/html5/forms.html#the-label-element">label</a> dans les formulaires. Je trouvais intéréssant de partager la reflexion avec vous.<!--more-->

[caption id="attachment_4686" align="alignright" width="250" caption="Le formulaire d&#39;inscritpion de Twitter affiche les labels dans les champs de saisie"]<a href="https://dlgjp9x71cipk.cloudfront.net/2011/12/label_inside.png"><img class="size-medium wp-image-4686" title="Twitter desktop login form" src="https://dlgjp9x71cipk.cloudfront.net/2011/12/label_inside-250x162.png" alt="Capture d'écran du formulaire d'inscription du site Twitter" width="250" height="162" /></a>[/caption]

Beaucoup de sites par soucis de gain de place n'affichent plus les label. Le label est directement afficher dans l'input. D'un point de vu graphique c'est tout à fait louable, mais l'usabilité du formulaire s'en voit réduite.

Le site <a title="Page d'accueil du site Twitter" href="https://twitter.com/">Twitter </a>dans son formulaire d'inscription affiche le texte d'aide directement dans le champs de saisie. Graphiquement c'est très bien. Mais imaginez si vous avez une dizaine de champs à remplir. Une fois toutes les informations saisies, vous n'avez plus aucun moyen de savoir si vous avez malencontreusement inscris votre courriel professionnel alors que le privé était demandé. Pour se faire, il faut supprimer vos informations. Vous adviendrez que l'usabilité peux être meilleure.
De plus, si on jet un oeil le code HTML, on remarque que la balise label est inexistante. Les textes d'aide se trouvent dans des balise span. Les règles d'accessibilités ne sont pas respectées. Il sera donc difficile pour les personnes malvoyante de remplir le formulaire.

[html highlight="4,8,12"]
&lt;form action=&quot;https://twitter.com/signup&quot; class=&quot;signup signup-btn&quot; method=&quot;post&quot;&gt;
  &lt;div class=&quot;holding name&quot;&gt;
    &lt;input type=&quot;text&quot; autocomplete=&quot;off&quot; value=&quot;&quot; name=&quot;user[name]&quot; maxlength=&quot;20&quot;&gt;
    &lt;span class=&quot;holder&quot;&gt;Nom complet&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class=&quot;holding email&quot;&gt;
    &lt;input type=&quot;text&quot; autocomplete=&quot;off&quot; value=&quot;&quot; name=&quot;user[email]&quot;&gt;
    &lt;span class=&quot;holder&quot;&gt;Adresse e-mail&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class=&quot;holding password&quot;&gt;
    &lt;input type=&quot;password&quot; value=&quot;&quot; name=&quot;user[user_password]&quot;&gt;
    &lt;span class=&quot;holder&quot;&gt;Mot de passe&lt;/span&gt;
  &lt;/div&gt;

  &lt;input type=&quot;hidden&quot; value=&quot;front&quot; name=&quot;context&quot;&gt;
  &lt;input type=&quot;submit&quot; class=&quot;promotional submit button&quot; value=&quot;S'inscrire&quot;&gt;

&lt;/form&gt;
[/html]

On remarque également que texte saisie et texte d'aide se différencient juste par une légère variation de gris. On peut mieux faire.

[caption id="attachment_4687" align="alignleft" width="250" caption="La version mobile de Twitter propose un formulaire d&#39;inscription avec les labels à l&#39;extérieur des champs de saisie"]<a href="https://dlgjp9x71cipk.cloudfront.net/2011/12/label_outside.png"><img class="size-medium wp-image-4687" title="Twitter mobile login form" src="https://dlgjp9x71cipk.cloudfront.net/2011/12/label_outside-250x232.png" alt="Capture d'écran du formulaire d'inscription à Twitter dans sa version mobile" width="250" height="232" /></a>[/caption]

Pour palier au problème mentionné ci-dessus, il est préférable de favoriser une utilisation sert plus classique des labels mais bien plus utilisable.

Toujours<a title="Formulaire d'inscription sur la version mobile de Twitter" href="https://mobile.twitter.com/signup"> Twitter mais dans sa version mobile</a> cette fois propose un formulaire d'inscription avec les labels à l'extérieur. C'est un peu moi beau mais bien plus fonctionnel. De plus, un exemple de de saisie est affiché dans l'input pour aider l'internaute.

Les labels à l'extérieurs sont toujours présents et donc permettent de toujours savoir quelle information ne devons saisir.

Par contre si on regarde le HTML, on peux voir que ce n'est pas une balise label qui est utiliser mais un div. Les standards ne sont également pas respectés.

[html highlight="4,9,12,19,24-28,31,36,40-42,50-52"]
&lt;form action=&quot;/signup&quot; method=&quot;post&quot;&gt;&lt;div style=&quot;margin:0;padding:0;display:inline&quot;&gt;&lt;input name=&quot;authenticity_token&quot; type=&quot;hidden&quot; value=&quot;9052d033a3d28705d6af&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;inputs&quot;&gt;
&lt;div class=&quot;signup-container full_name&quot;&gt;
&lt;div class=&quot;signup-field-head&quot;&gt;Nom et Prénom&lt;/div&gt;
&lt;div class=&quot;signup-field&quot;&gt;
&lt;input autocomplete=&quot;off&quot; class=&quot;signup-input&quot; id=&quot;oauth_signup_client_fullname&quot; name=&quot;oauth_signup_client[fullname]&quot; placeholder=&quot;Larry l'oiseau&quot; type=&quot;text&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;signup-checkmark&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;signup-field-hint&quot;&gt;Nom et Prénom&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;signup-container email&quot;&gt;
&lt;div class=&quot;signup-field-head&quot;&gt;Adresse e-mail&lt;/div&gt;
&lt;div class=&quot;signup-field&quot;&gt;
&lt;input autocomplete=&quot;off&quot; class=&quot;signup-input&quot; id=&quot;oauth_signup_client_email&quot; name=&quot;oauth_signup_client[email]&quot; placeholder=&quot;nom@exemple.com&quot; type=&quot;text&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;signup-checkmark&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;signup-container username&quot;&gt;
&lt;div class=&quot;signup-field-head&quot;&gt;Nom d'utilisateur&lt;/div&gt;
&lt;div class=&quot;signup-field&quot;&gt;
&lt;input autocomplete=&quot;off&quot; class=&quot;signup-input&quot; id=&quot;oauth_signup_client_screen_name&quot; name=&quot;oauth_signup_client[screen_name]&quot; placeholder=&quot;nom&quot; type=&quot;text&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;signup-checkmark&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;signup-field-hint&quot;&gt;
Voici le nom sous lequel vous serez connu sur Twitter
&lt;br&gt;
Entre 6 et 15 caractères
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;signup-container password&quot;&gt;
&lt;div class=&quot;signup-field-head&quot;&gt;Mot de passe&lt;/div&gt;
&lt;div class=&quot;signup-field&quot;&gt;
&lt;input autocomplete=&quot;off&quot; class=&quot;signup-input&quot; id=&quot;oauth_signup_client_password&quot; name=&quot;oauth_signup_client[password]&quot; placeholder=&quot;••••••&quot; size=&quot;30&quot; type=&quot;password&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;signup-checkmark&quot;&gt;&lt;/div&gt;
&lt;div class=&quot;signup-field-hint&quot;&gt;6 caractères minimum (Soyez astucieux !)&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;fieldset class=&quot;inputs captcha&quot;&gt;
&lt;div class=&quot;signup-field-head captcha-hint&quot;&gt;
Juste au cas où vous seriez une machine
&lt;/div&gt;
&lt;div class=&quot;signup-field captcha-field&quot;&gt;
&lt;input id=&quot;captcha_method&quot; name=&quot;captcha_method&quot; type=&quot;hidden&quot; value=&quot;2&quot;&gt;
&lt;input id=&quot;captcha_challenge_field&quot; name=&quot;captcha_challenge_field&quot; type=&quot;hidden&quot; value=&quot;1325057351T5cedb4f785508d18212f6977e7fd2b5b7a1c85db&quot;&gt;
&lt;img class=&quot;captcha-img&quot; src=&quot;/signup/captcha/1325057351T5cedb4f785508d18212f6977e7fd2b5b7a1c85db.gif&quot;&gt;
&lt;br&gt;
&lt;/div&gt;
&lt;div class=&quot;signup-container captcha&quot;&gt;
&lt;div class=&quot;signup-field-head numbers&quot;&gt;
Vérification
&lt;/div&gt;
&lt;div class=&quot;signup-field&quot;&gt;
&lt;input class=&quot;signup-input&quot; id=&quot;captcha_response_field&quot; name=&quot;captcha_response_field&quot; pattern=&quot;\d*&quot; placeholder=&quot;Tapez les chiffres ci-dessus&quot; type=&quot;tel&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;signup-checkmark&quot;&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;/fieldset&gt;
&lt;div class=&quot;signup-button&quot;&gt;
&lt;button class=&quot;signup button disabled&quot; id=&quot;&quot; type=&quot;submit&quot;&gt;Créer mon compte&lt;/button&gt;
&lt;/div&gt;
&lt;div class=&quot;signup-field-hint&quot;&gt;
En cliquant sur &quot;Créer mon compte&quot; ci-dessous, vous acceptez nos &lt;a href=&quot;/tos&quot; target=&quot;_new&quot;&gt;Conditions&lt;/a&gt; ainsi que notre &lt;a href=&quot;/privacy&quot; target=&quot;_new&quot;&gt;Politique de Confidentialité&lt;/a&gt;
&lt;/div&gt;
&lt;/form&gt;
[/html]

Lorsque vous créez un formulaire, partez sur une base simple et standard. Vous pourrez l'améliorer graphiquement avec des feuilles de style. Mais surtout respecter les standards d'accessibilité. Ça vous évitera beaucoup de problème. Mieux vaut un formulaire moins beau mais utilisable qu'un formulaire bling bling auquel on ne comprend rien.

Voici comment je structure mes formulaires :

[html]
&lt;form action=&quot;/action.php&quot; method=&quot;post&quot;&gt;  &lt;fieldset&gt;    &lt;legend&gt;Ajouter un commentaire&lt;/legend&gt;    &lt;p&gt;      &lt;label for=&quot;firstname&quot;&gt;Pr��nom&lt;/label&gt;&lt;br&gt;      &lt;input class=&quot;text&quot; type=&quot;text&quot; name=&quot;firstname&quot; id=&quot;firstname&quot; value=&quot;&quot;&gt;     &lt;/p&gt;
    &lt;p&gt;
      &lt;label for=&quot;name&quot;&gt;Nom&lt;/label&gt;&lt;br&gt;
      &lt;input class=&quot;text&quot; type=&quot;text&quot; name=&quot;name&quot; id=&quot;name&quot; value=&quot;&quot;&gt;
    &lt;/p&gt;
    &lt;p&gt;
      &lt;label for=&quot;comments&quot;&gt;Prénom&lt;/label&gt;&lt;br&gt;
      &lt;textarea name=&quot;comments&quot; id=&quot;comments&quot;&gt;&lt;/textarea&gt;
    &lt;/p&gt;
    &lt;p&gt;
      &lt;input type=&quot;submit&quot; name=&quot;submit&quot; id=&quot;submit&quot; value=&quot;Envoyer&quot; class=&quot;button&quot;&gt;
    &lt;/p&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;
[/html]
