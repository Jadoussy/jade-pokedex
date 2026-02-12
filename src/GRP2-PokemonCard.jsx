import { useState } from "react"; 

function PokemonCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="card">
    
      <img src={props.image} alt={props.name} width="120"/>
      
      <h2 className="card-title">{props.name}</h2>
      
      <p className="type">{props.type}</p>

      <button 
        onClick={toggleFavorite}  
        className={isFavorite ? "fav-button active" : "fav-button"}>
        {isFavorite ? "★ Favori" : "☆ Ajouter aux favoris"}
      </button>

    </div>
  );
}

export default PokemonCard;