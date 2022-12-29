import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <Fragment>
      <header>
        <a href="#" class="logo">
          <img src="images/logo.png" alt="" />
        </a>

        <div id="menu" class="fas fa-bars"></div>

        <nav class="navbar">
          <title className="fra"></title>
          <a style={{ color: 'black' }}>FRAICHE</a>
          
          <Link to="/Products"> Products</Link>
          <Link to="/AddProduct"> Add Product</Link>
          <Link to="/DeleteProduct"> Delete Product </Link>
          
        </nav>
      </header>
    </Fragment>
  );
}
export default Navbar;
