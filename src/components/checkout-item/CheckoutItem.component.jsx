import React from 'react';
import { connect } from 'react-redux';

import './CheckoutItem.style.scss';

export const CheckoutItem = ({cartItem:{name, imageUrl, price, quantity}}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">	&#8643; {quantity} &#8638;</span>
      <span className="price"> {price} </span>
      <div className="remove-item">&#128465;</div>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem)
