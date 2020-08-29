import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i=0; i<cart.length; i++){
        total = total + cart[i].price;
    }
    return (
        <div>
          <h4>this is cart</h4>  
          <h5>No. of orders: {cart.length}</h5>
        <h5> total cost :{total}</h5>
        </div>
    );
};

export default Cart;