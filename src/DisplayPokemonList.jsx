import PokemonCard from "./PokemonCard";

function DisplayPokemonList({pokemons, onSelect, currentTeam}) {

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}     
          name={pokemon.name}
          type={pokemon.type}
          image={pokemon.image}
          pv={pokemon.pv}
          onSelect={onSelect}
          currentTeam={currentTeam}
        />
      ))}
    </div>
  );
}
export default DisplayPokemonList;