import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import Footer from '../componet/Footer'
import './Camera.css'
import add1 from '../image/add1.webp'
import canon from '../image/canon.webp'
import film from '../image/film.webp'
import nikon from '../image/nikon.webp'
import soft from '../image/soft.webp'
import sony from '../image/sony.webp'
import { Link } from 'react-router-dom'


const Optic = () => {
    const [data, setData] = useState([])

  const getData = () => {
    axios.get("http://localhost:3000/product")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }

  const handeldelete = (id) => {

    axios.delete(`http://localhost:3000/Product/${id}`)
      .then((res) => {
        alert("DELETE")
        getData()
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className=''>
      <div>
         <div>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <h2 >Digital Cameras & Digital Camera Kits</h2>
           <p>shop Used Digital Cameras & Digital Camera Kits (1520)</p>
           </div>
          <hr />
            <img src={add1} alt="" style={{ height: "120px", width: "900px",margin:"30px"}} />
         </div>
           
            <div style={{display:"flex"}}>
            <div> 
               <h3>CATEGORIES</h3>
               <a href="">All Category</a><br /><hr />
               <a href="">Photography</a><hr />
               <h3>CAMERA</h3>
               <a href="">Microless camera (657)</a><br /><br />
               <a href="">Digitl Point & Shoot</a><br /><br />
               <a href="">Digitl SLR</a><br /><br />
               <a href="">Film Camera</a><br /><br />
               <a href="">Medium Formate camera</a><br /><br />
               <label htmlFor="">FILTERS</label>
               <input type="search" placeholder='serach within filters'/>
               <br /><br />
               <h3>BRAND</h3>
               <a href="">combo</a><br /><br />
               <a href="">Canon</a><br /><br />
               <a href="">SLR</a><br /><br />
               <a href="">kodak</a><br /><br />
               <a href="">nikon</a><br /><br />
               <a href="">minplta</a><br /><br />
               <a href="">pansonic</a><br /><br />
               <a href="">pantax</a><br /><br />
               <a href="">sony</a><br /><br />
               <a href="">fujifilm</a><br /><br />
               <h3>PRICE</h3>
               <hr />

               <hr />
               <h3>DISCOUNT</h3><hr />
               <h3>MODEL</h3> <hr />
               <h3>SENSOR SIZE</h3><hr />
               <h3>LENSE MOUNT</h3><hr />
               <h3>RESOLUTION</h3><hr />
               <h3>VIDEO RESOLUTION</h3><hr />
               <h3>LENSE</h3><hr />
               <h3>KIT STYLE</h3><hr />
               <h3>FORMAT</h3><hr />
               <h3>SERIES</h3><hr />
               <br />
               <h3>FEATURED BRANDS:</h3>
               <div>
                 <div style={{display:"flex"}}>
                 <img src={nikon} alt="" height={90}/>
                 <a href="" style={{margin:"20px"}}>nikon</a>
                 </div>
                 <div style={{display:"flex"}}>
                 <img src={canon} alt="" height={90}/>
                 <a href="" style={{margin:"20px"}}>canon</a>
                 </div>
                 <div style={{display:"flex"}}>
                 <img src={sony} alt="" height={90} />
                 <a href="" style={{margin:"20px"}}>sony</a>
                 </div>
                 <div style={{display:"flex"}}>
                 <img src={soft} alt="" height={90}/>
                 <a href="" style={{margin:"20px"}}>soft</a>
                 </div>
                 <div style={{display:"flex"}}>
                 <img src={film} alt="" height={90}/>
                 <a href="" style={{margin:"20px"}}>film</a>
                 </div>
               </div>
            </div>
      
      <div style={{ display:"flex",flexDirection:"column"}}>
        {data.map((el, index) => (
          <div key={index} className='card1' style={{display:"flex"}}>
          {/* <h3 style={{height:"15px",width:"10px",backgroundColor:"green"}}>{el.Label}</h3>*/}
            <div><Link to={`/singlepage/${el.id}`}><img src={el.img[0]} alt="" style={{ margin:"20px",height:"300px",width:"250px"}}/></Link></div>
            <div>
            <h5 style={{ marginTop:"70px"}}>{el.title}</h5>
            <div className='icon'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              <span style={{ fontSize: "9px" }}>({el.reviews})</span>
            </div>
            <p style={{ color: "black", fontSize: "20px" }}>${el.price}</p>
            <p>{el.dec}</p>
            <div style={{display:"flex",justifyContent:"center"}}>
            <button style={{ height: "50px", width: "100px", fontSize: "15px" ,margin: "0 10px" }}><Link to={`/edit/${el.id}`}>EDIT</Link></button>
            <button style={{ height: "50px", width: "100px", fontSize: "15px", margin: "0 10px" }} onClick={() => handeldelete(el.id)}>DELETE</button>
            </div>
            </div>
            
          </div>
        ))}
      </div>
            </div>


        </div>
        <Footer/>
        </div>
          )}
export default Optic