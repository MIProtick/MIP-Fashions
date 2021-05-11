import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';

import CartItem from './CartItem.component';
import CustomButton from '../custom-button/CustomButton.component';
import { toggleCarthidden } from '../../redux/cart/Cart.action';
import { selectCartItems } from '../../redux/cart/Cart.selectors';

import './CartDropdown.style.scss';

const CartDropdown = ({ cartItems, history, toggleCarthidden }) => {
    return (
        cartItems.length === 0 ?
            <div className="cart-dropdown">
                <div> No Item found In The Cart! </div>
            </div>
        :
            <div className='cart-dropdown'>
                <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
                </div>
                <div className="cart-checkout-btn">
                    <CustomButton 
                    onClick={ () => { toggleCarthidden(); history.push('/checkout')} } 
                    > Go To Checkout </CustomButton>
                </div>
            </div>
           
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

const mapDispatchToProps = dispatch => ({
    toggleCarthidden: () => dispatch(toggleCarthidden())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));
