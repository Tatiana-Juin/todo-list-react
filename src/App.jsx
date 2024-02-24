import { useState } from 'react'
import viteLogo from '/vite.svg'

import CardData from './Components/Card'

import './App.css'

// variable pour que les key de la liste soit unique 
let nextId=0;

function App() {
    //Pour récupérer la valeur 
    const [dataValue,setDataValue] = useState('');
    // Pour ajouter la tache au tableau
    const [tasks,setTasks] = useState([]);

    // Function pour récupérer la valeur saisie 
    function handleValue(e){
      setDataValue(e.target.value);
    }
    
    // Ajout dans le tableau de la valeur récupérer
    function handleTask(e){
      e.preventDefault();
      // Pour afficher la valeur du card quand c'est different de vide 
      if(dataValue.trim() !=""){
        // Ajouter une valeur au tableau
        setTasks([
          ...tasks,
          {id:nextId++,name:dataValue}
        ]);
      // Initialiser la valeur dans le bouton input ( champs de texte )
        setDataValue('');
      }
      
    }
    

    return (
      <>
        {/* POUR AFFICHER LE FORMULAIRE */}
        <form >
            <input type="text" onChange={handleValue}  />
            <button onClick={handleTask}>Envoyer</button>
        </form>

        {/* APPELLE DU COMPOSANT CardData  */}
        <CardData datas={tasks} />
        
      </>
    )
}

export default App