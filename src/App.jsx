import { useState } from 'react'
import viteLogo from '/vite.svg'

import CardData from './Components/Card'



function App() {
    //Pour récupérer la valeur 
    const [dataValue,setDataValue] = useState('');
    // Pour ajouter la tache au tableau
    const [tasks,setTasks] = useState([]);
    // Pour récupérer id de la tache 
    const [taskId,setTaskId] = useState(null);
    // Pour modifier la valeur du champs
    const [taskNameEditing, setTaskNameEditing] = useState('');

    // FUNCTION POUR RECUPERER LA VALEUR SAISIE PAR L'UTILISATEUR 
    function handleValue(e){
      setDataValue(e.target.value);
    }
    
    //FONCTION POUR AJOUTER DANS LE TABLEAU LA TACHE 
    function handleTask(e){
      e.preventDefault();
      // Pour inserer dans le tableau la valeur saisie si elle n'est pas vide 
      if(dataValue.trim() !=""){
        // Ajouter une valeur au tableau en utilisant le destructuring
        setTasks(tasks => [
          ...tasks,
          {id: tasks.length+1, name: dataValue}
        ]);
        // setDataValue('');
      }
     
    }


    // FONCTION POUR SUPPRIMER UNE TACHE
    const handleDeleteTask = (id) => {
      /* 
          On  créer la copy (filter) d'un tableau ou il a tous les elements sauf celui supprimer 
          on copy tous les element du tableau SAUF celui qui à 'id' de la tache que l'on veut supprimer . Ce qui fait que la tache est supprimer .
      */
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
  };
  
  /* 
      POUR LA MODIFICATION DE LA TACHE
      
      Fonction pour récuperer id et le nom de la tache 
  */
  const handleEdtingTask = (id, name) => {
    setTaskId(id);
    setTaskNameEditing(name);

  }

  // FONCTION POUR MODIFIER LA TACHE ET L'AJOUTER AU TABLEAU
  const handleTaskModify = () =>{
    var updatedTask = tasks.map(
      task =>{
        // verifie que id de la tache correspond a id recupérer
        if(task.id === taskId){
          // verifie que le champs de pour modifier la tache n'est pas vide 
          if(taskNameEditing.trim() !== ""){
            return {...task, name: taskNameEditing};
          } else {
            // si le champs est vide alors affiche un message
            alert("erreur . Vous devais saisir un nom de tache et non l'essaie le champs libre quand vous modifiez une tache.");
          }
          
        }
        return task;
      }
    )
    // Modification dans le tableau de la tache grâce a setTasks et initialisation de taskId a null
    setTasks(updatedTask);
    setTaskId(null);
  }
  
    return (
      <>
      {/* TITRE DE LA PAGE   */}
        <h1>Todo list </h1>

        {/* FORMULAIRE */}
        <form >
            <input type="text" onChange={handleValue}  />
            <button onClick={handleTask}>Ajouter une tache</button>
        </form>
        
        {/* APPELLER DU COMPOSANT CardData AVEC CES DIFFERENTS PROPS */}
        <CardData 
          datas={tasks} 
          onDeleteTask={handleDeleteTask}
          // props => fonction pour recupérer les valeurs de la taches 
          handleEdtingTask={handleEdtingTask}
          // props => fonction pour ajouter la valeur modifier au tableau
          handleTaskModify = {handleTaskModify}
          // props => recupére id
          taskId = {taskId}
          // props => recupérerle nom de la tache  
          taskNameEditing = {taskNameEditing}
          // props => pour modifier le nom de la tache grace au useState()
          setTaskNameEditing = {setTaskNameEditing}

        />
        
      </>
    )
}

export default App