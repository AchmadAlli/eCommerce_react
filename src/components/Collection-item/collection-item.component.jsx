import React from  'react';
import CustomButton from '../Custom-button/custom-button.component';

import './collection-item.style.scss';

const setBackground = (imageUrl) => ({backgroundImage: `url(${imageUrl})`});

const CollectionItem = ({name, price, imageUrl}) => (  
  <div className="collection-item">
    <div className="image" style={setBackground(imageUrl)} />
    <div className="collection-footer">
      <span className="name"> {name} </span>
      <span className="price"> {price} </span>
    </div>
    <CustomButton invertBtn> ADD TO CART </CustomButton>
  </div>
);

export default CollectionItem;