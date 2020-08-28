import React from 'react';
import logo from '../../images/logo.png';
import './header.css'

const Header = () => {
    return (
        <div className= "header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/manage">Manage Inventory Items</a>
            </nav>
        </div>
    );
};

export default Header;