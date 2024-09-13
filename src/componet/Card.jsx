import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Card.css'
import { FaStar } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";

import Trends from './Trends';
import Sponser from './Sponser';
import Flex from './Flex';
import Shopbycat from './Shopbycat';
import Footer from './Footer';
import Logobrand from './Logobrand';


const Card = () => {
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
    <div>
      <br /><br />
      <div style={{backgroundColor:"#003773",height:"500PX"}}>
        <p style={{fontSize: "40px",  color: "aliceblue"}}><GiTrophyCup style={{ color: "#3FA2F6" }} />OUR TOP DEAL'S</p>
        <div style={{display:"flex"}}>
          {data.map((el, index) => (
            <div key={index} className='card1'>
              <img src={el.img} alt="" />
              <h5 style={{ margin: "0px" }}>{el.title}</h5>
              <div className='icon'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <span style={{ fontSize: "9px" }}>({el.reviews})</span>
              </div>
              <p style={{ color: "black", fontSize: "20px" }}>${el.price}</p>
              
              <h6 >{el.sku}</h6>

            </div>
          ))}
          {/* #003773 MAIN DARK*/}
          {/* #014B96 LIGHT*/}
        </div>
       
      </div>
      <Shopbycat />
      <Trends/>
      <Sponser/>
      <Flex/>
      <br /><br />
      <Logobrand/>
      <br /><br /><br /><br />
      <Footer/>

    </div>
  )
}

export default Card
