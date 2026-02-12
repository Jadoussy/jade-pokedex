import { useState } from "react";

function PokemonTypeFilter({onFilterChange}) {

    // va contenir la chaine de caractère rentrée par l'utilisateur
    const [searchTypeFilter, setSearchTypeFilter] = useState('')

    const handleChange = (event) => {
        // récupère la valeur rentrée dans l'input au moment où une lettre est changée
        const value = event.target.value;
        setSearchTypeFilter(value);

        // envoi à App.js la valeur retenue
        onFilterChange(value);
    }
    
    return (
        <div>
            <h2>Quel est le type de ton Pokemon ?</h2>
            {/* Met la valeur de l'input à celle qu'on vient de set dans la fonction handleChange 
            la fonction handleChange est déclenchée à chaque modification dans le champs de texte (= onChange)*/}
            <input type="text" id="inputTypeFilter" value={searchTypeFilter} onChange={handleChange}></input>
        </div>
    )
}
export default PokemonTypeFilter;