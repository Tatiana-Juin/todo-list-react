import React from 'react'

import { useState } from 'react';

export default function CardData({datas}) {

  // SUPPRIMER
  const [deleteValue,setDeleteValue] = useState(datas);
  
  function handleDelete(uniqueIdToDelete){
    // setDeleteValue(deleteValue.filter(item => item.uniqueId !== uniqueIdToDelete));
  }
  return (
    <>
    {/* AFFICHER TOUS LES ELEMENTS DU TABLEAU AINSI QUE LE BOUTON MODIFIER ET SUPPRIMER  */}
        <ul>
            {datas.map(
              data=>
                <li key={data}>{data} <button>Modifier</button> <button onClick={handleDelete}>Supprimer</button> <button onClick={handleUnique}> Unikque</button> </li>
               
              )}
        </ul>
    </>
  )
}
