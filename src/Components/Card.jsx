import React from 'react'

import { useState } from 'react';

export default function CardData({datas, onDeleteTask, handleEdtingTask,handleTaskModify,taskId,taskNameEditing,setTaskNameEditing}) {
 
  return (
    <>
    {/* Afficher tous les élements du tableau ainsi que le bouton modifier et supprimer */}
        <ul>
            {datas.map(
              data=>
              <li key={data.id}>
                {/* condition pour l'apparition du input et des bouton modifier et supprimer */}
                {taskId === data.id ? (
                  <>
                    <input type="text" value={taskNameEditing} onChange={(e) => setTaskNameEditing(e.target.value) } />
                    <button>Modifier</button>
                  </>
                ) : (
                  <>
                    {data.name} 
                    <button onClick={() => handleEdtingTask(data.id,data.name) }>Modifier</button> 
                    <button onClick={() => onDeleteTask(data.id)}>Supprimer</button>
                  </>
                  
                )}


              </li>

               
              )}
        </ul>
    </>
  )
}
