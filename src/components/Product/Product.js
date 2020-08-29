import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-name">
                <h4>{name}</h4> 
                <br/>
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <br/>
                <p><small>Only {stock} left in strock</small></p>
                <button className='main-button' onClick={()=>props.handleClick(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;