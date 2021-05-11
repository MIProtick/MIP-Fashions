import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartItemTotalPrice } from '../../redux/cart/Cart.selectors';

import './Checkout.style.scss';

const Checkout = ({ cartItems, totalPrice }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span> Products </span>
                </div>
                <div className="header-block">
                    <span> Description </span>
                </div>
                <div className="header-block">
                    <span> Quantity </span>
                </div>
                <div className="header-block">
                    <span> Price </span>
                </div>
                <div className="header-block">
                    <span> Remove </span>
                </div>
            </div>
            
            {
                cartItems.map(cartItem => cartItem.name)
            }
            
            <div className="total">
                <span> Total: { totalPrice }<span>&#2547;</span> </span>
            </div>
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    totalPrice: selectCartItemTotalPrice
})

export default connect(mapStateToProps)(Checkout);
