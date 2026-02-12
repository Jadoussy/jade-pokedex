import { useState } from "react";
import AddTeam1Button from "../pokemon-arena/AddTeam1Button";

function PokemonCard(props) {
    const [isFavorite, setIsFavorite] = useState(true);

    function toggleFavorite() {
        setIsFavorite(!isFavorite);
    }

    let typeCSS = "pokemon-type-default" ;
        switch (props.type) {
            case "Feu" : 
                typeCSS = "pokemon-type-fire" ;
                break;
            case "Plante / Poison" : 
                typeCSS = "pokemon-type-plante-poison" ;
                break;
            case "Électrik" : 
                typeCSS = "pokemon-type-electrik" ;
                break;
            case "Fée" : 
                typeCSS = "pokemon-type-fee";
                break;
            case "Normal / Fée" : 
                typeCSS = "pokemon-type-normal-fee";
                break;
            case "Spectre / Poison" : 
                typeCSS = "pokemon-type-spectre-poison";
                break;
            default : 
                typeCSS = "pokemon-type-default" ; 
        }
    
    // const typeCSS =     props.type === "Feu" ? "pokemon-type-fire" :
    //                     props.type === "Plante / Poison" ? "pokemon-type-plante-poison" :
    //                     props.type === "Électrik" ? "pokemon-type-electrik" :
    //                     props.type === "Fée" ? "pokemon-type-fee" :
    //                     props.type === "Normal / Fée" ? "pokemon-type-normal-fee" :
    //                     props.type === "Spectre / Poison" ? "pokemon-type-spectre-poison" : "pokemon-type-default";

    const isFavoriteCSS = isFavorite ? "pokemon-favori" : "pokemon-no-favori";
    
    function handleAddClick() {
        props.onSelect(props.name);
    }

    const isInTeam = props.currentTeam === props.name;
    
    
    
    return (
    <div className={`pokemon-card ${typeCSS}`}>
        <h2>{props.name}</h2>
        <p>Type : {props.type}</p>
        <p>PV : {props.pv}</p>
        <img src={props.image} alt={props.name} width='150px' />

        <button className={isFavoriteCSS} onClick={toggleFavorite}>
            {isFavorite ? "★ Favori" : "☆ Ajouter aux favoris"}
        </button>

        <AddTeam1Button handleClick={handleAddClick} myTeam={isInTeam}/>
    </div>
    );
}
export default PokemonCard;