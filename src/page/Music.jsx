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


const Music = () => {
    const [data, setData] = useState([])

  const getData = () => {
    axios.get("http://localhost:3000/product")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className=''>{/* display flex aapvanu che*/}
      <div>
         <div>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <h2>Musical Instruments</h2>
           <p>shop Used Digital Cameras & Digital Camera Kits (1520)</p>
           </div>
          <hr />
         </div>
         <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQWa_qmdX09qUsYmz73OWaqZjbv6otWbN3hWTSNvJk2CwoyXvhC" alt=""  width={900} height={200}/>
           
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
            <div><img src={el.img} alt="" style={{ margin:"20px",height:"300px",width:"250px"}}/></div>
            <div>
            <h5 style={{ marginTop:"70px"}}>{el.title}</h5>
            <div className='icon'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              <span style={{ fontSize: "9px" }}>({el.reviews})</span>
            </div>
            <p style={{ color: "black", fontSize: "20px" }}>${el.price}</p>
            <p>{el.dec}</p>
            </div>
          </div>
        ))}
      </div>
            </div>
          <div >
            <p style={{margin:"130px 190px",height:"400px",width:"80%"}}>If you're looking for excellent sound quality and significant long-term savings, it's great to invest in pro gear. Browse instruments from top brands including Gibson, Yamaha, Fender, Roland, Shure, and Sennheiser. <br />
            <br />
Equip Your Instruments with Essential Accessories <br />
Performing on stage and recording in-studio isn't just about having a great instrument—accessories are necessary, too, as they help to produce the highest quality sound and protect your instruments from damage. You can get plenty of accessories for your music equipment like stands, cases, and tuners, to name a few. For the best sound on stage or in the studio, check out our instrument amplifiers and effects pedals. Browse our selection of In-ear monitors and hear what you're playing with crystal clarity during performances. IEMs also reduce multiple issues surrounding live audio and allow for free movement on stage. <br />
<br /><hr />
Get Musical Instruments Online at Great Prices<br />
Looking for a new instrument to learn or an accessory that goes well with your current instrument? Find these items and more here at Adorama. We stock a wide selection of popular instruments and accessories from brands such as Fender, Roland, Korg, and Yamaha. So whether you're just starting out or have been playing music for years, we've got top-notch musical instruments that will fit your budget, needs, and style. Great deals on band instruments and accessories await: shop from Adorama and unleash your musical prowess.<br />
<br />
Exclusive Savings All Year Long<br />
For savings you won't find anywhere else, and for weekly trending deals on top products from industry leading brands, browse Deals, Used, Deal Of The Day, Black Friday & Cyber Monday specials all year long <br /></p>
          </div>
        
        </div>
        <Footer/>
        </div>
          )}
export default Music