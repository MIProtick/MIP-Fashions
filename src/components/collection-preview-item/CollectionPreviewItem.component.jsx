import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton.component';
import { addItemToCart } from '../../redux/cart/Cart.action';
import './CollectionPreviewItem.style.scss';

const CollectionPreviewItem = ({item, addItemToCart }) => {
  return (
    <div className='collection-preview-item'>
      
      <div className='item-image'>
          <div className='image' style={{backgroundImage:`url(${item.imageUrl})`}}></div>
      </div>
        
      <div className='item-footer'>
        <span className='name'>{ item.name }</span>
        <span className='price'>{ item.price }</span>
      </div>
      
      <CustomButton onClick={()=> addItemToCart(item)} customStyleClass='inverted'> Add to Cart </CustomButton>
    </div>
  )
}

const mapDispatchToState = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToState)(CollectionPreviewItem);
