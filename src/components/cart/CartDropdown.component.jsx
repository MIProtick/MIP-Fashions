import React from 'react';
import { connect } from 'react-redux';

import CartItem from './CartItem.component';
import CustomButton from '../custom-button/CustomButton.component';
import { selectCartItems, selectCartItemCount } from '../../redux/cart/Cart.selectors';

import './CartDropdown.style.scss';

const CartDropdown = ({ cartItems, itemCount }) => {
    return (
        itemCount === 0 ?
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
                    <CustomButton> Go To Checkout </CustomButton>
                </div>
            </div>
        
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    itemCount: selectCartItemCount(state)
})

export default connect(mapStateToProps)(CartDropdown);
