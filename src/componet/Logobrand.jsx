import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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

const Logobrand = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex">
            <div className='imagee'><img src={canon} alt="Canon" className="d-block w-80" /></div>
            <div className='imagee'><img src={film} alt="Film" className="d-block w-80" /></div>
            <div className='imagee'><img src={sony} alt="Sony" className="d-block w-80" /></div>
            <div className='imagee'><img src={nikon} alt="Nikon" className="d-block w-80" /></div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex">
            <div className='imagee'><img src={soft} alt="Soft" className="d-block w-100" /></div>
            <div className='imagee'><img src={go} alt="Go" className="d-block w-100" /></div>
            <div className='imagee'><img src={bose} alt="Bose" className="d-block w-100" /></div>
            <div className='imagee'><img src={apple} alt="Apple" className="d-block w-100" /></div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-flex">
            <div className='imagee'><img src={ato} alt="Ato" className="d-block w-100" /></div>
            <div className='imagee'><img src={black} alt="Black" className="d-block w-100" /></div>
            <div className='imagee'><img src={profo} alt="Profo" className="d-block w-100" /></div>
            <div className='imagee'><img src={pana} alt="Pana" className="d-block w-100" /></div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" ></span>
        <span className="visually">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        <span className="visually">Next</span>
      </button>
    </div>
  );
}

export default Logobrand;
