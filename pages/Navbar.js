import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <Fragment>
      {' '}
      {/* <!-- header section starts  --> */}
      <header>
        <a href="#" class="logo">
          <img src="images/logo.png" alt="" />
        </a>

        <div id="menu" class="fas fa-bars"></div>

        <nav class="navbar">
          <title className="fra"></title>
          <a style={{ color: 'black' }}>FRAÎCHE</a>
          <a href="#home">home</a>
          <a href="#product">product</a>
          <a href="#about">about us</a>
          <a href="#service">service</a>
          <a href="#contact">contact</a>
          <a href="#contact">Login</a>
        </nav>
      </header>
    </Fragment>
  );
}
export default Navbar;
