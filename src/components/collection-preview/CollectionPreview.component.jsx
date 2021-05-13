import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionPreviewItem from '../collection-preview-item/CollectionPreviewItem.component';
import './CollectionPreview.style.scss';

const CollectionPreview = ({ title, items, routeName, history, match }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title' onClick={() => history.push(`${match.url}/${routeName}`)}> { title.toUpperCase() } </h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx <4)
          .map((item) => <CollectionPreviewItem key={item.id} item={item}> </CollectionPreviewItem> )
        }
      </div>
    </div>
  )
}

export default withRouter(CollectionPreview);
