import React, { useState } from 'react';
import './Brands.css';
import canon from '../image/canon.webp';
import film from '../image/film.webp';
import sony from '../image/sony.webp';
import soft from '../image/soft.webp';
import nikon from '../image/nikon.webp';
import go from '../image/go.webp';
import bose from '../image/bose.webp';
import apple from '../image/apple.webp';
import ato from '../image/ato.webp';
import black from '../image/black.webp';
import profo from '../image/profo.webp';
import pana from '../image/pana.webp';

const Brands = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    
    <div 
      className="Brand-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      <h2 style={{color:"#014B96",marginLeft:"180px"}}>More Brands</h2>
        <div className="popup">
             <div>
             <div className='imagee'><img src={canon} alt="" /></div>
             <div className='imagee'><img src={film} alt="" /></div>
             <div className='imagee'><img src={sony} alt="" /></div>
             <div className='imagee'><img src={nikon} alt="" /></div>
             </div>
             <div>
             <div className='imagee'><img src={soft} alt="" /></div>
             <div className='imagee'><img src={go} alt="" /></div>
             <div className='imagee'><img src={bose} alt="" /></div>
             <div className='imagee'><img src={apple} alt="" /></div>
             </div>
             <div>
             <div className='imagee'><img src={ato} alt="" /></div>
             <div className='imagee'><img src={black} alt="" /></div>
             <div className='imagee'><img src={profo} alt="" /></div>
             <div className='imagee'><img src={pana} alt="" /></div>
             </div>
        </div>
      
    </div>
  );
};
export default Brands;
