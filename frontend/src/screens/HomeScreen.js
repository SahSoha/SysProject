import React from 'react';
import { Button, Rating } from '@mui/material';
import data from '../data';
import { Link } from 'react-router-dom';
import HomePage from '../Pages/HomePage/Homebage';

function HomeScreen() {
  return (
    <div>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <a href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </a>
            <div className="product-info">
              <a href={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </a>
              <p>
                <storage className="salary">{product.salar}</storage>
              </p>
              <Rating></Rating>
              <br></br>
              <div className="Cart Button">
                <Link to="/Cart">
                  <button>Add to Cart</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
