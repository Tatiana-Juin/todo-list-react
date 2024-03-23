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

    // Function pour récupérer la valeur saisie 
    function handleValue(e){
      setDataValue(e.target.value);
    }
    
    //Fonction pour  ajouter dans le tableau lavaleur récupérer
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

  // Fonction pour modifier la tache et l'ajouter au tableau 
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
  // return de la fonction App()
    return (
      <>
      {/* Titre de la page  */}
        <h1>Todo list </h1>
        {/* Pour afficher le formulaire */}
        <form >
            <input type="text" onChange={handleValue}  />
            <button onClick={handleTask}>Ajouter une tache</button>
        </form>
        
        {/* Appelle du composant CardData avec différents props */}
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