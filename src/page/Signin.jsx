import React, { useState, useEffect } from 'react';
import './sign.css';
import { IoIosArrowDropright } from "react-icons/io";
import GoogleButton from 'react-google-button';
import { auth, googleProvider, appleProvider } from '../Firebase'; // Ensure these providers are correctly configured
import { Link } from 'react-router-dom';
import { ProviderId, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import AppleSignInButton from 'react-apple-signin-auth'; // Ensure AppleSignInButton is properly configured
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((res) => {
        alert("log in succesfull")
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  const handleAppleSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, {/*appleProvider*/})
      .then((res) => {
        console.log(res);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  useEffect(() => {
    // Perform any effect logic here if needed
  }, []);

  return (
    <div className='sign1'>
      <form onSubmit={handleSubmit}>
        <div>
          <div className='sign2'>
            <div className='cardblue'>
              <h1 style={{ marginTop: "150px" }}>ADORAMA</h1>
              <div style={{ marginTop: "100px" }}>
                <h3 style={{ margin: "0px" }}>New Customer</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h4>CREATE AN ACCOUNT</h4>
                  <IoIosArrowDropright style={{ margin: "22px", fontSize: "20px" }} />
                </div>
                <Link to={"/signup"}>Sign Up</Link>
              </div>
            </div>
            <div className='cardwhite'>
              <h1 style={{ color: "#003773" }}>SIGN IN</h1>
              <div style={{ textAlign: "left", marginLeft: "100px" }}>
                <h3>Your Email:</h3>
                <input 
                  type="email" 
                  placeholder='email' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <h3>Password:</h3>
                <input 
                  type="password" 
                  placeholder='password' 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br /><br />
              <button className='btn1'>SIGN IN</button><br />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <a href="/">Forgot password?</a>
              <div style={{ display: "flex", margin: "0px 30px 0px 120px" }} className='sign2'>
                <div style={{ display: "flex", flexDirection: "column", margin: "10px 20px" }}>
                  <GoogleButton onClick={handleGoogleSignIn} /> <br />
                 {/* <AppleSignInButton onClick={handleAppleSignIn} />*/}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signin;
