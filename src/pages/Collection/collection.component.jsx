import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionItems } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/Collection-item/collection-item.component';

import './collection.style.scss';

const Collection = ({collection, match}) => {
  const { params: {collectionId} } = match;

  return (
    <div className="collection-page">
      <h3>Collection Page</h3>
      {
        collection.find(item => item.routeName === collectionId)
                  .items
                  .map(item => <CollectionItem key={item.id} item={item} />)
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionItems 
});

export default connect(mapStateToProps)(Collection);