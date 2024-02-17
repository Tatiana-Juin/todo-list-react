import React from 'react'

export default function CardData({datas}) {
  return (
    <>
        <ul>
            {datas.map(data=><li key={data}>{data}</li>)}
        </ul>
    </>
  )
}
