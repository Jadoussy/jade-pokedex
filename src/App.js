
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

  // PokemonTypeFilter
  const [filterType, setFilterType] = useState('');

  const filteredPokemons = pokemons.filter((p)=> 
    p.type.toLowerCase().includes(filterType.toLowerCase())
  );

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

          <PokemonTypeFilter onFilterChange={setFilterType}/>

          <DisplayPokemonList 
                pokemons={filteredPokemons} 
                onSelect={setMyTeam} 
                currentTeam={myTeam} />

      </header>
    </div>
  );
}
export default App;
