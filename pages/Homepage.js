import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <Fragment>
      {/* home section starts   */}

      <section class="home" id="home">
        <div class="content">
          <h3>healthy Milky.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            sed! Qui maxime alias, porro dolorum explicabo inventore officia
            nam! Ipsa nulla in accusamus cum ad deleniti laudantium assumenda
            odit a.
          </p>
          <a href="#">
            <button class="btn">discover more</button>
          </a>
        </div>
      </section>

      {/* <!-- home section ends -->

<!-- product section starts  --> */}

      <section class="product" id="product">
        <h1 class="heading">featured products</h1>

        <div class="box-container">
          <div class="box">
            <img
              src="https://th.bing.com/th/id/R.6a066fbb176471bcb0a618b618219afd?rik=geDWuNP%2b2o%2f%2bBQ&pid=ImgRaw&r=0"
              alt=""
            />
            <h3>Skim milk</h3>
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
              src="https://th.bing.com/th/id/R.6a066fbb176471bcb0a618b618219afd?rik=geDWuNP%2b2o%2f%2bBQ&pid=ImgRaw&r=0"
              alt=""
            />
            <h3>Full cream milk</h3>
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
              src="https://www.itloblena.com/wp-content/uploads/2020/08/1B81C177-C068-43CA-B7C8-D9FCEBDDF0F7-768x700.jpg"
              alt=""
            />
            <h3>Sugar free milk</h3>
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
            <h3>lite yogurt  </h3>
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
        </div>
      </section>

      {/* <!-- product section ends -->

<!-- about section starts  --> */}

      <section class="about" id="about">
        <h1 class="heading">about us</h1>

        <div class="row">
          <div class="image">
            <img
              src="https://i.pinimg.com/originals/d2/b8/f5/d2b8f509aa8f39e8d8d1ade5a78cea04.jpg"
              alt=""
            />
          </div>

          <div class="content">
            <h3>we are</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              quod voluptate debitis dolor beatae explicabo, est obcaecati
              distinctio, mollitia provident nostrum accusamus aspernatur quas,
              pariatur neque rem voluptas expedita temporibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              blanditiis ipsam iusto odio omnis illo cum necessitatibus
              officiis, iure laboriosam!
            </p>
            <a href="#">
              <button class="btn">learn more</button>
            </a>
          </div>
        </div>
      </section>

      {/* <!-- about section ends -->

<!-- service section starts  --> */}

      <section class="service" id="service">
        <h1 class="heading">our services</h1>

        <div class="box-container">
          <div class="box">
            <i class="fas fa-apple-alt"></i>
            <h3>organic food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              excepturi voluptatem eos nulla iure dolorem porro expedita
              deserunt at ea.
            </p>
          </div>

          <div class="box">
            <i class="fas fa-award"></i>
            <h3>high quality</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              excepturi voluptatem eos nulla iure dolorem porro expedita
              deserunt at ea.
            </p>
          </div>

          <div class="box">
            <i class="fas fa-shipping-fast"></i>
            <h3>fast delivery</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              excepturi voluptatem eos nulla iure dolorem porro expedita
              deserunt at ea.
            </p>
          </div>

          <div class="box">
            <i class="fas fa-undo"></i>
            <h3>easy returns</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              excepturi voluptatem eos nulla iure dolorem porro expedita
              deserunt at ea.
            </p>
          </div>

          <div class="box">
            <i class="fas fa-truck"></i>
            <h3>free delivery</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              excepturi voluptatem eos nulla iure dolorem porro expedita
              deserunt at ea.
            </p>
          </div>

          <div class="box">
            <i class="fas fa-headset"></i>
            <h3>24 x 7 support</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              excepturi voluptatem eos nulla iure dolorem porro expedita
              deserunt at ea.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- service section ends -->

<!-- contact section starts  --> */}

      <section class="contact" id="contact">
        <h1 class="heading">contact us</h1>

        <div class="row">
          <div class="image">
            <img
              src="https://media.istockphoto.com/photos/contact-us-picture-id533935533?k=6&m=533935533&s=612x612&w=0&h=SjXHekj7TI8QmFH4xzcUkLCiS5vg6_wy1pBEu7Q4Kjc="
              alt=""
            />
          </div>

          <form action="">
            <div class="inputBox">
              <h3>full name</h3>
              <input type="text" placeholder="enter your name" />
            </div>

            <div class="inputBox">
              <h3>email</h3>
              <input type="email" placeholder="enter your email" />
            </div>

            <div class="inputBox">
              <h3>number</h3>
              <input type="number" placeholder="enter your number" />
            </div>

            <div class="inputBox">
              <h3>message</h3>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="message"
              ></textarea>
            </div>

            <input type="submit" value="send" class="btn" />
          </form>
        </div>
      </section>

      {/* <!-- contact section ends -->

<!-- footer section  --> */}

      <section class="footer">
        <div class="box-container">
          <div class="box">
            <img src="images/logo.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores cumque reprehenderit labore dolorem magni itaque, quod
              velit neque doloremque quidem.
            </p>
          </div>

          <div class="box">
            <h3>contact details</h3>
            <p>
              {' '}
              <i class="fas fa-phone"></i> +123-456-7890.{' '}
            </p>
            <p>
              {' '}
              <i class="fas fa-envelope"></i> example@gmail.com{' '}
            </p>
            <p>
              {' '}
              <i class="fas fa-map-marker-alt"></i> egypt - 400104.{' '}
            </p>
          </div>

          <div class="box">
            <h3>follow us</h3>
            <a href="#" class="fab fa-youtube"></a>
            <a href="#" cl ass="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
          </div>
        </div>

        <h1 class="credit"> | all rights reserved! </h1>
      </section>

      {/* <!-- scroll top  --> */}
      <a href="#home" class="fas fa-arrow-up" id="scroll-top"></a>
    </Fragment>
  );
}
export default HomePage;
