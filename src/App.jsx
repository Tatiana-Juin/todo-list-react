import { useState,useEffect } from 'react'
import viteLogo from '/vite.svg'

import CardData from './Components/Card'

import './App.css'

function App() {
    //Pour récupérer la valeur 
    const [dataValue,setDataValue] = useState('');
    // Pour ajouter la tache au tableau
    const [tasks,setTasks] = useState([]);
    // Pour afficher les tasks 
 
    // Function pour récupérer la valeur saisie 
    function handleValue(e){
      setDataValue(e.target.value);
    }
    
    // Ajout dans le tableau de la valeur récupérer
    function handleTask(e){
      e.preventDefault();
      // Pour inserer dans le tableau la valeur saisie si elle n'est pas vide 
      if(dataValue.trim() !=""){
        // Ajouter une valeur au tableau
        setTasks(tasks => [
          ...tasks,
          {id: tasks.length+1, name: dataValue}
        ]);
        // setDataValue('');
      }
     
    }
    // Fonction pour supprimer une tache 
    const handleDeleteTask = (id) => {
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
  };
    
    return (
      <>
        {/* POUR AFFICHER LE FORMULAIRE */}
        <form >
            <input type="text" onChange={handleValue}  />
            <button onClick={handleTask}>Envoyer</button>
        </form>
        
        {/* Appelle du composant CardData avec différents props */}
        <CardData datas={tasks} onDeleteTask={handleDeleteTask}/>
        
      </>
    )
}

export default App