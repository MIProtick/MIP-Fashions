import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';
import { ShopData } from './ShopData.js';

export class Shop extends Component {
  constructor() {
    super();

    this.state = {
      collections: [...ShopData],
    }
  }

  render() {
    const {collections} = this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherCollectionItems}) => 
            <CollectionPreview key={id} {...otherCollectionItems}/>
          )
        }
      </div>
    )
  }
}

export default Shop
