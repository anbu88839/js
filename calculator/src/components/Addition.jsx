import React from 'react'
import { useState } from 'react'

export const Addition = () => {
const[anbu,setanbu]=useState('')

  return (
    <div>

      <textarea id="mk" value={anbu}></textarea><br/>
      <button onClick={()=>setanbu(anbu+"1")}>1</button>
      <button onClick={()=>setanbu(anbu+"2")}>2</button>
      <button onClick={()=>setanbu(anbu+"3")}>3</button>
      <button onClick={()=>setanbu(anbu+'4')}>4</button>
      <button onClick={()=>setanbu(anbu+"5")}>5</button>
      <button onClick={()=>setanbu(anbu+"6")}>6</button>
      <button onClick={()=>setanbu(anbu+'7')}>7</button>
      <button onClick={()=>setanbu(anbu+'8')}>8</button>
      <button onClick={()=>setanbu(anbu+'9')}>9</button>
      <button onClick={()=>setanbu(anbu+'0')}>0</button><br/>
      <button onClick={()=>setanbu(anbu+'+')}>+</button>
      <button onClick={()=>setanbu(anbu+'-')}>-</button>
      <button onClick={()=>setanbu(anbu+'x')}>x</button>
      <button onClick={()=>setanbu(anbu+'x')}>/</button><br/><br/>
      <button onClick={()=>setanbu(eval(anbu))}>=</button><br/><br/>
     
      



      
     
      







    </div>
  )
}
