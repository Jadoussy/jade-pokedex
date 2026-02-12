// Ctrl + ù : Open terminal
import logo from './logo.svg';
import './App.css';

// Import des composant
import { useState } from "react";

import Welcome from './Welcome';
import './Welcome.css';

import StudentCard from './Students/StudentCard';
import './Students/StudentCard.css';

import Compteur from './Compteur';

import ColorChanger from './ColorChanger';
import './ColorChanger.css';
import SecretMessage from './SecretMessage';

import ContactFormPage from './ContactFormPage/ContactFormPage';
// import './ContactFormPage/ContactFormPage.css';

import PokemonCard from './PokemonCard';
import './PokemonCard.css';
  import salamecheImg from './images-pokemon/salameche.png';
  import carapuceImg from './images-pokemon/carapuce.png';
  import bulbizarreImg from './images-pokemon/bulbizarre.png';

function App() {

  // --------------- POKEMON ---------------------------
    const pokemons = [
    {id:1,name:"Salameche",type:"feu",img:salamecheImg},
    {id:2,name:"Carapuce",type:"eau",img:carapuceImg},
    {id:3,name:"Bulbizarre",type:"herbe",img:bulbizarreImg} ]
  // -------------- fin de liste -----------------------

  

  return ( 
    // correspond a l'HTML et seulement un bloc (div) (peut empiler les div)
    <div className="App">
        <head> <title>React Js Tanaland</title> </head>
        <header className="App-header">

      {/*Ex 0*/}
        <Welcome/>

      {/* --------------- POKEMON --------------------------- */}
      <div className='pokemon-list'>
        {pokemons.map((pokemon) => <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            img={pokemon.img}
          />
        )}
      </div>
      {/* <PokemonCard name={"Diva"} type={"Herbe"} />  */}
      {/* --------------- -------- --------------------------- */}










      {/*Ex 4A : State sans useState */}
        <Compteur/>

      {/*Exercice 4B : changer la couleur d'un élément dans composant ColorChanger.*/}
        <ColorChanger/>
        
      {/*Exercice 4C : Afficher / Masquer texte*/}
        <SecretMessage/>

      {/*Exercice 5B ET 4C : Afficher / Masquer texte et */}
        <ContactFormPage/>

      {/*Ex 1a*/}
      {/* <StudentCard name="Alice" age={18} formation="B2" />
      <StudentCard name="Tana" age={3} formation="diva studies" /> */}

      {/*Ex 1b*/}
        <p className="cards">{listStudents}</p>

        





        {/*Reste du template : */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Diva only.
        </p>

        <img src="/diva1.jpg" className="App-logo" alt="logo" />
        <img src="/diva2.png" className="App-logo" alt="logo" />
        <img src="/diva3.png" className="App-logo" alt="logo" />
        <img src="/diva4.png" className="App-logo" alt="logo" />
        <img src="/diva5.png" className="App-logo" alt="logo" />
        <img src="/diva6.png" className="App-logo" alt="logo" />
        <img src="/diva7.png" className="App-logo" alt="logo" />
        <p> fin</p>
        <a className="App-link" href="https://reactjs.org" target="_blank"rel="noopener noreferrer"> Hey React</a>

      </header>

    </div>
  );
}

export default App;
