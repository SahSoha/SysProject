import React from 'react';
import { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import './HomePage.css';
import Fotter from '../fotter/fotter';
import Contact from '../Contact/Contact';
import { Button } from '@mui/material';
import HomeScreen from '../../screens/HomeScreen';
import Search from '../Navbar/Search';

function HomePage() {
  return (
    <Fragment>
      <Navbar></Navbar>

      {/*<!-- home section starts  --> */}

      <section class="home" id="home">
        <div class="content">
          <h1>FRAÎCHE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            sed! Qui maxime alias, porro dolorum explicabo inventore officia
            nam! Ipsa nulla in accusamus cum ad deleniti laudantium assumenda
            odit a.
          </p>
          <a href="#about">
            <Button class="btn">discover more</Button>
          </a>
        </div>
      </section>

      {/* <!-- home section ends -->

<!-- product section starts  --> */}
      <h1 class="heading">Featured Products</h1>
      <Search></Search>
      {/* <Products></Products> */}
      <HomeScreen></HomeScreen>

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
            {/* <i class="fas fa-apple-alt"></i> */}
            <h3>organic food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              excepturi voluptatem eos nulla iure dolorem porro expedita
              deserunt at ea.
            </p>
          </div>

          <div class="box">
            {/* <i class="fas fa-award"></i> */}
            <h3>high quality</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              excepturi voluptatem eos nulla iure dolorem porro expedita
              deserunt at ea.
            </p>
          </div>

          <div class="box">
            {/* <i class="fas fa-shipping-fast"></i> */}
            <h3>fast delivery</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              excepturi voluptatem eos nulla iure dolorem porro expedita
              deserunt at ea.
            </p>
          </div>

          <div class="box">
            {/* <i class="fas fa-undo"></i> */}
            <h3>easy returns</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              excepturi voluptatem eos nulla iure dolorem porro expedita
              deserunt at ea.
            </p>
          </div>

          <div class="box">
            {/* <i class="fas fa-truck"></i> */}
            <h3>free delivery</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              excepturi voluptatem eos nulla iure dolorem porro expedita
              deserunt at ea.
            </p>
          </div>

          <div class="box">
            {/* <i class="fas fa-headset"></i> */}
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
      <Contact></Contact>
      {/* <!-- contact section ends -->

<!-- footer section  --> */}
      <Fotter></Fotter>

      {/* <!-- scroll top  --> */}
      {/* <a href="#home" class="fas fa-arrow-up" id="scroll-top"></a> */}
    </Fragment>
  );
}
export default HomePage;
