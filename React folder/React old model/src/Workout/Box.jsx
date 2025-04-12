import React from 'react'
import { Skils } from './Skils'

export const Box = (props) => {
    const {data}=props
   

  return (
    <>
    <div id="box">

        <img src={data.image} alt="" className={data.student?"green":"red"}/>
        <h2>{data.name.toUpperCase()}</h2>
        <h3>AGE : {data.age}</h3>
        <ul>
        {
            data.skils.map((item,index)=>(<Skils item={item}/>))
        }
        </ul>

    </div>
    </>
  )
}
