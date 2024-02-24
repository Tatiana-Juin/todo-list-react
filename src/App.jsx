import { useState } from 'react'
import viteLogo from '/vite.svg'

import CardData from './Components/Card'

import './App.css'

function App() {
  
    //Pour récupérer la valeur 
    const [dataValue,setDataValue] = useState('');
    // Pour ajouter la tache au tableau
    const [tasks,setTasks] = useState([]);

    // Compteur pour créer un identifiant unique 
    // const [uniqueId,setUniqueId] = useState(0);

    
    
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
        setTasks([...tasks,dataValue]);
      // Initialiser la valeur dans le bouton input ( champs de texte )
        setDataValue('');
      }
      
    }
    // POUR LE COMPTEUR 
    // function handleUniqueKey(){
    //   setUniqueId(uniqueId => uniqueId+1);
    //   return `${uniqueId}`;
    // }

    return (
      <>
        {/* POUR AFFICHER LE FORMULAIRE */}
        <form onSubmit={handleTask}>
          <input type="text" onChange={handleValue} value={dataValue}  />
          <button >Créer une tache</button>
        </form>

        {/* APPELLE DU COMPOSANT CardData  */}
        <CardData datas={tasks} />
        
      </>
    )
}

export default App