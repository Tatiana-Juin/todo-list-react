import React from 'react'

import { useState } from 'react';

export default function CardData({datas}) {

  // SUPPRIMER
  const [deleteValue,setDeleteValue] = useState(datas);

  
  function handleDelete(){
    // POUR SUPPRIMER UNE VALEUR 
  }
  return (
    <>
    {/* AFFICHER TOUS LES ELEMENTS DU TABLEAU AINSI QUE LE BOUTON MODIFIER ET SUPPRIMER  */}
        <ul>
            {datas.map(
              data=>
                <li key={data}>{data} <button>Modifier</button> <button onClick={handleDelete}>Supprimer</button>  </li>
               
              )}
        </ul>
    </>
  )
}
