import "../pokemon-card/PokemonCard.css";

const AddTeam1Button = ({handleClick, myTeam}) => {
    return ( 
    <button className="add-team1-Button"
        onClick={handleClick}>
        {myTeam ? "Ajouté":"+"}
    </button>
    );
}
export default AddTeam1Button;