/* import { Class4Array } from "./components/Class4Array" */

import { Class5funct } from "./components/Class5funct"


/* import { Class1 } from './components/class1'
import Header from './components/Header'
import { Class2 } from './components/Class2'
import { Class3 } from './components/Class3' */

function Index() {
 
/*   const items=[
    {id:1,name:"Item1"},
    {id:2,name:"Item2"},
    {id:3,name:"Item3"},
    {id:4,name:"Item4"},
  ] */
 function showmsg()
 {
  alert("Hello World")
 }

  return (
    <>
   {/*    <Header/>
      <Class1/> */}

     {/*  <Class2 name="pugal" age={35} student={true} color="red"/>
      <Class2 name="ram" age={15} student={false} color="red"/>
      <Class2 name="pugal" age={35} student={true} color="red"/> */}

      {/* <Class3>
        <p>this is new tages for child to class3</p>
      </Class3> */}

     {/*  <Class4Array items={items}/> */}
   

   <Class5funct msg={showmsg}/>
    </>
  )
}

export default Index
