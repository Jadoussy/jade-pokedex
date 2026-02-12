
// Import des composants
import './App.css';
import { useState } from "react";

import './pokemon-card/PokemonCard.css';

import pokemonsData from './data/pokemons.json';
import DisplayPokemonList from './pokemon-card/DisplayPokemonList';

import PokemonDescription from './pokemon-description/PokemonDescription';
import './pokemon-description/PokemonDescription.css';

import Welcome from './components/Welcome';
import './components/Welcome.css';

import PokemonBattle from './pokemon-arena/PokemonBattle';

import PokemonTypeFilter from './pokemon-card/PokemonTypeFilter';

function App() {

  // Récupération et utilisation des données importées du .json
    const [pokemons] = useState(pokemonsData);

    const [myTeam, setMyTeam] = useState("Aucun pokémon");

  // ----- PokemonTypeFilter ----- //

  // va contenir la chaine de caractère rentrée par l'utilisateur
  const [filterType, setFilterType] = useState('');

  // créer un nouveau tableau contenant tous les pokemons (du tableau pokemons)
  // dont le type (p.type) correspond (.includes) à la saisie de l'utilisateur (filterType)
  // .toLowerCase() pour que la comparaison ne soit pas sensible à la casse (les valeurs sont toutes en minuscules)
  const filteredPokemons = pokemons.filter((p)=> 
    p.type.toLowerCase().includes(filterType.toLowerCase())
  );

  return ( 
    <div className="App">
      <head> <title>Mon Pokédex</title> </head>
      <header className="App-header">

          {/* Titre de bienvenu avec la date et heure */}
          <Welcome/>

          {/* Affichage de la liste des pokemon et du filtre  */}
          <PokemonTypeFilter onFilterChange={setFilterType}/>
          {/* Les pokemons affichés sont ceux du résultat du filtre (saisie de l'utilisateur) */}
          <DisplayPokemonList pokemons={filteredPokemons} onSelect={setMyTeam} currentTeam={myTeam} />

          <PokemonBattle myTeam={myTeam} onReset={() => setMyTeam("Aucun pokémon")}/>
          
          <PokemonDescription/>

      </header>
    </div>
  );
}
export default App;
