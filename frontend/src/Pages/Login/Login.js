import { Fragment } from "react";
import React  from 'react';
import {Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import "./Login.css" ;

const Login = () => {
 
    return (
      
      <Fragment>
      <Navbar></Navbar>
    <section className="container">
      <h1 className="text">Sign In</h1>
      <p className="cya">Sign into Your Account</p>
      <form className="form" >
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" required/>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" name="password" required/>
        </div>
        <input type="submit" className="submit" value="Login" />
        <p className="ahc">
          Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
      </form> 
    </section>
      </Fragment>
    )
};

export default Login;