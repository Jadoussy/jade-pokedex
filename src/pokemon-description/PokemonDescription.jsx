import { useState } from "react";
import ChangeButton from "./ChangeButton";

let messageDescription = "Descrition des pokémons";

const PokemonDescription = () => {
    const [index, setIndex] = useState(0)

    const descriptionPokemon = [
    "Au début de sa vie, il se nourrit des nutriments accumulés dans la graine sur son dos. Cela lui permet de grandir.",
    "Ce petit Pokémon bipède de type Feu, présent dès Pokémon Rouge et Bleu en 1996, se distingue par sa queue enflammée",
    "Un mini Pokémon joufflu qui ressemble à un rongeur, au corps recouvert d'un pelage jaune avec deux bandes horizontales brunes ...",
    "Il est un Pokémon bipède violet foncé avec un corps rondouillard.",
    "C'est un Pokémon de couleur crème et de petite taille, possédant un corps rond qui est toujours recouvert d'une coquille d'œuf.",
    "S'il est attaqué par plus redoutable que lui, il feint la blessure et s'échappe à la première occasion.",
    "Quand il chante, tous ceux qui l'entendent s'endorment profondément. Il est originaire de la région de Kanto."
    ]

    const handleClick= () => {

        messageDescription = descriptionPokemon[index]
        // for (index ; 6 ;setIndex(index + 1)) {
        //     messageDescription = descriptionPokemon[index];
        //     setIndex(index + 1); 
        // }
        switch (index) {
            case 0 : 
                setIndex(index + 1); 
                break;
            case 1 : 
                setIndex(index + 1); 
                break;
            case 2 : 
                setIndex(index + 1);
                break;
            case 3 : 
                setIndex(index + 1);
                break;
            case 4 : 
                setIndex(index + 1);
                break;
            case 5 : 
                setIndex(index + 1);
                break;
            case 6 : 
                setIndex(0);
                break;
            default : 
                setIndex(0); 
        }
        // console.log(messageDescription);
    }

    return (
        <div className="pokemon-description-container">
            <h3 className="description-title">Qui est ce ?</h3>

            <div >
                <p className="description-texte" >{messageDescription}</p>
            </div>

            <ChangeButton handleClick={handleClick}/>

        </div>
    );
}
export default PokemonDescription;