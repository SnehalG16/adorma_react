import React, { useState } from 'react';
import './Product.css';
import { FaStar } from 'react-icons/fa6';
import Footer from './Footer';
import Sponser from './Sponser'

const Product = () => {
 

 

  return (
    
        <div>
          <div  className="product-container" style={{marginRight:"100%"}}>
      <div className="product">
        
      </div>
      
        <div className="popup">
            <div style={{display:"flex"}}>
               <div className='multicard' style={{width:"200px",backgroundColor:"white"}}>
                 <img src="https://www.adorama.com/images/product/NKZ8K.jpg" alt="" />
                 <p>Nikon Z8 Mirrorless Camera with NIKKOR Z 24-120mm f/4 S Lens</p>
                 <h4></h4>
                 <div className='icon'><FaStar/><FaStar  /><FaStar /><FaStar /><FaStar /><span style={{fontSize:"10px"}}>(347)</span></div>
                 </div>
                 <div className='multicard' style={{width:"200px",backgroundColor:"white"}}>
                 <img src="https://www.adorama.com/images/product/AMZ_FPLFX300PTK9.jpg" alt="" />
                 <p>Flashpoint XPLOR 300 Pro TTL R2 Battery-Powered Outdoor Flash Parasnap Kit</p>
                 <h4></h4>
                 <div className='icon'><FaStar/><FaStar  /><FaStar /><FaStar /><FaStar /><span style={{fontSize:"10px"}}>(1)</span></div>
                 </div>
                 <div className='multicard' style={{width:"200px",backgroundColor:"white"}}>
                 <img src="https://www.adorama.com/images/product/CAR6M2.jpg" alt="" />
                  <p>Canon EOS R6 Mark II Mirrorless Camera, Black</p>
                  <h4></h4>
                 <div className='icon'><FaStar/><FaStar  /><FaStar /><FaStar /><FaStar /><span style={{fontSize:"10px"}}>(106)</span></div>
                 </div>
                 <div className='multicard' style={{width:"200px",backgroundColor:"white"}}>
                 <img src="https://www.adorama.com/images/product/DELLU3223QE.jpg" alt="" />
                 <p>Dell UltraSharp U3223QE 31.5" 16:9 4K UHD USB-C Hub IPS LCD Monitor</p>
                 <h4></h4>
                 <div className='icon'><FaStar/><FaStar  /><FaStar /><FaStar /><FaStar /><span style={{fontSize:"10px"}}>(243)</span></div>
                 </div>
                 <div className='multicard' style={{width:"200px",backgroundColor:"white"}}>
                 <img src="https://www.adorama.com/images/product/PL1485AFBK.jpg" alt="" />
                 <p>Pelican 1485 Air Case with Foam, Black</p>
                 <h4></h4>
                 <div className='icon'><FaStar/><FaStar  /><FaStar /><FaStar /><FaStar /><span style={{fontSize:"10px"}}>(6)</span></div>
                 </div>
                 <div className='multicard' style={{width:"200px",backgroundColor:"white"}}>
                 <img src="https://www.adorama.com/images/product/TMT150WH.jpg" alt="" />
                 <p>Thrustmaster T150 Force Feedback Racing Wheel for PlayStation and PC</p>
                 <h6>SKU: TMT150WH MFR: 4169080</h6>
                 <div className='icon'><FaStar/><FaStar  /><FaStar /><FaStar /><FaStar /><span style={{fontSize:"10px"}}>(9)</span></div>
                 </div>
                 <div className='multicard' style={{width:"250px",backgroundColor:"white"}}>
                 <img src="https://www.adorama.com/images/product/FPLFX600PK3.jpg" alt="" />
                 <p>Flashpoint XPLOR 600 PRO TTL + Parabolic Quick Softbox (28") + C Stand</p>
                 <h6>SKU: FPLFX600PK3 MFR: XPLOR-600PROB-TTL K3</h6>
                 <div className='icon'><FaStar/><FaStar  /><FaStar /><FaStar /><FaStar /><span style={{fontSize:"10px"}}>(403)</span></div>
                 </div>
            </div>
        </div>
      
        <Sponser/>
    </div>
  
        </div>
  );
};

export default Product;
