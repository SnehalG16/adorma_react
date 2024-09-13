import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../image/img1.webp';
import img2 from '../image/img2.webp';
import img3 from '../image/img3.webp';
import img4 from '../image/img4.jpg';
import img5 from '../image/img5.webp';
import img6 from '../image/img6.webp';

const Flex = () => {
  return (
    <div style={{ height: "900px", width: "90%", margin: "0 auto" }}>
      <br /><br />
      <div className='flex-1' style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <div style={{ position: "relative", width: "48%" }}>
          <Link to={"/shop"}><img src={img1} alt="" style={{ height: "250px", width: "100%" }} /></Link>
          <div style={{ position: "absolute", top: "10px", left: "30px", color: "white", lineHeight: "15px", textAlign: "left" }}>
            <h2>Shop Pre-Owned</h2>
            <p>Save money on used, open box, and</p>
            <p>refundable equipment &</p>
            <p>electronics</p>
            <Link to={"/shop"} style={{ color: "white" }} >Shop now</Link>
          </div>
        </div>

        <div style={{ position: "relative", width: "48%" }}>
          <Link to={"/shop"}><img src={img2} alt="" style={{ height: "250px", width: "100%" }} /></Link>
          <div style={{ position: "absolute", top: "10px", left: "30px", color: "white", lineHeight: "15px", textAlign: "left" }}>
            <h2>Sell Or Trade</h2>
            <p>Exchange your gear for used items</p>
            <p>cash or credit toward future</p>
            <p>purchase</p>
            <Link to={"/shop"} style={{ color: "white" }}>Get a quote</Link>
          </div>
        </div>
      </div>
      <br />
      <div className='flex-2' style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <div style={{ position: "relative", width: "48%" }}>
          <Link to={"/shop"}><img src={img3} alt="" style={{ height: "250px", width: "100%" }} /></Link>
          <div style={{ position: "absolute", top: "10px", left: "30px", color: "white", lineHeight: "15px", textAlign: "left" }}>
            <h2>Shop Pre-Owned</h2>
            <p>Save money on used, open box, and</p>
            <p>refundable equipment &</p>
            <p>electronics</p>
            <Link to={"/shop"} style={{ color: "white" }}>Shop now</Link>
          </div>
        </div>

        <div style={{ position: "relative", width: "48%" }}>
          <Link to={"/shop"}><img src={img4} alt="" style={{ height: "250px", width: "100%" }} /></Link>
          <div style={{ position: "absolute", top: "10px", left: "30px", color: "white", lineHeight: "15px", textAlign: "left" }}>
            <h2>Sell Or Trade</h2>
            <p>Exchange your gear for used items</p>
            <p>cash or credit toward future</p>
            <p>purchase</p>
            <Link to={"/shop"} style={{ color: "white" }}>Get a quote</Link>
          </div>
        </div>
      </div>
      <br />
      <div className='flex-3' style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <div style={{ position: "relative", width: "48%" }}>
          <Link to={"/shop"}><img src={img5} alt="" style={{ height: "250px", width: "100%" }} /></Link>
          <div style={{ position: "absolute", top: "10px", left: "30px", color: "white", lineHeight: "15px", textAlign: "left" }}>
            <h2>Shop Pre-Owned</h2>
            <p>Save money on used, open box, and</p>
            <p>refundable equipment &</p>
            <p>electronics</p>
            <Link to={"/shop"} style={{ color: "white" }}>Shop now</Link>
          </div>
        </div>

        <div style={{ position: "relative", width: "48%" }}>
          <Link to={"/shop"}><img src={img6} alt="" style={{ height: "250px", width: "100%" }} /></Link>
          <div style={{ position: "absolute", top: "10px", left: "30px", color: "white", lineHeight: "15px", textAlign: "left" }}>
            <h2>Sell Or Trade</h2>
            <p>Exchange your gear for used items</p>
            <p>cash or credit toward future</p>
            <p>purchase</p>
            <Link to={"/shop"} style={{ color: "white" }}>Get a quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flex;
