import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import Footer from './Footer'
import './Shop.css'
import './Card.css'
import Sponser from './Sponser'
import f1 from '../image/f1.webp'


const Shop = () => {
    const [data, setData] = useState([])

  const getData = () => {
    axios.get("http://localhost:3000/secproduct")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className=''>
      
            
           <div className='img1'>
              <img src={f1} alt="" />
           </div>
        
            
      <div style={{ display:"flex",width:"70%"}}>
        {data.map((el, index) => (
          <div key={index} style={{display:"flex"}} className='shop'>
          {/* <h3 style={{height:"15px",width:"10px",backgroundColor:"green"}}>{el.Label}</h3>*/}
            <div><img src={el.img} alt="" style={{ margin:"20px",height:"200px",width:"150px"}}/></div>
            <div>
            <h5 style={{ marginTop:"70px"}}>{el.title}</h5>
            <div className='icon'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              <span style={{ fontSize: "9px" }}>({el.reviews})</span>
            </div>
            <p style={{ color: "black", fontSize: "20px" }}>${el.price}</p>
            
            </div>
          </div>
        ))}
        
      </div>
      <Sponser/>
      <br /><br /><br />
        <Footer/>
        </div>
          )}
export default Shop