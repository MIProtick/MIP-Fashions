import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/CollectionPreview.component';
import { selectCollectionForPreview } from '../../redux/shop/Shop.selectors';

import './CollectionOverview.style.scss';

const CollectionOverview = ({ collections, match }) => {
  return (
    <div className='collection-overview'>
      {
        collections.map(({ id, ...otherCollectionItems }) =>
          <CollectionPreview key={id} {...otherCollectionItems} parentPath={match.path} />
        )
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview)
