import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FcCallTransfer } from "react-icons/fc";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { CgInstagram } from "react-icons/cg";
import { RiFacebookBoxLine } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import './foot.css'
import { auth } from '../Firebase';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Email and password are required.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setError(null); // Clear any previous error
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };
  return (
    <div>
      <div style={{width:"80%",marginLeft:"150px"}}> 
      <h2 style={{color:"black"}}>Photography Equipment, Video Gear, and Electronics</h2>
      <p>We are the world's only full-service destination for photo, video and electronics. We're more than a camera store—we offer the best selection and prices on professional photography and video gear, pro-audio, and consumer electronics such as home theaters , desktop computers, laptops, iPads, home office equipment and more. Equip your creativity with the best & newest Mirrorless, Point & Shoot, and DSLR photography equipment from bran<br />ds like Sony, Canon and Nikon, or shop for the latest in smart tech, gaming, drones, musical instruments and recording studio gear.</p>
      <h2 style={{color:"black"}}>Exclusive Savings All Year Long   </h2>
          <p>For savings you won't find anywhere else and for weekly trending deals on top products from industry leading bran<br />ds, brow<br />se Deals, Used, Deal Of The Day, only at Adoram</p>
          <div style={{display:"flex",justifyContent:"space-evenly",margin:"80px"}}>
            <div>
              <FcCallTransfer style={{fontSize:"100px"}} />
              <h2>Give us Call</h2>
              <p>any question ? happy to help you</p>
              <p>Call us at 800-900-1000</p>
            </div>
            <div>
              <IoChatbubbleEllipsesOutline style={{fontSize:"90px",color:"#014B96"}} />
              <h2>Chat Now</h2>
              <p>need help to have a product</p>
              <p>question?link <Link>Chat with an expert</Link></p>
            </div>
            <div>
               <FaHandsHelping style={{fontSize:"90px",color:"#014B96"}}/>
               <h2>Help Center</h2>
              <p>for info shipping ,returns ,order</p>
              <p><Link>find answer here</Link></p>
            </div>
            <div>
               <IoLocationOutline  style={{fontSize:"90px",color:"#014B96"}}/>
               <h2>Visti Our Store</h2>
              <p>visit our NYC store for shopping</p>
              <p>service repair & more</p>
            </div>
          </div>
      </div>
      <div className='foot'>
           <div className='one'>
                <h2>How Can We Help?</h2>
                <nav style={{justifyContent:"left"}}>
        <a href="#" className="nav-link">customer service</a><br/>
        <a href="#" className="nav-link">track your order</a><br/>
        <a href="#" className="nav-link">shipping & delivery</a><br/>
        <a href="#" className="nav-link">in-store pickup</a><br/>
        <a href="#" className="nav-link">international orders</a><br/>
        <a href="#" className="nav-link">return policy</a><br/>
        <a href="#" className="nav-link">contact us</a><br/>
        <a href="#" className="nav-link">warranties</a><br/>
        <a href="#" className="nav-link">accessbilty policy</a>
    </nav>
           </div>
           <div className='one'>
                <h2>Service & Program</h2>
                <nav>
        <a href="#" className="nav-link">customer service</a><br/>
        <a href="#" className="nav-link">track your order</a><br/>
        <a href="#" className="nav-link">shipping & delivery</a><br/>
        <a href="#" className="nav-link">in-store pickup</a><br/>
        <a href="#" className="nav-link">international orders</a><br/>
        <a href="#" className="nav-link">return policy</a><br/>
        <a href="#" className="nav-link">contact us</a><br/>
        <a href="#" className="nav-link">warranties</a><br/>
        <a href="#" className="nav-link">accessbilty policy</a>
    </nav>
           </div>
           <div className='one'>
                <h2>Who We Are</h2>
                <nav>
        <a href="#" className="nav-link">customer service</a><br/>
        <a href="#" className="nav-link">track your order</a><br/>
        <a href="#" className="nav-link">shipping & delivery</a><br/>
        <a href="#" className="nav-link">in-store pickup</a><br/>
        <a href="#" className="nav-link">international orders</a><br/>
        <a href="#" className="nav-link">return policy</a><br/>
        <a href="#" className="nav-link">contact us</a><br/>
        <a href="#" className="nav-link">warranties</a><br/>
        <a href="#" className="nav-link">accessbilty policy</a>
    </nav>
           </div>
           <div className='one' style={{height:"300px",width:"500px"}}>
                <h2>Unlock Free Shipping</h2>
                <p>Sign up for texts and get special offers, product news, exclusive deals, and more. Plus, Adorama Rewards members earn 25 points.</p>
                <p>By submitting this form, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from Adorama at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg and data rates may apply. View Terms & Privacy".</p>
                  <div>
                  <form onSubmit={handleSubmit}>
                  <input 
          type="email" 
          id="email"
          onChange={(e) => setEmail(e.target.value)} style={{border: "1px solid #798794",backgroundColor:"#003773"}} 
          placeholder="Enter Your Email..." 
          value={email}
        /><input 
        type="password" 
        id="password"
        onChange={(e) => setPassword(e.target.value)} style={{border: "1px solid #798794",backgroundColor:"#003773"}}
        placeholder="Enter Your Password..." 
        value={password}
      />
                  
                  <br /><br />
                  <button style={{border: "1px solid #798794",backgroundColor:"#014B96"}}>Submit</button>
                  <br /><br />
                  <div className='iconf'>
                  <h3>follow us :- <CgInstagram/><RiFacebookBoxLine/><SlSocialYoutube/><RiTwitterXFill/></h3>
                  </div>
              </form>    
                  </div>      
           </div>
      </div>
    </div>
  )
}

export default Footer
