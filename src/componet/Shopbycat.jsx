import React from 'react'
import camera from '../image/camera.webp';
import lense from '../image/lense.webp';
import optics from '../image/optics.webp';
import lighting from '../image/lighting.webp';
import computer from '../image/computer.webp'
import audio from '../image/audio.webp'
import drones from '../image/drones.webp'
import gaming from '../image/gaming.webp'
import music from '../image/music.webp'
import photoacc from '../image/photoacc.webp'
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { Link } from 'react-router-dom';
import './Shopbycat.css'

const Shopbycat = () => {
  return (
    <div>
      <br />
        <h3 style={{ marginRight: "75%" }}>SHOP BY CATEGORY</h3>

<br />

        <div style={{ display: "flex", justifyContent: "space-evenly", margin: "1px 10px" }}>
        <FcPrevious style={{height:"120px",fontSize:"15px"}}/>
        <Link to={"/camera"} className='cat'><div> <img src={camera} alt="" style={{ height: "120px", width: "130px", backgroundColor: "#003773",borderRadius:"7px" }} />
        <p>Camera</p></div></Link>

        <Link to={"/lense"} className='cat'> <div><img src={lense} alt="" style={{ height: "120px", width: "130px", backgroundColor: "#003773",borderRadius:"7px" }} />
        <p>Lense</p></div></Link>

        <Link to={"/optic"} className='cat'><div><img src={optics} alt="" style={{ height: "120px", width: "130px", backgroundColor: "#003773",borderRadius:"7px" }} />
        <p>Optic&Binoclure</p></div></Link> 
        
        <Link to={"/lighting"} className='cat'><div><img src={lighting} alt="" style={{ height: "120px", width: "130px", backgroundColor: "#003773",borderRadius:"7px" }} />
        <p>Lighting</p></div></Link>

        <Link to={"/computer"} className='cat'><div><img src={computer} alt="" style={{ height: "120px", width: "130px", backgroundColor: "#003773",borderRadius:"7px" }} />
        <p>Computer</p></div></Link>

        <Link to={"/audio"} className='cat'><div><img src={audio} alt="" style={{ height: "120px", width: "130px", backgroundColor: "#003773",borderRadius:"7px" }} />
        <p>Audio</p></div></Link>
          
        <Link to={"/drones"} className='cat'><div><img src={drones} alt="" style={{ height: "120px", width: "130px", backgroundColor: "#003773",borderRadius:"7px" }} />
        <p>Drones</p></div></Link>

        <Link to={"/gaming"} className='cat'><div><img src={gaming} alt="" style={{ height: "120px", width: "130px", backgroundColor: "#003773",borderRadius:"7px" }} />
        <p>Gaming</p></div></Link>

        <Link to={"/music"} className='cat'><div>
          <img src={music} alt="" style={{ height: "120px", width: "130px", backgroundColor: "#003773",borderRadius:"7px" }} />
            <p>Music</p></div></Link>  

        <Link to={"/photoacc"} className='cat'> <div><img src={photoacc} alt="" style={{ height: "120px", width: "130px", backgroundColor: "#003773",borderRadius:"7px" }} />
        <p>Photoacc</p> </div></Link>
            <FcNext style={{height:"120px",fontSize:"15px"}}/>
        </div>
    </div>
  )
}

export default Shopbycat
