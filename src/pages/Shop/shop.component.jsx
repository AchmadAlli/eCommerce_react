import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsPreview from '../../components/Collections-preview/collections-preview.component';
import { selectCollectionItems } from '../../redux/collection/collection.selectors';

const Shop = ({collection}) => {
  return(
    <React.Fragment>
      {
        collection.map(({id, title, items}) => <CollectionsPreview key={id} title={title} items={items} />)
      }
    </React.Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionItems
});

export default connect(mapStateToProps)(Shop);