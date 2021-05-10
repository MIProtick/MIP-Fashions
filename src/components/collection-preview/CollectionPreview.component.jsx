import React from 'react';
import CollectionPreviewItem from '../collection-preview-item/CollectionPreviewItem.component';
import './CollectionPreview.style.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'> { title.toUpperCase() } </h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx <4)
          .map((item) => <CollectionPreviewItem key={item.id} item={item}> </CollectionPreviewItem> )
        }
      </div>
    </div>
  )
}

export default CollectionPreview
