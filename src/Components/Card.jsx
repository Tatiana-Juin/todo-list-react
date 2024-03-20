import React from 'react'

import { useState } from 'react';

export default function CardData({datas, onDeleteTask, handleEdtingTask,handleTaskModify,taskId,taskNameEditing,setTaskNameEditing}) {
 
  return (
    <div className='tasks'>
    {/* Afficher tous les élements du tableau ainsi que le bouton modifier et supprimer */}
        <ul>
            {datas.map(
              data=>
              <li key={data.id}>
               {/* 
                    Condition pour l'apparition du input et des bouton modifier et supprimer 
                    Si taskId est egale a data.id 
               */}
                {taskId === data.id ? (
                  <>
                    {/* Apparition de input avec la valeur actuel et le bouton pour enregistrer les modification */}
                    <input type="text" value={taskNameEditing} onChange={(e) => setTaskNameEditing(e.target.value) } />
                    {/* <br /> */}
                    <button onClick={() => handleTaskModify(data.id)}>Modifier</button>
                  </>
                ) : (  // sinon
                  <>
                  {/* Nom de la tache et bouton modifier et supprimer  */}
                    {data.name} 
                    {/* <br /> */}
                    <button onClick={() => handleEdtingTask(data.id,data.name) }>Modifier</button> 
                    {/* <br /> */}
                    <button onClick={() => onDeleteTask(data.id)}>Supprimer</button>
                  </>
                  
                )}


              </li>

               
              )}
        </ul>
    </div>
  )
}
