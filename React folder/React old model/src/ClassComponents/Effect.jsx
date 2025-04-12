import React,{useState,useEffect} from 'react'
import './Effect.css'
import "bootstrap/dist/css/bootstrap.min.css"
export const Effect = () => {
    const [data,setData]=useState([])
    useEffect(
    
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
         .then(data => setData(data))
        .catch(
            error => console.error(error)
        )

    ,[])
  return (
    <>
        <h1>Use Effect</h1>
        <div>
        {
            data.map((item,index)=>{
                return(
                    <div key={index} className="effect">
                        <h2>{item.title}</h2>
                        <h1>{item.userId}</h1>
                        <p>{item.body}</p>
                    </div>
                )})
        }
        </div>
    </>
  )
}
