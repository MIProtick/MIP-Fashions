import React from 'react';
import { connect } from 'react-redux';

import { toggleCarthidden } from '../../redux/cart/Cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.style.scss';

const CartIcon = ({toggleCarthidden}) => {
    return (
        <div className='cart-icon' onClick={toggleCarthidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'> 0 </span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCarthidden: () => dispatch(toggleCarthidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
