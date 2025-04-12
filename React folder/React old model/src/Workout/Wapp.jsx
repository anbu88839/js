import React from 'react'
import { Home } from './Home'

export const Wapp = () => {
    const info=[
        {
            name:"ramkumar",
            age:23,
            student:true,
            image:'images/1.jpg',
            skils:["new","data","java"]
        },
        {
            name:"rajesh",
            age:23,
            student:false,
            image:'images/1.jpg',
            skils:["new","data","java"]
        },
        {
            name:"vennila",
            age:23,
            student:true,
            image:'images/1.jpg',
            skils:["new","data","java"]
        },

    ]
  return (
    <>
    <Home info={info}/>
    </>
  )
}

