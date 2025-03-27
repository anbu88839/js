

import { useState } from 'react'
import './App.css'


function App() {

  const [name, setname] = useState("")
    const [age, setage] = useState(0)
  return (
    <>
  <form action="https://httpbin.org/post" method='post'>
                <input type='text' value={name} onChange={(e) => setname(e.target.value)} name='Name' />
                <input type='number' value={age} onChange={(e) => setage(e.target.value)} name='Age' />
                <input type='submit' value="ok" />


            </form>
    </>
  )
}

export default App
