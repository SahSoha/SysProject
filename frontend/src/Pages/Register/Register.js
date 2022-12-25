import { Fragment } from "react";
import React  from 'react';
import {Link} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import "./Register.css" ;

const Register =() => {
  return (

    <Fragment>
    <Navbar></Navbar>
      <section className="container">
        <h1 className="text">Sign Up</h1>
        <p className="cya">Create Your Account</p>
        <form className="form" >
            <div className="form-group">
                <input type="text" placeholder="First Name" name="name" required />
              </div>

              <div className="form-group">
                <input type="text" placeholder="Last Name" name="name" required />
              </div>

          <div className="form-group">
            <input type="email" placeholder="Email Address" name="email" required/>
          </div>

          <div className="form-group">
            <input type="password" placeholder="Password" name="password" required/>
          </div>

          <div className="form-group">
            <input type="password" placeholder="Confirm Password" name="password" required/>
          </div>

          <input type="submit" className="submit" value="Sign Up" />

        <p className="ahc">
          Already have an account? <Link to ="/Login" >Sign In</Link>
        </p>
      </form>
      </section>
      </Fragment>
       )
    
};

export default Register ;
