import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import zhiyun from '../image/zhiyun.webp'
import intio from '../image/intio.webp'
import asus from '../image/asus.webp'
import { Link } from 'react-router-dom'
import './Trends.css'
import './Shopbycat.css'
const Trends = () => {
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
      <div>
      <div>
        <br />
        <br />
       <h4 style={{color:"black",marginRight: "63%" }}>INSPIRED BY YOUR SHOPPING TRENDS</h4>
    </div>
        <div style={{ display: "flex",flexDirection:"row"}}className='card'>
          {data.map((el, index) => (
            <div key={index} className='card1' style={{marginTop:"65px"}}>
            {/* <h3 style={{height:"15px",width:"10px",backgroundColor:"green"}}>{el.Label}</h3>*/}
              <img src={el.img} alt="" />
              <h5 style={{ margin:"2px"}}>{el.title}</h5>
              <div className='icon'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <span style={{ fontSize: "9px" }}>({el.reviews})</span>
              </div>
              <p style={{ color: "black", fontSize: "20px" }}>${el.price}</p>
            </div>
          ))}
          {/* #003773 MAIN DARK*/}
          {/* #014B96 LIGHT*/}
        </div>
        </div>
        <div>
          <img src={zhiyun} alt="" style={{ height: "400px", width: "89%",marginLeft:"10px"}} />
        </div>
        <br />
          <div style={{ display:"flex",width:"100%",justifyContent:"space-between"}} >
           <div> <img src={intio} alt=""style={{ height:"400px", width:"87%",marginLeft:"80px"}}/><h2>About Eton Odyssey</h2><p>A multifunction alert radio that is rugged,<br/> rechargeable, and reliable! Not to mention solar-powered, <br/> splashproof, smart phone & tablet charging with Bluetooth streaming.</p><Link className='cat'>SHOP NOW</Link></div>
           <div><img src={asus} alt="" style={{ height:"400px", width:"87%",marginRight:"60px"}} /><h2>Summer Cyber & Savings </h2><p>Deals & Specials on ASUS Computers</p><Link className='cat'>SHOP NOW</Link>
           </div>
          </div>
        </div>
        )}
  export default Trends
