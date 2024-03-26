import React from 'react'
import { useState } from 'react';

export default function CardData({datas, onDeleteTask, handleEdtingTask,handleTaskModify,taskId,taskNameEditing,setTaskNameEditing}) {
 
  return (
    <div className='tasks'>
    {/* AFFICHER TOUS LES ELEMENTS DU TABLEAI AINSI QUE LE BOUTON MODIFIER ET SUPPRIMER  */}
        <ul>
            {datas.map(
              data=>
              <li key={data.id}>
               {/* 
                    CONDITION POUR L'APPARITION DE INPUT ET DES BOUTON MODIFIER ET SUPPRIMER 
                    Si taskId est egale a data.id 
               */}
                {taskId === data.id ? (
                  <>
                    {/* APPARITION DE INPUT AVEC LA VALEUR ACTUELLE ET LE BOUTON POUR MODIFIER LA TACHE  */}
                    <input type="text" value={taskNameEditing} onChange={(e) => setTaskNameEditing(e.target.value) }  className='update'/>
                    {/* <br /> */}
                    <button onClick={() => handleTaskModify(data.id)}>Modifier</button>
                  </>
                ) : (  // SINON
                  <>
                  {/* NOM DE LA TACHE ET BOUTON MODIFIER ET SUPPRIMER*/}
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
