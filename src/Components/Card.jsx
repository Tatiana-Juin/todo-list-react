import React from 'react'

export default function CardData({datas}) {
  return (
    <>
        <ul>
            {datas.map(
              data=>
                <li key={data}>{data} <button>Modifier</button> <button>Supprimer</button> </li>
              )}
        </ul>
    </>
  )
}
