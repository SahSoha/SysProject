import React from 'react';
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import Fotter from "../fotter/fotter";

function Contact() {
    return (
        <Fragment> <Navbar></Navbar>
        
<section class="contact" id="contact">

<h1 class="heading">contact us</h1>

<div class="row">

    <div class="image">
        <img src="https://media.istockphoto.com/photos/contact-us-picture-id533935533?k=6&m=533935533&s=612x612&w=0&h=SjXHekj7TI8QmFH4xzcUkLCiS5vg6_wy1pBEu7Q4Kjc=" alt=""/>
    </div>

    <form action="">

        <div class="inputBox">
            <h3>full name</h3>
            <input type="text" placeholder="enter your name"/>
        </div>

        <div class="inputBox">
            <h3>email</h3>
            <input type="email" placeholder="enter your email"/>
        </div>

        <div class="inputBox">
            <h3>number</h3>
            <input type="number" placeholder="enter your number"/>
        </div>

        <div class="inputBox">
            <h3>message</h3>
            <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
        </div>

        <input type="submit" value="send" class="btn"/>

    </form>

</div>

</section>

        </Fragment>
    );
}
export default Contact;