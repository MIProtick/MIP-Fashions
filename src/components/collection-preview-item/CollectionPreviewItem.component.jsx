import React from 'react';
import './CollectionPreviewItem.style.scss';

const CollectionPreviewItem = ({id, name, price, imageUrl }) => {
  return (
    <div className='collection-preview-item'>
      
      <div className='item-image'>
          <div className='image' style={{backgroundImage:`url(${imageUrl})`}}></div>
      </div>
        
      <div className='item-footer'>
        <span className='name'>{ name }</span>
        <span className='price'>{ price }</span>
      </div>
    </div>
  )
}

export default CollectionPreviewItem
