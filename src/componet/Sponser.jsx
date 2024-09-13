import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { ImNext, ImPrevious } from 'react-icons/im'

const Sponser = () => {
    return (
        <div>
          <br /><br />
          <div className='' >
            <p style={{marginRight:"80%",fontSize:"20px"}}>SPONSORED PRODUCTS</p>
             <div style={{display:"flex",justifyContent:"center"}}>
             <ImPrevious style={{fontSize:"30px",color:"aliceblue",marginTop:"170px"}}/>
                 <div className='multicard' style={{width:"200px",backgroundColor:"white",padding:"10px"}}>
                 <img src="https://www.adorama.com/images/product/pgrd128gbckn.jpg" alt="" />
                 <p>Prograde Digital 128GB SDXC UHS-II U3 Class 10 V90 Cobalt Memory Card</p>
                 <h4>$125.29</h4>
                 <div className='icon'><FaStar/><FaStar  /><FaStar /><FaStar /><FaStar /><span style={{fontSize:"10px"}}>(347)</span></div>
                 </div>
                 <div className='multicard' style={{width:"200px",backgroundColor:"white",padding:"10px"}}>
                 <img src="https://www.adorama.com/images/product/pgrms512gbp.jpg" alt="" />
                 <p>Flashpoint XPLOR 300 Pro TTL R2 Battery-Powered Outdoor Flash Parasnap Kit</p>
                 <h4>$165.99</h4>
                 </div>
                 <div className='multicard' style={{width:"200px",backgroundColor:"white",padding:"10px"}}>
                 <img src="https://www.adorama.com/images/product/pgrd128gbc2n.jpg" alt="" />
                  <p>Canon EOS R6 Mark II Mirrorless Camera, Black</p>
                  <h4>$226.00</h4>
                 <div className='icon'><FaStar/><FaStar  /><FaStar /><FaStar /><FaStar /><span style={{fontSize:"10px"}}>(106)</span></div>
                 </div>
                 <div className='multicard' style={{width:"200px",backgroundColor:"white",padding:"10px"}}>
                 <img src="https://www.adorama.com/images/product/we577k.jpg" alt="" />
                 <p>Dell UltraSharp U3223QE 31.5" 16:9 4K UHD USB-C Hub IPS LCD Monitor</p>
                 <h4>$149</h4>
                 <div className='icon'><FaStar/><FaStar  /><FaStar /><FaStar /><FaStar /><span style={{fontSize:"10px"}}>(243)</span></div>
                 </div>
                 <div className='multicard' style={{width:"200px",backgroundColor:"white",padding:"10px"}}>
                 <img src="https://www.adorama.com/images/product/we4717m.jpg" alt="" />
                 <p>Pelican 1485 Air Case with Foam, Black</p>
                 <h4>$300.09</h4>
                 </div>
                 <div className='multicard' style={{width:"200px",backgroundColor:"white",padding:"10px"}}>
                 <img src="https://www.adorama.com/images/product/we804.jpg" alt="" />
                 <p>Thrustmaster T150 Force Feedback Racing Wheel for PlayStation and PC</p>
                 <h4>$219</h4>
                 <div className='icon'><FaStar/><FaStar  /><FaStar /><FaStar /><span style={{fontSize:"10px"}}>(243)</span></div>
                 </div>
                 <div className='multicard' style={{width:"200px",backgroundColor:"white",padding:"10px"}}>
                 <img src="https://www.adorama.com/images/product/we810.jpg" alt="" />
                 <p>Westcott U60-B 60W Bi-Color LED 1-Light Softbox Kit</p>
                 <h4>$319.09</h4>
                 </div>
                 <ImNext style={{fontSize:"30px",color:"aliceblue",marginTop:"170px"}}/>
                
             </div>
          </div>

            
        </div>
      )
    
}

export default Sponser
