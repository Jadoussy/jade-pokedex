import AddTeam1Button from "./AddTeam1Button";

function PokemonBattle({myTeam, onReset}) {

    return (
        <div style={{ border: "2px solid white", padding: "10px", marginTop: "20px" }}>
            <h1>Arene de Pokémons</h1>
            <p>Ma team :<strong>{myTeam}</strong></p>
            
            <AddTeam1Button handleClick={onReset} myTeam={myTeam != "Aucun pokémon"}/>
        </div>
    )
}
export default PokemonBattle;