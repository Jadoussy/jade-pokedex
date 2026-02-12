import { useState } from "react";

function PokemonTypeFilter({onFilterChange}) {
    
    const [searchTypeFilter, setSearchTypeFilter] = useState('')

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTypeFilter(value);

        onFilterChange(value);
    }
    
    return (
        <div>
            <input type="text" id="inputTypeFilter" value={searchTypeFilter} onChange={handleChange}></input>

        </div>
    )


}
export default PokemonTypeFilter;