import React from 'react'
import './css/Home.css'
import { Box } from './Box'
export const Home = (props) => {
    const {info}=props
    console.log(info)
  return (
   <>
   <main>
        {
            info.map((item,index)=>(<Box data={item}/>))
        }
   </main>
   </>
  )
}
