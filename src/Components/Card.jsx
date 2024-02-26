import React from 'react'

import { useState } from 'react';

export default function CardData({datas, onDeleteTask}) {

 
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
                  <button onClick={() => onDeleteTask(data.id)}>Supprimer</button>
                </li>
               
              )}
        </ul>
    </>
  )
}
