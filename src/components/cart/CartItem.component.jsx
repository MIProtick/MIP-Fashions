import React from 'react';

import './CartItem.style.scss';

const CartItem = ({item: {imageUrl, price, name, quantity} }) => {
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span className="name"> {name} </span>
                <span className="price"> {quantity} <span>&#215; </span>{price}<span>&#2547;</span> </span>
            </div>
        </div>
    )
}

export default CartItem;