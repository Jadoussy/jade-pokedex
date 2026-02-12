import AddTeam1Button from "./AddTeam1Button";

function PokemonBattle({myTeam, onReset}) {

    return (
        <div style={{ border: "2px solid white", padding: "10px", marginTop: "20px" }}>
            <h1>Arene de Pokémons</h1>
            <p>Ma team :<strong>{myTeam}</strong></p>

            <p>! EN CONSTRUCTION !</p>
            {/* A FAIRE : fonctionnalité futur : faire s'affronter son pokemon (celui ajouté) 
                contre un pokemon choisi aléatoirement à chaque combat.
                Le duel se fera selon celui qui a le type qui contre l'autre (ex : eau vs feu)
                Nom du gagnant sera affiché <p>, <input> bouton pour lancer le combat 
            */}
            
            <AddTeam1Button handleClick={onReset} myTeam={myTeam != "Aucun pokémon"}/>
        </div>
    )
}
export default PokemonBattle;