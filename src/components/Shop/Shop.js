import React from 'react';
import fakeData from '../../fakeData';
import './shop.css';
import { useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
  const first10 = fakeData.slice(0,10);
  const [products, setProducts] = useState(first10);
  const handleClick = () => {
    console.log('Product clicked');
  }

  return (
      <div className="container">
        <div className="product-container">
            {
              products.map(parameter => <Product attribute={handleClick} product={parameter}></Product>)
            }   
        </div>
        <div className="cart-container">
          This is cart
        </div>
        
      </div>
      
  );
};

export default Shop;