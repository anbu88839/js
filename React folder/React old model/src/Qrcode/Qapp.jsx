import React, { createElement, useState } from 'react'

const Qapp = () => {
    const [imge,setimg]=useState("")
    const [loading,setload]=useState(false)
    const [data,setdata]=useState("")
    const [size,setsize]=useState("")

     const handlegenerate=async()=>
    {
        setload(true)
        try{
          const url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`
          setimg(url)

        }
        catch(e)
        {
            console.error(e)
        }
        finally{
          setload(false)
        }

    }
    const handledownload=()=>
    {
        fetch(imge).then((r)=>r.blob()).then((blob)={
       
        })
    }

  return (
    <>
    <div id="qcontainer">
        {loading && <p>Loading</p>}
        {imge && <img src={imge} alt="" />}
        <div id="form">
            <label htmlFor="web">Website</label>
            <input type="text" name="web" value={data} onChange={(e)=>setdata(e.target.value)} />
            <label htmlFor="size">size</label>
            <input type="text" name="size" value={size} onChange={(e)=>setsize(e.target.value)}/>

            <button onClick={handlegenerate} disabled={loading}>Generate</button>
            <button onClick={handledownload}>Download</button>
        </div>
    </div>
    </>
  )
}

export default Qapp