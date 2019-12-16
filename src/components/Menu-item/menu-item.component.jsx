import React from 'react';

import './menu-item.styles.scss';

const cardBackground = (imageUrl) => ({backgroundImage: `url(${imageUrl})`})

const MenuItem = ({sectionData : {size, title, imageUrl}}) => (
    <div className={`menu-item ${size}`} style={cardBackground(imageUrl)}>
      <div className="content">
        <h1 className="title"> {title} </h1>
        <span className="subtitle"> SHOP NOW </span>
      </div>
    </div>
  )


export default MenuItem;