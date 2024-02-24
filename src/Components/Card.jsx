import React from 'react'

import { useState } from 'react';

export default function CardData({datas}) {

  

  return (
    <>
    {/* AFFICHER TOUS LES ELEMENTS DU TABLEAU AINSI QUE LE BOUTON MODIFIER ET SUPPRIMER  */}
        <ul>
            {datas.map(
              data=>
                <li key={data.id}>{data.name} <button>Modifier</button> <button >Supprimer</button>  </li>
               
              )}
        </ul>
    </>
  )
}
