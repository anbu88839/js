import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
const API_URL = 'http://localhost:4000'
export const App = () => {

  const[products,setproducts]=useState([]);
  const[form,setform]=useState({name:'',address:'',age:''});

  useEffect(()=>{
    fetchproducts();
  },[]);


  const fetchproducts = async()=>{
    const res = await fetch(API_URL);
    const data = await res.json();
    setproducts(data);

  };

  const handleChange = async (e)=>{
    setform({...form,[e.target.name]:e.target.value});

  };

  const handleSubmit= async e=>{
    e.preventDefault();
    console.log(form);
    await fetch(API_URL,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        name:form.name,
        address:form.address,
          age:parseFloat(form.age)
      })
    });
    setform({name:'',address:'',age:''});
    fetchproducts();
  };


  const handleDelete= async (id)=>{
    await fetch(`${API_URL}/${id}`,{method:'DELETE'});
    fetchproducts();
  };










  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type='name' value={form.name} onChange={handleChange} name='name' placeholder='Name' required />
<input type='text' value={form.address} onChange={handleChange} name='address' placeholder='Address' required />
<input type='number' value={form.age} onChange={handleChange} name='age' placeholder='Age' required />
<button type='submit'>details</button>
    </form>

    <hr></hr>


    {products.map(product =>(
      <li key={product._id}>
        <h2>{product.name}-{product.address}-{product.age}</h2>
       
       
          
        <button onClick={()=> handleDelete(product._id)}>Delete</button>
      </li>
    ))}
    
    
    
    
    
    
    
    </>
  );
}


export default App