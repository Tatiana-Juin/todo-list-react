import React from 'react'

import { useState } from 'react';

export default function CardData({datas, onDeleteTask}) {
 
  return (
    <>
    {/* Afficher tous les élements du tableau ainsi que le bouton modifier et supprimer */}
        <ul>
            {datas.map(
              data=>
                <li key={data.id}>{data.name} 
                  <button>Modifier</button> 
                  <button onClick={() => onDeleteTask(data.id)}>Supprimer</button>
                </li>
               
              )}
        </ul>
    </>
  )
}
