import React from 'react';
import { connect } from 'react-redux';

import { removeItemFromCart, addItemToCart, substractItemFromCart } from '../../redux/cart/Cart.action';

import './CheckoutItem.style.scss';

export const CheckoutItem = ({cartItem, removeItem, addItemToCart, substractItemFromCart}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">	
        <span onClick={()=> substractItemFromCart(cartItem)}>&#8643;</span> 
        {quantity} 
        <span onClick={() => addItemToCart(cartItem)}>&#8638;</span> 
      </span>
      <span className="price"> {price} </span>
      <div className="remove-item" onClick={() => removeItem(cartItem)}>&#128465;</div>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item)),
  addItemToCart: item => dispatch(addItemToCart(item)),
  substractItemFromCart: item => dispatch(substractItemFromCart(item))
  
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem)
