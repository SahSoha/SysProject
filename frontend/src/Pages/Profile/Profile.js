import React  from 'react';
import {Link} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import { Fragment } from "react";
import "./Profile.css" ;

const Profile =() => {
    return (
        <Fragment>
        <Navbar></Navbar>
        <section className="container">
        <h1 className="text">
          Edit Your Profile
        </h1>
        <p className="cya">
          <i className="fas fa-user"></i> Let's get some information to make your
          profile stand out
        </p>
        <form className="form">
          <div className='form_wrap'>
          <div className="form-group">
          <input type="text" placeholder="First Name" name="name" id='fname' />
          </div>
          <div className="form-group">
          <input type="text" placeholder="Last Name" name="name" id='lname' />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" name="email"/>
          </div>
          <div className="form-group">
            <input type="text" placeholder="city" name="city" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="country" name="country" />
          </div>
          <div className="form-group">
            <input type="Phone number" placeholder="Phone Number" name="Phone number" />
          </div>
          <div className="table"> 
            <table> 
              <tr>
                <td className='D'> Date Of Birth </td>
              </tr>
              <tr className='element'>
                <td> <input type="number" name="day" placeholder="Day" min="1" max="31" id="n"/> </td>
                <td> <select id="m" name="month" >
                     <option value="month">Month</option>
                     <option value="Jan">Jan</option>
                     <option value="Feb">Feb</option>
                     <option value="Mar">Mar</option>
                     <option value="Apr">Apr</option>
                     <option value="May">May</option>
                     <option value="June">June</option>
                     <option value="July">July</option>
                     <option value="Aug">Aug</option>
                     <option value="Sep">Sep</option>
                     <option value="Oct">Oct</option>
                     <option value="Nov">Nov</option>
                     <option value="Dec">Dec</option>
                   </select> </td>
                <td><input id="y" type="number" name="year" size="5" maxlength="4" placeholder="Year" min="1950" max="2050"/></td>
                </tr>
            </table>
          </div>
          {/* <div className="form-group">
          <input type="Date" placeholder="Day" name="Day" />
          </div> */}
    <div className="form-group">
   <label className='Gen'>Gender </label>
  <ul>
   <li>
     <label className="radio_wrap">
  	<input type="radio" name="gender" value="male" className="input_radio" checked/>
  	<span>Male</span>
     </label>
  </li>
  <li>
    <label className="radio_wrap">
  	<input type="radio" name="gender" value="female" className="input_radio"/>
  	<span>Female</span>
   </label>
  </li>
 </ul>
</div>

        
</div>

    <input type="submit" className="submit" value="Submit" />

      </form>
      </section>
      </Fragment>

        )
    
};

export default Profile ;






{/* <p className="ahc">
           <Link to="dashboard.html">Go Back</Link>
    </p> */}