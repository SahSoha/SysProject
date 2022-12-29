import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Cart.css';
import Navbar from '../Navbar/Navbar';
function Cart() {
  return (
    <Fragment>
<<<<<<< HEAD
      <header>
        <Navbar></Navbar>
      </header>
=======
      <Navbar></Navbar>
>>>>>>> 0a4c91766797ca1c02acda2dabc8ae479803c8ef
      <div class="container1">
        <div class="your cart">
          <h1>your cart</h1>
          <div class="summary_card">
            <div class="card_item">
              <div class="product_img">
                {/* <img src="https://cdn.gourmetegypt.com/media/catalog/product/cache/2b4d21b90ad5abb98380bc0a709a4ac8/6/2/6222014310294.jpg" /> */}
              </div>
              <div class="product_info">
                <h1>Milk</h1>
                <p>Lorem Ipsum is simply dummy text.</p>
                <div class="close-btn">
                  <i class="fa fa-close"></i>
                </div>
                <div class="product_rate_info">
                  <h1>$ 20</h1>
                  <span class="pqt-minus">-</span>
                  <span class="pqt">1</span>
                  <span class="pqt-plus">+</span>
                </div>
              </div>
            </div>
            <div class="card_item">
              <div class="product_img">
                <img
                  src="https://www.puckarabia.com/globalassets/new-products-pictures/packshots/resized/11-puck-cream-500g-ara.png?preset=product640"
                  alt=""
                />
              </div>
              <div class="product_info">
                <h1>Cream Cheese</h1>
                <p>Lorem Ipsum is simply dummy text.</p>
                <div class="close-btn">
                  <i class="fa fa-close"></i>
                </div>
                <div class="product_rate_info">
                  <h1>$ 16</h1>
                  <span class="pqt-minus">-</span>
                  <span class="pqt">2</span>
                  <span class="pqt-plus">+</span>
                </div>
              </div>
            </div>
            <hr />
            <div class="order_price">
              <p>Order summary</p>
              <h4>$36</h4>
            </div>
            <div class="order_service">
              <p>delivery</p>
              <h4>$10</h4>
            </div>
            <div class="order_total">
              <p>Total Amount</p>
              <h4>$46</h4>
            </div>
            <div className="Checkout Button">
              <Link to="/Checkout">
                <button>Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Cart;
