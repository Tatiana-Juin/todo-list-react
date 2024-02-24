import React from 'react'
import { v4 as uuidv4 } from 'uuid';
export default function CardData({datas}) {

  // SUPPRIMER

  return (
    <>
    {/* AFFICHER TOUS LES ELEMENTS DU TABLEAU AINSI QUE LE BOUTON MODIFIER ET SUPPRIMER  */}
        <ul>
            {datas.map(
              data=>
                <li key={uuidv4()}>{data} <button>Modifier</button> <button>Supprimer</button> </li>
              )}
        </ul>
    </>
  )
}
