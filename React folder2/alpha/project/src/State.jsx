import React, { useState } from 'react'

export const State = () => {
    const[count,setCount]=useState(10)
    const[anbu,alpha]=useState(1)
    const[raj,manchu]=useState(0)



const ok=()=>{
  setCount(count+1)
}

    // function ok(){
    //  setCount(count+1)

    // };

    function op(){
        alpha(anbu+1)
    };

    function ss(){
        manchu(count+anbu)
    }

  return (
    <div>


{count}
<button onClick={ok}>+</button>
<br>
</br>
<br></br>
{anbu}
<button onClick={op}>+</button>

<br></br><br></br>
<button onClick={ss}>addiction</button>
{raj}


    </div>
  )
}
