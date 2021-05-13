import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/CollectionOverview.component';
import Collection from '../../components/collection/Collection.component';

export const Shop = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);



export default Shop;
