import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionItems } from '../../redux/shop/shop.selectors';
import CollectionsPreview from '../../components/Collections-preview/collections-preview.component';
import CollectionPage from '../Collection/collection.component';

const mapTheCollection = collection => collection.map(({id, title, items}) => <CollectionsPreview key={id} title={title} items={items} />)

const Shop = ({collection, match}) => {  
  return(
    <React.Fragment>
      <Route exact path={`${match.path}`} render={() => mapTheCollection(collection)} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </React.Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionItems
});

export default connect(mapStateToProps)(Shop);