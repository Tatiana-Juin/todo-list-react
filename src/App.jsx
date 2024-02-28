import { useState } from 'react'
import viteLogo from '/vite.svg'

import CardData from './Components/Card'

import './App.css'

function App() {
    //Pour récupérer la valeur 
    const [dataValue,setDataValue] = useState('');
    // Pour ajouter la tache au tableau
    const [tasks,setTasks] = useState([]);
    // Pour récupérer id de la tache 
    const [taskId,setTaskId] = useState(null);
    // Pour modifier la valeur du champs
    const [taskNameEditing, setTaskNameEditing] = useState('');

    // Function pour récupérer la valeur saisie 
    function handleValue(e){
      setDataValue(e.target.value);
    }
    
    //Fonction pour  ajouter dans le tableau lavaleur récupérer
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
    
  // Fonction pour récuperer id et le nom de la tache 
  const handleEdtingTask = (id, name) => {
    setTaskId(id);
    setTaskNameEditing(name);

  }

    return (
      <>
      {/* Titre de la page  */}
        <h1>Todo list </h1>
        {/* Pour afficher le formulaire */}
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