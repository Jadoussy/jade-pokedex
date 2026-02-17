Bienvenue dans mon projet de Pokédex avec React.js (en JavaScript)

Le but est de m'exercer sur React.js (bibliothèque open source javascript) : la création de composants, props, useState, useEffect, useCollapse…

components/Welcome.jsx
- Composant qui permet d'afficher l'heure et la date actuelle
- Les données sont récupérées avec new Date pour avoir l'heure, jour, mois, année, minute, seconde, actuel.
- Puis qui est découpé (.split('')[]) pour avoir seulement l'info qui m'intéresse (heure et date).

data/pokemons.json
- Base de données au format json : contient leurs caractéristiques et images des Pokémons.
- Le fichier est importé dans le App.js pour être récupéré et utilisé par le composant DisplayPokemonList.

pokemon-arena/
  PokemonBattle.jsx
  - Composant parent de AddTeam1Button
  - Il permet de récupérer l'info quand le bouton du composant enfant AddTeam1Button est cliqué.
  - Il réutilise cette information pour afficher le nom du Pokémon ajouté dans la div. S'il est cliqué à nouveau(bouton +), alors aucun Pokémon n'est l'équipe.
  - Fonctionnalité future : ce composant a pour projet d'être modifié pour récupérer le type du Pokémon choisit et le faire s'affronter contre le type d'un autre Pokémon choisi au hasard parmi la liste.
  Il affichera le vainqueur et un score qui sera mis à jour et affiché dans la page.

  AddTeam1Button.jsx
  - Composant enfant de PokemonBattle.jsx
  - Permet de lancer la fonction handleClcick quand le bouton "+"ou" est cliqué et ajoute la valeur dans l'équipe qui sera affichée dans la div de PokemonBattle.


pokemon-card/
  DisplayPokemonList.jsx
  - Composant qui permet de parcourir le tableau (pokemons.json) pour renvoyer une liste de composants PokemonCard.
  - Il transmet pour chaque Pokémon ses caractéristiques (selon clé:valeur) et les fonctions onSelect et currentTeam pour l'équipe (utilisé pour l'arène de Pokémons).

  PokemonCard.jsx
  - Composant qui permet d'afficher la carte (contient les détails) du Pokémon avec le style (classes, PokemonCard.css) qui correspond à la couleur du type du Pokémon (switch)
  - Il gére le bouton d'ajout en favoris. Utilisation de useState pour stocker et mettre à jour l'info dans le code et visuellement. 

  PokemonTypeFilter.jsx 
  - Composant qui permet de filtrer selon le type les Pokémons en récupérant les caractères tapés dans l'input.
  - Et renvoie son résultat (filtrage) dans l'App.js pour qu'il affiche la liste filtrée (.filter).


pokemon-description/  
  PokemonDescription.jsx
  - Composant parent de ChangeButton.jsx
  - Il permet d'afficher la description suivante d'un Pokémon à chaque clic sur le bouton ChangeButton.
  - Utilisation d'un switch pour incrémenter l'index ((setIndex(index + 1);) de navigation ou le remettre à zéro pour faire défiler les textes à l'infini.

  ChangeButton.jsx
  - Permet de lancer une fonction (hundleClick) quand on clique sur le bouton (qui affiche une flèche).
  - Composant enfant de PokemonDescription.jsx



src/App.js                
- Point d'entrée de l'interface
- Gère le filtrage dynamique pour coordonner l'affichage, la recherche et l'arène des Pokémons.
