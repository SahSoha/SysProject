import React from 'react';
import { Icon, Rating } from '@mui/material';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Products.css';
import Fotter from '../fotter/fotter';

function Products() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <section class="product" id="product">
        <h1 class="heading">featured products</h1>

        <div class="S-container">
          <form>
            <input type="search" placeholder="Search..."></input>
            <button type="submit">Search </button>
          </form>
        </div>
        <div class="box-container">
          <div class="box">
            <img
              src="https://cdnprod.mafretailproxy.com/sys-master-root/hc2/h60/27308418662430/12719_2.jpg_480Wx480H"
              alt=""
            />
            <h3>full milk</h3>
            <Rating></Rating>
            <div class="price">
              {' '}
              <span>$15.10</span> $12.30{' '}
            </div>
            <div class="icons">
              <a href="shop" class="fas fa-shopping-cart"></a>
              <a href="watch" class="fas fa-eye"></a>
              <a href="love" class="fas fa-heart"></a>
              <a href="shear" class="fas fa-share"></a>
            </div>
          </div>

          <div class="box">
            <img
              src="https://cdn.gourmetegypt.com/media/catalog/product/cache/2b4d21b90ad5abb98380bc0a709a4ac8/6/2/6222014310294.jpg"
              alt=""
            />
            <h3>free milk</h3>
            <Rating></Rating>
            <div class="price">
              {' '}
              <span>$20</span> $15{' '}
            </div>
            <div class="icons">
              <a href="shop" class="fas fa-shopping-cart"></a>
              <a href="watch" class="fas fa-eye"></a>
              <a href="love" class="fas fa-heart"></a>
              <a href="shear" class="fas fa-share"></a>
            </div>
          </div>

          <div class="box">
            <img
              src="https://cdnprod.mafretailproxy.com/sys-master-root/h8b/h07/27324937306142/390280_2.jpg_480Wx480H"
              alt=""
            />
            <h3>0% fat milk</h3>
            <Rating></Rating>
            <div class="price">
              {' '}
              <span>$10.50</span> $8.30{' '}
            </div>
            <div class="icons">
              <a href="shop" class="fas fa-shopping-cart"></a>
              <a href="watch" class="fas fa-eye"></a>
              <a href="love" class="fas fa-heart"></a>
              <a href="shear" class="fas fa-share"></a>
            </div>
          </div>

          <div class="box">
            <img
              src="https://www.puckarabia.com/globalassets/new-products-pictures/packshots/resized/11-puck-cream-500g-ara.png?preset=product640"
              alt=""
            />
            <h3>Processed cream cheese</h3>
            <Rating></Rating>
            <div class="price">
              {' '}
              <span></span> 50
            </div>
            <div class="icons">
              <a href="shop" class="fas fa-shopping-cart"></a>
              <a href="watch" class="fas fa-eye"></a>
              <a href="love" class="fas fa-heart"></a>
              <a href="shear" class="fas fa-share"></a>
            </div>
          </div>

          <div class="box">
            <img
              src="https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/314424-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MzI0NDB8aW1hZ2UvanBlZ3xoMWUvaGFhLzExODc1MDAzODI2MjA2LzMxNDQyNC0wMS5qcGdfMTIwMFd4MTIwMEh8M2VjYzI1NmZiYmQ4OWE1MDIzMjIyMjQzZDA3ZTM2YjJhNTZhMTgxNzBlZjBhNzA4YzVjYjVhMTRlMTk5YjhhZg"
              alt=""
            />
            <h3>Cream Cheese & Spreads</h3>
            <Rating></Rating>
            <div class="price">
              {' '}
              <span> </span> $30.0
            </div>
            <div class="icons">
              <a href="shop" class="fas fa-shopping-cart"></a>
              <a href="watch" class="fas fa-eye"></a>
              <a href="love" class="fas fa-heart"></a>
              <a href="shear" class="fas fa-share"></a>
            </div>
          </div>

          <div class="box">
            <img
              src="https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1409535-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NzQxMTF8aW1hZ2UvanBlZ3xoZmEvaGYwLzExODc0ODg0OTExMTM0LzE0MDk1MzUtMDEuanBnXzEyMDBXeDEyMDBIfDYyNDQ3MjRhNGU4YzNjMGYzNjliNGU2NDU2ZDE2Njg1MDg0Y2FiYzlhNDY3NmFhZWFlZjEyYjQxNzJmYzllODE"
              alt=""
            />
            <h3>cheese with less salt</h3>
            <Rating></Rating>

            <div class="price">
              {' '}
              <span>$24.15</span> $18.30{' '}
            </div>
            <div class="icons">
              <a href="shop" class="fas fa-shopping-cart"></a>
              <a href="watch" class="fas fa-eye"></a>
              <a href="love" class="fas fa-heart"></a>
              <a href="shear" class="fas fa-share"></a>
            </div>
          </div>
          <div class="box">
            <img
              src="https://cdnprod.mafretailproxy.com/sys-master-root/hbb/h38/9342444044318/327043_main.jpg_480Wx480H"
              alt=""
            />
            <h3>Cheese with pepper </h3>
            <Rating></Rating>
            <div class="price">
              {' '}
              <span> </span> $35.50
            </div>
            <div class="icons">
              <a href="shop" class="fas fa-shopping-cart"></a>
              <a href="watch" class="fas fa-eye"></a>
              <a href="love" class="fas fa-heart"></a>
              <a href="shear" class="fas fa-share"></a>
            </div>
          </div>
          <div class="box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjLmydulLAIiXCjp4pou-KkLL-QjEfjHeDVg&usqp=CAU"
              alt=""
            />
            <h3>Cheese </h3>
            <Rating></Rating>
            <div class="price">
              {' '}
              <span>50.32 </span> $42
            </div>
            <div class="icons">
              <a href="shop" class="fas fa-shopping-cart"></a>
              <a href="watch" class="fas fa-eye"></a>
              <a href="love" class="fas fa-heart"></a>
              <a href="shear" class="fas fa-share"></a>
            </div>
          </div>
          <div class="box">
            <img
              src="https://cdnprod.mafretailproxy.com/sys-master-root/h04/he6/9342688854046/429799_main.jpg_480Wx480H"
              alt=""
            />
            <h3>Roqueford cheese </h3>
            <Rating></Rating>
            <div class="price">
              {' '}
              <span>80 </span> $60
            </div>
            <div class="icons">
              <a href="shop" class="fas fa-shopping-cart"></a>
              <a href="watch" class="fas fa-eye"></a>
              <a href="love" class="fas fa-heart"></a>
              <a href="shear" class="fas fa-share"></a>
            </div>
          </div>
          <div class="box">
            <img
              src="https://images.spinneys.net/product/36268/d4Ktbwo28RAzdw907qDeORAfZ6QWK31LsQD0Ng5x.jpeg"
              alt=""
            />
            <h3>Natural yogurt </h3>
            <Rating></Rating>
            <div class="price">
              {' '}
              <span> </span> $5
            </div>
            <div class="icons">
              <a href="shop" class="fas fa-shopping-cart"></a>
              <a href="watch" class="fas fa-eye"></a>
              <a href="love" class="fas fa-heart"></a>
              <a href="shear" class="fas fa-share"></a>
            </div>
          </div>
          <div class="box">
            <img
              src="https://cdn.salla.sa/jROPm/258YEDiHwWILjzAteHcqLSuEaLwEJqJ0S43yUnIr.jpg"
              alt=""
            />
            <h3>Low fat yogurt </h3>
            <Rating></Rating>
            <div class="price">
              {' '}
              <span>15.50 </span> $10
            </div>
            <div class="icons">
              <a href="shop" class="fas fa-shopping-cart"></a>
              <a href="watch" class="fas fa-eye"></a>
              <a href="love" class="fas fa-heart"></a>
              <a href="shear" class="fas fa-share"></a>
            </div>
          </div>
          <div class="box">
            <img
              src="https://cdnprod.mafretailproxy.com/sys-master-root/h56/hc9/27324710486046/312660_main.jpg_480Wx480H"
              alt=""
            />
            <h3>lite yogurt </h3>
            <Rating></Rating>
            <div class="price">
              {' '}
              <span>10.35 </span> $7
            </div>
            <div class="icons">
              <a href="shop" class="fas fa-shopping-cart"></a>
              <a href="watch" class="fas fa-eye"></a>
              <a href="love" class="fas fa-heart"></a>
              <a href="shear" class="fas fa-share"></a>
            </div>
            <div class="box">
              <img
                src="https://www.lurpak.com/optimized/golden-small-pad/siteassets/final-packshots/middle-east/j00068-butter-web-images-277x438_unsalted.jpg"
                alt=""
              />
              <h3>Butter </h3>
              <Rating></Rating>
              <div class="price">
                {' '}
                <span>99.99 </span> $85
              </div>
              <div class="icons">
                <a href="shop" class="fas fa-shopping-cart"></a>
                <a href="watch" class="fas fa-eye"></a>
                <a href="love" class="fas fa-heart"></a>
                <a href="shear" class="fas fa-share"></a>
              </div>
            </div>
            <div class="box">
              <img
                src="https://www.lurpak.com/siteassets/final-packshots/middle-east/j00068-butter-web-images-277x438_slightly-salted.jpg"
                alt=""
              />
              <h3>Salted Butter </h3>
              <Rating></Rating>
              <div class="price">
                {' '}
                <span>80.35 </span> $70
              </div>
              <div class="icons">
                <a href="shop" class="fas fa-shopping-cart"></a>
                <a href="watch" class="fas fa-eye"></a>
                <a href="love" class="fas fa-heart"></a>
                <a href="shear" class="fas fa-share"></a>
              </div>
            </div>
            <div class="box">
              <img
                src="https://www.lurpak.com/optimized/golden-small-pad/siteassets/final-packshots/lurpak_thumb_spreadable_olive.png"
                alt=""
              />
              <h3>Olive Oil Butter </h3>
              <Rating></Rating>
              <div class="price">
                {' '}
                <span> </span> $90
              </div>
              <div class="icons">
                <a href="shop" class="fas fa-shopping-cart"></a>
                <a href="watch" class="fas fa-eye"></a>
                <a href="love" class="fas fa-heart"></a>
                <a href="shear" class="fas fa-share"></a>
              </div>
            </div>
            <div class="box">
              <img
                src="https://www.osmanmarket.app/us/136/pidwebp600/1341/f132833393107063685056-1.webp"
                alt=""
              />
              <h3>choclate ice cream </h3>
              <Rating></Rating>
              <div class="price">
                {' '}
                <span>30.25 </span> $25
              </div>
              <div class="icons">
                <a href="shop" class="fas fa-shopping-cart"></a>
                <a href="watch" class="fas fa-eye"></a>
                <a href="love" class="fas fa-heart"></a>
                <a href="shear" class="fas fa-share"></a>
              </div>
            </div>
            <div class="box">
              <img
                src="https://images.spinneys.net/product/27818/FliJ9mPaM726geBU3fnL8kOPY3TNa3tYubpvjvvR.jpg"
                alt=""
              />
              <h3>vanilla ice cream </h3>
              <Rating></Rating>
              <div class="price">
                {' '}
                <span></span> $20
              </div>
              <div class="icons">
                <a href="shop" class="fas fa-shopping-cart"></a>
                <a href="watch" class="fas fa-eye"></a>
                <a href="love" class="fas fa-heart"></a>
                <a href="shear" class="fas fa-share"></a>
              </div>
            </div>
            <div class="box">
              <img
                src="https://www.osmanmarket.app/us/136/pidwebp200/8166/f132994155602948646126-1.webp"
                alt=""
              />
              <h3>mango ice cream </h3>
              <Rating></Rating>
              <div class="price">
                {' '}
                <span> 25.80</span> $22.50
              </div>
              <div class="icons">
                <a href="shop" class="fas fa-shopping-cart"></a>
                <a href="watch" class="fas fa-eye"></a>
                <a href="love" class="fas fa-heart"></a>
                <a href="shear" class="fas fa-share"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default Products;
