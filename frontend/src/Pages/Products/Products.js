import React from 'react';
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Products.css";
import Fotter from "../fotter/fotter";

function Products() {
  return (
    <Fragment> 
        
<Navbar></Navbar>
<section class="product" id="product">

    <h1 class="heading">featured products</h1>

    <div class="box-container">

        <div class="box">
            <img src="https://th.bing.com/th/id/R.6a066fbb176471bcb0a618b618219afd?rik=geDWuNP%2b2o%2f%2bBQ&pid=ImgRaw&r=0" alt=""/>
            <h3>Milk</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
            </div>
            <div class="price"> <span>$15.10</span> $12.30 </div>
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-eye"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-share"></a>
            </div>
        </div>

        <div class="box">
            <img src="https://th.bing.com/th/id/R.6a066fbb176471bcb0a618b618219afd?rik=geDWuNP%2b2o%2f%2bBQ&pid=ImgRaw&r=0" alt=""/>
            <h3>Milk</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
            </div>
            <div class="price"> <span>$15.10</span> $12.30 </div>
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-eye"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-share"></a>
            </div>
        </div>

        <div class="box">
            <img src="https://www.itloblena.com/wp-content/uploads/2020/08/1B81C177-C068-43CA-B7C8-D9FCEBDDF0F7-768x700.jpg" alt=""/>
            <h3>Milk</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
            </div>
            <div class="price"> <span>$15.10</span> $12.30 </div>
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-eye"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-share"></a>
            </div>
        </div>

        <div class="box">
            <img src="https://www.itloblena.com/wp-content/uploads/2020/08/1B81C177-C068-43CA-B7C8-D9FCEBDDF0F7-768x700.jpg" alt=""/>
            <h3>Milk</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
            </div>
            <div class="price"> <span>$15.10</span> $12.30 </div>
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-eye"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-share"></a>
            </div>
        </div>

        <div class="box">
            <img src="https://www.itloblena.com/wp-content/uploads/2020/08/4B275DC0-F7E8-4AEE-B472-69C729D9FD37.jpeg" alt=""/>
            <h3>Milk</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
            </div>
            <div class="price"> <span>$15.10</span> $12.30 </div>
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-eye"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-share"></a>
            </div>
        </div>

        <div class="box">
            <img src="https://www.itloblena.com/wp-content/uploads/2020/08/4B275DC0-F7E8-4AEE-B472-69C729D9FD37.jpeg" alt=""/>
            <h3>Milk</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
            </div>
            <div class="price"> <span>$15.10</span> $12.30 </div>
            <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-eye"></a>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-share"></a>
            </div>
        </div>

    </div>

</section>
 </Fragment> 
    );
  }
  export default Products;