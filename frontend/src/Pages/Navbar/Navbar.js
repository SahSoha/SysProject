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
          <Link to="/">Home</Link>
          <Link to="/Products">product</Link>
          <Link to="/Contact">Contact us</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
    </Fragment>
  );
}
export default Navbar;
