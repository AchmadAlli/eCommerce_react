import React from 'react';
import './collections-preview.style.scss';
import CollectionItem from '../Collection-item/collection-item.component';

const CollectionsPreview = ({title, items}) => {
  return(
    <div className="collection-preview">
      <h2 className="title"> {title} </h2>
      <div className="preview">
        {
          items
            .filter((item, index) => index < 4)
            .map(({id, ...itemAttribute}) => <CollectionItem key={id} {...itemAttribute} /> )
        }
      </div>
    </div>
  );
}

export default CollectionsPreview;