import React from 'react';
import { Fragment } from "react";
import "./fotter.css";

function Fotter() {
  return (
    <Fragment> 
<section class="footer">

<div class="box-container">

    <div class="box">
        <img src="images/logo.png" alt=""/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores cumque reprehenderit labore dolorem magni itaque, quod velit neque doloremque quidem.</p>
    </div>

    <div class="box">
        <h3>contact details</h3>
        <p> <i class="fas fa-phone"></i> +123-456-7890. </p>
        <p> <i class="fas fa-envelope"></i> example@gmail.com </p>
        <p> <i class="fas fa-map-marker-alt"></i> egypt - 400104. </p>
    </div>

   

</div>

<h1 class="credit"> created by <span>Cairo CS</span> | all rights reserved @2022 </h1>

</section>
    </Fragment> 
    );
  }
  export default Fotter;