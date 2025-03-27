
import './App.css'
// import{ motion } from "framer-motion";
import { useState } from 'react'
function App() {
  // const sections=["section1","section2","section3","section4"];
  // const king=["elephant"];

  const [name,setname] = useState(0);
  const [age,setage]=useState("")
  return (
    <>


<input type="text" onChange={(e)=>setnam} />





 {/*  
{sections.map((section)=>{
return(
<motion.div

key={section}

initial={{opacity:0,x:100}}
whileInView={{opacity:1,x:0}}
viewport={{once:true,amount:0.5}}
transition={{duration:0.5,ease:"easeOut"}}
style={
  {
    height: "100vh",
    width: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  backgroundColor: "red",
    color: "#fff",

  }
}


>
  {king}
  
</motion.div>);





})} */}

{/* 
<motion.div


key="ele"
initial={{opacity:0,x:100}}
whileInView={{opacity:1,x:0}}
viewport={{once:true,amount:0.5}}
transition={{duration:0.5,ease:"easeOut"}}
style={{
  
   
    fontSize:"30px",
    backgroundColor:"red",
width:"100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  
    color: "yellow",
}

  }

>

hjg

</motion.div> */}



       
    </>
  )
}

export default App
