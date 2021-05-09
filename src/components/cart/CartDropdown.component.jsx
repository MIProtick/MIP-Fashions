import React from 'react';

import CustomButton from '../custom-button/CustomButton.component';
import './CartDropdown.style.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                
            </div>
            <CustomButton> Go To Checkout </CustomButton>
        </div>
    )
}

export default CartDropdown
