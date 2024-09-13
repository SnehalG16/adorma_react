import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../componet/Footer'


const initalvalue={
    img:"",
  title:"",
  dec:"",
  Category:"",
  price:"",
}
const Addpage =()=>{
  const [formdata,setformdata]=useState(initalvalue)
  const{title,img,Category,dec,price}=formdata

  const handlechange=(e)=>{
    const {name,value}=e.target
     setformdata({...formdata,[name]:value})
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
     axios.post(" http://localhost:3000/Product",formdata).then((res)=>{
      console.log(res)
      alert("DATA ADDED")
     })
     .catch((err)=>{console.log(err)})
  }

  return(
    <div style={{color:"#F4538A"}}>
       <h1> ADD PAGE</h1>
        
       <div>
        <form onSubmit={(e)=>handlesubmit(e)}>
        <label htmlFor="">image :- </label>
          <input name="image" value={img[0]}  onChange={handlechange} type="text" placeholder="Image" /> <br />
          <label htmlFor="">title :- </label>
          <input name="title" value={title} type="text"  onChange={handlechange} placeholder="title" /> <br />
          <label htmlFor="">Category :- </label>
          <select name="Category"  onChange={handlechange} value={Category}>
            <option value={""}>select Your Category</option>
            <option value={"camera"}>camera</option>
            <option value={"lense"}>lense</option>
            <option value={"music"}>music</option>
            <option value={"lighting"}>lighting</option>
          </select>
          <br />
          <label htmlFor="">price :- </label>
          <input name="price" value={price}  onChange={handlechange} type="text" placeholder="Price" /> <br />
          <label htmlFor="">description :- </label>
          <input name="description" value={dec} type="text"  onChange={handlechange} placeholder="description" /> <br />
          <br />
          <input type="submit" style={{height:"40px",fontSize:"20px"}} />
        </form>
      </div>
      <Footer/>
    </div>
  )
}
export default Addpage
