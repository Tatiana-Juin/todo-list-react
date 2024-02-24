import React from 'react'

import { useState } from 'react';

export default function CardData({datas}) {

  // Supprimer une tache 
  const [deleteTask, setDeleteTask] = useState(datas);
  
  const handleDeleteTask = (id) =>{
    const updatedTasks = deleteTask.filter(task => task.id !== id);
    setDeleteTask(updatedTasks);
  }
  return (
    <>
    {/* AFFICHER TOUS LES ELEMENTS DU TABLEAU AINSI QUE LE BOUTON MODIFIER ET SUPPRIMER  */}
        <ul>
            {datas.map(
              data=>
                <li key={data.id}>{data.name} 
                  <button>Modifier</button> 
                  {/* <button onClick={() => {setDeleteTask(deleteTask.filter(a =>a.id !== data.id))}}>Supprimer</button>   */}
                  {/* <button onClick={() => handleDeleteTask(data.id) }>Supprimer</button>   */}
                </li>
               
              )}
        </ul>
    </>
  )
}
