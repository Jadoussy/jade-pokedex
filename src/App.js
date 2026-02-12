
// Import des composants
import './App.css';
import { useState } from "react";

import './PokemonCard.css';

import pokemonsData from './pokemons.json';
import DisplayPokemonList from './DisplayPokemonList';

import PokemonDescription from './PokemonDescription';
import './PokemonDescription.css';

import Welcome from './Welcome';
import './Welcome.css';

import PokemonBattle from './PokemonBattle';

function App() {

  // Récupération et utilisation des données importées du .json
    const [pokemons] = useState(pokemonsData);

    const [myTeam, setMyTeam] = useState("Aucun pokémon");

  return ( 
    <div className="App">
      <head> <title>Mon Pokédex</title> </head>
      <header className="App-header">

          {/* Composant du titre de bienvenu avec la date et heure */}
          <Welcome/>

          {/* Utilisation du composant avec les data .json */}
          <div className='pokemon-list'>
            <DisplayPokemonList pokemons={pokemons} onSelect={setMyTeam} currentTeam={myTeam} />
          </div>

          <PokemonBattle myTeam={myTeam} onReset={() => setMyTeam("Aucun pokémon")}/>
          
          <PokemonDescription/>

          {/* liste des favoris avec leurs noms */}

      </header>
    </div>
  );
}
export default App;
