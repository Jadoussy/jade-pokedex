/* Exercice 1 : */

const Welcome = () => {
    // new Date()       - Créer un objet qui contient la date du jour
    // .toISOString()   - date qui est convertit en chaine de caratères 
    // .split("T")      - créer un tableau qui correspond à la séparation en 2 de la cc dès qu'il y a un T  
    //                          (T sépare la date de l'heure : 2026-01-15T13:17:11.997Z)
    // [0]              - selectionne le 1er élément du tableau qui correspond à la date ( [1] = heure )
    const today = new Date().toISOString().split('T')[0]; // -> AAAA-MM-JJ

    const time = new Date().toISOString().split('T')[1]; // -> HH:MM:SS.MS Z
    const hour = time[0] + (Number(time[1]) + 1) + ":" + time[3] + time[4];

    return (
        <div>
            <h1>  
                Bienvenue dans mon pokedex !               
                <strong className="strongHour">{"  "+hour}🕑</strong>
                <input className="inputDate" type="date" value={today} disabled />      
            </h1> 
        </div>
    );
};
export default Welcome;