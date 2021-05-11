import React from 'react';
import { connect } from 'react-redux';

import { toggleCarthidden } from '../../redux/cart/Cart.action';
import { selectCartItemCount } from '../../redux/cart/Cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.style.scss';

const CartIcon = ({ toggleCarthidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCarthidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'> {itemCount} </span>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('count called');
    return ({
        itemCount: selectCartItemCount(state)
    })
}
const mapDispatchToProps = dispatch => ({
    toggleCarthidden: () => dispatch(toggleCarthidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
