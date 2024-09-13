import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase';
import './Signup.css'; // Import the CSS file

const SignUp = () => {
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
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <br />
        <label htmlFor="email">EMAIL :</label>
        <input 
          type="email" 
          id="email"
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter Your Email..." 
          value={email}
        />
        <br /> <br />
        <label htmlFor="password">PASSWORD :</label>
        <input 
          type="password" 
          id="password"
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter Your Password..." 
          value={password}
        /> <br /><br />
        <input type="submit" value="Sign Up" className="submit-button" style={{height:"50px"}}/>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignUp;
