import React from 'react';
import fakeData from '../../fakeData';
import './shop.css';
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  const first10 = fakeData.slice(0,10);
  const [products] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    console.log('Product clicked',product);
    const newCart = [...cart,product];
    setCart(newCart);
  }

  return (
      <div className="container">
        <div className="product-container">
            {
              products.map(parameter => <Product handleClick={handleClick} product={parameter}></Product>)
            }   
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
        
      </div>
      
  );
};

export default Shop;