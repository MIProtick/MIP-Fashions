import React from 'react';
import { connect } from 'react-redux';

import CollectionPreviewItem from '../collection-preview-item/CollectionPreviewItem.component';
import { selectSpecificCollection } from '../../redux/shop/Shop.selectors';
import './Collection.style.scss';

export const Collection = ({collections}) => {
    const { title, items } = collections;
    return (
        <div className='collection-page'>
            <h2 className="title">{ title }</h2>
            <div className="items">
            {
                items.map(item =>
                    <CollectionPreviewItem key={item.id} item={item} />
                )
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collections: selectSpecificCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)
