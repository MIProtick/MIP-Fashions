import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/CheckoutItem.component';
import StripeButton from '../../components/stripe-button/StripeButton.component';
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
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )
            }
            
            <div className="total">
                <span> Total: { totalPrice }<span className='currency-sign'>&#2547;</span> </span>
            </div>
            <StripeButton price={totalPrice}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    totalPrice: selectCartItemTotalPrice
})

export default connect(mapStateToProps)(Checkout);
