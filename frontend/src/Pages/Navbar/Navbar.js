import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ShoppingCart } from 'phosphor-react';

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
          <Link to="/" style={{ color: 'black' }}>
            FRAÎCHE
          </Link>
          {/* <Link to="/">Home</Link> */}
          <Link to="/Products">product</Link>
          <Link to="/Contact">Contact us</Link>
          <Link to="/login">Login</Link>
          <Link to="/Profile">My Account</Link>
          <Link to="/Cart">
            <ShoppingCart size={28} />
          </Link>
        </nav>
      </header>
    </Fragment>
  );
}
export default Navbar;
